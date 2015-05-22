'use strict'

/**
 * dependencies
 */
import fs       from 'fs'
import encoding from 'encoding'

/**
 * file encoder
 * @param {string} input  [input file path]
 * @param {string} output [output file path] optional
 */
function readFile(input, output) {
  if (!input) {
    throw new Error('File not specified')
  }

  output = output || input + '.new'

  fs.readFile(input, function (err, data) {
    if (err) {
      return new Error('Wrong file path')
    }

    fs.writeFile(output, encoding.convert(data, 'UTF-8'))
  })
}

/**
 * public
 */
module.exports = (input, output) => readFile(input, output)
