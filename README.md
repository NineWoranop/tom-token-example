# Tom Token
This is an example for token on Ethereum based on ECR20 interface

## Slides for Knowledge
1. Blockchain and BitCoin -> https://docs.google.com/presentation/d/1YJm7qluKNDMUy_y7GEQftl6JwpEjFizGW1h3Y1HUY9M/edit?usp=sharing
2. Ethereum and How to develop dApp -> https://docs.google.com/presentation/d/15Ab0C5xTfsyWQXTEJCmU_Z8Bvh7_dwHbXk7DapMFb1I/edit?usp=sharing

## Pre-Installation
1. Install NodeJS v16.13.2
2. Install Python 3.10.2
3. Install Visual Studio 2017 Build Tools: https://aka.ms/vs/15/release/vs_buildtools.exe
by check "Visual C++ build tools" workload
4. Install Truffle framework
```
npm install -g truffle@5.5.2
```
5. Install Ganache - https://trufflesuite.com/ganache/
```
https://github.com/trufflesuite/ganache-ui/releases/download/v2.5.4/Ganache-2.5.4-win-setup.exe
```
6. Install Chrome Extension for Ethereum Wallet - MetaMask 
   https://metamask.io/
   https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn

## Deploy Smart Contract to Ganache
1. Make sure you that Ganache is running.
2. Open command prompt and go to solidity folder and initialize Truffle environment

```
truffle compile
OR
01_initial.bat
```

3. Deploy smart contracts

```
truffle deploy --reset
OR
02_deploy.bat
```

4. Test connect to Truffle and Press Ctrl+C for exit
```
truffle develop
```

## Run Unit test
1. Make sure you that Ganache is running.
2. Open command prompt and go to solidity folder and download libraries
```
truffle test
OR
04_test.bat
```
3. Found this output on command prompt
![unit test](images/unit_test.png)
4. Found new created contract on Ganache after run unit test
![new contract](images/new_contract.png)
