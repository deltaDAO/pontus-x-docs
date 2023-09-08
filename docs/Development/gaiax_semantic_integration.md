---
sidebar_position: 6
title: Introduction
---

Building on the [Gaia-X Trust Framework](https://gaia-x.gitlab.io/policy-rules-committee/trust-framework/) and [Ocean Protocol DDO specifications](https://docs.oceanprotocol.com/developers/ddo-specification) additional attributes for participants (federators, service providers, and consumers), service offerings and resources are introduced that are specific to the Pontus-X ecosystem and extend the attributes of Gaia-X credentials without breaking the [Gaia-X Trust Framework](https://gaia-x.gitlab.io/policy-rules-committee/trust-framework/).

These additional attributes support interoperability between different technological ecosystems and domains in Gaia-X.

# Participant Credentials

All Pontus-X participants are required to integrate the following attributes in their Gaia-X participant credentials to enable identification across networks. 

## Extended Attributes

| Attribute    | Cardinality | Trust Anchor | Comment |
| blockchainAccountId | 1..* | Trust Anchor | The Externally Owned Address (EOA), also known as a Wallet Address, accessible by the private key pairs. a 42-character hexadecimal address derived from the last 20 bytes of the public key controlling the account with 0x appended in front.  | 
| blockchainId | 0..* | Trust Anchor | The network ID, also refered to as Chain ID, use to identity and connect to a EVM-compatible network, see [ChainList](https://chainlist.org/) (to be removed)| 
| blockchainName | 0..* | Trust Anchor | The name of the EVM-compatible network. (to be removed) | 
| ecosystemsTerms | 1 | Participant | The terms and conditions the participant agrees to during onboarding to the network | 

# Service Credentials

All services building on the Ocean Protocol stack are recommended to integrate the following attributes in the Gaia-X service credentials.

## Extended Attributes

| Attribute    | Cardinality | Trust Anchor | Comment |
| serviceOffering:settlement | 1..* | Service Provider | Defines means of settlement and pricing. | 
| currencyName | 0..* | Service Provider | Name of the currencies defined in serviceOffering:settlement | 
| currencyTokenAddress | 0..* | Service Provider | Smart contract address if the defined currency is and ERC20 token | 
| currencyAmount | 0..* | Service Provider | Defined settlement amount | 
| subscriptionDuration | 1 | Service Provider | Time of the contreact subscription in seconds | 
| policy | 1 | Service Provider | Policy for service usage and access control | 
| whitelistedUsage | 0..* | Service Provider | Allowed services that can be combined with this service | 
| webAddress | 0..* | Service Provider | Endpoint to access the service | 
| ownerBlockchainAccountId | 1 | Service Provider | The Externally Owned Address (EOA) of the service provider | 
| type | 1 | Service Provider | Type of service offering, i.e. data, software, infrastructure, SaaS | 
| serviceModel | 1 | Service Provider | Type of service model as described in terms and conditions | 
| blockchainNetwork | 1 | -------- | ------- | 
| blockchainName | 1 | -------- | ------- | 
| blockchainId | 1 | -------- | ------- | 
| nftAddress | 1 | -------- | ------- | 
| accessTokenName | 1 | -------- | ------- | 
| accessTokenAddress | 1 | -------- | ------- | 
| accessTokenSymbol | 1 | -------- | ------- | 
| serviceEndpoint | 1 | -------- | ------- | 
