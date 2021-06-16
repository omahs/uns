// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface ICryptoURIPrefixController {
    function setTokenURIPrefix(string calldata prefix) external;
}
