export function getBlockCount(id, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id      : id,
    method  : "getblockcount",
    params  : {}
  }))
}

export function getBlockHash(id, height, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0",
    id,
    method  : "on_getblockhash",
    params  : [height]
  }))
}
