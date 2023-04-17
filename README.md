# Honeypot token

## In project was used:
![Solidity](https://img.shields.io/badge/-Solidity-090909?style=for-the-badge&logo=solidity)
![Hardhat](https://img.shields.io/badge/-Hardhat-090909?style=for-the-badge&logo=handshake_protocol)
![Chai.js](https://img.shields.io/badge/-Chai.js-090909?style=for-the-badge&logo=textpattern)
![TypeScript](https://img.shields.io/badge/-TypeScript-090909?style=for-the-badge&logo=typescript)
![Ethers.js](https://img.shields.io/badge/-Ethers.js-090909?style=for-the-badge&logo=ethereum)

This is a GitHub repository containing the source code for a smart contract of a Honeypot ERC20 token. The token is designed to demonstrate how an attacker can exploit the "Approve" function of the ERC20 token standard to drain the funds of unsuspecting users.

The Honeypot token allows users to buy and transfer tokens, but prevents them from selling them on a decentralized exchange (DEX). The goal of the project is to show how a malicious actor can manipulate the "Approve" function to trick users into approving a transaction that transfers their funds to the attacker's address.

The repository includes tests that demonstrate how the token owner can sell tokens on a DEX, but other users cannot. These tests are designed to help users understand the vulnerability in the ERC20 standard and the importance of carefully reviewing smart contract code before interacting with it.

It is important to note that this project was created solely for educational purposes and should not be used for malicious activities. The repository is open source and available for anyone to review and learn from.

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
