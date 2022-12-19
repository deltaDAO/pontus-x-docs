---
sidebar_position: 3
title: How to Run a Full Node
---

## What is a Full Node?
A full node is a type of node on a blockchain network that stores a complete copy of the blockchain and participates in the process of validating new transactions and blocks. In the case of the GEN-X network, a full node would store a complete copy of the GEN-X blockchain and would be responsible for validating transactions and blocks on the network according to the rules of the GEN-X protocol.

Full nodes are an important part of a blockchain network, as they help to ensure the integrity and security of the network. By storing a complete copy of the blockchain and participating in the validation process, full nodes help to prevent potential attacks on the network, such as double spending or other forms of fraud. Additionally, full nodes play a key role in helping to maintain the decentralized nature of a blockchain network, as they ensure that there is no single point of failure on the network.

In order to run a full node on the GEN-X network, a user would need to download and install the necessary software, and then synchronize the full node with the rest of the network. This process can be time-consuming and resource-intensive, but it is essential for ensuring the security and integrity of the GEN-X blockchain.


## Full Node Setup 

### 1. Install Dependencies

```bash
sudo apt-get install build-essential
wget https://raw.githubusercontent.com/maticnetwork/node-ansible/master/go-install.sh
bash go-install.sh
```

### 2. Install Polygon Edge Client

```bash
git clone https://github.com/0xPolygon/polygon-edge.git
cd polygon-edge/
go build -o polygon-edge main.go
sudo mv polygon-edge /usr/local/bin
```

### 3. Create Keys and Directories

```bash
polygon-edge secrets init --data-dir data-dir

# this will create the private keys and print the public keys and node ID

[SECRETS INIT]
Public key (address) = 0xC12bB5d97A35c6919aC77C709d55F6aa60436900
BLS Public key       = 0x9952735ca14734955e114a62e4c26a90bce42b4627a393418372968fa36e73a0ef8db68bba11ea967ff883e429b3bfdf
Node ID              = 16Uiu2HAmJxxH1tScDX2rLGSU9exnuvZKNM9SoK3v315azp68DLPW
```

### 4. Start your Node

```bash
polygon-edge server --data-dir ./data-dir --chain genesis.json  --libp2p 0.0.0.0:1478 --nat YOUR_PUBLIC_IP
```

> **Hint**: You need access to the `genesis.json` used by the other nodes in the GEN-X network. Currently, only validators and selected members get access to this file.