"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManager__factory = void 0;
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
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "areBlocked",
        outputs: [
            {
                internalType: "bool[]",
                name: "values",
                type: "bool[]",
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
        name: "blocklist",
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
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "label",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "tld",
                        type: "uint256",
                    },
                ],
                internalType: "struct IMintingManager.BulkSLDIssueRequest[]",
                name: "requests",
                type: "tuple[]",
            },
        ],
        name: "bulkIssue",
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
        inputs: [],
        name: "isBlocklistDisabled",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50613a7b806100206000396000f3fe6080604052600436106102725760003560e01c80638da5cb5b1161014f578063b9998a24116100c1578063d53913931161007a578063d5391393146107a3578063d547741f146107c5578063d6ab22ed146107e5578063ec52738914610805578063f2fde38b14610825578063ffa1ad741461084557600080fd5b8063b9998a24146106e3578063c3a3bc0014610703578063cc2c3fc414610723578063ceeb4f5014610743578063d1f5692c14610763578063d4a32ad61461078357600080fd5b806399e0dd7c1161011357806399e0dd7c14610601578063a217fddf14610621578063a3f4df7e14610636578063a849d65c14610683578063aa271e1a146106a3578063b0aa98c7146106c357600080fd5b80638da5cb5b1461056e578063906cecc11461058c57806391d14854146105ac578063983b2d56146105cc57806398650275146105ec57600080fd5b8063463c4bcb116101e85780635fc1964f116101ac5780635fc1964f146104de578063634486da146104fe578063715018a61461051157806371e2a6571461052657806381c81d35146105465780638456cb591461055957600080fd5b8063463c4bcb1461041b578063572b6c051461043b5780635b6fa8db146104895780635c975abb146104a95780635cd7e3b3146104be57600080fd5b8063268b15ed1161023a578063268b15ed1461034e5780632f2ff15d1461036e5780633092afd51461038e57806336568abe146103ae5780633f41b614146103ce5780633f4ba83a1461040657600080fd5b806301ffc9a7146102775780630e36a87d146102ac57806310921f12146102d95780631459457a146102ee578063248a9ca314610310575b600080fd5b34801561028357600080fd5b506102976102923660046131c6565b610876565b60405190151581526020015b60405180910390f35b3480156102b857600080fd5b506102cc6102c7366004613084565b6108ad565b6040516102a391906134e0565b3480156102e557600080fd5b50610297610984565b3480156102fa57600080fd5b5061030e6103093660046131ee565b6109b1565b005b34801561031c57600080fd5b5061034061032b36600461317f565b60009081526097602052604090206001015490565b6040519081526020016102a3565b34801561035a57600080fd5b5061030e610369366004613291565b610d02565b34801561037a57600080fd5b5061030e610389366004613197565b610d94565b34801561039a57600080fd5b5061030e6103a9366004612ddf565b610dbe565b3480156103ba57600080fd5b5061030e6103c9366004613197565b610dd2565b3480156103da57600080fd5b5060c9546103ee906001600160a01b031681565b6040516001600160a01b0390911681526020016102a3565b34801561041257600080fd5b5061030e610e60565b34801561042757600080fd5b5061030e61043636600461317f565b610e72565b34801561044757600080fd5b50610297610456366004612ddf565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b34801561049557600080fd5b5060cc546103ee906001600160a01b031681565b3480156104b557600080fd5b50610297610ea2565b3480156104ca57600080fd5b5061030e6104d9366004612ebf565b610eb8565b3480156104ea57600080fd5b5061030e6104f93660046130c3565b6110be565b61030e61050c366004612ddf565b611114565b34801561051d57600080fd5b5061030e6111d7565b34801561053257600080fd5b5061030e6105413660046130c3565b6111e9565b61030e610554366004612ddf565b61123f565b34801561056557600080fd5b5061030e6112bc565b34801561057a57600080fd5b506033546001600160a01b03166103ee565b34801561059857600080fd5b5061030e6105a7366004612f7a565b6112cc565b3480156105b857600080fd5b506102976105c7366004613197565b611352565b3480156105d857600080fd5b5061030e6105e7366004612ddf565b61137d565b3480156105f857600080fd5b5061030e61138e565b34801561060d57600080fd5b5061030e61061c36600461325e565b6113a8565b34801561062d57600080fd5b50610340600081565b34801561064257600080fd5b50610676604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102a3919061358b565b34801561068f57600080fd5b5060cb546103ee906001600160a01b031681565b3480156106af57600080fd5b506102976106be366004612ddf565b611487565b3480156106cf57600080fd5b506102976106de36600461317f565b6114a1565b3480156106ef57600080fd5b5061030e6106fe366004612ddf565b61150e565b34801561070f57600080fd5b5061030e61071e36600461325e565b611553565b34801561072f57600080fd5b5060ca546103ee906001600160a01b031681565b34801561074f57600080fd5b5061030e61075e366004612fd3565b61159a565b34801561076f57600080fd5b5061030e61077e366004613084565b611630565b34801561078f57600080fd5b5061030e61079e366004612e17565b6116f5565b3480156107af57600080fd5b50610340600080516020613a4f83398151915281565b3480156107d157600080fd5b5061030e6107e0366004613197565b61187b565b3480156107f157600080fd5b5061030e610800366004613084565b6118a0565b34801561081157600080fd5b5061030e61082036600461317f565b611b31565b34801561083157600080fd5b5061030e610840366004612ddf565b611ba3565b34801561085157600080fd5b5061067660405180604001604052806005815260200164302e342e3360d81b81525081565b60006001600160e01b03198216637965db0b60e01b14806108a757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060816001600160401b038111156108d557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156108fe578160200160208202803683370190505b50905060005b8281101561097d5761093b84848381811061092f57634e487b7160e01b600052603260045260246000fd5b905060200201356114a1565b82828151811061095b57634e487b7160e01b600052603260045260246000fd5b9115156020928302919091019091015280610975816139c4565b915050610904565b5092915050565b60007fa85b8425a460dd344a297bd4a82e287385f0fc558cb3e78867b0489f43df24705b5460ff16919050565b600054610100900460ff16158080156109d15750600054600160ff909116105b806109eb5750303b1580156109eb575060005460ff166001145b610a535760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610a76576000805461ff0019166101001790555b60c980546001600160a01b038089166001600160a01b03199283161790925560ca805488841690831617905560cb805487841690831617905560cc805492861692909116919091179055610ac8611bbf565b610ad0611bf6565b610ad982611c2f565b610ae1611c56565b610ae9611cb2565b604080516101c081018252600661018082018181526563727970746f60d01b6101a0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b8183015261014084015283518085019094529083526535b632bb32b960d11b9083015261016081019190915260005b600c811015610cb257610ca08282600c8110610c9657634e487b7160e01b600052603260045260246000fd5b6020020151611cef565b80610caa816139c4565b915050610c6a565b50508015610cfa576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d469250849150839050611e0b565b610d4e610ea2565b15610d6b5760405162461bcd60e51b8152600401610a4a90613618565b6060610cfa610d78611f0c565b610d8b88610d868989611f1b565b611f47565b83846001612074565b600082815260976020526040902060010154610daf81612370565b610db98383612381565b505050565b610dc6612408565b610dcf81612481565b50565b610dda611f0c565b6001600160a01b0316816001600160a01b031614610e525760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610a4a565b610e5c8282612499565b5050565b610e68612408565b610e7061251e565b565b610e7d6106be611f0c565b610e995760405162461bcd60e51b8152600401610a4a906135e3565b610dcf816125c6565b6000600080516020613a2f8339815191526109a8565b610ec2868861387d565b805160021415610ef857610ed76106be611f0c565b610ef35760405162461bcd60e51b8152600401610a4a90613642565b610fbd565b6000610f0382612695565b60c9549092506001600160a01b0316905063430c2081610f21611f0c565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610f6757600080fd5b505afa158015610f7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9f9190613163565b610fbb5760405162461bcd60e51b8152600401610a4a90613713565b505b610fc7878961387d565b600281511015610fe95760405162461bcd60e51b8152600401610a4a9061359e565b61106561102b600083600185516110009190613866565b8151811061101e57634e487b7160e01b600052603260045260246000fd5b60200260200101516126d0565b826002845161103a9190613866565b8151811061105857634e487b7160e01b600052603260045260246000fd5b6020026020010151611e0b565b61106d610ea2565b1561108a5760405162461bcd60e51b8152600401610a4a90613618565b6110b28a6110988a8c61387d565b6110a2898b61387d565b6110ac888a61387d565b87612074565b50505050505050505050565b6110c6612408565b60005b8151811015610e5c576111028282815181106110f557634e487b7160e01b600052603260045260246000fd5b6020026020010151612481565b8061110c816139c4565b9150506110c9565b61111f6106be611f0c565b61113b5760405162461bcd60e51b8152600401610a4a906135e3565b6001600160a01b0381166111915760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610a4a565b61119a81612785565b6111a261138e565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610e5c573d6000803e3d6000fd5b6111df612408565b610e70600061279d565b6111f1612408565b60005b8151811015610e5c5761122d82828151811061122057634e487b7160e01b600052603260045260246000fd5b6020026020010151612785565b80611237816139c4565b9150506111f4565b61124a6106be611f0c565b6112665760405162461bcd60e51b8152600401610a4a906135e3565b6001600160a01b03811661119a5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610a4a565b6112c4612408565b610e706127ef565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113109250849150839050611e0b565b611318610ea2565b156113355760405162461bcd60e51b8152600401610a4a90613618565b606061134987610d8b88610d868989611f1b565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b611385612408565b610dcf81612785565b610e70600080516020613a4f8339815191526103c9611f0c565b6113b0612408565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906113e2908590859060040161355c565b600060405180830381600087803b1580156113fc57600080fd5b505af1158015611410573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610e5c90505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c90611459908590859060040161355c565b600060405180830381600087803b15801561147357600080fd5b505af1158015610cfa573d6000803e3d6000fd5b60006108a7600080516020613a4f83398151915283611352565b60006114ab610984565b1580156108a75750604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd696020820152908101839052611504906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b611516612408565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b61155b612408565b610e5c82828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cef92505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506115de9250849150839050611e0b565b6115e6610ea2565b156116035760405162461bcd60e51b8152600401610a4a90613618565b6110b28a6116158b610d868c8c611f1b565b61161f888a61387d565b611629878961387d565b6001612074565b611638612408565b60005b81811015610db95760c9546001600160a01b0316635096023984848481811061167457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906116899190612ddf565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b1580156116ca57600080fd5b505af11580156116de573d6000803e3d6000fd5b5050505080806116ed906139c4565b91505061163b565b6116ff858761387d565b805160021415611735576117146106be611f0c565b6117305760405162461bcd60e51b8152600401610a4a90613642565b6117fa565b600061174082612695565b60c9549092506001600160a01b0316905063430c208161175e611f0c565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b1580156117a457600080fd5b505afa1580156117b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117dc9190613163565b6117f85760405162461bcd60e51b8152600401610a4a90613713565b505b611804868861387d565b6002815110156118265760405162461bcd60e51b8152600401610a4a9061359e565b61183d61102b600083600185516110009190613866565b611845610ea2565b156118625760405162461bcd60e51b8152600401610a4a90613618565b61187089611615898b61387d565b505050505050505050565b60008281526097602052604090206001015461189681612370565b610db98383612499565b6118ab6106be611f0c565b6118c75760405162461bcd60e51b8152600401610a4a906135e3565b60005b81811015610db9576119858383838181106118f557634e487b7160e01b600052603260045260246000fd5b905060200281019061190791906137c7565b6040013584848481811061192b57634e487b7160e01b600052603260045260246000fd5b905060200281019061193d91906137c7565b61194b906020810190613783565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e0b92505050565b6000611a3a8484848181106119aa57634e487b7160e01b600052603260045260246000fd5b90506020028101906119bc91906137c7565b604001358585858181106119e057634e487b7160e01b600052603260045260246000fd5b90506020028101906119f291906137c7565b611a00906020810190613783565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f4792505050565b90506000611a4782612695565b5060c954604051634f558e7960e01b8152600481018390529192506060916001600160a01b0390911690634f558e799060240160206040518083038186803b158015611a9257600080fd5b505afa158015611aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aca9190613163565b611b1b57611b1b868686818110611af157634e487b7160e01b600052603260045260246000fd5b9050602002810190611b0391906137c7565b611b11906020810190612ddf565b8483846000612074565b5050508080611b29906139c4565b9150506118ca565b611b39612408565b611b4281612857565b611b5e5760405162461bcd60e51b8152600401610a4a90613686565b600081815260cd60205260408120611b7591612c84565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611bab612408565b611bb48161287d565b610dcf6000826128f3565b600054610100900460ff16611be65760405162461bcd60e51b8152600401610a4a906136c8565b610e70611bf1611f0c565b61279d565b600054610100900460ff16611c1d5760405162461bcd60e51b8152600401610a4a906136c8565b610e706000611c2a611f0c565b6128f3565b600054610100900460ff166115165760405162461bcd60e51b8152600401610a4a906136c8565b600054610100900460ff16611c7d5760405162461bcd60e51b8152600401610a4a906136c8565b60007fa85b8425a460dd344a297bd4a82e287385f0fc558cb3e78867b0489f43df24705b805460ff1916911515919091179055565b600054610100900460ff16611cd95760405162461bcd60e51b8152600401610a4a906136c8565b6000600080516020613a2f833981519152611ca1565b6000611cfc6000836126d0565b600081815260cd602090815260409091208451929350611d20929091850190612cbe565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf898083604051611d51919061358b565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611d9d57600080fd5b505afa158015611db1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dd59190613163565b610e5c5760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c60906114599084908690600401613762565b611e1482612857565b611e305760405162461bcd60e51b8152600401610a4a90613686565b6000611e638260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a81600001511115610db957611e8e611e82826000600a6128fd565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b81415610db95760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610a4a565b6000611f1661293c565b905090565b60608282604051602001611f30929190613376565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611f615790505090508281600081518110611f9a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611fc390613989565b80601f0160208091040260200160405190810160405280929190818152602001828054611fef90613989565b801561203c5780601f106120115761010080835404028352916020019161203c565b820191906000526020600020905b81548152906001019060200180831161201f57829003601f168201915b50505050508160018151811061206257634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b600061207f85612695565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b1580156120c557600080fd5b505afa1580156120d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120fd9190613163565b801561218b575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b15801561214857600080fd5b505afa15801561215c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121809190612dfb565b6001600160a01b0316145b156121ff5760c95460405163d106353f60e01b81526001600160a01b039091169063d106353f906121c890899085908990899089906004016134a7565b600060405180830381600087803b1580156121e257600080fd5b505af11580156121f6573d6000803e3d6000fd5b50505050610cfa565b61220881612983565b612211856129e5565b801561221e575084516002145b1561230a5760ca5485516001600160a01b039091169063c36c2125908890889060009061225b57634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b1681526122959392916001600160a01b031690600401613472565b600060405180830381600087803b1580156122af57600080fd5b505af11580156122c3573d6000803e3d6000fd5b505050506000845111156123055760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae74906121c890879087908690600401613526565b610cfa565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b7906123429089908990899089908990600401613413565b600060405180830381600087803b15801561235c57600080fd5b505af11580156110b2573d6000803e3d6000fd5b610dcf8161237c611f0c565b612a3f565b61238b8282611352565b610e5c5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191660011790556123c4611f0c565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b612410611f0c565b6001600160a01b031661242b6033546001600160a01b031690565b6001600160a01b031614610e705760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a4a565b610dcf600080516020613a4f8339815191528261187b565b6124a38282611352565b15610e5c5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191690556124da611f0c565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b612526610ea2565b6125695760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610a4a565b600080516020613a2f833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6125a9611f0c565b6040516001600160a01b03909116815260200160405180910390a1565b6125ce610984565b156126115760405162461bcd60e51b8152602060048201526013602482015272109b1bd8dadb1a5cdd0e88111254d050931151606a1b6044820152606401610a4a565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd696020820152908101829052600190612650906060016114eb565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b805160009081905b80156126ca578291506126b68285611000600185613866565b9250806126c281613972565b91505061269d565b50915091565b60008151600014156127245760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610a4a565b8282604051602001612736919061335a565b60405160208183030381529060405280519060200120604051602001612766929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610dcf600080516020613a4f833981519152826128f3565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6127f7610ea2565b156128145760405162461bcd60e51b8152600401610a4a90613618565b600080516020613a2f833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586125a9611f0c565b600081815260cd60205260408120805482919061287390613989565b9050119050919050565b612885612408565b6001600160a01b0381166128ea5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a4a565b610dcf8161279d565b610e5c8282612381565b60408051808201909152600080825260208201526040518060400160405280838152602001848660200151612932919061382f565b9052949350505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b031633141561297e575060331936013560601c90565b503390565b61298b610984565b610dcf57612998816114a1565b15610e995760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610a4a565b6000806129fc600084600186516110009190613866565b60ca549091506001600160a01b031615801590612a385750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b612a498282611352565b610e5c57612a61816001600160a01b03166014612aa3565b612a6c836020612aa3565b604051602001612a7d92919061339e565b60408051601f198184030181529082905262461bcd60e51b8252610a4a9160040161358b565b60606000612ab2836002613847565b612abd90600261382f565b6001600160401b03811115612ae257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612b0c576020820181803683370190505b509050600360fc1b81600081518110612b3557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612b7257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612b96846002613847565b612ba190600161382f565b90505b6001811115612c35576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612be357634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612c0757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612c2e81613972565b9050612ba4565b508315612a385760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610a4a565b508054612c9090613989565b6000825580601f10612ca0575050565b601f016020900490600052602060002090810190610dcf9190612d42565b828054612cca90613989565b90600052602060002090601f016020900481019282612cec5760008555612d32565b82601f10612d0557805160ff1916838001178555612d32565b82800160010185558215612d32579182015b82811115612d32578251825591602001919060010190612d17565b50612d3e929150612d42565b5090565b5b80821115612d3e5760008155600101612d43565b60008083601f840112612d68578182fd5b5081356001600160401b03811115612d7e578182fd5b6020830191508360208260051b8501011115612d9957600080fd5b9250929050565b60008083601f840112612db1578182fd5b5081356001600160401b03811115612dc7578182fd5b602083019150836020828501011115612d9957600080fd5b600060208284031215612df0578081fd5b8135612a3881613a0b565b600060208284031215612e0c578081fd5b8151612a3881613a0b565b60008060008060008060006080888a031215612e31578283fd5b8735612e3c81613a0b565b965060208801356001600160401b0380821115612e57578485fd5b612e638b838c01612d57565b909850965060408a0135915080821115612e7b578485fd5b612e878b838c01612d57565b909650945060608a0135915080821115612e9f578384fd5b50612eac8a828b01612d57565b989b979a50959850939692959293505050565b60008060008060008060008060a0898b031215612eda578182fd5b8835612ee581613a0b565b975060208901356001600160401b0380821115612f00578384fd5b612f0c8c838d01612d57565b909950975060408b0135915080821115612f24578384fd5b612f308c838d01612d57565b909750955060608b0135915080821115612f48578384fd5b50612f558b828c01612d57565b9094509250506080890135612f6981613a20565b809150509295985092959890939650565b60008060008060608587031215612f8f578182fd5b8435612f9a81613a0b565b93506020850135925060408501356001600160401b03811115612fbb578283fd5b612fc787828801612da0565b95989497509550505050565b60008060008060008060008060a0898b031215612fee578182fd5b8835612ff981613a0b565b97506020890135965060408901356001600160401b038082111561301b578384fd5b6130278c838d01612da0565b909850965060608b013591508082111561303f578384fd5b61304b8c838d01612d57565b909650945060808b0135915080821115613063578384fd5b506130708b828c01612d57565b999c989b5096995094979396929594505050565b60008060208385031215613096578182fd5b82356001600160401b038111156130ab578283fd5b6130b785828601612d57565b90969095509350505050565b600060208083850312156130d5578182fd5b82356001600160401b038111156130ea578283fd5b8301601f810185136130fa578283fd5b803561310d6131088261380c565b6137dc565b80828252848201915084840188868560051b870101111561312c578687fd5b8694505b8385101561315757803561314381613a0b565b835260019490940193918501918501613130565b50979650505050505050565b600060208284031215613174578081fd5b8151612a3881613a20565b600060208284031215613190578081fd5b5035919050565b600080604083850312156131a9578182fd5b8235915060208301356131bb81613a0b565b809150509250929050565b6000602082840312156131d7578081fd5b81356001600160e01b031981168114612a38578182fd5b600080600080600060a08688031215613205578283fd5b853561321081613a0b565b9450602086013561322081613a0b565b9350604086013561323081613a0b565b9250606086013561324081613a0b565b9150608086013561325081613a0b565b809150509295509295909350565b60008060208385031215613270578182fd5b82356001600160401b03811115613285578283fd5b6130b785828601612da0565b6000806000604084860312156132a5578081fd5b8335925060208401356001600160401b038111156132c1578182fd5b6132cd86828701612da0565b9497909650939450505050565b600081518084526020808501808196508360051b81019150828601855b8581101561332157828403895261330f84835161332e565b988501989350908401906001016132f7565b5091979650505050505050565b60008151808452613346816020860160208601613942565b601f01601f19169290920160200192915050565b6000825161336c818460208701613942565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516133d6816017850160208801613942565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351613407816028840160208801613942565b01602801949350505050565b6001600160a01b038616815260a060208201819052600090613437908301876132da565b828103604084015261344981876132da565b9050828103606084015261345d81866132da565b91505082151560808301529695505050505050565b600060018060a01b03808616835260606020840152613494606084018661332e565b9150808416604084015250949350505050565b60018060a01b038616815284602082015260a0604082015260006134ce60a08301866132da565b828103606084015261345d81866132da565b6020808252825182820181905260009190848201906040850190845b8181101561351a5783511515835292840192918401916001016134fc565b50909695505050505050565b60608152600061353960608301866132da565b828103602084015261354b81866132da565b915050826040830152949350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b602081526000612a38602083018461332e565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b82815260406020820152600061377b604083018461332e565b949350505050565b6000808335601e19843603018112613799578283fd5b8301803591506001600160401b038211156137b2578283fd5b602001915036819003821315612d9957600080fd5b60008235605e1983360301811261336c578182fd5b604051601f8201601f191681016001600160401b0381118282101715613804576138046139f5565b604052919050565b60006001600160401b03821115613825576138256139f5565b5060051b60200190565b60008219821115613842576138426139df565b500190565b6000816000190483118215151615613861576138616139df565b500290565b600082821015613878576138786139df565b500390565b600061388b6131088461380c565b808482526020808301925084368760051b870111156138a8578485fd5b845b878110156139365781356001600160401b03808211156138c8578788fd5b90880190601f36818401126138db578889fd5b8235828111156138ed576138ed6139f5565b6138fe818301601f191688016137dc565b9250808352368782860101111561391357898afd5b8087850188850137820186018990525086525093820193908201906001016138aa565b50919695505050505050565b60005b8381101561395d578181015183820152602001613945565b8381111561396c576000848401525b50505050565b600081613981576139816139df565b506000190190565b600181811c9082168061399d57607f821691505b602082108114156139be57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156139d8576139d86139df565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610dcf57600080fd5b8015158114610dcf57600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManager__factory extends ethers_1.ContractFactory {
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
exports.MintingManager__factory = MintingManager__factory;
MintingManager__factory.bytecode = _bytecode;
MintingManager__factory.abi = _abi;
