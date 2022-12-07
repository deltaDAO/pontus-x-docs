---
sidebar_position: 1
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

## Ocean Contracts

```json
"DTFactory": "0x325c09E2093C56AbDc86c5ccD68c77952e8034Af",
"BFactory": "0x7da756d49DFECb750B5ABa51c04088f257c3f8B4",
"FixedRateExchange": "0x30753E4A8aad7F8597332E813735Def5dD395028",
"Metadata": "0xfA89407778041EF51B9e1aA16Ff85bDf908D17e6",
"Dispenser": "0x2a39940D98A4f9D01Ff0738c8420F360435b6A59",
"Ocean": "0x0995527d3473b3A98C471f1ED8787ACD77fBF009",
"OPFCommunityFeeCollector" : "0x22561fDDaa7a26f853D06262f0277Db43AEE584b"
```

### Portal Config File

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

## Backend Components

- Provider: https://provider.genx.delta-dao.com
- Aquarius: https://aquarius.delta-dao.com/
- Subgraph: https://subgraph.genx.minimal-gaia-x.eu
