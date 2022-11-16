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
        ],
        name: "mintWithRecords",
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
        ],
        name: "unlockWithRecords",
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
const _bytecode = "0x608060405234801561001057600080fd5b50614ff9806100206000396000f3fe608060405234801561001057600080fd5b50600436106103835760003560e01c806370a08231116101de578063b88d4fde1161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e14610824578063f7df5c6014610837578063f8c8765e1461084a578063ffa1ad741461085d57600080fd5b8063e985e9c5146107c6578063ebf0c71714610802578063ec129eea14610809578063f25eb5c11461081c57600080fd5b8063c87b56dd116100e9578063c87b56dd1461077a578063ce92b33e1461078d578063cf2c52cb146107a0578063d106353f146107b357600080fd5b8063b88d4fde14610741578063ba5d40b714610754578063bb5b27e11461076757600080fd5b806399e0dd7c1161017c578063a424740011610156578063a4247400146106e7578063ab3b87fe146106fa578063b3f9e4cb1461070d578063b85afd281461072057600080fd5b806399e0dd7c14610695578063a22cb465146106a8578063a3f4df7e146106bb57600080fd5b806394d008ef116101b857806394d008ef1461065f5780639508b1c4146106725780639559c0bd1461068557806395d89b411461068d57600080fd5b806370a08231146106265780637d67df63146106395780637e37479e1461064c57600080fd5b806340c10f19116102b857806350382c1a116102565780636352211e116102305780636352211e146105be578063638e5c78146105d1578063672b9f81146105e45780636ccbae5f1461060557600080fd5b806350382c1a1461057c578063509602391461058f578063572b6c05146105a257600080fd5b8063430c208111610292578063430c20811461053057806347c81699146105435780634a72584d146105565780634f558e791461056957600080fd5b806340c10f19146104f757806342842e0e1461050a57806342966c681461051d57600080fd5b80631be5e7ed11610325578063276fabb1116102ff578063276fabb11461049d57806327f18975146104be578063310bd74b146104d1578063384e9a55146104e457600080fd5b80631be5e7ed146104645780631bf7e13e1461047757806323b872dd1461048a57600080fd5b8063095ea7b311610361578063095ea7b3146103f05780630dee3b5c14610405578063150b7a02146104185780631bd8cc1a1461044457600080fd5b806301ffc9a71461038857806306fdde03146103b0578063081812fc146103c5575b600080fd5b61039b6103963660046145f9565b610881565b60405190151581526020015b60405180910390f35b6103b8610892565b6040516103a79190614b03565b6103d86103d3366004614807565b610924565b6040516001600160a01b0390911681526020016103a7565b6104036103fe366004614293565b61094b565b005b6104036104133660046142be565b6109a0565b61042b610426366004613fdd565b6109f3565b6040516001600160e01b031990911681526020016103a7565b6104576104523660046144e7565b610b49565b6040516103a79190614a9e565b6103b8610472366004614741565b610c69565b6103b86104853660046147a8565b610cb4565b610403610498366004613f9d565b610dbf565b6104b06104ab366004614438565b610e45565b6040519081526020016103a7565b6104036104cc366004614477565b610e59565b6104036104df366004614807565b610ed4565b6104036104f2366004614807565b610f42565b610403610505366004614293565b611001565b610403610518366004613f9d565b61104e565b61040361052b366004614807565b611069565b61039b61053e366004614293565b6110e0565b6104036105513660046146e3565b6110ec565b61040361056436600461484f565b61115e565b61039b610577366004614807565b6111cf565b61040361058a366004614776565b6111ee565b61040361059d366004613ed2565b611224565b61039b6105b0366004613ed2565b6001600160a01b0316301490565b6103d86105cc366004614807565b611284565b6104036105df366004614807565b6112e4565b6105f76105f236600461489f565b61132f565b6040516103a7929190614b16565b6104b0610613366004614807565b6000908152610100602052604090205490565b6104b0610634366004613ed2565b611347565b6104036106473660046140b6565b6113cd565b6104b061065a366004613ed2565b611419565b61040361066d3660046143df565b61144a565b610403610680366004614631565b611499565b6104b0601481565b6103b8611520565b6104036106a33660046146b0565b61152f565b6104036106b6366004614216565b6115b5565b6103b86040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b61039b6106f53660046147a8565b6115c7565b610403610708366004614293565b611612565b6103d861071b366004614807565b61168a565b61073361072e3660046144e7565b6116b4565b6040516103a7929190614ab1565b61040361074f36600461404d565b61181c565b61040361076236600461415e565b611896565b6103b8610775366004614807565b6118eb565b6103b8610788366004614807565b61198d565b61040361079b366004614477565b6119f3565b6104036107ae366004614241565b611a65565b6104036107c1366004614346565b611b42565b61039b6107d4366004613f0a565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104b0565b610403610817366004614477565b611b8c565b610403611bfe565b610457610832366004614438565b611c84565b61040361084536600461481f565b611d61565b610403610858366004613f42565b611df2565b6103b86040518060400160405280600581526020016418171b171960d91b81525081565b600061088c82611fc8565b92915050565b6060606580546108a190614efb565b80601f01602080910402602001604051908101604052809291908181526020018280546108cd90614efb565b801561091a5780601f106108ef5761010080835404028352916020019161091a565b820191906000526020600020905b8154815290600101906020018083116108fd57829003601f168201915b5050505050905090565b600061092f82612018565b506000908152606960205260409020546001600160a01b031690565b80303314156109885761095c612077565b81146109835760405162461bcd60e51b815260040161097a90614c1d565b60405180910390fd5b610991565b6109918161208c565b61099b83836120ba565b505050565b610134546001600160a01b03166109b56121dd565b6001600160a01b0316146109db5760405162461bcd60e51b815260040161097a90614bd6565b6109eb86868686868660016121ec565b505050505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b0316610a286121dd565b6001600160a01b03161415610aea57610a3f6121dd565b6001600160a01b03166342966c68856040518263ffffffff1660e01b8152600401610a6c91815260200190565b600060405180830381600087803b158015610a8657600080fd5b505af1158015610a9a573d6000803e3d6000fd5b505050821580159150610ab45750610ab4828401846145c7565b15610ad257610ac33085612225565b610acd8585612373565b610adc565b610adc8585612225565b50630a85bd0160e11b610b40565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b606482015260840161097a565b95945050505050565b6060826001600160401b03811115610b7157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610ba457816020015b6060815260200190600190039081610b8f5790505b50905060005b83811015610c6157610c23858583818110610bd557634e487b7160e01b600052603260045260246000fd5b9050602002810190610be79190614ce1565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250612414915050565b828281518110610c4357634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610c5990614f30565b915050610baa565b509392505050565b6060610cac84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250612414915050565b949350505050565b606060005a9050610cc68585856115c7565b610d225760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b606482015260840161097a565b610db4610d326020870187613ed2565b30604088013584610d4660608b018b614ce1565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061244992505050565b9150505b9392505050565b80610dd1610dcb6121dd565b82612538565b610ded5760405162461bcd60e51b815260040161097a90614b3b565b8130331415610e2157610dfe612077565b8114610e1c5760405162461bcd60e51b815260040161097a90614c1d565b610e2a565b610e2a8161208c565b610e33836125b6565b610e3e858585612623565b5050505050565b6000610db8610e548385614dbb565b6127ca565b80610e65610dcb6121dd565b610e815760405162461bcd60e51b815260040161097a90614b3b565b8130331415610eb557610e92612077565b8114610eb05760405162461bcd60e51b815260040161097a90614c1d565b610ebe565b610ebe8161208c565b610ecb8787878787612827565b50505050505050565b80610ee0610dcb6121dd565b610efc5760405162461bcd60e51b815260040161097a90614b3b565b8130331415610f3057610f0d612077565b8114610f2b5760405162461bcd60e51b815260040161097a90614c1d565b610f39565b610f398161208c565b61099b836125b6565b80610f4b6121dd565b6001600160a01b0316610f5d82611284565b6001600160a01b031614610fb35760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e4552000000604482015260640161097a565b8130331415610fe757610fc4612077565b8114610fe25760405162461bcd60e51b815260040161097a90614c1d565b610ff0565b610ff08161208c565b61099b610ffb6121dd565b846128a6565b6110096128ee565b6001600160a01b031661101a6121dd565b6001600160a01b0316146110405760405162461bcd60e51b815260040161097a90614c9f565b61104a8282612225565b5050565b61099b8383836040518060200160405280600081525061181c565b80611075610dcb6121dd565b6110915760405162461bcd60e51b815260040161097a90614b3b565b81303314156110c5576110a2612077565b81146110c05760405162461bcd60e51b815260040161097a90614c1d565b6110ce565b6110ce8161208c565b6110d7836125b6565b61099b83612a01565b6000610db88383612538565b806110f8610dcb6121dd565b6111145760405162461bcd60e51b815260040161097a90614b3b565b813033141561114857611125612077565b81146111435760405162461bcd60e51b815260040161097a90614c1d565b611151565b6111518161208c565b610ecb8787878787612aa8565b8061116a610dcb6121dd565b6111865760405162461bcd60e51b815260040161097a90614b3b565b81303314156111ba57611197612077565b81146111b55760405162461bcd60e51b815260040161097a90614c1d565b6111c3565b6111c38161208c565b6109eb86868686612b87565b6000818152606760205260408120546001600160a01b0316151561088c565b611221816040516020016112029190614969565b6040516020818303038152906040528051906020012060001c82612c27565b50565b610134546001600160a01b03166112396121dd565b6001600160a01b03161461125f5760405162461bcd60e51b815260040161097a90614bd6565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b03168061088c5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161097a565b806112f0610dcb6121dd565b61130c5760405162461bcd60e51b815260040161097a90614b3b565b61131e6113176121dd565b3084612623565b61104a6113296121dd565b83612373565b60608061133c8484612c53565b909590945092505050565b60006001600160a01b0382166113b15760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161097a565b506001600160a01b031660009081526068602052604090205490565b610134546001600160a01b03166113e26121dd565b6001600160a01b0316146114085760405162461bcd60e51b815260040161097a90614bd6565b610ecb878787878787876001612c74565b6001600160a01b0381166000908152610135602052604081205461143c81612cba565b611444578091505b50919050565b6114526128ee565b6001600160a01b03166114636121dd565b6001600160a01b0316146114895760405162461bcd60e51b815260040161097a90614c9f565b6114938484612225565b50505050565b6114a38787612d04565b6114ab6121dd565b6001600160a01b03166114bd86611284565b6001600160a01b0316146115135760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e4552000000604482015260640161097a565b610ecb8484848489612d73565b6060606680546108a190614efb565b610134546001600160a01b03166115446121dd565b6001600160a01b03161461156a5760405162461bcd60e51b815260040161097a90614bd6565b6115776101338383613cc9565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516115a9929190614aef565b60405180910390a15050565b61104a6115c06121dd565b8383612dfd565b6000610cac6115d585614e30565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612ecc92505050565b8061161e610dcb6121dd565b61163a5760405162461bcd60e51b815260040161097a90614b3b565b813033141561166e5761164b612077565b81146116695760405162461bcd60e51b815260040161097a90614c1d565b611677565b6116778161208c565b61149361168384611284565b8585612623565b6000818152606760205260408120546001600160a01b03166116ad57600061088c565b3092915050565b606080836001600160401b038111156116dd57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561171057816020015b60608152602001906001900390816116fb5790505b509150836001600160401b0381111561173957634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561176c57816020015b60608152602001906001900390816117575790505b50905060005b84811015611813576117aa86868381811061179d57634e487b7160e01b600052603260045260246000fd5b9050602002013585612c53565b8483815181106117ca57634e487b7160e01b600052603260045260246000fd5b602002602001018484815181106117f157634e487b7160e01b600052603260045260246000fd5b602002602001018290528290525050808061180b90614f30565b915050611772565b50935093915050565b81611828610dcb6121dd565b6118445760405162461bcd60e51b815260040161097a90614b3b565b823033141561187857611855612077565b81146118735760405162461bcd60e51b815260040161097a90614c1d565b611881565b6118818161208c565b61188a846125b6565b6109eb86868686613024565b610134546001600160a01b03166118ab6121dd565b6001600160a01b0316146118d15760405162461bcd60e51b815260040161097a90614bd6565b6118e18888888888888888612c74565b5050505050505050565b600081815260c96020526040902080546060919061190890614efb565b80601f016020809104026020016040519081016040528092919081815260200182805461193490614efb565b80156119815780601f1061195657610100808354040283529160200191611981565b820191906000526020600020905b81548152906001019060200180831161196457829003601f168201915b50505050509050919050565b606061199882612018565b60006119a2613057565b905060008151116119c25760405180602001604052806000815250610db8565b806119cc84613067565b6040516020016119dd929190614a10565b6040516020818303038152906040529392505050565b806119ff610dcb6121dd565b611a1b5760405162461bcd60e51b815260040161097a90614b3b565b8130331415611a4f57611a2c612077565b8114611a4a5760405162461bcd60e51b815260040161097a90614c1d565b611a58565b611a588161208c565b610ecb8787878787612d73565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611a986121dd565b6001600160a01b031614611abe5760405162461bcd60e51b815260040161097a90614c9f565b6020811415611ae1576000611ad582840184614807565b90506114938482612225565b6000611aef82840184614530565b805190915060005b818110156109eb57611b3086848381518110611b2357634e487b7160e01b600052603260045260246000fd5b6020026020010151612225565b80611b3a81614f30565b915050611af7565b610134546001600160a01b0316611b576121dd565b6001600160a01b031614611b7d5760405162461bcd60e51b815260040161097a90614bd6565b610ecb878787878787876121ec565b80611b98610dcb6121dd565b611bb45760405162461bcd60e51b815260040161097a90614b3b565b8130331415611be857611bc5612077565b8114611be35760405162461bcd60e51b815260040161097a90614c1d565b611bf1565b611bf18161208c565b610ecb8787878787613180565b6000611c086121dd565b6001600160a01b03811660009081526101356020526040902054909150611c7b5760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b606482015260840161097a565b61122181613196565b6060816001600160401b03811115611cac57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611cdf57816020015b6060815260200190600190039081611cca5790505b50905060005b82811015611d5a57611d1c848483818110611d1057634e487b7160e01b600052603260045260246000fd5b905060200201356118eb565b828281518110611d3c57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611d5290614f30565b915050611ce5565b5092915050565b610134546001600160a01b0316611d766121dd565b6001600160a01b031614611d9c5760405162461bcd60e51b815260040161097a90614bd6565b61013454611db3906001600160a01b031684612225565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611de5929190614aef565b60405180910390a2505050565b600054610100900460ff1615808015611e125750600054600160ff909116105b80611e2c5750303b158015611e2c575060005460ff166001145b611e8f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161097a565b6000805460ff191660011790558015611eb2576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611f5a916131db565b611f62613229565b611f6a613229565b611f7383613252565b611f7c82613282565b8015610e3e576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611ff957506001600160e01b03198216635b5e139f60e01b145b8061088c57506301ffc9a760e01b6001600160e01b031983161461088c565b6000818152606760205260409020546001600160a01b03166112215760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161097a565b6000303314156120895750601f193601355b90565b600081815261010060205260409020546120a7906001614d78565b6000918252610100602052604090912055565b60006120c582611284565b9050806001600160a01b0316836001600160a01b031614156121335760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161097a565b806001600160a01b03166121456121dd565b6001600160a01b031614806121615750612161816107d46121dd565b6121d35760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161097a565b61099b83836132b2565b60006121e7613320565b905090565b6121f5866125b6565b61220861220187611284565b8888612623565b612215858585858a612d73565b8015610ecb57610ecb878761333c565b6001600160a01b03821661227b5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161097a565b6000818152606760205260409020546001600160a01b0316156122e05760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161097a565b6122ec6000838361337d565b6001600160a01b0382166000908152606860205260408120805460019290612315908490614d78565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061237d6128ee565b905061238981836132b2565b600080516020614fcd83398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb916123e6918891309190604401614a3f565b600060405180830381600087803b15801561240057600080fd5b505af11580156118e1573d6000803e3d6000fd5b6060610db88360405160200161242a9190614969565b6040516020818303038152906040528051906020012060001c8361341a565b60606124548561208c565b600080876001600160a01b03168661246e8b8a89896134fc565b60405161247b9190614969565b60006040518083038160008787f1925050503d80600081146124b9576040519150601f19603f3d011682016040523d82523d6000602084013e6124be565b606091505b5090925090506124cf603f87614d90565b5a116124eb57634e487b7160e01b600052600160045260246000fd5b61252b82826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c454400000000000081525061352c565b9998505050505050505050565b60008061254483611284565b9050806001600160a01b0316846001600160a01b0316148061258b57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610cac5750836001600160a01b03166125a484610924565b6001600160a01b031614949350505050565b6125bf81613565565b6040516020016125d191815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b031661263682611284565b6001600160a01b03161461269a5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161097a565b6001600160a01b0382166126fc5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161097a565b61270783838361337d565b6127126000826132b2565b6001600160a01b038316600090815260686020526040812080546001929061273b908490614da4565b90915550506001600160a01b0382166000908152606860205260408120805460019290612769908490614d78565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b805160009081905b8015611d5a5761281382856127e8600185614da4565b8151811061280657634e487b7160e01b600052603260045260246000fd5b6020026020010151613591565b91508061281f81614ee4565b9150506127d2565b60005b848110156109eb5761289486868381811061285557634e487b7160e01b600052603260045260246000fd5b9050602002013585858481811061287c57634e487b7160e01b600052603260045260246000fd5b905060200281019061288e9190614ce1565b85612b87565b8061289e81614f30565b91505061282a565b6001600160a01b03821660008181526101356020526040808220849055518392917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a35050565b600080600080516020614fcd8339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b15801561294757600080fd5b505afa15801561295b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061297f91906145e1565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b1580156129c257600080fd5b505afa1580156129d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129fa9190613eee565b9250505090565b6000612a0c82611284565b9050612a1a8160008461337d565b612a256000836132b2565b6001600160a01b0381166000908152606860205260408120805460019290612a4e908490614da4565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612abd929190614a00565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612b119183918990899081908401838280828437600092019190915250612c2792505050565b6109eb8187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b01819004810282018101909252898152925089915088908190840183828082843760009201919091525088925061363e915050565b612b9084613779565b612bdc5760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e4400000000604482015260640161097a565b61149384612be9866118eb565b85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061363e915050565b612c3082613779565b61104a57600082815260c960209081526040909120825161099b92840190613d49565b606080612c5f846118eb565b9150612c6b848461341a565b90509250929050565b6000612c83610e54888a614dbb565b9050612ca28982612c9c612c978b8d614dbb565b61379f565b8561383c565b612caf8686868685612d73565b505050505050505050565b6000818152610137602052604081205460ff16801561088c57506101366000612ce16121dd565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614fcd83398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612d459086908690600401614aef565b600060405180830381600087803b158015612d5f57600080fd5b505af1158015610ecb573d6000803e3d6000fd5b60005b848110156109eb57612deb868683818110612da157634e487b7160e01b600052603260045260246000fd5b9050602002810190612db39190614ce1565b868685818110612dd357634e487b7160e01b600052603260045260246000fd5b9050602002810190612de59190614ce1565b86612aa8565b80612df581614f30565b915050612d76565b816001600160a01b0316836001600160a01b03161415612e5f5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161097a565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b158015612f0e57600080fd5b505afa158015612f22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f4691906145e1565b90506000612ff4866060015180519060200120868860200151604051602001612f949392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561301a5750855161301a906001600160a01b0316828661388e565b9695505050505050565b61302f848484612623565b61303b848484846139de565b6114935760405162461bcd60e51b815260040161097a90614b84565b606061013380546108a190614efb565b60608161308b5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156130b5578061309f81614f30565b91506130ae9050600a83614d90565b915061308f565b6000816001600160401b038111156130dd57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613107576020820181803683370190505b5090505b8415610cac5761311c600183614da4565b9150613129600a86614f4b565b613134906030614d78565b60f81b81838151811061315757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350613179600a86614d90565b945061310b565b613189816125b6565b610e3e8585858585612d73565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff166132025760405162461bcd60e51b815260040161097a90614c54565b8151613215906065906020850190613d49565b50805161099b906066906020840190613d49565b600054610100900460ff166132505760405162461bcd60e51b815260040161097a90614c54565b565b600054610100900460ff166132795760405162461bcd60e51b815260040161097a90614c54565b61122181613aef565b600054610100900460ff166132a95760405162461bcd60e51b815260040161097a90614c54565b61122181613b48565b600081815260696020526040902080546001600160a01b0319166001600160a01b03841690811790915581906132e782611284565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600030331415613337575060331936013560601c90565b503390565b61dead6001600160a01b0383161480159061336e57506001600160a01b03821660009081526101356020526040902054155b1561104a5761104a82826128a6565b6000818152610137602052604090205460ff1615806133a457506001600160a01b03821615155b6133f05760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f55504752414445440000000000000000604482015260640161097a565b6001600160a01b0383166000908152610135602052604090205481141561099b5761099b83613196565b606061342582612cba565b1561343f575060408051602081019091526000815261088c565b60ca600061344c84613565565b81526020019081526020016000206000848152602001908152602001600020805461347690614efb565b80601f01602080910402602001604051908101604052809291908181526020018280546134a290614efb565b80156134ef5780601f106134c4576101008083540402835291602001916134ef565b820191906000526020600020905b8154815290600101906020018083116134d257829003601f168201915b5050505050905092915050565b606082858560405160200161351393929190614985565b6040516020818303038152906040529050949350505050565b6060831561353b575081610db8565b82511561354b5782518084602001fd5b8160405162461bcd60e51b815260040161097a9190614b03565b600081815260cb60205260408120541561358d57600082815260cb602052604090205461088c565b5090565b60008151600014156135dd5760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b604482015260640161097a565b82826040516020016135ef9190614969565b6040516020818303038152906040528051906020012060405160200161361f929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b60ca600061364b83613565565b81526020019081526020016000206000858152602001908152602001600020805461367590614efb565b151590506136cc578260405161368b9190614969565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516136c39190614b03565b60405180910390a35b8160ca60006136da84613565565b81526020019081526020016000206000868152602001908152602001600020908051906020019061370c929190613d49565b508160405161371b9190614969565b6040518091039020836040516137319190614969565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d92868660405161376b929190614b16565b60405180910390a450505050565b600081815260c960205260408120805482919061379590614efb565b9050119050919050565b60606000826000815181106137c457634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611d5a57818482815181106137ff57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516020016138189291906149c4565b6040516020818303038152906040529150808061383490614f30565b9150506137d5565b6138468484612225565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c3952836040516138769190614b03565b60405180910390a2801561149357611493848461333c565b600080600061389d8585613b96565b909250905060008160048111156138c457634e487b7160e01b600052602160045260246000fd5b1480156138e25750856001600160a01b0316826001600160a01b0316145b156138f257600192505050610db8565b600080876001600160a01b0316631626ba7e60e01b888860405160240161391a929190614ad6565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516139589190614969565b600060405180830381855afa9150503d8060008114613993576040519150601f19603f3d011682016040523d82523d6000602084013e613998565b606091505b50915091508180156139ab575080516020145b80156139d257508051630b135d3f60e11b906139d090830160209081019084016145e1565b145b98975050505050505050565b60006001600160a01b0384163b15613ae757836001600160a01b031663150b7a02613a076121dd565b8786866040518563ffffffff1660e01b8152600401613a299493929190614a6b565b602060405180830381600087803b158015613a4357600080fd5b505af1925050508015613a73575060408051601f3d908101601f19168201909252613a7091810190614615565b60015b613acd573d808015613aa1576040519150601f19603f3d011682016040523d82523d6000602084013e613aa6565b606091505b508051613ac55760405162461bcd60e51b815260040161097a90614b84565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610cac565b506001610cac565b600054610100900460ff16613b165760405162461bcd60e51b815260040161097a90614c54565b80600080516020614fcd8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613b6f5760405162461bcd60e51b815260040161097a90614c54565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613b27565b600080825160411415613bcd5760208301516040840151606085015160001a613bc187828585613bdc565b94509450505050613bd5565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613c135750600090506003613cc0565b8460ff16601b14158015613c2b57508460ff16601c14155b15613c3c5750600090506004613cc0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613c90573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613cb957600060019250925050613cc0565b9150600090505b94509492505050565b828054613cd590614efb565b90600052602060002090601f016020900481019282613cf75760008555613d3d565b82601f10613d105782800160ff19823516178555613d3d565b82800160010185558215613d3d579182015b82811115613d3d578235825591602001919060010190613d22565b5061358d929150613dbd565b828054613d5590614efb565b90600052602060002090601f016020900481019282613d775760008555613d3d565b82601f10613d9057805160ff1916838001178555613d3d565b82800160010185558215613d3d579182015b82811115613d3d578251825591602001919060010190613da2565b5b8082111561358d5760008155600101613dbe565b60008083601f840112613de3578182fd5b5081356001600160401b03811115613df9578182fd5b6020830191508360208260051b8501011115613bd557600080fd5b80358015158114613e2457600080fd5b919050565b60008083601f840112613e3a578182fd5b5081356001600160401b03811115613e50578182fd5b602083019150836020828501011115613bd557600080fd5b600082601f830112613e78578081fd5b81356001600160401b03811115613e9157613e91614f8b565b613ea4601f8201601f1916602001614d25565b818152846020838601011115613eb8578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215613ee3578081fd5b8135610db881614fa1565b600060208284031215613eff578081fd5b8151610db881614fa1565b60008060408385031215613f1c578081fd5b8235613f2781614fa1565b91506020830135613f3781614fa1565b809150509250929050565b60008060008060808587031215613f57578182fd5b8435613f6281614fa1565b93506020850135613f7281614fa1565b92506040850135613f8281614fa1565b91506060850135613f9281614fa1565b939692955090935050565b600080600060608486031215613fb1578081fd5b8335613fbc81614fa1565b92506020840135613fcc81614fa1565b929592945050506040919091013590565b600080600080600060808688031215613ff4578283fd5b8535613fff81614fa1565b9450602086013561400f81614fa1565b93506040860135925060608601356001600160401b03811115614030578182fd5b61403c88828901613e29565b969995985093965092949392505050565b60008060008060808587031215614062578182fd5b843561406d81614fa1565b9350602085013561407d81614fa1565b92506040850135915060608501356001600160401b0381111561409e578182fd5b6140aa87828801613e68565b91505092959194509250565b60008060008060008060006080888a0312156140d0578485fd5b87356140db81614fa1565b965060208801356001600160401b03808211156140f6578687fd5b6141028b838c01613dd2565b909850965060408a013591508082111561411a578384fd5b6141268b838c01613dd2565b909650945060608a013591508082111561413e578384fd5b5061414b8a828b01613dd2565b989b979a50959850939692959293505050565b60008060008060008060008060a0898b031215614179578182fd5b883561418481614fa1565b975060208901356001600160401b038082111561419f578384fd5b6141ab8c838d01613dd2565b909950975060408b01359150808211156141c3578384fd5b6141cf8c838d01613dd2565b909750955060608b01359150808211156141e7578384fd5b506141f48b828c01613dd2565b9094509250614207905060808a01613e14565b90509295985092959890939650565b60008060408385031215614228578182fd5b823561423381614fa1565b9150612c6b60208401613e14565b600080600060408486031215614255578081fd5b833561426081614fa1565b925060208401356001600160401b0381111561427a578182fd5b61428686828701613e29565b9497909650939450505050565b600080604083850312156142a5578182fd5b82356142b081614fa1565b946020939093013593505050565b600080600080600080608087890312156142d6578384fd5b86356142e181614fa1565b95506020870135945060408701356001600160401b0380821115614303578586fd5b61430f8a838b01613dd2565b90965094506060890135915080821115614327578384fd5b5061433489828a01613dd2565b979a9699509497509295939492505050565b600080600080600080600060a0888a031215614360578081fd5b873561436b81614fa1565b96506020880135955060408801356001600160401b038082111561438d578283fd5b6143998b838c01613dd2565b909750955060608a01359150808211156143b1578283fd5b506143be8a828b01613dd2565b90945092506143d1905060808901613e14565b905092959891949750929550565b600080600080606085870312156143f4578182fd5b84356143ff81614fa1565b93506020850135925060408501356001600160401b03811115614420578283fd5b61442c87828801613e29565b95989497509550505050565b6000806020838503121561444a578182fd5b82356001600160401b0381111561445f578283fd5b61446b85828601613dd2565b90969095509350505050565b60008060008060006060868803121561448e578283fd5b85356001600160401b03808211156144a4578485fd5b6144b089838a01613dd2565b909750955060208801359150808211156144c8578485fd5b506144d588828901613dd2565b96999598509660400135949350505050565b6000806000604084860312156144fb578081fd5b83356001600160401b03811115614510578182fd5b61451c86828701613dd2565b909790965060209590950135949350505050565b60006020808385031215614542578182fd5b82356001600160401b03811115614557578283fd5b8301601f81018513614567578283fd5b803561457a61457582614d55565b614d25565b80828252848201915084840188868560051b8701011115614599578687fd5b8694505b838510156145bb57803583526001949094019391850191850161459d565b50979650505050505050565b6000602082840312156145d8578081fd5b610db882613e14565b6000602082840312156145f2578081fd5b5051919050565b60006020828403121561460a578081fd5b8135610db881614fb6565b600060208284031215614626578081fd5b8151610db881614fb6565b60008060008060008060006080888a03121561464b578081fd5b87356001600160401b0380821115614661578283fd5b61466d8b838c01613e29565b909950975060208a0135965060408a013591508082111561468c578283fd5b6146988b838c01613dd2565b909650945060608a013591508082111561413e578283fd5b600080602083850312156146c2578182fd5b82356001600160401b038111156146d7578283fd5b61446b85828601613e29565b6000806000806000606086880312156146fa578283fd5b85356001600160401b0380821115614710578485fd5b61471c89838a01613e29565b90975095506020880135915080821115614734578485fd5b506144d588828901613e29565b600080600060408486031215614755578081fd5b83356001600160401b0381111561476a578182fd5b61451c86828701613e29565b600060208284031215614787578081fd5b81356001600160401b0381111561479c578182fd5b610cac84828501613e68565b6000806000604084860312156147bc578081fd5b83356001600160401b03808211156147d2578283fd5b90850190608082880312156147e5578283fd5b909350602085013590808211156147fa578283fd5b5061428686828701613e29565b600060208284031215614818578081fd5b5035919050565b600080600060408486031215614833578081fd5b8335925060208401356001600160401b0381111561427a578182fd5b60008060008060608587031215614864578182fd5b8435935060208501356001600160401b03811115614880578283fd5b61488c87828801613e29565b9598909750949560400135949350505050565b600080604083850312156148b1578182fd5b50508035926020909101359150565b600081518084526020808501808196508360051b81019150828601855b858110156149075782840389526148f584835161493d565b988501989350908401906001016148dd565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452614955816020860160208601614eb8565b601f01601f19169290920160200192915050565b6000825161497b818460208701614eb8565b9190910192915050565b60008451614997818460208901614eb8565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b600083516149d6818460208801614eb8565b601760f91b90830190815283516149f4816001840160208801614eb8565b01600101949350505050565b8183823760009101908152919050565b60008351614a22818460208801614eb8565b835190830190614a36818360208801614eb8565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610b409083018461493d565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061301a9083018461493d565b602081526000610db860208301846148c0565b604081526000614ac460408301856148c0565b8281036020840152610db481856148c0565b828152604060208201526000610cac604083018461493d565b602081526000610cac602083018486614914565b602081526000610db8602083018461493d565b604081526000614b29604083018561493d565b8281036020840152610db4818561493d565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b60208082526017908201527f52656769737472793a20544f4b454e5f494e56414c4944000000000000000000604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614cf7578283fd5b8301803591506001600160401b03821115614d10578283fd5b602001915036819003821315613bd557600080fd5b604051601f8201601f191681016001600160401b0381118282101715614d4d57614d4d614f8b565b604052919050565b60006001600160401b03821115614d6e57614d6e614f8b565b5060051b60200190565b60008219821115614d8b57614d8b614f5f565b500190565b600082614d9f57614d9f614f75565b500490565b600082821015614db657614db6614f5f565b500390565b6000614dc961457584614d55565b808482526020808301925084368760051b87011115614de6578485fd5b845b87811015614e245781356001600160401b03811115614e05578687fd5b614e1136828a01613e68565b8652509382019390820190600101614de8565b50919695505050505050565b600060808236031215614e41578081fd5b604051608081016001600160401b038282108183111715614e6457614e64614f8b565b8160405284359150614e7582614fa1565b81835260208501356020840152604085013560408401526060850135915080821115614e9f578384fd5b50614eac36828601613e68565b60608301525092915050565b60005b83811015614ed3578181015183820152602001614ebb565b838111156114935750506000910152565b600081614ef357614ef3614f5f565b506000190190565b600181811c90821680614f0f57607f821691505b6020821081141561144457634e487b7160e01b600052602260045260246000fd5b6000600019821415614f4457614f44614f5f565b5060010190565b600082614f5a57614f5a614f75565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461122157600080fd5b6001600160e01b03198116811461122157600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000804000a";
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
