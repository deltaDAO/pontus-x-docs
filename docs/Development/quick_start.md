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
"DTFactory": "0x325c09E2093C56AbDc86c5ccD68c77952e8034Af",
"BFactory": "0x7da756d49DFECb750B5ABa51c04088f257c3f8B4",
"FixedRateExchange": "0x30753E4A8aad7F8597332E813735Def5dD395028",
"Metadata": "0xfA89407778041EF51B9e1aA16Ff85bDf908D17e6",
"Dispenser": "0x2a39940D98A4f9D01Ff0738c8420F360435b6A59",
"Ocean": "0x0995527d3473b3A98C471f1ED8787ACD77fBF009",
"CommunityFeeCollector" : "0x22561fDDaa7a26f853D06262f0277Db43AEE584b"
```

## Ocean Contracts v4

```json
"Ocean": "0xE945Bc2097d96B3FfB8e48bBb71ef7D3968f8597",
"CommunityFeeCollector": "0x2e0C9e15A45c9884F7768BB852E7399B9153525d",
"Router": "0xc9f83F595C763e43Ddea97426E4030D03c9FFD70",
"FixedPrice": "0xFde80d4228B7dEf216E24f84e9BAc8458C5F232c",
"ERC20Templates":  "0x0301E8676e8bCa960dc95b8bd93D6AAf0B2F1020", "0xB3a2c32925b730348bb5177b1F8fBD1Ac90eBe63",
"ERC721Template": "0x9F13dE57BCf7462E6124b99C62a9F2CBc7860600",
"Dispenser": "0x44cf54BA87fcE6882dF59ECe877a71ceaD5045a7",
"ERC721Factory": "0x16575f77c27A3437FE1bE56AB983f1bEb0DD14B2",
```

### Portal Config File (for v3)

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

## Backend Components (for v3)

- Provider: https://provider.genx.delta-dao.com
- Aquarius: https://aquarius.delta-dao.com/
- Subgraph: https://subgraph.genx.minimal-gaia-x.eu
