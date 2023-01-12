---
sidebar_position: 3
title: How to Run a Full Node
---

## What is a Full Node?
A full node is a type of node on a blockchain network that stores a complete copy of the blockchain and participates in the process of validating new transactions and blocks. In the case of the GEN-X network, a full node would store a complete copy of the GEN-X blockchain and would be responsible for validating transactions (though not responsible for consensus) and blocks on the network.

Full nodes are an important part of a blockchain network, as they help to support the integrity and security of the network. By storing a complete copy of the blockchain and participating in the validation process, full nodes help to prevent potential attacks on the network. Additionally, full nodes play a key role in helping to maintain the decentralized nature of a blockchain network by providing independent and self-sovereign access to the network.

## Full Node Setup 

### 1. Download Polygon Edge Client

```bash
wget https://github.com/0xPolygon/polygon-edge/releases/download/v0.6.2/polygon-edge_0.6.2_linux_amd64.tar.gz
tar -xvf polygon-edge_0.6.2_linux_amd64.tar.gz
sudo mv polygon-edge /usr/local/bin
```

> **Hint**: GEN-X validators are currently using [v0.6.2](https://github.com/0xPolygon/polygon-edge/releases/tag/v0.6.2).

### 2. Create Keys and Directories

```bash
polygon-edge secrets init --data-dir data-dir

# this will create the private keys and print the public keys and node ID

[SECRETS INIT]
Public key (address) = 0xC12bB5d97A35c6919aC77C709d55F6aa60436900
BLS Public key       = 0x9952735ca14734955e114a62e4c26a90bce42b4627a393418372968fa36e73a0ef8db68bba11ea967ff883e429b3bfdf
Node ID              = 16Uiu2HAmJxxH1tScDX2rLGSU9exnuvZKNM9SoK3v315azp68DLPW
```

### 3. Start your Node

```bash
polygon-edge server --data-dir ./data-dir --chain genesis.json  --libp2p 0.0.0.0:1478 --nat YOUR_PUBLIC_IP
```

> **Hint**: You need access to the `genesis.json` used by the other nodes in the GEN-X network. Currently, only validators and selected members get access to this file.

