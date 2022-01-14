const { ethers } = require('hardhat');

const { BigNumber } = ethers;

/* eslint-disable max-len */
module.exports = {
  DEAD_ADDRESS: '0xdead000000000000000000000000000000000000',
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
  ZERO_WORD: '0x0000000000000000000000000000000000000000000000000000000000000000',
  EMPTY_SIGNATURE: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  TLD: {
    CRYPTO: BigNumber.from('0x0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f'),
    WALLET: BigNumber.from('0x1e3f482b3363eb4710dae2cb2183128e272eafbe137f686851c1caea32502230'),
    COIN: BigNumber.from('0x7674e7282552c15f203b9c4a6025aeaf28176ef7f5451b280f9bada3f8bc98e2'),
    X: BigNumber.from('0x241e7e2b7fd7333b3c0c049b326316b811af0c01cfc0c7a90b466fda3a70fc2d'),
    NFT: BigNumber.from('0xb75cf4f3d8bc3deb317ed5216d898899d5cc6a783f65f6768eb9bcb89428670d'),
    BLOCKCHAIN: BigNumber.from('0x4118ebbd893ecbb9f5d7a817c7d8039c1bd991b56ea243e2ae84d0a1b2c950a7'),
    BITCOIN: BigNumber.from('0x042fb01c1e43fb4a32f85b41c821e17d2faeac58cfc5fb23f80bc00c940f85e3'),
    888: BigNumber.from('0x5c828ec285c0bf152a30a325b3963661a80cb87641d60920344caf04d4a0f31e'),
    DAO: BigNumber.from('0xb5f2bbf81da581299d4ff7af60560c0ac854196f5227328d2d0c2bb0df33e553'),
  },
};
