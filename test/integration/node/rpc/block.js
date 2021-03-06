/* global describe it */

const expect = require('chai').expect
const TestHelper = require('../../../helpers/test-helper')
const profiles = require('../../../helpers/profiles')

// Bootstrapping

const neo = TestHelper.getNeo()
const describeBadge = `[light mode on testnet]`
TestHelper.setHttpInterceptors(false)

// Test Cases

describe(`${describeBadge} getBlock()`, () => {
  it("should have 'object' as its response data type.", (done) => {
    neo.mesh.rpc('getBlock', profiles.Blocks.Block_100000.Number)
      .then((res) => {
        expect(res).to.be.a('object')
        done()
      })
      .catch((err) => {
        done(err)
      })
  })

  it("should contains 'confirmations' property with a whole number.", (done) => {
    neo.mesh.rpc('getBlock', profiles.Blocks.Block_100000.Number)
      .then((res) => {
        expect(res.confirmations).to.be.a('number')
        expect(res.confirmations % 1).to.be.equal(0)
        expect(res.confirmations).to.be.at.least(1)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe(`${describeBadge} getBlockByHash()`, () => {
  it("should have 'object' as its response data type.", (done) => {
    neo.mesh.rpc('getBlockByHash', profiles.Blocks.Block_100000.Hash)
      .then((res) => {
        expect(res).to.be.a('object')
        done()
      })
      .catch((err) => {
        done(err)
      })
  })

  it("should contains 'confirmations' property with a whole number.", (done) => {
    neo.mesh.rpc('getBlockByHash', profiles.Blocks.Block_100000.Hash)
      .then((res) => {
        expect(res.confirmations).to.be.a('number')
        expect(res.confirmations % 1).to.be.equal(0)
        expect(res.confirmations).to.be.at.least(1)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe(`${describeBadge} getBlockHash()`, () => {
  it('should have string as its response data type.', (done) => {
    neo.mesh.rpc('getBlockHash', profiles.Blocks.Block_100000.Number)
      .then((res) => {
        const hash = res
        expect(hash).to.be.a('string')
        done()
      })
      .catch((err) => {
        done(err)
      })
  })

  it("should be '0x' follow by 64 hex characters in lower-case.", (done) => {
    neo.mesh.rpc('getBlockHash', profiles.Blocks.Block_100000.Number)
      .then((res) => {
        const hash = res
        expect(hash).to.match(/^(0x)[a-f0-9]{64}$/)
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})

describe(`${describeBadge} getBlockSystemFee()`, () => {
  it('should be a string as its response.', (done) => {
    neo.mesh.rpc('getBlockSystemFee', profiles.Blocks.Block_100000.Number)
      .then((res) => {
        const fee = res
        expect(fee).to.be.a('string')
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
