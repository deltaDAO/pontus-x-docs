---
sidebar_position: 4
title: Update a Validator Node
---


## Update

Following is the desired update procedure for validator nodes, described as step-by-step instructions.

### Update procedure 

- Download the latest Polygon Edge binary from the official GitHub [releases](https://github.com/0xPolygon/polygon-edge/releases)
- Stop the Polygon Edge service ( example: `sudo systemctl stop polygon-edge.service` )
- Replace the existing `polygon-edge` binary with the downloaded one ( example: `sudo mv polygon-edge /usr/local/bin/` )
- Check if correct `polygon-edge` version is in place by running `polygon-edge version` - it should correspond to the release version 
- Check the release documentation if there are any backwards compatibility steps needed to be done before starting `polygon-edge` service
- Start `polygon-edge` service ( example: `sudo systemctl start polygon-edge.service` )
- Finally, check the `polygon-edge` log output and make sure everything is running without any `[ERROR]` logs

:::warning
When there is a breaking release, this update procedure must be performed on all nodes as 
the currently running binary is not compatible with the new release.  

This means that the chain must be halted for a short period of time ( until `polygon-edge` binaries are replaced and service restarted ) 
so plan accordingly.   

You can use tools like **[Ansible](https://www.ansible.com/)** or some custom script to perform the update efficiently 
and minimize chain downtime.
:::