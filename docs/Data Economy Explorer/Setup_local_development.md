---
sidebar_position: 2
title: Setup a (Local) Block Explorer
---

## What is a Block Explorer?
A block explorer is a web-based tool that allows users to search and view information about blocks, transactions, and other data on a blockchain. This information can include details about the transaction history of a particular address, the number of confirmations a transaction has received, and the current status of a transaction.

Block explorers are useful for a number of reasons. For users of a blockchain network, block explorers can provide useful information about their own transactions and the state of the network. For example, a user can use a block explorer to view the current status of a transaction they have made, or to check the balance of their wallet.

Additionally, block explorers can be useful for developers working on applications or other projects that make use of a blockchain. By providing access to detailed information about transactions and blocks, block explorers can help developers to understand how the blockchain is being used and to identify potential issues or problems.

In general, block explorers are an important resource for anyone interested in learning more about a particular blockchain or in using a blockchain for their own projects.


## Running Blockscout locally (MacOS)

BlockScout provides a comprehensive, easy-to-use interface for users to view, confirm, and inspect transactions on EVM (Ethereum Virtual Machine) blockchains. 

## Cloning the Repository

We have our own deltaDAO fork of blockscout which includes our specific branding.

```sh
git clone git@github.com:deltaDAO/blockscout.git

External: 
git clone https://github.com/blockscout/blockscout.git
```

## docker-compose - Easiest way to run a local instance (not for development)

The easiest way to run Blockscout on you mac is via the `docker-compose`. Make sure `docker` is already set up. 

```bash
cd docker-compose/ 
```

Adjust environment variables in `blockscout/docker-compose/envs/common-blockscout.env`

After adjusting the .env file run docker-compose. This may take a few minutes. Find further information in the `blockscout/docker-compose/README.md`.

```bash
docker-compose up --build
```

## Setting up a local Blockscout dev environment

Official Blockscout Documentation on manual deployment: https://docs.blockscout.com/for-developers/manual-deployment

### Step 1: Clone the repository

See above.

### Step 2: Setup dependencies

Install dependencies from https://docs.blockscout.com/for-developers/information-and-settings/requirements. 

**Erlang & Elixir**

 It's recommended to use `asdf` for Erlang and Elixir installation.

```bash
brew install asdf
```

The docs state Erlang 24 and Elixir 1.13.4, but use the versions specified in this file instead: `blockscout/.tool-versions`

Example:

```
elixir 1.14.1
erlang 25.1.1
nodejs 16.16.0
```



**Postgres** 

Docker is recommended for setting up a local Postgres instance:		

```bash
docker pull postgres
```

You have to set `POSTGRES_PASSWORD=mysecretpassword` env variable (choosing your own password) for the `postgres` docker container. Don't forget to expose a port on your host machine, `5432` is recommended.

You can use the Docker Desktop UI or run this command:

```bash
docker run --name postgres-db -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

You have to create a database called `blockscout`. You can do it easily using the UI of **pgAdmin 4** (`brew install --cask pgadmin4`) or via the psql console. pgAdmin 4 is highly recommended.



**Node.js** 

Install version 16.x.x.

Alternatively: Install `nvm` to easily manage node versions. (https://github.com/nvm-sh/nvm)

```bash
brew install node@16
```



**Xcode Command Line Tools**

Install the Xcode Command Line Tools.

```
xcode-select --install
```



**Automake, Libtool, GCC Compiler, GMP**

```bash
brew install automake
brew install libtool
brew install gcc
brew install gmp
```



**Make, G++ Compiler**

Nothing to do, included in the `Xcode Command Line Tools`. 



**Rust & Cargo**

```bash
brew install rust
```



### Step 3: Setup environment variables

Create an `.env` file within project root `blockscout/` with the following values (make sure to adjust database password and port for the `DATABASE_URL`):

**DATABASE_URL structure:**

```bash
export DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database_name>"
```



**blockscout/.env**

Make sure to replace `<RPC_NODE_ADDRESS>` with the IP of your node. There is no need to adjust `SECRET_KEY_BASE` for local development, it's needed for production.

```bash
export ETHEREUM_JSONRPC_HTTP_URL="http://<RPC_NODE_ADDRESS>:8545"
export ETHEREUM_JSONRPC_TRACE_URL="http://<RPC_NODE_ADDRESS>:8545"
export DATABASE_URL="postgresql://postgres:mysecretpassword@127.0.0.1:5432/blockscout"
export ETHEREUM_JSONRPC_WS_URL="ws://<RPC_NODE_ADDRESS>:8545/ws"
export SECRET_KEY_BASE="wCLrUwfKFpPF0MBlZw7CPyKWVSCTH4istk1qlDk/jvklO6S/Frw4ucfuS1ezpo+G"
export CHAIN_ID=100
export SUBNETWORK="GEN-X"
export LOGO="/images/blockscout_logo.svg"
export LOGO_FOOTER="/images/blockscout_logo.svg"
export COIN="GX"
export COIN_NAME="GX"
export INDEXER_DISABLE_BLOCK_REWARD_FETCHER="true"
export INDEXER_DISABLE_PENDING_TRANSACTIONS_FETCHER="true"
export INDEXER_DISABLE_INTERNAL_TRANSACTIONS_FETCHER="true"
export MIX_ENV="dev"
export BLOCKSCOUT_PROTOCOL="http"
export PORT=4000
export DISABLE_EXCHANGE_RATES="true"
export POOL_SIZE=40
export POOL_SIZE_API=40
export ACCOUNT_POOL_SIZE=5
export ECTO_USE_SSL="false"
export HEART_BEAT_TIMEOUT=60
export INDEXER_MEMORY_LIMIT="3Gb"
export FETCH_REWARDS_WAY="manual"
export INDEXER_EMPTY_BLOCKS_SANITIZER_BATCH_SIZE=1000
```



Now apply these variables to your zsh:

```bash
source .env

echo $DATABASE_URL # should give the variable as output if successful
```

> You will have to run the `source .env` command before every start



### Step 4: Installing code dependencies

For detailed information check the `README.md` files in the different projects in `/apps`.

```bash
$ cd ../.. # go to project root /blockscout
$ mix local.hex --force
$ mix do deps.get, local.rebar, deps.compile, compile
```



### Step 5: Migrate database

> Make sure that the database `blockscout` is already created and running before you continue

> If you are in dev environment and have run the application previously with a different blockchain, drop the previous database `mix do ecto.drop, ecto.create, ecto.migrate` Be careful since it will delete all data from the DB. Don't execute it on production if you don't want to lose all the data!

```
mix do ecto.create, ecto.migrate
```



### Step 6: Enable HTTPS in development (will result in build error if skipped)

>  The Phoenix server only runs with HTTPS. https://github.com/blockscout/blockscout/issues/1373

```bash
cd apps/block_scout_web
mix phx.gen.cert blockscout blockscout.local
```



> Optional: Add `blockscout` and `blockscout.local` to your `/etc/hosts` for convenience 

```
127.0.0.1       localhost blockscout blockscout.local
255.255.255.255 broadcasthost
::1             localhost blockscout blockscout.local
```



### Step 7: Install Node.js dependencies

```bash
$ cd assets # blockscout/apps/block_scout_web/assets
$ npm install
```



### Step 8: Start the Phoenix Server (Interactive Elixir)

```bash
$ cd ../../.. # go to project root /blockscout
$ iex -S mix phx.server # run IEx (Interactive Elixir)
```

