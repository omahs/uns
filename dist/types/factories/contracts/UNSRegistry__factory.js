"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "NewKey",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "NewURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "NewURIPrefix",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "RemoveReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ResetRecords",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: true,
                internalType: "string",
                name: "valueIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        name: "Set",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "SetReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "BATCH_LIMIT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "NAME",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "addKey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "addProxyReader",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "depositToPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "exists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "get",
        outputs: [
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getByHash",
        outputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
        ],
        name: "getKey",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "hashes",
                type: "uint256[]",
            },
        ],
        name: "getKeys",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getMany",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getManyByHash",
        outputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "mintingManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "cnsRegistry",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootChainManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "childChainManager",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isApprovedOrOwner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "forwarder",
                type: "address",
            },
        ],
        name: "isTrustedForwarder",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "mintTLD",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "mintWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "namehash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "nonceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reconfigure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "removeReverse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "resolverOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseOf",
        outputs: [
            {
                internalType: "uint256",
                name: "reverse",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "root",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setMany",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setManyByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setReverse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "setTokenURIPrefix",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "unlockWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "inputData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "withdrawFromPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50614de7806100206000396000f3fe608060405234801561001057600080fd5b506004361061035d5760003560e01c806370a08231116101d3578063ba5d40b711610104578063ebf0c717116100a2578063f5c1f76e1161007c578063f5c1f76e146107d8578063f7df5c60146107eb578063f8c8765e146107fe578063ffa1ad741461081157600080fd5b8063ebf0c717146107b6578063ec129eea146107bd578063f25eb5c1146107d057600080fd5b8063ce92b33e116100de578063ce92b33e14610741578063cf2c52cb14610754578063d106353f14610767578063e985e9c51461077a57600080fd5b8063ba5d40b714610708578063bb5b27e11461071b578063c87b56dd1461072e57600080fd5b8063a22cb46511610171578063ab3b87fe1161014b578063ab3b87fe146106ae578063b3f9e4cb146106c1578063b85afd28146106d4578063b88d4fde146106f557600080fd5b8063a22cb4651461065c578063a3f4df7e1461066f578063a42474001461069b57600080fd5b80639508b1c4116101ad5780639508b1c4146106265780639559c0bd1461063957806395d89b411461064157806399e0dd7c1461064957600080fd5b806370a08231146105ed5780637e37479e1461060057806394d008ef1461061357600080fd5b806340c10f19116102ad57806350382c1a1161024b5780636352211e116102255780636352211e14610585578063638e5c7814610598578063672b9f81146105ab5780636ccbae5f146105cc57600080fd5b806350382c1a146105435780635096023914610556578063572b6c051461056957600080fd5b8063430c208111610287578063430c2081146104f757806347c816991461050a5780634a72584d1461051d5780634f558e791461053057600080fd5b806340c10f19146104be57806342842e0e146104d157806342966c68146104e457600080fd5b80631be5e7ed1161031a578063276fabb1116102f4578063276fabb11461046457806327f1897514610485578063310bd74b14610498578063384e9a55146104ab57600080fd5b80631be5e7ed1461042b5780631bf7e13e1461043e57806323b872dd1461045157600080fd5b806301ffc9a71461036257806306fdde031461038a578063081812fc1461039f578063095ea7b3146103ca578063150b7a02146103df5780631bd8cc1a1461040b575b600080fd5b6103756103703660046143c7565b610835565b60405190151581526020015b60405180910390f35b610392610846565b60405161038191906148f1565b6103b26103ad3660046145f5565b6108d8565b6040516001600160a01b039091168152602001610381565b6103dd6103d83660046140e9565b6108ff565b005b6103f26103ed366004613edb565b610954565b6040516001600160e01b03199091168152602001610381565b61041e6104193660046142b5565b610aaa565b604051610381919061488c565b61039261043936600461452f565b610bca565b61039261044c366004614596565b610c15565b6103dd61045f366004613e9b565b610d20565b610477610472366004614206565b610da6565b604051908152602001610381565b6103dd610493366004614245565b610dba565b6103dd6104a63660046145f5565b610e35565b6103dd6104b93660046145f5565b610ea3565b6103dd6104cc3660046140e9565b610f62565b6103dd6104df366004613e9b565b610faf565b6103dd6104f23660046145f5565b610fca565b6103756105053660046140e9565b611041565b6103dd6105183660046144d1565b61104d565b6103dd61052b36600461463d565b6110bf565b61037561053e3660046145f5565b611138565b6103dd610551366004614564565b611157565b6103dd610564366004613dd0565b61118d565b610375610577366004613dd0565b6001600160a01b0316301490565b6103b26105933660046145f5565b6111ed565b6103dd6105a63660046145f5565b61124d565b6105be6105b936600461468d565b611298565b604051610381929190614904565b6104776105da3660046145f5565b6000908152610100602052604090205490565b6104776105fb366004613dd0565b6112b0565b61047761060e366004613dd0565b611336565b6103dd6106213660046141ad565b611367565b6103dd6106343660046143ff565b6113b6565b610477601481565b61039261143d565b6103dd61065736600461449e565b61144c565b6103dd61066a36600461406c565b6114d2565b6103926040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103756106a9366004614596565b6114e4565b6103dd6106bc3660046140e9565b61152f565b6103b26106cf3660046145f5565b6115a7565b6106e76106e23660046142b5565b6115d1565b60405161038192919061489f565b6103dd610703366004613f4b565b611739565b6103dd610716366004613fb4565b6117b3565b6103926107293660046145f5565b611834565b61039261073c3660046145f5565b6118d6565b6103dd61074f366004614245565b61193c565b6103dd610762366004614097565b6119ae565b6103dd610775366004614114565b611a8b565b610375610788366004613e08565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b6000610477565b6103dd6107cb366004614245565b611aff565b6103dd611b71565b61041e6107e6366004614206565b611bf7565b6103dd6107f936600461460d565b611cd4565b6103dd61080c366004613e40565b611d65565b61039260405180604001604052806005815260200164302e362e3360d81b81525081565b600061084082611f3b565b92915050565b60606065805461085590614ce9565b80601f016020809104026020016040519081016040528092919081815260200182805461088190614ce9565b80156108ce5780601f106108a3576101008083540402835291602001916108ce565b820191906000526020600020905b8154815290600101906020018083116108b157829003601f168201915b5050505050905090565b60006108e382611f8b565b506000908152606960205260409020546001600160a01b031690565b803033141561093c57610910611fea565b81146109375760405162461bcd60e51b815260040161092e90614a0b565b60405180910390fd5b610945565b61094581611fff565b61094f838361202d565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b0316610989612150565b6001600160a01b03161415610a4b576109a0612150565b6001600160a01b03166342966c68856040518263ffffffff1660e01b81526004016109cd91815260200190565b600060405180830381600087803b1580156109e757600080fd5b505af11580156109fb573d6000803e3d6000fd5b505050821580159150610a155750610a1582840184614395565b15610a3357610a24308561215f565b610a2e85856122ad565b610a3d565b610a3d858561215f565b50630a85bd0160e11b610aa1565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b606482015260840161092e565b95945050505050565b6060826001600160401b03811115610ad257634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b0557816020015b6060815260200190600190039081610af05790505b50905060005b83811015610bc257610b84858583818110610b3657634e487b7160e01b600052603260045260246000fd5b9050602002810190610b489190614acf565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250612358915050565b828281518110610ba457634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610bba90614d1e565b915050610b0b565b509392505050565b6060610c0d84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250612358915050565b949350505050565b606060005a9050610c278585856114e4565b610c835760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b606482015260840161092e565b610d15610c936020870187613dd0565b30604088013584610ca760608b018b614acf565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061238d92505050565b9150505b9392505050565b80610d32610d2c612150565b8261247c565b610d4e5760405162461bcd60e51b815260040161092e90614929565b8130331415610d8257610d5f611fea565b8114610d7d5760405162461bcd60e51b815260040161092e90614a0b565b610d8b565b610d8b81611fff565b610d94836124fa565b610d9f858585612567565b5050505050565b6000610d19610db58385614ba9565b61270e565b80610dc6610d2c612150565b610de25760405162461bcd60e51b815260040161092e90614929565b8130331415610e1657610df3611fea565b8114610e115760405162461bcd60e51b815260040161092e90614a0b565b610e1f565b610e1f81611fff565b610e2c878787878761276b565b50505050505050565b80610e41610d2c612150565b610e5d5760405162461bcd60e51b815260040161092e90614929565b8130331415610e9157610e6e611fea565b8114610e8c5760405162461bcd60e51b815260040161092e90614a0b565b610e9a565b610e9a81611fff565b61094f836124fa565b80610eac612150565b6001600160a01b0316610ebe826111ed565b6001600160a01b031614610f145760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e4552000000604482015260640161092e565b8130331415610f4857610f25611fea565b8114610f435760405162461bcd60e51b815260040161092e90614a0b565b610f51565b610f5181611fff565b61094f610f5c612150565b846127ea565b610f6a612832565b6001600160a01b0316610f7b612150565b6001600160a01b031614610fa15760405162461bcd60e51b815260040161092e90614a8d565b610fab828261215f565b5050565b61094f83838360405180602001604052806000815250611739565b80610fd6610d2c612150565b610ff25760405162461bcd60e51b815260040161092e90614929565b813033141561102657611003611fea565b81146110215760405162461bcd60e51b815260040161092e90614a0b565b61102f565b61102f81611fff565b611038836124fa565b61094f83612945565b6000610d19838361247c565b80611059610d2c612150565b6110755760405162461bcd60e51b815260040161092e90614929565b81303314156110a957611086611fea565b81146110a45760405162461bcd60e51b815260040161092e90614a0b565b6110b2565b6110b281611fff565b610e2c87878787876129ec565b806110cb610d2c612150565b6110e75760405162461bcd60e51b815260040161092e90614929565b813033141561111b576110f8611fea565b81146111165760405162461bcd60e51b815260040161092e90614a0b565b611124565b61112481611fff565b61113086868686612acb565b505050505050565b6000818152606760205260408120546001600160a01b03161515610840565b61118a8160405160200161116b9190614757565b6040516020818303038152906040528051906020012060001c82612b6b565b50565b610134546001600160a01b03166111a2612150565b6001600160a01b0316146111c85760405162461bcd60e51b815260040161092e906149c4565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108405760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161092e565b80611259610d2c612150565b6112755760405162461bcd60e51b815260040161092e90614929565b611287611280612150565b3084612567565b610fab611292612150565b836122ad565b6060806112a58484612b97565b909590945092505050565b60006001600160a01b03821661131a5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161092e565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461135981612bb8565b611361578091505b50919050565b61136f612832565b6001600160a01b0316611380612150565b6001600160a01b0316146113a65760405162461bcd60e51b815260040161092e90614a8d565b6113b0848461215f565b50505050565b6113c08787612c02565b6113c8612150565b6001600160a01b03166113da866111ed565b6001600160a01b0316146114305760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e4552000000604482015260640161092e565b610e2c8484848489612c71565b60606066805461085590614ce9565b610134546001600160a01b0316611461612150565b6001600160a01b0316146114875760405162461bcd60e51b815260040161092e906149c4565b6114946101338383613bc7565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516114c69291906148dd565b60405180910390a15050565b610fab6114dd612150565b8383612cfb565b6000610c0d6114f285614c1e565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612dca92505050565b8061153b610d2c612150565b6115575760405162461bcd60e51b815260040161092e90614929565b813033141561158b57611568611fea565b81146115865760405162461bcd60e51b815260040161092e90614a0b565b611594565b61159481611fff565b6113b06115a0846111ed565b8585612567565b6000818152606760205260408120546001600160a01b03166115ca576000610840565b3092915050565b606080836001600160401b038111156115fa57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561162d57816020015b60608152602001906001900390816116185790505b509150836001600160401b0381111561165657634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561168957816020015b60608152602001906001900390816116745790505b50905060005b84811015611730576116c78686838181106116ba57634e487b7160e01b600052603260045260246000fd5b9050602002013585612b97565b8483815181106116e757634e487b7160e01b600052603260045260246000fd5b6020026020010184848151811061170e57634e487b7160e01b600052603260045260246000fd5b602002602001018290528290525050808061172890614d1e565b91505061168f565b50935093915050565b81611745610d2c612150565b6117615760405162461bcd60e51b815260040161092e90614929565b823033141561179557611772611fea565b81146117905760405162461bcd60e51b815260040161092e90614a0b565b61179e565b61179e81611fff565b6117a7846124fa565b61113086868686612f22565b610134546001600160a01b03166117c8612150565b6001600160a01b0316146117ee5760405162461bcd60e51b815260040161092e906149c4565b60006117fd610db5888a614ba9565b905061181c89826118166118118b8d614ba9565b612f55565b85612ff2565b6118298686868685612c71565b505050505050505050565b600081815260c96020526040902080546060919061185190614ce9565b80601f016020809104026020016040519081016040528092919081815260200182805461187d90614ce9565b80156118ca5780601f1061189f576101008083540402835291602001916118ca565b820191906000526020600020905b8154815290600101906020018083116118ad57829003601f168201915b50505050509050919050565b60606118e182611f8b565b60006118eb613044565b9050600081511161190b5760405180602001604052806000815250610d19565b8061191584613054565b6040516020016119269291906147fe565b6040516020818303038152906040529392505050565b80611948610d2c612150565b6119645760405162461bcd60e51b815260040161092e90614929565b813033141561199857611975611fea565b81146119935760405162461bcd60e51b815260040161092e90614a0b565b6119a1565b6119a181611fff565b610e2c8787878787612c71565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b03166119e1612150565b6001600160a01b031614611a075760405162461bcd60e51b815260040161092e90614a8d565b6020811415611a2a576000611a1e828401846145f5565b90506113b0848261215f565b6000611a38828401846142fe565b805190915060005b8181101561113057611a7986848381518110611a6c57634e487b7160e01b600052603260045260246000fd5b602002602001015161215f565b80611a8381614d1e565b915050611a40565b610134546001600160a01b0316611aa0612150565b6001600160a01b031614611ac65760405162461bcd60e51b815260040161092e906149c4565b611acf866124fa565b611ae2611adb876111ed565b8888612567565b611aef858585858a612c71565b8015610e2c57610e2c878761316d565b80611b0b610d2c612150565b611b275760405162461bcd60e51b815260040161092e90614929565b8130331415611b5b57611b38611fea565b8114611b565760405162461bcd60e51b815260040161092e90614a0b565b611b64565b611b6481611fff565b610e2c87878787876131ae565b6000611b7b612150565b6001600160a01b03811660009081526101356020526040902054909150611bee5760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b606482015260840161092e565b61118a816131c4565b6060816001600160401b03811115611c1f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611c5257816020015b6060815260200190600190039081611c3d5790505b50905060005b82811015611ccd57611c8f848483818110611c8357634e487b7160e01b600052603260045260246000fd5b90506020020135611834565b828281518110611caf57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611cc590614d1e565b915050611c58565b5092915050565b610134546001600160a01b0316611ce9612150565b6001600160a01b031614611d0f5760405162461bcd60e51b815260040161092e906149c4565b61013454611d26906001600160a01b03168461215f565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611d589291906148dd565b60405180910390a2505050565b600054610100900460ff1615808015611d855750600054600160ff909116105b80611d9f5750303b158015611d9f575060005460ff166001145b611e025760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161092e565b6000805460ff191660011790558015611e25576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611ecd91613209565b611ed5613257565b611edd613257565b611ee683613280565b611eef826132b0565b8015610d9f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611f6c57506001600160e01b03198216635b5e139f60e01b145b8061084057506301ffc9a760e01b6001600160e01b0319831614610840565b6000818152606760205260409020546001600160a01b031661118a5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161092e565b600030331415611ffc5750601f193601355b90565b6000818152610100602052604090205461201a906001614b66565b6000918252610100602052604090912055565b6000612038826111ed565b9050806001600160a01b0316836001600160a01b031614156120a65760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161092e565b806001600160a01b03166120b8612150565b6001600160a01b031614806120d457506120d481610788612150565b6121465760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161092e565b61094f83836132e0565b600061215a61334e565b905090565b6001600160a01b0382166121b55760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161092e565b6000818152606760205260409020546001600160a01b03161561221a5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161092e565b6122266000838361336a565b6001600160a01b038216600090815260686020526040812080546001929061224f908490614b66565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006122b7612832565b90506122c381836132e0565b600080516020614dbb83398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb9161232091889130919060440161482d565b600060405180830381600087803b15801561233a57600080fd5b505af115801561234e573d6000803e3d6000fd5b5050505050505050565b6060610d198360405160200161236e9190614757565b6040516020818303038152906040528051906020012060001c83613407565b606061239885611fff565b600080876001600160a01b0316866123b28b8a89896134e9565b6040516123bf9190614757565b60006040518083038160008787f1925050503d80600081146123fd576040519150601f19603f3d011682016040523d82523d6000602084013e612402565b606091505b509092509050612413603f87614b7e565b5a1161242f57634e487b7160e01b600052600160045260246000fd5b61246f82826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613519565b9998505050505050505050565b600080612488836111ed565b9050806001600160a01b0316846001600160a01b031614806124cf57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c0d5750836001600160a01b03166124e8846108d8565b6001600160a01b031614949350505050565b61250381613552565b60405160200161251591815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b031661257a826111ed565b6001600160a01b0316146125de5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161092e565b6001600160a01b0382166126405760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161092e565b61264b83838361336a565b6126566000826132e0565b6001600160a01b038316600090815260686020526040812080546001929061267f908490614b92565b90915550506001600160a01b03821660009081526068602052604081208054600192906126ad908490614b66565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b805160009081905b8015611ccd57612757828561272c600185614b92565b8151811061274a57634e487b7160e01b600052603260045260246000fd5b602002602001015161357e565b91508061276381614cd2565b915050612716565b60005b84811015611130576127d886868381811061279957634e487b7160e01b600052603260045260246000fd5b905060200201358585848181106127c057634e487b7160e01b600052603260045260246000fd5b90506020028101906127d29190614acf565b85612acb565b806127e281614d1e565b91505061276e565b6001600160a01b03821660008181526101356020526040808220849055518392917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a35050565b600080600080516020614dbb8339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b15801561288b57600080fd5b505afa15801561289f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128c391906143af565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b15801561290657600080fd5b505afa15801561291a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061293e9190613dec565b9250505090565b6000612950826111ed565b905061295e8160008461336a565b6129696000836132e0565b6001600160a01b0381166000908152606860205260408120805460019290612992908490614b92565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612a019291906147ee565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612a559183918990899081908401838280828437600092019190915250612b6b92505050565b6111308187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b01819004810282018101909252898152925089915088908190840183828082843760009201919091525088925061362b915050565b612ad484613766565b612b205760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e4400000000604482015260640161092e565b6113b084612b2d86611834565b85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061362b915050565b612b7482613766565b610fab57600082815260c960209081526040909120825161094f92840190613c47565b606080612ba384611834565b9150612baf8484613407565b90509250929050565b6000818152610137602052604081205460ff16801561084057506101366000612bdf612150565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614dbb83398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612c4390869086906004016148dd565b600060405180830381600087803b158015612c5d57600080fd5b505af1158015610e2c573d6000803e3d6000fd5b60005b8481101561113057612ce9868683818110612c9f57634e487b7160e01b600052603260045260246000fd5b9050602002810190612cb19190614acf565b868685818110612cd157634e487b7160e01b600052603260045260246000fd5b9050602002810190612ce39190614acf565b866129ec565b80612cf381614d1e565b915050612c74565b816001600160a01b0316836001600160a01b03161415612d5d5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161092e565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b158015612e0c57600080fd5b505afa158015612e20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e4491906143af565b90506000612ef2866060015180519060200120868860200151604051602001612e929392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b9050818660200151148015612f1857508551612f18906001600160a01b0316828661378c565b9695505050505050565b612f2d848484612567565b612f39848484846138dc565b6113b05760405162461bcd60e51b815260040161092e90614972565b6060600082600081518110612f7a57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611ccd5781848281518110612fb557634e487b7160e01b600052603260045260246000fd5b6020026020010151604051602001612fce9291906147b2565b60405160208183030381529060405291508080612fea90614d1e565b915050612f8b565b612ffc848461215f565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528360405161302c91906148f1565b60405180910390a280156113b0576113b0848461316d565b6060610133805461085590614ce9565b6060816130785750506040805180820190915260018152600360fc1b602082015290565b8160005b81156130a2578061308c81614d1e565b915061309b9050600a83614b7e565b915061307c565b6000816001600160401b038111156130ca57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156130f4576020820181803683370190505b5090505b8415610c0d57613109600183614b92565b9150613116600a86614d39565b613121906030614b66565b60f81b81838151811061314457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350613166600a86614b7e565b94506130f8565b61dead6001600160a01b0383161480159061319f57506001600160a01b03821660009081526101356020526040902054155b15610fab57610fab82826127ea565b6131b7816124fa565b610d9f8585858585612c71565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff166132305760405162461bcd60e51b815260040161092e90614a42565b8151613243906065906020850190613c47565b50805161094f906066906020840190613c47565b600054610100900460ff1661327e5760405162461bcd60e51b815260040161092e90614a42565b565b600054610100900460ff166132a75760405162461bcd60e51b815260040161092e90614a42565b61118a816139ed565b600054610100900460ff166132d75760405162461bcd60e51b815260040161092e90614a42565b61118a81613a46565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613315826111ed565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600030331415613365575060331936013560601c90565b503390565b6000818152610137602052604090205460ff16158061339157506001600160a01b03821615155b6133dd5760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f55504752414445440000000000000000604482015260640161092e565b6001600160a01b0383166000908152610135602052604090205481141561094f5761094f836131c4565b606061341282612bb8565b1561342c5750604080516020810190915260008152610840565b60ca600061343984613552565b81526020019081526020016000206000848152602001908152602001600020805461346390614ce9565b80601f016020809104026020016040519081016040528092919081815260200182805461348f90614ce9565b80156134dc5780601f106134b1576101008083540402835291602001916134dc565b820191906000526020600020905b8154815290600101906020018083116134bf57829003601f168201915b5050505050905092915050565b606082858560405160200161350093929190614773565b6040516020818303038152906040529050949350505050565b60608315613528575081610d19565b8251156135385782518084602001fd5b8160405162461bcd60e51b815260040161092e91906148f1565b600081815260cb60205260408120541561357a57600082815260cb6020526040902054610840565b5090565b60008151600014156135ca5760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b604482015260640161092e565b82826040516020016135dc9190614757565b6040516020818303038152906040528051906020012060405160200161360c929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b60ca600061363883613552565b81526020019081526020016000206000858152602001908152602001600020805461366290614ce9565b151590506136b957826040516136789190614757565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516136b091906148f1565b60405180910390a35b8160ca60006136c784613552565b8152602001908152602001600020600086815260200190815260200160002090805190602001906136f9929190613c47565b50816040516137089190614757565b60405180910390208360405161371e9190614757565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d928686604051613758929190614904565b60405180910390a450505050565b600081815260c960205260408120805482919061378290614ce9565b9050119050919050565b600080600061379b8585613a94565b909250905060008160048111156137c257634e487b7160e01b600052602160045260246000fd5b1480156137e05750856001600160a01b0316826001600160a01b0316145b156137f057600192505050610d19565b600080876001600160a01b0316631626ba7e60e01b88886040516024016138189291906148c4565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516138569190614757565b600060405180830381855afa9150503d8060008114613891576040519150601f19603f3d011682016040523d82523d6000602084013e613896565b606091505b50915091508180156138a9575080516020145b80156138d057508051630b135d3f60e11b906138ce90830160209081019084016143af565b145b98975050505050505050565b60006001600160a01b0384163b156139e557836001600160a01b031663150b7a02613905612150565b8786866040518563ffffffff1660e01b81526004016139279493929190614859565b602060405180830381600087803b15801561394157600080fd5b505af1925050508015613971575060408051601f3d908101601f1916820190925261396e918101906143e3565b60015b6139cb573d80801561399f576040519150601f19603f3d011682016040523d82523d6000602084013e6139a4565b606091505b5080516139c35760405162461bcd60e51b815260040161092e90614972565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c0d565b506001610c0d565b600054610100900460ff16613a145760405162461bcd60e51b815260040161092e90614a42565b80600080516020614dbb8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613a6d5760405162461bcd60e51b815260040161092e90614a42565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613a25565b600080825160411415613acb5760208301516040840151606085015160001a613abf87828585613ada565b94509450505050613ad3565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613b115750600090506003613bbe565b8460ff16601b14158015613b2957508460ff16601c14155b15613b3a5750600090506004613bbe565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613b8e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613bb757600060019250925050613bbe565b9150600090505b94509492505050565b828054613bd390614ce9565b90600052602060002090601f016020900481019282613bf55760008555613c3b565b82601f10613c0e5782800160ff19823516178555613c3b565b82800160010185558215613c3b579182015b82811115613c3b578235825591602001919060010190613c20565b5061357a929150613cbb565b828054613c5390614ce9565b90600052602060002090601f016020900481019282613c755760008555613c3b565b82601f10613c8e57805160ff1916838001178555613c3b565b82800160010185558215613c3b579182015b82811115613c3b578251825591602001919060010190613ca0565b5b8082111561357a5760008155600101613cbc565b60008083601f840112613ce1578182fd5b5081356001600160401b03811115613cf7578182fd5b6020830191508360208260051b8501011115613ad357600080fd5b80358015158114613d2257600080fd5b919050565b60008083601f840112613d38578182fd5b5081356001600160401b03811115613d4e578182fd5b602083019150836020828501011115613ad357600080fd5b600082601f830112613d76578081fd5b81356001600160401b03811115613d8f57613d8f614d79565b613da2601f8201601f1916602001614b13565b818152846020838601011115613db6578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215613de1578081fd5b8135610d1981614d8f565b600060208284031215613dfd578081fd5b8151610d1981614d8f565b60008060408385031215613e1a578081fd5b8235613e2581614d8f565b91506020830135613e3581614d8f565b809150509250929050565b60008060008060808587031215613e55578182fd5b8435613e6081614d8f565b93506020850135613e7081614d8f565b92506040850135613e8081614d8f565b91506060850135613e9081614d8f565b939692955090935050565b600080600060608486031215613eaf578081fd5b8335613eba81614d8f565b92506020840135613eca81614d8f565b929592945050506040919091013590565b600080600080600060808688031215613ef2578283fd5b8535613efd81614d8f565b94506020860135613f0d81614d8f565b93506040860135925060608601356001600160401b03811115613f2e578182fd5b613f3a88828901613d27565b969995985093965092949392505050565b60008060008060808587031215613f60578182fd5b8435613f6b81614d8f565b93506020850135613f7b81614d8f565b92506040850135915060608501356001600160401b03811115613f9c578182fd5b613fa887828801613d66565b91505092959194509250565b60008060008060008060008060a0898b031215613fcf578586fd5b8835613fda81614d8f565b975060208901356001600160401b0380821115613ff5578788fd5b6140018c838d01613cd0565b909950975060408b0135915080821115614019578485fd5b6140258c838d01613cd0565b909750955060608b013591508082111561403d578485fd5b5061404a8b828c01613cd0565b909450925061405d905060808a01613d12565b90509295985092959890939650565b6000806040838503121561407e578182fd5b823561408981614d8f565b9150612baf60208401613d12565b6000806000604084860312156140ab578081fd5b83356140b681614d8f565b925060208401356001600160401b038111156140d0578182fd5b6140dc86828701613d27565b9497909650939450505050565b600080604083850312156140fb578182fd5b823561410681614d8f565b946020939093013593505050565b600080600080600080600060a0888a03121561412e578081fd5b873561413981614d8f565b96506020880135955060408801356001600160401b038082111561415b578283fd5b6141678b838c01613cd0565b909750955060608a013591508082111561417f578283fd5b5061418c8a828b01613cd0565b909450925061419f905060808901613d12565b905092959891949750929550565b600080600080606085870312156141c2578182fd5b84356141cd81614d8f565b93506020850135925060408501356001600160401b038111156141ee578283fd5b6141fa87828801613d27565b95989497509550505050565b60008060208385031215614218578182fd5b82356001600160401b0381111561422d578283fd5b61423985828601613cd0565b90969095509350505050565b60008060008060006060868803121561425c578283fd5b85356001600160401b0380821115614272578485fd5b61427e89838a01613cd0565b90975095506020880135915080821115614296578485fd5b506142a388828901613cd0565b96999598509660400135949350505050565b6000806000604084860312156142c9578081fd5b83356001600160401b038111156142de578182fd5b6142ea86828701613cd0565b909790965060209590950135949350505050565b60006020808385031215614310578182fd5b82356001600160401b03811115614325578283fd5b8301601f81018513614335578283fd5b803561434861434382614b43565b614b13565b80828252848201915084840188868560051b8701011115614367578687fd5b8694505b8385101561438957803583526001949094019391850191850161436b565b50979650505050505050565b6000602082840312156143a6578081fd5b610d1982613d12565b6000602082840312156143c0578081fd5b5051919050565b6000602082840312156143d8578081fd5b8135610d1981614da4565b6000602082840312156143f4578081fd5b8151610d1981614da4565b60008060008060008060006080888a031215614419578081fd5b87356001600160401b038082111561442f578283fd5b61443b8b838c01613d27565b909950975060208a0135965060408a013591508082111561445a578283fd5b6144668b838c01613cd0565b909650945060608a013591508082111561447e578283fd5b5061448b8a828b01613cd0565b989b979a50959850939692959293505050565b600080602083850312156144b0578182fd5b82356001600160401b038111156144c5578283fd5b61423985828601613d27565b6000806000806000606086880312156144e8578283fd5b85356001600160401b03808211156144fe578485fd5b61450a89838a01613d27565b90975095506020880135915080821115614522578485fd5b506142a388828901613d27565b600080600060408486031215614543578081fd5b83356001600160401b03811115614558578182fd5b6142ea86828701613d27565b600060208284031215614575578081fd5b81356001600160401b0381111561458a578182fd5b610c0d84828501613d66565b6000806000604084860312156145aa578081fd5b83356001600160401b03808211156145c0578283fd5b90850190608082880312156145d3578283fd5b909350602085013590808211156145e8578283fd5b506140dc86828701613d27565b600060208284031215614606578081fd5b5035919050565b600080600060408486031215614621578081fd5b8335925060208401356001600160401b038111156140d0578182fd5b60008060008060608587031215614652578182fd5b8435935060208501356001600160401b0381111561466e578283fd5b61467a87828801613d27565b9598909750949560400135949350505050565b6000806040838503121561469f578182fd5b50508035926020909101359150565b600081518084526020808501808196508360051b81019150828601855b858110156146f55782840389526146e384835161472b565b988501989350908401906001016146cb565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452614743816020860160208601614ca6565b601f01601f19169290920160200192915050565b60008251614769818460208701614ca6565b9190910192915050565b60008451614785818460208901614ca6565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b600083516147c4818460208801614ca6565b601760f91b90830190815283516147e2816001840160208801614ca6565b01600101949350505050565b8183823760009101908152919050565b60008351614810818460208801614ca6565b835190830190614824818360208801614ca6565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610aa19083018461472b565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612f189083018461472b565b602081526000610d1960208301846146ae565b6040815260006148b260408301856146ae565b8281036020840152610d1581856146ae565b828152604060208201526000610c0d604083018461472b565b602081526000610c0d602083018486614702565b602081526000610d19602083018461472b565b604081526000614917604083018561472b565b8281036020840152610d15818561472b565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b60208082526017908201527f52656769737472793a20544f4b454e5f494e56414c4944000000000000000000604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614ae5578283fd5b8301803591506001600160401b03821115614afe578283fd5b602001915036819003821315613ad357600080fd5b604051601f8201601f191681016001600160401b0381118282101715614b3b57614b3b614d79565b604052919050565b60006001600160401b03821115614b5c57614b5c614d79565b5060051b60200190565b60008219821115614b7957614b79614d4d565b500190565b600082614b8d57614b8d614d63565b500490565b600082821015614ba457614ba4614d4d565b500390565b6000614bb761434384614b43565b808482526020808301925084368760051b87011115614bd4578485fd5b845b87811015614c125781356001600160401b03811115614bf3578687fd5b614bff36828a01613d66565b8652509382019390820190600101614bd6565b50919695505050505050565b600060808236031215614c2f578081fd5b604051608081016001600160401b038282108183111715614c5257614c52614d79565b8160405284359150614c6382614d8f565b81835260208501356020840152604085013560408401526060850135915080821115614c8d578384fd5b50614c9a36828601613d66565b60608301525092915050565b60005b83811015614cc1578181015183820152602001614ca9565b838111156113b05750506000910152565b600081614ce157614ce1614d4d565b506000190190565b600181811c90821680614cfd57607f821691505b6020821081141561136157634e487b7160e01b600052602260045260246000fd5b6000600019821415614d3257614d32614d4d565b5060010190565b600082614d4857614d48614d63565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461118a57600080fd5b6001600160e01b03198116811461118a57600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistry__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.UNSRegistry__factory = UNSRegistry__factory;
UNSRegistry__factory.bytecode = _bytecode;
UNSRegistry__factory.abi = _abi;
