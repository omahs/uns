const { ZERO_ADDRESS } = require('../helpers/constants');

const { utils, BigNumber } = ethers;

describe('MintingManager', () => {
  const DomainNamePrefix = 'udtestdev-';
  let Registry, MintingManager;
  let registry, root, mintingManager, domainSuffix;
  let signers;

  const sign = async (data, address, signer) => {
    return signer.signMessage(
      utils.arrayify(
        utils.solidityKeccak256(
          [ 'bytes32', 'address' ],
          [ utils.keccak256(data), address ]
        )
      )
    )
  }

  before(async () => {
    signers = await ethers.getSigners();

    Registry = await ethers.getContractFactory('Registry');
    MintingManager = await ethers.getContractFactory('MintingManager');

    root = BigNumber.from('0x0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f');
  })

  describe('IClaimer', () => {
    let developer;

    before(async () => {
      [, developer, receiver] = signers;

      registry = await Registry.deploy();
      mintingManager = await MintingManager.deploy();
      await mintingManager.initialize(registry.address);
      await registry.initialize(mintingManager.address);
      await registry.setTokenURIPrefix('/');
    })

    beforeEach(() => {
      domainSuffix = `prefixed-domain-${Math.random() * 1000}`;
    })

    describe('claim(uint256,string)', () => {
      it('should mint prefixed domain', async () => {
        await mintingManager.connect(developer).functions['claim(uint256,string)'](root, domainSuffix)
        const tokenId = await registry.childIdOf(root, `${DomainNamePrefix}${domainSuffix}`)
        const tokenUri = await registry.tokenURI(tokenId)
        assert.equal(tokenUri, `/${tokenId}`)
      })

      it('should send domain to requester', async () => {
        await mintingManager.connect(developer).functions['claim(uint256,string)'](root, domainSuffix)
        const tokenId = await registry.childIdOf(root, `${DomainNamePrefix}${domainSuffix}`)
        const owner = await registry.ownerOf(tokenId)
        assert.equal(owner, developer.address)
      })

      it('should not allow to mint the same domain twice', async () => {
        const minter = mintingManager.connect(developer);
        await minter.functions['claim(uint256,string)'](root, domainSuffix);

        await expect(
          minter.functions['claim(uint256,string)'](root, domainSuffix)
        ).to.be.revertedWith('ERC721: token already minted');
      })
    })

    describe('claimTo(address,uint256,string)', () => {
      it('should mint domain to receiver', async () => {
        await mintingManager.connect(developer).functions['claimTo(address,uint256,string)'](receiver.address, root, domainSuffix)
        const tokenId = await registry.childIdOf(root, `${DomainNamePrefix}${domainSuffix}`)
        const owner = await registry.ownerOf(tokenId)
        assert.equal(owner, receiver.address)
      })
    })

    describe('claimToWithRecords(address,uint256,string,string[],string[])', () => {
      const funcSig = 'claimToWithRecords(address,uint256,string,string[],string[])';

      it('should mint domain to receiver with predefined keys', async () => {
        const minter = mintingManager.connect(developer);
        await minter.functions[funcSig](receiver.address, root, domainSuffix, ['key'], ['value'])
        const tokenId = await registry.childIdOf(root, `${DomainNamePrefix}${domainSuffix}`)
        const owner = await registry.ownerOf(tokenId)
        const values = await registry.getMany(['key'], tokenId)
        assert.equal(owner, receiver.address)
        assert.deepEqual(values, ['value'])
      })

      it('should mint domain with empty keys', async () => {
        const minter = mintingManager.connect(developer);
        await minter.functions[funcSig](receiver.address, root, domainSuffix, [], []);
        const tokenId = await registry.childIdOf(root, `${DomainNamePrefix}${domainSuffix}`)
        const owner = await registry.ownerOf(tokenId)
        const values = await registry.getMany(['key1', 'key2'], tokenId)
        assert.equal(owner, receiver.address)
        assert.deepEqual(values, ['', ''])
      })
    })
  })

  describe('SLDMinter', () => {
    before(async () => {
      [coinbase, faucet, receiver, spender] = signers;
    })

    beforeEach(async () => {
      registry = await Registry.deploy();
      mintingManager = await MintingManager.deploy();
      await mintingManager.initialize(registry.address);
      await mintingManager.addMinter(coinbase.address);

      await registry.initialize(mintingManager.address);
      await registry.setTokenURIPrefix('/');
    })

    describe('close minter account', () => {
      it('revert when closing by non-minter account', async () => {
        await expect(
          mintingManager.connect(receiver).closeMinter(receiver.address)
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
      })
  
      it('revert when zero account', async () => {
        await expect(
          mintingManager.closeMinter(ZERO_ADDRESS)
        ).to.be.revertedWith('MinterRole: RECEIVER_IS_EMPTY');
      })
  
      it('close minter without forwarding funds', async () => {
        const initBalance = await faucet.getBalance();
        await mintingManager.closeMinter(faucet.address, { value: 0 });
  
        await expect(
          mintingManager['safeMintSLD(address,uint256,string)'](coinbase.address, root, 'label')
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
  
        const actualBalance = await faucet.getBalance();
        assert.equal(actualBalance, initBalance.toString());
      })
  
      it('close minter with forwarding funds', async () => {
        const value = 1
        const initBalance = await faucet.getBalance()
  
        await mintingManager.closeMinter(faucet.address, { value })
  
        await expect(
          mintingManager['safeMintSLD(address,uint256,string)'](coinbase.address, root, 'label')
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
  
        const actualBalance = await faucet.getBalance()
        const expectedBalance = BigNumber.from(initBalance).add(value)
        assert.equal(actualBalance, expectedBalance.toString())
      })
    })

    describe('rotate minter account', () => {
      it('revert when rotateing by non-minter account', async () => {
        await expect(
          mintingManager.connect(receiver).rotateMinter(receiver.address)
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
      })
  
      it('revert when zero account', async () => {
        await expect(
          mintingManager.rotateMinter(ZERO_ADDRESS)
        ).to.be.revertedWith('MinterRole: RECEIVER_IS_EMPTY');
      })
  
      it('rotate minter without defining value', async () => {
        const initBalance = await receiver.getBalance()
  
        await mintingManager.rotateMinter(receiver.address)
  
        await expect(
          mintingManager['safeMintSLD(address,uint256,string)'](coinbase.address, root, 'label')
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
  
        const actualBalance = await receiver.getBalance()
        assert.equal(actualBalance, initBalance.toString())
      })
  
      it('rotate minter without forwarding funds', async () => {
        const initBalance = await receiver.getBalance()
  
        await mintingManager.rotateMinter(receiver.address, { value: 0 })
  
        await expect(
          mintingManager['safeMintSLD(address,uint256,string)'](coinbase.address, root, 'label')
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
  
        const actualBalance = await receiver.getBalance()
        assert.equal(actualBalance, initBalance.toString())
      })
  
      it('rotate minter with forwarding funds', async () => {
        const value = 3
        const initBalance = await receiver.getBalance()
  
        await mintingManager.rotateMinter(receiver.address, { value })
  
        await expect(
          mintingManager['safeMintSLD(address,uint256,string)'](coinbase.address, root, 'label')
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
  
        const actualBalance = await receiver.getBalance()
        const expectedBalance = BigNumber.from(initBalance).add(value)
        assert.equal(actualBalance, expectedBalance.toString())
      })
    })

    describe('mint second level domain', () => {
      it('revert minting when account is not minter', async () => {
        await expect(
          mintingManager.connect(receiver).mintSLD(coinbase.address, root, 'test-1ka')
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
      })
  
      it('mint domain', async () => {
        await mintingManager.mintSLD(coinbase.address, root, 'test-1dp')
        const tokenId = await registry.childIdOf(root, 'test-1dp')
        assert.equal(await registry.ownerOf(tokenId), coinbase.address)
      })
    })

    describe('safe mint second level domain', () => {
      const funcSig = 'safeMintSLD(address,uint256,string)';

      it('revert safe minting when account is not minter', async () => {
        await expect(
          mintingManager.connect(receiver)[funcSig](coinbase.address, root, 'test-2oa')
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
      })
  
      it('safe mint domain', async () => {
        await mintingManager[funcSig](coinbase.address, root, 'test-2oa')
        const tokenId = await registry.childIdOf(root, 'test-2oa')
        assert.equal(await registry.ownerOf(tokenId), coinbase.address)
      })
    })

    describe('safe mint(data) second level domain', () => {
      const funcSig = 'safeMintSLD(address,uint256,string,bytes)';

      it('revert safe minting when account is not minter', async () => {
        await expect(
          mintingManager.connect(receiver)[funcSig](coinbase.address, root, 'test-3oa', '0x')
        ).to.be.revertedWith('MinterRole: CALLER_IS_NOT_MINTER');
      })
  
      it('safe mint domain', async () => {
        await mintingManager[funcSig](coinbase.address, root, 'test-3oa', '0x')
  
        const tokenId = await registry.childIdOf(root, 'test-3oa')
        assert.equal(await registry.ownerOf(tokenId), coinbase.address)
      })
    })

    describe('relay', () => {
      it('revert relay meta-mint when signer is not minter', async () => {
        const data = mintingManager.interface.encodeFunctionData(
          'mintSLD(address,uint256,string)',
          [receiver.address, root, 'test-p1-revert']
        );
        const signature = sign(data, faucet.address, coinbase);

        await expect(
          mintingManager.connect(receiver).relay(data, signature)
        ).to.be.revertedWith('MintingManager: SIGNER_IS_NOT_MINTER');
      })
  
      it('revert relay meta-mint when signature is empty', async () => {
        const data = mintingManager.interface.encodeFunctionData(
          'mintSLD(address,uint256,string)',
          [receiver.address, root, 'test-p1-revert']
        );

        await expect(
          mintingManager.connect(receiver).relay(data, '0x')
        ).to.be.revertedWith('ECDSA: invalid signature length');
      })
  
      it('relay meta-safe mint', async () => {
        const data = mintingManager.interface.encodeFunctionData(
          'safeMintSLD(address,uint256,string)',
          [receiver.address, root, 'test-p1-p1sapr']
        );
        const signature = sign(data, mintingManager.address, coinbase);

        await expect(mintingManager.connect(spender).relay(data, signature))
          .to.emit(mintingManager, 'Relayed')
          .withArgs(spender.address, coinbase.address, '0x4c1819e0', utils.keccak256(data));

        const tokenId = await registry.childIdOf(root, 'test-p1-p1sapr')
        assert.equal(await registry.ownerOf(tokenId), receiver.address);
      })
  
      it('relay meta-safe mint with data', async () => {
        const data = mintingManager.interface.encodeFunctionData(
          'safeMintSLD(address,uint256,string,bytes)',
          [receiver.address, root, 'test-p1-p1saor', '0x']
        );
        const signature = sign(data, mintingManager.address, coinbase);

        await expect(mintingManager.connect(spender).relay(data, signature))
          .to.emit(mintingManager, 'Relayed')
          .withArgs(spender.address, coinbase.address, '0x58839d6b', utils.keccak256(data));
  
        const tokenId = await registry.childIdOf(root, 'test-p1-p1saor')
        assert.equal(await registry.ownerOf(tokenId), receiver.address)
      })
  
      it('relay meta-mint with records', async () => {
        const data = mintingManager.interface.encodeFunctionData(
          'mintSLDWithRecords(address,uint256,string,string[],string[])',
          [receiver.address, root, 'test-p1-p1adr', [], []]
        );
        const signature = sign(data, mintingManager.address, coinbase);

        await expect(mintingManager.connect(spender).relay(data, signature))
          .to.emit(mintingManager, 'Relayed')
          .withArgs(spender.address, coinbase.address, '0x39ccf4d0', utils.keccak256(data));
  
        const tokenId = await registry.childIdOf(root, 'test-p1-p1adr')
        assert.equal(await registry.ownerOf(tokenId), receiver.address)
      })
    })

    describe('Gas consumption', () => {
      function percDiff(a, b) {
        return -((a - b) / a) * 100
      }
  
      const getCases = () => {
        return [
          {
            func: 'mintSLD',
            funcSig: 'mintSLD(address,uint256,string)',
            params: [receiver.address, root, 't1-w1-'],
          },
          {
            func: 'safeMintSLD',
            funcSig: 'safeMintSLD(address,uint256,string)',
            params: [receiver.address, root, 't1-m1-'],
          },
          {
            func: 'safeMintSLD',
            funcSig: 'safeMintSLD(address,uint256,string,bytes)',
            params: [receiver.address, root, 't1-y1-', '0x'],
          },
        ]
      }
  
      it('Consumption', async () => {
        const result = []
  
        const cases = getCases()
        for (let i = 0; i < cases.length; i++) {
          const {funcSig, params} = cases[i]
          const [acc, root, token, ...rest] = params
          const relayParams = [acc, root, token + 'r', ...rest]
  
          const callData = mintingManager.interface.encodeFunctionData(funcSig, relayParams);
          const signature = sign(callData, mintingManager.address, coinbase);
          const relayTx = await mintingManager.connect(spender).relay(callData, signature)
          relayTx.receipt = await relayTx.wait();

          const tx = await mintingManager[funcSig](...params);
          tx.receipt = await tx.wait();

          result.push({
            funcSig,
            records: Array.isArray(params[2]) ? params[2].length : '-',
            send: tx.receipt.gasUsed.toString(),
            relay: relayTx.receipt.gasUsed.toString(),
            increase:
              percDiff(tx.receipt.gasUsed, relayTx.receipt.gasUsed).toFixed(2) +
              ' %',
          })
        }
        console.table(result)
      })
    })
  })
})
