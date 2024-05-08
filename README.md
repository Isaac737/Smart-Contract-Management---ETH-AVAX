# DanBank
## Welcome to DanBank! This project is a decentralized application (dApp) that offers users the opportunity to interact with a smart contract on the Ethereum blockchain. DanBank provides an engaging experience for users to mint and burn Ethereum (ETH) tokens, generate mystery items, and win exciting prizes.

# Table of Contents
* Overview
* Features
* Requirements
* Installation
* Usage
* Smart Contract
* Development
* License

# Overview
## DanBank serves as a gateway for users to interact with a blockchain-based system that offers both financial transactions and prize-winning opportunities. This application utilizes the Ethereum blockchain to provide a secure, transparent, and decentralized experience for users.

# Features

* Wallet Connection: Users can connect their MetaMask wallet to interact with the dApp.
* Deposit and Withdraw: Users can deposit and withdraw ETH in 1 ETH increments using simple UI buttons.
* Mystery Item Generation: Users can spend 1 ETH to generate a random mystery item from a pool of available prizes.
* Prize Management: Users can view the prize they have won from generating a mystery item.

# Requirements

* A modern web browser (such as Google Chrome or Mozilla Firefox) with MetaMask installed and connected.
* An Ethereum account with sufficient balance to perform transactions.

# Installation

## Clone the repository:

### git clone <repository-url>
### cd <repository-directory>

## Install dependencies:
### npm install

## Run the development server:
### npm start

## Once the server is running, you can access the application in your browser at http://localhost:3000.

# Usage
* Connect to MetaMask: Click on the "Please connect your MetaMask wallet" button to connect your wallet.
* Interact with the application: Once connected, you can deposit and withdraw ETH, as well as generate mystery items.
* View your balance and prize: After interacting with the contract, you can view your current ETH balance and any prize you have won.

# Smart Contract
## The smart contract used by this application is Assessment.sol. It includes the following key functionalities:

* Deposit: Allows the owner to deposit funds into the contract and increases the contract balance accordingly.
* Withdraw: Enables the owner to withdraw funds from the contract while ensuring sufficient balance is available.
* AssignCharName: Assigns a mystery prize (character name) to the user, deducting 1 ETH from their balance.
* GetCharaName: Returns the prize (character name) the user has won.

# Development
## To customize or extend the application:

* Modify the JavaScript code in the index.js file to adjust the user interface and interaction with the contract.
* Update the smart contract in the Assessment.sol file to change functionality as required.
* Test changes locally and deploy to your preferred Ethereum network as necessary.


# License
## This project is licensed under the MIT License. Feel free to use and modify the code as per the license terms.

