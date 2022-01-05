const { ethers, artifacts } = require('hardhat');
const { expect } = require('chai');
const { bufferToHex, rlp } = require('ethereumjs-util');

const { TLD, ZERO_ADDRESS } = require('./helpers/constants');
const { sign, buildExecuteFunc } = require('./helpers/metatx');
const {
  buildPredicateExitInput,
  buildPredicateMetadataExitInput,
  buildPredicateBatchExitInput,
} = require('./helpers/polygon');
const { submitCheckpoint } = require('./helpers/@maticnetwork/checkpoint');
const { childWeb3 } = require('./helpers/@maticnetwork/contracts');

const { utils } = ethers;

describe('RootRegistry', () => {
  let UNSRegistry, CNSRegistry, Resolver, MintingController, URIPrefixController, SignatureController,
    CNSRegistryForwarder, MintingManager, RootChainManager, MintableERC721Predicate, DummyStateSender,
    CheckpointManager, CheckpointManagerABI;
  let l1UnsRegistry, l2UnsRegistry, cnsRegistry, resolver, mintingController, uriPrefixController,
    signatureController, cnsForwarder, mintingManager, rootChainManager, predicate, stateSender,
    checkpointManager;
  let registryOwner, rcmOwner, predicateOwner, owner, spender;
  let buildExecuteCnsParams, buildExecuteUnsParams;

  const abiCoder = new utils.AbiCoder();

  const mintDomainL1 = async (owner, tld, label) => {
    await mintingManager.mintSLD(owner, tld, label);
    return await l1UnsRegistry.childIdOf(tld, label);
  };

  const mintDomainL2 = async (owner, tld, label) => {
    const tokenId = await l2UnsRegistry.childIdOf(tld, label);
    await l2UnsRegistry['mint(address,uint256,string)'](owner, tokenId, label);
    return tokenId;
  };

  before(async () => {
    [registryOwner, rcmOwner, predicateOwner, owner, spender] = await ethers.getSigners();

    UNSRegistry = await ethers.getContractFactory('UNSRegistry');
    CNSRegistry = await ethers.getContractFactory('CNSRegistry');
    Resolver = await ethers.getContractFactory('Resolver');
    MintingController = await ethers.getContractFactory('MintingController');
    URIPrefixController = await ethers.getContractFactory('URIPrefixController');
    SignatureController = await ethers.getContractFactory('SignatureController');
    CNSRegistryForwarder = await ethers.getContractFactory('CNSRegistryForwarder');
    MintingManager = await ethers.getContractFactory('MintingManager');
    RootChainManager = await ethers.getContractFactory('RootChainManager');
    MintableERC721Predicate = await ethers
      .getContractFactory('contracts/@maticnetwork/pos-portal/MintableERC721Predicate.sol:MintableERC721Predicate');
    DummyStateSender = await ethers.getContractFactory('DummyStateSender');
    CheckpointManager = await ethers.getContractFactory('MockCheckpointManager');
    CheckpointManagerABI = (await artifacts.readArtifact('MockCheckpointManager')).abi;

    l1UnsRegistry = (await UNSRegistry.deploy()).connect(registryOwner);

    cnsRegistry = await CNSRegistry.deploy();
    mintingController = await MintingController.deploy(cnsRegistry.address);
    await cnsRegistry.addController(mintingController.address);

    signatureController = await SignatureController.deploy(cnsRegistry.address);
    await cnsRegistry.addController(signatureController.address);
    cnsForwarder = await CNSRegistryForwarder.deploy(signatureController.address);

    resolver = await Resolver.deploy(cnsRegistry.address, mintingController.address);

    uriPrefixController = await URIPrefixController.deploy(cnsRegistry.address);
    await cnsRegistry.addController(uriPrefixController.address);

    mintingManager = await MintingManager.deploy();
    await l1UnsRegistry.initialize(mintingManager.address);
    await l1UnsRegistry.setCNSRegistry(cnsRegistry.address);

    await mintingController.addMinter(mintingManager.address);
    await uriPrefixController.addWhitelisted(mintingManager.address);

    await mintingManager.initialize(
      l1UnsRegistry.address,
      mintingController.address,
      uriPrefixController.address,
      resolver.address,
      ZERO_ADDRESS);
    await mintingManager.addMinter(registryOwner.address);
    await mintingManager.setTokenURIPrefix('https://metadata.unstoppabledomains.ooo/metadata/');

    l2UnsRegistry = (await UNSRegistry.deploy()).connect(registryOwner);
    await l2UnsRegistry.initialize(registryOwner.address);
    await l2UnsRegistry.setChildChainManager(registryOwner.address);

    // deploy state sender
    stateSender = await DummyStateSender.deploy();

    // deploy checkpoint manager
    checkpointManager = (await CheckpointManager.deploy()).connect(rcmOwner);

    // deploy and init predicate
    predicate = (await MintableERC721Predicate.deploy()).connect(predicateOwner);
    await predicate.initialize(predicateOwner.address);

    // deploy and setup root chain manager
    rootChainManager = (await RootChainManager.deploy()).connect(rcmOwner);
    await rootChainManager.initialize(rcmOwner.address);
    await rootChainManager.setCheckpointManager(checkpointManager.address);
    await rootChainManager.setStateSender(stateSender.address);
    await rootChainManager.registerPredicate(utils.keccak256(l1UnsRegistry.address), predicate.address);
    await rootChainManager.mapToken(
      l1UnsRegistry.address,
      l2UnsRegistry.address,
      utils.keccak256(l1UnsRegistry.address),
    );
    await predicate.grantRole(await predicate.MANAGER_ROLE(), rootChainManager.address);

    // post-configuration
    await l1UnsRegistry.setRootChainManager(rootChainManager.address);

    buildExecuteCnsParams = buildExecuteFunc(cnsRegistry.interface, signatureController.address, cnsForwarder);
    buildExecuteUnsParams = buildExecuteFunc(l1UnsRegistry.interface, l1UnsRegistry.address, l1UnsRegistry);
  });

  it('should revert when set RootChainManager multiple times', async () => {
    await expect(
      l1UnsRegistry.setRootChainManager(rootChainManager.address),
    ).to.be.revertedWith('Registry: ROOT_CHAIN_MANEGER_NOT_EMPTY');
  });

  describe('Deposit', () => {
    describe('One-step deposit', () => {
      it('should deposit token through UNS registry', async () => {
        const tokenId = await mintDomainL1(owner.address, TLD.WALLET, 'poly-1d-as2');

        await expect(l1UnsRegistry.connect(owner).depositToPolygon(tokenId))
          .to.emit(predicate, 'LockedMintableERC721')
          .withArgs(l1UnsRegistry.address, owner.address, l1UnsRegistry.address, tokenId);

        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });

      it('should meta-deposit token through UNS registry', async () => {
        const tokenId = await mintDomainL1(owner.address, TLD.WALLET, 'poly-1d-bp2');

        const { req, signature } = await buildExecuteUnsParams(
          'depositToPolygon(uint256)',
          [tokenId],
          owner, tokenId,
        );
        await expect(l1UnsRegistry.execute(req, signature))
          .to.emit(predicate, 'LockedMintableERC721')
          .withArgs(l1UnsRegistry.address, owner.address, l1UnsRegistry.address, tokenId);

        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });

      it('should deposit CNS domains through MintingManager', async () => {
        const tokenId = await mintDomainL1(owner.address, TLD.CRYPTO, 'poly-1md-aq1');
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        await cnsRegistry.connect(owner)['safeTransferFrom(address,address,uint256,bytes)'](
          owner.address, l1UnsRegistry.address, tokenId, abiCoder.encode(['bool'], [true]));

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });

      it('should mate-deposit CNS domains through MintingManager', async () => {
        const tokenId = await mintDomainL1(owner.address, TLD.CRYPTO, 'poly-1md-bl1');
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        const { req, signature } = await buildExecuteCnsParams(
          'safeTransferFrom(address,address,uint256,bytes)',
          [owner.address, l1UnsRegistry.address, tokenId, abiCoder.encode(['bool'], [true])],
          owner, tokenId,
        );

        await cnsForwarder.execute(req, signature);

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });

      it('should mate-deposit(legacy) CNS domains through MintingManager', async () => {
        const funcSig = 'safeTransferFromFor(address,address,uint256,bytes,bytes)';
        const tokenId = await mintDomainL1(owner.address, TLD.CRYPTO, 'poly-1md-al1');
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        const data = cnsRegistry.interface.encodeFunctionData(
          'safeTransferFrom(address,address,uint256,bytes)',
          [owner.address, l1UnsRegistry.address, tokenId, abiCoder.encode(['bool'], [true])],
        );
        const nonce = await signatureController.nonceOf(tokenId);
        const signature = await sign(data, signatureController.address, nonce, owner);

        await signatureController.connect(spender)[funcSig](
          owner.address,
          l1UnsRegistry.address,
          tokenId,
          abiCoder.encode(['bool'], [true]),
          signature,
        );

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });
    });

    describe('Two-steps deposit', () => {
      it('should deposit token', async () => {
        const tokenId = await mintDomainL1(owner.address, TLD.WALLET, 'poly-2d-aq1');

        await l1UnsRegistry.connect(owner).approve(predicate.address, tokenId);

        const data = utils.defaultAbiCoder.encode(['uint256'], [tokenId]);
        await expect(rootChainManager.connect(owner).depositFor(owner.address, l1UnsRegistry.address, data))
          .to.emit(predicate, 'LockedMintableERC721')
          .withArgs(owner.address, owner.address, l1UnsRegistry.address, tokenId);

        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);
      });
    });

    describe('CNS -> UNS migration', () => {
      it('should migrate CNS domain to UNS through safeTransferFrom', async () => {
        const tokenId = await mintDomainL1(owner.address, TLD.CRYPTO, 'cns-uns-aq1');
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        await cnsRegistry.connect(owner)['safeTransferFrom(address,address,uint256)'](
          owner.address, l1UnsRegistry.address, tokenId);

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      });

      it('should meta-migrate CNS domain to UNS through safeTransferFrom', async () => {
        const funcSig = 'safeTransferFromFor(address,address,uint256,bytes)';
        const tokenId = await mintDomainL1(owner.address, TLD.CRYPTO, 'cns-uns-maq1');
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        const data = cnsRegistry.interface.encodeFunctionData(
          'safeTransferFrom(address,address,uint256)',
          [owner.address, l1UnsRegistry.address, tokenId],
        );
        const nonce = await signatureController.nonceOf(tokenId);
        const signature = await sign(data, signatureController.address, nonce, owner);

        await signatureController.connect(spender)[funcSig](
          owner.address,
          l1UnsRegistry.address,
          tokenId,
          signature,
        );

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      });

      it('should migrate CNS domain to UNS through safeTransferFrom(data)', async () => {
        const tokenId = await mintDomainL1(owner.address, TLD.CRYPTO, 'cns-uns-aq2');
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        await cnsRegistry.connect(owner)['safeTransferFrom(address,address,uint256,bytes)'](
          owner.address, l1UnsRegistry.address, tokenId, abiCoder.encode(['bool'], [false]));

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      });

      it('should meta-migrate CNS domain to UNS through safeTransferFrom(data)', async () => {
        const funcSig = 'safeTransferFromFor(address,address,uint256,bytes,bytes)';
        const tokenId = await mintDomainL1(owner.address, TLD.CRYPTO, 'cns-uns-maq2');
        expect(await cnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);

        const data = cnsRegistry.interface.encodeFunctionData(
          'safeTransferFrom(address,address,uint256,bytes)',
          [owner.address, l1UnsRegistry.address, tokenId, abiCoder.encode(['bool'], [false])],
        );
        const nonce = await signatureController.nonceOf(tokenId);
        const signature = await sign(data, signatureController.address, nonce, owner);

        await signatureController.connect(spender)[funcSig](
          owner.address,
          l1UnsRegistry.address,
          tokenId,
          abiCoder.encode(['bool'], [false]),
          signature,
        );

        await expect(cnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');
        expect(await l1UnsRegistry.exists(tokenId)).to.be.equal(true);
        expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
      });

      it('should revert when UNS registry receives token from random ERC721', async () => {
        const randomERC721 = await CNSRegistry.deploy();
        await randomERC721.controlledMintChild(owner.address, TLD.CRYPTO, 'fake-cns-uns-te1');
        const tokenId = await randomERC721.childIdOf(TLD.CRYPTO, 'fake-cns-uns-te1');

        await expect(
          randomERC721.connect(owner)['safeTransferFrom(address,address,uint256)'](
            owner.address, l1UnsRegistry.address, tokenId),
        ).to.be.revertedWith('Registry: ERC721_RECEIVING_PROHIBITED');
      });
    });
  });

  describe('Withdraw through predicate', () => {
    it('should withdraw a domain', async () => {
      const tokenId = await mintDomainL1(owner.address, TLD.WALLET, 'poly-1w-as1');
      await l1UnsRegistry.connect(owner).depositToPolygon(tokenId);
      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);

      const inputData = buildPredicateExitInput(owner.address, ZERO_ADDRESS, tokenId);
      await predicate.exitTokens(ZERO_ADDRESS, l1UnsRegistry.address, inputData);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });

    it('should mint a domain on withdraw while it was minted on L2', async () => {
      const tokenId = await l1UnsRegistry.childIdOf(TLD.WALLET, 'poly-1wm-as1');
      await expect(l1UnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');

      const inputData = buildPredicateExitInput(owner.address, ZERO_ADDRESS, tokenId);
      await predicate.exitTokens(ZERO_ADDRESS, l1UnsRegistry.address, inputData);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });

    it('should withdraw multiple domains', async () => {
      const tokenId1 = await mintDomainL1(owner.address, TLD.WALLET, 'poly-2w-as1');
      await l1UnsRegistry.connect(owner).depositToPolygon(tokenId1);
      expect(await l1UnsRegistry.ownerOf(tokenId1)).to.be.equal(predicate.address);

      const tokenId2 = await mintDomainL1(owner.address, TLD.WALLET, 'poly-2w-aq1');
      await l1UnsRegistry.connect(owner).depositToPolygon(tokenId2);
      expect(await l1UnsRegistry.ownerOf(tokenId2)).to.be.equal(predicate.address);

      const inputData = buildPredicateBatchExitInput(owner.address, [tokenId1, tokenId2]);
      await predicate.exitTokens(ZERO_ADDRESS, l1UnsRegistry.address, inputData);

      expect(await l1UnsRegistry.ownerOf(tokenId1)).to.be.equal(owner.address);
      expect(await l1UnsRegistry.ownerOf(tokenId2)).to.be.equal(owner.address);
    });

    it('should mint multiple domains on withdraw while they were minted on L2', async () => {
      const tokenId1 = await l1UnsRegistry.childIdOf(TLD.WALLET, 'poly-2wm-as1');
      await expect(l1UnsRegistry.ownerOf(tokenId1)).to.be.revertedWith('ERC721: owner query for nonexistent token');

      const tokenId2 = await l1UnsRegistry.childIdOf(TLD.WALLET, 'poly-2wm-aq1');
      await expect(l1UnsRegistry.ownerOf(tokenId2)).to.be.revertedWith('ERC721: owner query for nonexistent token');

      const inputData = buildPredicateBatchExitInput(owner.address, [tokenId1, tokenId2]);
      await predicate.exitTokens(ZERO_ADDRESS, l1UnsRegistry.address, inputData);

      expect(await l1UnsRegistry.ownerOf(tokenId1)).to.be.equal(owner.address);
      expect(await l1UnsRegistry.ownerOf(tokenId2)).to.be.equal(owner.address);
    });

    it('should withdraw a domain with metadata', async () => {
      const tokenId = await mintDomainL1(owner.address, TLD.WALLET, 'poly-1wmm-as1');
      await l1UnsRegistry.connect(owner).depositToPolygon(tokenId);
      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(predicate.address);

      const inputData = buildPredicateMetadataExitInput(owner.address, ZERO_ADDRESS, tokenId);
      await predicate.exitTokens(ZERO_ADDRESS, l1UnsRegistry.address, inputData);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });

    it('should mint a domain with metadata on withdraw while it was minted on L2', async () => {
      const tokenId = await l1UnsRegistry.childIdOf(TLD.WALLET, 'poly-1wmm-as2');
      await expect(l1UnsRegistry.ownerOf(tokenId)).to.be.revertedWith('ERC721: owner query for nonexistent token');

      const inputData = buildPredicateMetadataExitInput(owner.address, ZERO_ADDRESS, tokenId, '0x');
      await predicate.exitTokens(ZERO_ADDRESS, l1UnsRegistry.address, inputData);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });

    it('should revert mint(onlyPredicate) by non-predicate', async () => {
      const tokenId = await l1UnsRegistry.childIdOf(TLD.WALLET, 'poly-1w-revert');
      await expect(l1UnsRegistry['mint(address,uint256)'](owner.address, tokenId))
        .to.be.revertedWith('Registry: INSUFFICIENT_PERMISSIONS');
    });

    it('should revert mint(onlyPredicate) with metadata by non-predicate', async () => {
      const tokenId = await l1UnsRegistry.childIdOf(TLD.WALLET, 'poly-1w-revert');
      await expect(l1UnsRegistry['mint(address,uint256,bytes)'](owner.address, tokenId, '0x'))
        .to.be.revertedWith('Registry: INSUFFICIENT_PERMISSIONS');
    });
  });

  describe('Withdraw through rootChainManager', () => {
    const ERC721_TRANSFER_EVENT_SIG = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

    it('should be able to exit', async () => {
      const tokenId = await mintDomainL2(owner.address, TLD.WALLET, 'poly-ex-1');
      const txn = await l2UnsRegistry.connect(owner).withdraw(tokenId);
      const receipt = await txn.wait();

      const web3CheckpointManager = new childWeb3.eth.Contract(
        CheckpointManagerABI,
        checkpointManager.address,
        { from: rcmOwner.address },
      );

      // submit checkpoint including burn (withdraw) tx
      const checkpointData = await submitCheckpoint(web3CheckpointManager, txn.hash);

      const headerNumber = (await checkpointManager.currentCheckpointNumber()).toNumber();
      const logIndex = receipt.logs
        .findIndex(log => log.topics[0].toLowerCase() === ERC721_TRANSFER_EVENT_SIG.toLowerCase());
      const data = bufferToHex(
        rlp.encode([
          headerNumber,
          bufferToHex(Buffer.concat(checkpointData.proof)),
          checkpointData.number,
          checkpointData.timestamp,
          bufferToHex(checkpointData.transactionsRoot),
          bufferToHex(checkpointData.receiptsRoot),
          bufferToHex(checkpointData.receipt),
          bufferToHex(rlp.encode(checkpointData.receiptParentNodes)),
          bufferToHex(checkpointData.path), // branch mask,
          logIndex,
        ]),
      );
      await rootChainManager.exit(data);

      expect(await l1UnsRegistry.ownerOf(tokenId)).to.be.equal(owner.address);
    });
  });
});
