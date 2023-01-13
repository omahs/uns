"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManagerMock__factory = void 0;
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
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Blocked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "BlocklistDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "BlocklistEnabled",
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
                indexed: false,
                internalType: "string",
                name: "tld",
                type: "string",
            },
        ],
        name: "NewTld",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
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
        name: "RemoveTld",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
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
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINTER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
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
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "addMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "addProxyReaders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "tld",
                type: "string",
            },
        ],
        name: "addTld",
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
        name: "blocklist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "claim",
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
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "claimTo",
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
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
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
        name: "claimToWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "closeMinter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsMintingController",
        outputs: [
            {
                internalType: "contract IMintingController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsResolver",
        outputs: [
            {
                internalType: "contract IResolver",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsURIPrefixController",
        outputs: [
            {
                internalType: "contract IURIPrefixController",
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
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
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
                internalType: "contract IUNSRegistry",
                name: "unsRegistry_",
                type: "address",
            },
            {
                internalType: "contract IMintingController",
                name: "cnsMintingController_",
                type: "address",
            },
            {
                internalType: "contract IURIPrefixController",
                name: "cnsURIPrefixController_",
                type: "address",
            },
            {
                internalType: "contract IResolver",
                name: "cnsResolver_",
                type: "address",
            },
            {
                internalType: "address",
                name: "forwarder",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isBlocked",
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
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
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
        name: "issueWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
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
                name: "account",
                type: "address",
            },
        ],
        name: "removeMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "removeMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
        ],
        name: "removeTld",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "rotateMinter",
        outputs: [],
        stateMutability: "payable",
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
        name: "setForwarder",
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
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unsRegistry",
        outputs: [
            {
                internalType: "contract IUNSRegistry",
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
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "upgradeAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506135c7806100206000396000f3fe6080604052600436106102515760003560e01c8063906cecc111610139578063b0aa98c7116100b6578063d1f5692c1161007a578063d1f5692c14610720578063d539139314610740578063d547741f14610762578063ec52738914610782578063f2fde38b146107a2578063ffa1ad74146107c257600080fd5b8063b0aa98c714610680578063b9998a24146106a0578063c3a3bc00146106c0578063cc2c3fc4146106e0578063ceeb4f501461070057600080fd5b8063a217fddf116100fd578063a217fddf146105be578063a3f4df7e146105d3578063a849d65c14610620578063aa271e1a14610640578063ae31844a1461066057600080fd5b8063906cecc11461052957806391d1485414610549578063983b2d5614610569578063986502751461058957806399e0dd7c1461059e57600080fd5b8063572b6c05116101d2578063634486da11610196578063634486da1461049b578063715018a6146104ae57806371e2a657146104c357806381c81d35146104e35780638456cb59146104f65780638da5cb5b1461050b57600080fd5b8063572b6c05146103d85780635b6fa8db146104265780635c975abb146104465780635cd7e3b31461045b5780635fc1964f1461047b57600080fd5b80633092afd5116102195780633092afd51461032b57806336568abe1461034b5780633f41b6141461036b5780633f4ba83a146103a3578063463c4bcb146103b857600080fd5b806301ffc9a7146102565780631459457a1461028b578063248a9ca3146102ad578063268b15ed146102eb5780632f2ff15d1461030b575b600080fd5b34801561026257600080fd5b50610276610271366004612e52565b6107f3565b60405190151581526020015b60405180910390f35b34801561029757600080fd5b506102ab6102a6366004612e7a565b61082a565b005b3480156102b957600080fd5b506102dd6102c8366004612e0b565b60009081526097602052604090206001015490565b604051908152602001610282565b3480156102f757600080fd5b506102ab610306366004612f1d565b610b91565b34801561031757600080fd5b506102ab610326366004612e23565b610c23565b34801561033757600080fd5b506102ab610346366004612b13565b610c4d565b34801561035757600080fd5b506102ab610366366004612e23565b610c61565b34801561037757600080fd5b5060c95461038b906001600160a01b031681565b6040516001600160a01b039091168152602001610282565b3480156103af57600080fd5b506102ab610cef565b3480156103c457600080fd5b506102ab6103d3366004612e0b565b610d01565b3480156103e457600080fd5b506102766103f3366004612b13565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b34801561043257600080fd5b5060cc5461038b906001600160a01b031681565b34801561045257600080fd5b50610276610d31565b34801561046757600080fd5b506102ab610476366004612b4b565b610d47565b34801561048757600080fd5b506102ab610496366004612d4f565b611003565b6102ab6104a9366004612b13565b611059565b3480156104ba57600080fd5b506102ab61111c565b3480156104cf57600080fd5b506102ab6104de366004612d4f565b61112e565b6102ab6104f1366004612b13565b611184565b34801561050257600080fd5b506102ab611201565b34801561051757600080fd5b506033546001600160a01b031661038b565b34801561053557600080fd5b506102ab610544366004612c06565b611211565b34801561055557600080fd5b50610276610564366004612e23565b611297565b34801561057557600080fd5b506102ab610584366004612b13565b6112c2565b34801561059557600080fd5b506102ab6112d3565b3480156105aa57600080fd5b506102ab6105b9366004612eea565b6112ed565b3480156105ca57600080fd5b506102dd600081565b3480156105df57600080fd5b50610613604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102829190613208565b34801561062c57600080fd5b5060cb5461038b906001600160a01b031681565b34801561064c57600080fd5b5061027661065b366004612b13565b6113cc565b34801561066c57600080fd5b506102ab61067b366004612d10565b6113e6565b34801561068c57600080fd5b5061027661069b366004612e0b565b6114f1565b3480156106ac57600080fd5b506102ab6106bb366004612b13565b61154f565b3480156106cc57600080fd5b506102ab6106db366004612eea565b611594565b3480156106ec57600080fd5b5060ca5461038b906001600160a01b031681565b34801561070c57600080fd5b506102ab61071b366004612c5f565b6115db565b34801561072c57600080fd5b506102ab61073b366004612d10565b611671565b34801561074c57600080fd5b506102dd60008051602061359b83398151915281565b34801561076e57600080fd5b506102ab61077d366004612e23565b611736565b34801561078e57600080fd5b506102ab61079d366004612e0b565b61175b565b3480156107ae57600080fd5b506102ab6107bd366004612b13565b6117cd565b3480156107ce57600080fd5b50610613604051806040016040528060058152602001640605c685c760db1b81525081565b60006001600160e01b03198216637965db0b60e01b148061082457506301ffc9a760e01b6001600160e01b03198316145b92915050565b600054610100900460ff161580801561084a5750600054600160ff909116105b806108645750303b158015610864575060005460ff166001145b6108cc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156108ef576000805461ff0019166101001790555b60c980546001600160a01b038089166001600160a01b03199283161790925560ca805488841690831617905560cb805487841690831617905560cc8054928616929091169190911790556109416117e9565b610949611820565b61095282611859565b61095a611880565b604080516101e08101825260066101a082018181526563727970746f60d01b6101c0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185529182526535b632bb32b960d11b8282015261016083019190915282518084019093526002835261686960f01b9083015261018081019190915260005b600d811015610b4157610b2f8282600d8110610b2557634e487b7160e01b600052603260045260246000fd5b60200201516118c0565b80610b3981613510565b915050610af9565b50508015610b89576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610bd592508491508390506119dc565b610bdd610d31565b15610bfa5760405162461bcd60e51b81526004016108c390613250565b6060610b89610c07611b32565b610c1a88610c158989611b41565b611b6d565b83846001611c9a565b600082815260976020526040902060010154610c3e81611f96565b610c488383611fa7565b505050565b610c5561202e565b610c5e816120a7565b50565b610c69611b32565b6001600160a01b0316816001600160a01b031614610ce15760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016108c3565b610ceb82826120bf565b5050565b610cf761202e565b610cff612144565b565b610d0c61065b611b32565b610d285760405162461bcd60e51b81526004016108c39061321b565b610c5e816121ec565b60008051602061357b8339815191525460ff1690565b610d5186886133c9565b805160021415610dc357610d6661065b611b32565b610dbe5760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604482015263272a22a960e11b60648201526084016108c3565b610ed0565b6000610dce82612270565b60c9549092506001600160a01b0316905063430c2081610dec611b32565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610e3257600080fd5b505afa158015610e46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6a9190612def565b610ece5760405162461bcd60e51b815260206004820152602f60248201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060448201526e282927ab22a22fa7a92fa7aba722a960891b60648201526084016108c3565b505b610eda87896133c9565b600281511015610f3a5760405162461bcd60e51b815260206004820152602560248201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456044820152642627abaf9960d91b60648201526084016108c3565b610faa610f7c60008360018551610f5191906133b2565b81518110610f6f57634e487b7160e01b600052603260045260246000fd5b60200260200101516122ab565b82600081518110610f9d57634e487b7160e01b600052603260045260246000fd5b60200260200101516119dc565b610fb2610d31565b15610fcf5760405162461bcd60e51b81526004016108c390613250565b610ff78a610fdd8a8c6133c9565b610fe7898b6133c9565b610ff1888a6133c9565b87611c9a565b50505050505050505050565b61100b61202e565b60005b8151811015610ceb5761104782828151811061103a57634e487b7160e01b600052603260045260246000fd5b60200260200101516120a7565b8061105181613510565b91505061100e565b61106461065b611b32565b6110805760405162461bcd60e51b81526004016108c39061321b565b6001600160a01b0381166110d65760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016108c3565b6110df81612360565b6110e76112d3565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610ceb573d6000803e3d6000fd5b61112461202e565b610cff6000612378565b61113661202e565b60005b8151811015610ceb5761117282828151811061116557634e487b7160e01b600052603260045260246000fd5b6020026020010151612360565b8061117c81613510565b915050611139565b61118f61065b611b32565b6111ab5760405162461bcd60e51b81526004016108c39061321b565b6001600160a01b0381166110df5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016108c3565b61120961202e565b610cff6123ca565b8282828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061125592508491508390506119dc565b61125d610d31565b1561127a5760405162461bcd60e51b81526004016108c390613250565b606061128e87610c1a88610c158989611b41565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6112ca61202e565b610c5e81612360565b610cff60008051602061359b833981519152610366611b32565b6112f561202e565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061132790859085906004016131d9565b600060405180830381600087803b15801561134157600080fd5b505af1158015611355573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610ceb90505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061139e90859085906004016131d9565b600060405180830381600087803b1580156113b857600080fd5b505af1158015610b89573d6000803e3d6000fd5b600061082460008051602061359b83398151915283611297565b6113f161065b611b32565b61140d5760405162461bcd60e51b81526004016108c39061321b565b60c9546040516000916001600160a01b031690611430908590859060240161319f565b60408051601f198184030181529181526020820180516001600160e01b0316635718c22560e11b179052516114659190612fe3565b6000604051808303816000865af19150503d80600081146114a2576040519150601f19603f3d011682016040523d82523d6000602084013e6114a7565b606091505b5050905080610c485760405162461bcd60e51b81526020600482015260166024820152751d5c19dc985919505b1b081b5bd8dac819985a5b195960521b60448201526064016108c3565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd696020820152908101829052600090611545906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b61155761202e565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b61159c61202e565b610ceb82828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506118c092505050565b8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061161f92508491508390506119dc565b611627610d31565b156116445760405162461bcd60e51b81526004016108c390613250565b610ff78a6116568b610c158c8c611b41565b611660888a6133c9565b61166a87896133c9565b6001611c9a565b61167961202e565b60005b81811015610c485760c9546001600160a01b031663509602398484848181106116b557634e487b7160e01b600052603260045260246000fd5b90506020020160208101906116ca9190612b13565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561170b57600080fd5b505af115801561171f573d6000803e3d6000fd5b50505050808061172e90613510565b91505061167c565b60008281526097602052604090206001015461175181611f96565b610c4883836120bf565b61176361202e565b61176c81612432565b6117885760405162461bcd60e51b81526004016108c39061327a565b600081815260cd6020526040812061179f916129b8565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b6117d561202e565b6117de81612458565b610c5e6000826124ce565b600054610100900460ff166118105760405162461bcd60e51b81526004016108c3906132bc565b610cff61181b611b32565b612378565b600054610100900460ff166118475760405162461bcd60e51b81526004016108c3906132bc565b610cff6000611854611b32565b6124ce565b600054610100900460ff166115575760405162461bcd60e51b81526004016108c3906132bc565b600054610100900460ff166118a75760405162461bcd60e51b81526004016108c3906132bc565b60008051602061357b833981519152805460ff19169055565b60006118cd6000836122ab565b600081815260cd6020908152604090912084519293506118f19290918501906129f2565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf8980836040516119229190613208565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b15801561196e57600080fd5b505afa158015611982573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a69190612def565b610ceb5760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c609061139e9084908690600401613307565b6119e582612432565b611a015760405162461bcd60e51b81526004016108c39061327a565b6000611a348260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a81600001511115611add57611a5f611a53826000600a6124d8565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b81415611add5760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b60648201526084016108c3565b611ae682612517565b610c485760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c494400000060448201526064016108c3565b6000611b3c61267c565b905090565b60608282604051602001611b56929190612fff565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611b875790505090508281600081518110611bc057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611be9906134d5565b80601f0160208091040260200160405190810160405280929190818152602001828054611c15906134d5565b8015611c625780601f10611c3757610100808354040283529160200191611c62565b820191906000526020600020905b815481529060010190602001808311611c4557829003601f168201915b505050505081600181518110611c8857634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b6000611ca585612270565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b158015611ceb57600080fd5b505afa158015611cff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d239190612def565b8015611db1575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b158015611d6e57600080fd5b505afa158015611d82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611da69190612b2f565b6001600160a01b0316145b15611e255760c95460405163d106353f60e01b81526001600160a01b039091169063d106353f90611dee9089908590899089908990600401613130565b600060405180830381600087803b158015611e0857600080fd5b505af1158015611e1c573d6000803e3d6000fd5b50505050610b89565b611e2e816126c3565b611e3785612719565b8015611e44575084516002145b15611f305760ca5485516001600160a01b039091169063c36c21259088908890600090611e8157634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b168152611ebb9392916001600160a01b0316906004016130fb565b600060405180830381600087803b158015611ed557600080fd5b505af1158015611ee9573d6000803e3d6000fd5b50505050600084511115611f2b5760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490611dee90879087908690600401613169565b610b89565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b790611f68908990899089908990899060040161309c565b600060405180830381600087803b158015611f8257600080fd5b505af1158015610ff7573d6000803e3d6000fd5b610c5e81611fa2611b32565b612773565b611fb18282611297565b610ceb5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611fea611b32565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b612036611b32565b6001600160a01b03166120516033546001600160a01b031690565b6001600160a01b031614610cff5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108c3565b610c5e60008051602061359b83398151915282611736565b6120c98282611297565b15610ceb5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055612100611b32565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b61214c610d31565b61218f5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b60448201526064016108c3565b60008051602061357b833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6121cf611b32565b6040516001600160a01b03909116815260200160405180910390a1565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260019061222b9060600161152c565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b805160009081905b80156122a5578291506122918285610f516001856133b2565b92508061229d816134be565b915050612278565b50915091565b60008151600014156122ff5760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d505459000000000060448201526064016108c3565b82826040516020016123119190612fe3565b60405160208183030381529060405280519060200120604051602001612341929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610c5e60008051602061359b833981519152826124ce565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6123d2610d31565b156123ef5760405162461bcd60e51b81526004016108c390613250565b60008051602061357b833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586121cf611b32565b600081815260cd60205260408120805482919061244e906134d5565b9050119050919050565b61246061202e565b6001600160a01b0381166124c55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016108c3565b610c5e81612378565b610ceb8282611fa7565b6040805180820190915260008082526020820152604051806040016040528083815260200184866020015161250d919061337b565b9052949350505050565b600081516000141561252b57506000919050565b60208201805160f81c60308110801590612549575060398160ff1611155b15801561256b575060618160ff16101580156125695750607a8160ff1611155b155b1561257a575060009392505050565b835160018111156125e85761259c836125946001846133b2565b015160f81c90565b915060308260ff16101580156125b6575060398260ff1611155b1580156125d8575060618260ff16101580156125d65750607a8260ff1611155b155b156125e857506000949350505050565b60015b6125f66001836133b2565b811015612670578381015160f81c9250602d831480159061262c575060308360ff161015801561262a575060398360ff1611155b155b801561264d575060618360ff161015801561264b5750607a8360ff1611155b155b1561265e5750600095945050505050565b8061266881613510565b9150506125eb565b50600195945050505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b03163314156126be575060331936013560601c90565b503390565b6126cc816114f1565b15610d285760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b454400000060448201526064016108c3565b60008061273060008460018651610f5191906133b2565b60ca549091506001600160a01b03161580159061276c5750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b61277d8282611297565b610ceb57612795816001600160a01b031660146127d7565b6127a08360206127d7565b6040516020016127b1929190613027565b60408051601f198184030181529082905262461bcd60e51b82526108c391600401613208565b606060006127e6836002613393565b6127f190600261337b565b6001600160401b0381111561281657634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612840576020820181803683370190505b509050600360fc1b8160008151811061286957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106128a657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006128ca846002613393565b6128d590600161337b565b90505b6001811115612969576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061291757634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061293b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612962816134be565b90506128d8565b50831561276c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016108c3565b5080546129c4906134d5565b6000825580601f106129d4575050565b601f016020900490600052602060002090810190610c5e9190612a76565b8280546129fe906134d5565b90600052602060002090601f016020900481019282612a205760008555612a66565b82601f10612a3957805160ff1916838001178555612a66565b82800160010185558215612a66579182015b82811115612a66578251825591602001919060010190612a4b565b50612a72929150612a76565b5090565b5b80821115612a725760008155600101612a77565b60008083601f840112612a9c578182fd5b5081356001600160401b03811115612ab2578182fd5b6020830191508360208260051b8501011115612acd57600080fd5b9250929050565b60008083601f840112612ae5578182fd5b5081356001600160401b03811115612afb578182fd5b602083019150836020828501011115612acd57600080fd5b600060208284031215612b24578081fd5b813561276c81613557565b600060208284031215612b40578081fd5b815161276c81613557565b60008060008060008060008060a0898b031215612b66578384fd5b8835612b7181613557565b975060208901356001600160401b0380821115612b8c578586fd5b612b988c838d01612a8b565b909950975060408b0135915080821115612bb0578586fd5b612bbc8c838d01612a8b565b909750955060608b0135915080821115612bd4578485fd5b50612be18b828c01612a8b565b9094509250506080890135612bf58161356c565b809150509295985092959890939650565b60008060008060608587031215612c1b578384fd5b8435612c2681613557565b93506020850135925060408501356001600160401b03811115612c47578283fd5b612c5387828801612ad4565b95989497509550505050565b60008060008060008060008060a0898b031215612c7a578182fd5b8835612c8581613557565b97506020890135965060408901356001600160401b0380821115612ca7578384fd5b612cb38c838d01612ad4565b909850965060608b0135915080821115612ccb578384fd5b612cd78c838d01612a8b565b909650945060808b0135915080821115612cef578384fd5b50612cfc8b828c01612a8b565b999c989b5096995094979396929594505050565b60008060208385031215612d22578182fd5b82356001600160401b03811115612d37578283fd5b612d4385828601612a8b565b90969095509350505050565b60006020808385031215612d61578182fd5b82356001600160401b03811115612d76578283fd5b8301601f81018513612d86578283fd5b8035612d99612d9482613358565b613328565b80828252848201915084840188868560051b8701011115612db8578687fd5b8694505b83851015612de3578035612dcf81613557565b835260019490940193918501918501612dbc565b50979650505050505050565b600060208284031215612e00578081fd5b815161276c8161356c565b600060208284031215612e1c578081fd5b5035919050565b60008060408385031215612e35578182fd5b823591506020830135612e4781613557565b809150509250929050565b600060208284031215612e63578081fd5b81356001600160e01b03198116811461276c578182fd5b600080600080600060a08688031215612e91578283fd5b8535612e9c81613557565b94506020860135612eac81613557565b93506040860135612ebc81613557565b92506060860135612ecc81613557565b91506080860135612edc81613557565b809150509295509295909350565b60008060208385031215612efc578182fd5b82356001600160401b03811115612f11578283fd5b612d4385828601612ad4565b600080600060408486031215612f31578081fd5b8335925060208401356001600160401b03811115612f4d578182fd5b612f5986828701612ad4565b9497909650939450505050565b6000815180845260208085019450848260051b8601828601855b85811015612faa578383038952612f98838351612fb7565b98850198925090840190600101612f80565b5090979650505050505050565b60008151808452612fcf81602086016020860161348e565b601f01601f19169290920160200192915050565b60008251612ff581846020870161348e565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161305f81601785016020880161348e565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161309081602884016020880161348e565b01602801949350505050565b6001600160a01b038616815260a0602082018190526000906130c090830187612f66565b82810360408401526130d28187612f66565b905082810360608401526130e68186612f66565b91505082151560808301529695505050505050565b600060018060a01b0380861683526060602084015261311d6060840186612fb7565b9150808416604084015250949350505050565b60018060a01b038616815284602082015260a06040820152600061315760a0830186612f66565b82810360608401526130e68186612f66565b60608152600061317c6060830186612f66565b828103602084015261318e8186612f66565b915050826040830152949350505050565b6020808252810182905260006001600160fb1b038311156131be578081fd5b8260051b808560408501379190910160400190815292915050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60208152600061276c6020830184612fb7565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8281526040602082015260006133206040830184612fb7565b949350505050565b604051601f8201601f191681016001600160401b038111828210171561335057613350613541565b604052919050565b60006001600160401b0382111561337157613371613541565b5060051b60200190565b6000821982111561338e5761338e61352b565b500190565b60008160001904831182151516156133ad576133ad61352b565b500290565b6000828210156133c4576133c461352b565b500390565b60006133d7612d9484613358565b808482526020808301925084368760051b870111156133f4578485fd5b845b878110156134825781356001600160401b0380821115613414578788fd5b90880190601f3681840112613427578889fd5b82358281111561343957613439613541565b61344a818301601f19168801613328565b9250808352368782860101111561345f57898afd5b8087850188850137820186018990525086525093820193908201906001016133f6565b50919695505050505050565b60005b838110156134a9578181015183820152602001613491565b838111156134b8576000848401525b50505050565b6000816134cd576134cd61352b565b506000190190565b600181811c908216806134e957607f821691505b6020821081141561350a57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156135245761352461352b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610c5e57600080fd5b8015158114610c5e57600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManagerMock__factory extends ethers_1.ContractFactory {
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
exports.MintingManagerMock__factory = MintingManagerMock__factory;
MintingManagerMock__factory.bytecode = _bytecode;
MintingManagerMock__factory.abi = _abi;
