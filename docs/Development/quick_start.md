---
sidebar_position: 2
title: Quick Start
---

# Overview

## Repositories

- GEN-X network docs: https://gitlab.com/web3-ecosystem/gen-x-network/
- Web3 demonstrator: https://github.com/deltaDAO/mvg-portal
- Block Explorer: https://github.com/deltaDAO/blockscout
- Ocean Contracts: https://github.com/oceanprotocol/contracts/tree/v3

## Setup MetaMask
- Network name: GEN-X
- New RPC URL: https://rpc.genx.minimal-gaia-x.eu
- Chain ID: 100
- Currency Symbol: GX
- Block Explorer URL: https://explorer.genx.minimal-gaia-x.eu/

## Query from Nodes and Validators

### Get latest block

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest", false],"id":1}' https://rpc.genx.minimal-gaia-x.eu
```

### Get syncing status

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' https://rpc.genx.minimal-gaia-x.eu
```

# Ocean Infrastructure (WIP)

## Ocean Contracts v3

```json
"OceanToken": "0x0995527d3473b3A98C471f1ED8787ACD77fBF009",
"DTFactory": "0x325c09E2093C56AbDc86c5ccD68c77952e8034Af",
"BFactory": "0x7da756d49DFECb750B5ABa51c04088f257c3f8B4",
"FixedRateExchange": "0x30753E4A8aad7F8597332E813735Def5dD395028",
"Metadata": "0xfA89407778041EF51B9e1aA16Ff85bDf908D17e6",
"Dispenser": "0x2a39940D98A4f9D01Ff0738c8420F360435b6A59",
"CommunityFeeCollector" : "0x22561fDDaa7a26f853D06262f0277Db43AEE584b"
```

## Ocean Contracts v4

```json
"OceanToken": "0x0995527d3473b3a98c471f1ed8787acd77fbf009",
"CommunityFeeCollector": "0x2e0C9e15A45c9884F7768BB852E7399B9153525d",
"Router": "0x7A3C9F0729AB93e4F9945221168A56eCf450187D",
"FixedPrice": "0xAD8E7d2aFf5F5ae7c2645a52110851914eE6664b",
"ERC20Templates":  ["0xA7D7Cb8dDd46c1B13e9Ccab2fA7D4fC5926f0348", "0x7fEcdEDaE245d3AD5ad93c6Df9603d06887786e8"],
"ERC721Template": ["0x2CBCD3b10783378e34209B760e5A70531198f65E"],
"Dispenser": "0x94cb8FC8719Ed09bE3D9c696d2037EA95ef68d3e[5a7",
"ERC721Factory": "0x6cb85858183B82154921f68b434299EC4281da53",
```

### Portal Config File (v3)

```javascript
chainId: 100,
dispenserAddress: '0x2a39940D98A4f9D01Ff0738c8420F360435b6A59',
explorerUri: 'https://explorer.genx.minimal-gaia-x.eu/',
factoryAddress: '0x325c09E2093C56AbDc86c5ccD68c77952e8034Af',
fixedRateExchangeAddress: '0x69Df9594E6A30a5751D170093059E7adb3Bf5e92',
gasFeeMultiplier: 1,
isDefault: true,
metadataCacheUri: 'https://aquarius.delta-dao.com/',
metadataContractAddress: '0xfA89407778041EF51B9e1aA16Ff85bDf908D17e6',
name: 'GEN-X',
network: 'genxtestnet',
networkId: 100,
nodeUri: 'https://rpc.genx.minimal-gaia-x.eu',
oceanTokenAddress: '0x0995527d3473b3A98C471f1ED8787ACD77fBF009',
oceanTokenSymbol: 'OCEAN',
providerUri: 'https://provider.genx.delta-dao.com',
startBlock: 1099,
subgraphUri: 'https://subgraph.genx.minimal-gaia-x.eu',
transactionBlockTimeout: 100,
transactionConfirmationBlocks: 1,
transactionPollingTimeout: 60000,
BFactory: '0x7da756d49DFECb750B5ABa51c04088f257c3f8B4'
```

Source: https://github.com/deltaDAO/mvg-portal/blob/development/chains.config.js

## Backend Components (v3)

- Provider: https://provider.genx.delta-dao.com
- Aquarius: https://aquarius.delta-dao.com/
- Subgraph: https://subgraph.genx.minimal-gaia-x.eu

## Backend Components (v4)

- Provider: https://provider.v4.genx.delta-dao.com/ 
- Aquarius: https://aquarius.v4.delta-dao.com/
- Subgraph: https://subgraph.v4.genx.minimal-gaia-x.eu/  