export function getBlockCount(id, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "getblockcount",
    params  : {}
  }))
}

export function getBlockHash(id, height, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "on_getblockhash",
    params  : [ height ]
  }))
}

export function getBlockTemplate(id, wallet_address, reserve_size, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "getblocktemplate",
    params  : {
      reserve_size,
      wallet_address
    }
  }))
}

export function submitBlock(id, block, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "getblocktemplate",
    params  : [ block ]
  }))
}

export function getLastBlockHeader(id, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "getlastblockheader"
  }))
}

export function getBlockHeaderByHash(id, hash, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "getblockheaderbyhash",
    params  : {
      hash
    }
  }))
}

export function getBlockHeaderByHeight(id, height, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "getblockheaderbyheight",
    params  : {
      height
    }
  }))
}

export function getCurrencyId(id, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "getcurrencyid"
  }))
}
