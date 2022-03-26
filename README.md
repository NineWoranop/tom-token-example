# Tom Token
This is an example for token on Ethereum based on ECR20 interface

## Slides for Knowledge
1. Blockchain and BitCoin -> https://docs.google.com/presentation/d/1YJm7qluKNDMUy_y7GEQftl6JwpEjFizGW1h3Y1HUY9M/edit?usp=sharing
2. Ethereum and How to develop dApp -> https://docs.google.com/presentation/d/15Ab0C5xTfsyWQXTEJCmU_Z8Bvh7_dwHbXk7DapMFb1I/edit?usp=sharing
3. Token Workshop -> https://docs.google.com/presentation/d/1k7pqwuTjeDoMXpVAbqG4KegLJG1yMD7JF2oMIrOGxhA/edit?usp=sharing

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
2. Open command prompt and go to solidity folder and initialize NPM environment

```
npm install
OR
01_download_dependencies.bat
```

2. Run command for compile smart contracts

```
truffle compile
OR
02_compile.bat
```

3. Deploy smart contracts

```
truffle deploy --reset
OR
03_deploy.bat
```

4. Test connect to Truffle (develop environment) and Press Ctrl+C for exit
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

## Connect MetaMask with Ganache
1. Open MetaMask on Chrome
2. Add network with New RPC URL
http://127.0.0.1:7545
3. Chain ID
1337
4. Symbol
ETH
5. See this screen ![unit test](images/setup_network.png)