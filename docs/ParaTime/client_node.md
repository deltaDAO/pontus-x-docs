---
sidebar_position: 3
title: Client Node Setup
---

# Setup Your Pontus-X ParaTime Client Node

By configuring your own ParaTime client node, you gain insight into the ParaTimes operations and actively participate in the network by submitting transactions. This step-by-step guide aims to provide a clear and concise pathway to set up your node effectively.

## Understanding ParaTime Client Nodes

It is essential to first understand what a ParaTime client node is and its role in the Pontus-X Network. Differing from active ParaTime nodes, client nodes are primarily focused on monitoring ParaTime activities and facilitating the submission of transactions. This functionality is critical in maintaining the network's efficiency and scalability, making client nodes a fundamental component of the Pontus-X Network's infrastructure.

## Preparation: Essential Requirements

Make sure you have the following prerequisites ready:

- **Oasis Node Binary**: Lay the foundation by installing and configuring the Oasis Node binary on your system.
- **Directory Structure**: Create a designated top-level directory (`/node/`) with essential subdirectories (`etc`, `data`, `bin`, `runtimes`) to ensure smooth node operation.
- **Genesis File**: Copy the Genesis file (`genesis.json`) to `/node/etc/` to provide vital network initialization data.

## Installing the ParaTime Bundle

1. **Get the Bundle**: Each ParaTime requires a specific bundle (`.orc` extension) containing essential binaries and metadata. Refer to the Network Parameters page for a comprehensive list of ParaTimes and their corresponding bundles.

2. **Installation**: Place the acquired bundle in the `runtimes` subdirectory of your node's working directory (`/node/runtimes/´) to equip your ParaTime client node with the necessary resources for interaction.

## Configuring the Bubblewrap Sandbox

ParaTime client nodes execute ParaTime binaries within a secure sandbox environment provided by Bubblewrap. Ensure Bubblewrap is installed on your system to safeguard ParaTime execution. Follow the provided instructions tailored to your distribution for seamless installation.

## Customizing Your Node Configuration

Craft the Configuration File: Generate a configuration file (`config.yml`) in the `/node/etc/` directory using the provided template. Be sure to replace placeholder variables with actual values like seed_node_address and runtime_orc_path for accurate node configuration.

Confidential States Configuration: If you choose to utilize SGX for confidential states, update the runtime configuration accordingly in the `config.yml` file. This step ensures compatibility and enables access to confidential data within the ParaTime environment.

## Launching Your Oasis Node

With the setup complete, launch your Oasis Node using the following command:
```oasis-node --config /node/etc/config.yml```

**Verifying Node Connectivity**
To confirm your node's successful connection to the network, execute:
```oasis-node control status -a unix:/node/data/internal.sock````

## System Optimization Tips

For optimal performance, consider:

- Adjusting file descriptor limits for database demands.
- Operating Oasis services under a non-root system user for enhanced security.

## Conclusion: Your Journey Begins
Congratulations on the successful setup of your Pontus-X ParaTime client node. You are now ready to delve into the world of decentralized computing and make significant contributions to the Pontus-X Network. This setup paves the way for exploration, experimentation, and innovation in the decentralized sphere. We wish you a rewarding journey filled with discoveries and achievements. Happy coding!
