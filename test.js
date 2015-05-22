/*globals describe, it*/
'use strict'

/**
 * dependencies
 */
import assert from 'assert'
import fs     from 'fs'
import lib    from './lib'

/**
 * tests
 */
describe('file encoder tests', () => {
  it('should get a buffer', (done) => {
    lib('fixture.txt', 'test.txt')

    fs.readFile('test.txt', function (err, data) {
      if (err) {
        done()
      }

      assert.ok(Buffer.isBuffer(data))
      done()
    })
  })
})
