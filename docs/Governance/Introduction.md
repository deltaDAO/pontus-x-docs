---
sidebar_position: 2
title: How to Vote
---

## Governance 
The GEN-X validators make up a dynamic validator-set, where validators can be added to or removed from the set by employing a voting mechanism. This means that validators can be voted in/out from the validator set if the majority (51%) of the validator nodes vote to add/drop a certain validator to/from the set. In this way, malicious validators can be recognized and removed from the network, while new trusted validators can be added to the network.
 
## How to add a new validator 
1.	Login into your node server
2.	Copy the public key (address) and BLS Public key of the new validator 
3.	Switch to the folder where the genesis.json is stored (cd /mnt/node) 
4.	Vote for the new validator by executing the following command: `polygon-edge ibft propose –addr ADDRESS –bls BLS_PUBLIC_KEY`
5.	This results in a message that looks like this: `Successfully voted for the addition of address [ADDRESS] to the validator set`

*Example*: `polygon-edge ibft propose --addr 0xC0E3B447c1e7B22769952E89389Ef2cD9B812Cc5--bls 0x9952735ca14734955e114a62e4c26a90bce42b4627a393418372968fa36e73a0ef8db68bba11ea967ff883e429b3bfdf --vote auth`
 
## How to remove an active validator 
1.	Login into your node server
2.	Copy the public key (address) and BLS Public key of the new validator 
3.	Switch to the folder where the genesis.json is stored (cd /mnt/node) 
4.	Vote for the new validator by executing the following command: 
polygon-edge ibft propose –addr ADDRESS –bls BLS_PUBLIC_KEY   
5.	This results in a message that looks like this: `Successfully voted for the removal of address [ADDRESS] from the validator set`

*Example*: `polygon-edge ibft propose --addr 0xC0E3B447c1e7B22769952E89389Ef2cD9B812Cc5--bls 0x9952735ca14734955e114a62e4c26a90bce42b4627a393418372968fa36e73a0ef8db68bba11ea967ff883e429b3bfdf --vote drop`