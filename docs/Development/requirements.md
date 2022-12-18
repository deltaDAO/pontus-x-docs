---
sidebar_position: 3
title: System Requirements
---

## Minimum system requirements

| Type | Value                                                                                          | Influenced by                                                                                                                |
|------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| CPU  | 2 cores                                                                                        | <ul><li>Number of JSON-RPC queries</li><li>Size of the blockchain state</li><li>Block gas limit</li><li>Block time</li></ul> |
| RAM  | 8 GB                                                                                           | <ul><li>Number of JSON-RPC queries</li><li>Size of the blockchain state</li><li>Block gas limit</li></ul>                    |
| Disk | <ul><li>10 GB root patition</li><li>30 GB root partition with LVM for disk extension</li></ul> | <ul><li>Size of the blockchain state</li></ul>                                                                               |

## Service configuration
`polygon-edge` binary needs to run as a system service automatically upon established network connectivity and have start / stop / restart
functionalities. We recommend using a service manager like `systemd.` 

Example `systemd` system configuration file:
```
[Unit]
Description=Polygon Edge Server
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=10
User=ubuntu
ExecStart=/usr/local/bin/polygon-edge server --config /home/ubuntu/polygon/config.yaml

[Install]
WantedBy=multi-user.target
```
