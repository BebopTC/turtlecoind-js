import { expect }         from 'chai'
import { buildXHR }       from './xhr-utils'

import * as turtlecoind   from './turtlecoind.js'

const host = 'http://localhost',
      port = 8081

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
