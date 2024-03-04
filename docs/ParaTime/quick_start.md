---
sidebar_position: 2
title: Quick Start
---

# Overview

## Repositories

- Pontus-X network docs: https://github.com/deltadao/pontus-x-docs/
- Pontus-X portal: https://github.com/deltaDAO/mvg-portal
- Block Explorer: https://explorer.dev.pontus-x.eu/
- Ocean Contracts: https://github.com/oceanprotocol/contracts/

## Setup MetaMask
- Network name: Pontus-X Devnet
- New RPC URL: https://rpc.dev.pontus-x.eu/
- Chain ID: 32456
- Currency Symbol: EURO
- Block Explorer URL: https://explorer.dev.pontus-x.eu/testnet/pontusx

## ERC20 Token Smart Contracts
The fee token will be automatically added to your wallet when adding the network. The payment tokens need to be manually imported to be visible as your wallet balance. For this use "import token" and use the below smart contract address.

| Token Name | Smart Contract Address                     | Comment           |
|------------|--------------------------------------------|-------------------|
| EUROe      | 0x8A4826071983655805bF4f29828577Cd6b1aC0cB | Payment Token     |
| Ocean      | 0xdF171F74a8d3f4e2A789A566Dce9Fa4945196112 | Payment Token     |
| EURO       |                                            | Network Fee Token |

## Query from Nodes and Validators

### Get latest block

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest", false],"id":1}' https://rpc.dev.pontus-x.eu/
```

### Get syncing status

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' https://rpc.dev.pontus-x.eu/
```

# Pontus-X Infrastructure

## Ocean Protocol Contracts

```json
"Ocean": "0xdF171F74a8d3f4e2A789A566Dce9Fa4945196112",
"OPFCommunityFeeCollector": "0x1f84fB438292269219f9396D57431eA9257C23d4",
"Router": "0x4Ede1776D6B75de6c907172Abc0453a3C8AB372a",
"FixedPrice": "0x8372715D834d286c9aECE1AcD51Da5755B32D505",
"ERC20Template": ["0x02eCd3850B53b1BA8dbCdD146C963cC27f27Dd3C", "0x23Efb300c8778d6842bB0cCBD07D356eCeB97070"],
"ERC721Template": ["0x5B0cc649134791c2357c93868d6e8D325A31aE29"]
"Dispenser": "0x5461b629E01f72E0A468931A36e039Eea394f9eA",
"ERC721Factory": "0xFdC4a5DEaCDfc6D82F66e894539461a269900E13",
"SmartWalletChecker": "0x67FEe407A6250D85C004FCCae005046DBb51eE87"
```

### Portal Config File

```javascript
chainId: 32456,
isDefault: false,
isCustom: true,
network: 'pontusx',
metadataCacheUri: 'https://aquarius.dev.pontus-x.eu',
nodeUri: 'https://rpc.dev.pontus-x.eu',
providerUri: 'https://provider.dev.pontus-x.eu',
subgraphUri: 'https://subgraph.dev.pontus-x.eu',
explorerUri: 'https://explorer.pontus-x.eu',
oceanTokenAddress: '0xdF171F74a8d3f4e2A789A566Dce9Fa4945196112',
oceanTokenSymbol: 'OCEAN',
fixedRateExchangeAddress: '0x8372715D834d286c9aECE1AcD51Da5755B32D505',
dispenserAddress: '0x5461b629E01f72E0A468931A36e039Eea394f9eA',
startBlock: 57428,
transactionBlockTimeout: 50,
transactionConfirmationBlocks: 1,
transactionPollingTimeout: 750,
gasFeeMultiplier: 1.1,
nftFactoryAddress: '0xFdC4a5DEaCDfc6D82F66e894539461a269900E13',
opfCommunityFeeCollector: '0x1f84fB438292269219f9396D57431eA9257C23d4',
providerAddress: '0x68C24FA5b2319C81b34f248d1f928601D2E5246B'
```

Source: https://github.com/deltaDAO/mvg-portal/blob/development/chains.config.js

## Backend Components 

- Provider: [https://provider.dev.pontus-x.eu/](https://provider.dev.pontus-x.eu/) 
- Aquarius: [https://aquarius.dev.pontus-x.eu/](https://aquarius.dev.pontus-x.eu/)
- Subgraph: [https://subgraph.dev.pontus-x.eu/](https://subgraph.dev.pontus-x.eu/)  
