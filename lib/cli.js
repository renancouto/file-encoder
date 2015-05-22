#!/usr/bin/env node
'use strict'

import meow from 'meow'
import app  from './'

var cli = meow({
  help: [
    'Usage',
      '  file-encoder <input> <output> --flags'
  ].join('\n')
})

app(cli.input[0], cli.input[1])
