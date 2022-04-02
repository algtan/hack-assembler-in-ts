import * as fs from 'fs/promises'
import { argv } from 'process'

import { instructionType } from './util/parser.js'
import { cleanLine } from './util/util.js'

const fileName = argv[2]

const fileContentsPromise = fs.readFile(fileName, { encoding: 'utf8' })

const fileContents = await fileContentsPromise

const arrayOfText = fileContents.split('\n')

const output = []

for (let i = 0; i < arrayOfText.length; i++) {
  const lineCleaned = cleanLine(arrayOfText[i])

  if (lineCleaned.length === 0) {
    output.push('comment or empty line')
    continue
  }

  console.log(lineCleaned)

  output.push(instructionType(lineCleaned, i + 1))
}

console.log(output)
