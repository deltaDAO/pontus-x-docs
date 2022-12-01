## Get latest blocks
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest", false],"id":1}' https://rpc.genx.minimal-gaia-x.eu/