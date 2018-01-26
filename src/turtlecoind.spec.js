import { expect }         from 'chai'
import { buildXHR }       from './xhr-utils'

import * as turtlecoind   from './turtlecoind.js'

const host    = 'http://localhost',
      port    = 8081,
      wallet  = "TRTLuy1h55aUuVp7HUcv16biZEArk8RRH93KMWBFCMjijj5iSraHyCMd3Eu1H7b8aZQTeK4rhfm8cSgH2WWVN5Rt3am4Z2BWTY6",
      hash    = "b31aa255d91aee1bf9d7ff0598c76cb6c8062b37761b0845019185ef7dea2e00"

describe('getBlockCount', () => {
  it('works', () => {
    let xhr = buildXHR(host, port, () => {})
    turtlecoind.getBlockCount('test', xhr)
  })
})

describe('getBlockHash', () => {
  it('works', () => {
    let xhr = buildXHR(host, port, () => {})
    turtlecoind.getBlockHash('test', 0, xhr)
  })
})

describe('getBlockTemplate', () => {
  it('works', () => {
    let xhr = buildXHR(host, port, () => {})
    turtlecoind.getBlockTemplate(
      'test',
      wallet,
      100,
      xhr
    )
  })
})

describe('submitBlock', () => {
  it('works', () => {
    let xhr = buildXHR(host, port, () => {})
    turtlecoind.submitBlock('test', 11011, xhr)
  })
})

describe('getLastBlockHeader', () => {
  it('works', () => {
    let xhr = buildXHR(host, port, () => {})
    turtlecoind.getLastBlockHeader('test', xhr)
  })
})

describe('getBlockHeaderByHash', () => {
  it('works', () => {
    let xhr = buildXHR(host, port, () => {})
    turtlecoind.getBlockHeaderByHash('test', hash, xhr)
  })
})

describe('getBlockHeaderByHeight', () => {
  it('works', () => {
    let xhr = buildXHR(host, port, () => {})
    turtlecoind.getBlockHeaderByHeight('test', 1, xhr)
  })
})


describe('getCurrencyId', () => {
  it('works', () => {
    let xhr = buildXHR(host, port, () => {})
    turtlecoind.getCurrencyId('test', xhr)
  })
})
