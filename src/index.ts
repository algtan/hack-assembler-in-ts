import * as fs from 'fs/promises'
import { argv } from 'process'

import {
  translateComp,
  translateDest,
  translateJump
} from './util/codeModule.js'
import {
  InstructionType,
  instructionType,
  parseComp,
  parseDest,
  parseJump,
  parseSymbol
} from './util/parser.js'
import { cleanLine, translateAInstruction } from './util/util.js'

const main = async (): Promise<void> => {
  const inputFile = argv[2]
  const path = inputFile.substring(0, inputFile.lastIndexOf('/') + 1)
  const fileName = inputFile.substring(
    inputFile.lastIndexOf('/') + 1,
    inputFile.lastIndexOf('.')
  )
  const fileExt = inputFile.substring(
    inputFile.lastIndexOf('.'),
    inputFile.length
  )

  const fileContentsPromise = fs.readFile(path + fileName + fileExt, {
    encoding: 'utf8'
  })
  const fileContents = await fileContentsPromise
  const arrayOfText = fileContents.split('\n')

  const translatedArr = []

  for (let i = 0; i < arrayOfText.length; i++) {
    try {
      let translation
      const lineCleaned = cleanLine(arrayOfText[i])

      if (lineCleaned.length === 0) {
        continue
      }

      const lineInstructionType = instructionType(lineCleaned, i + 1)

      if (
        lineInstructionType === InstructionType.A ||
        lineInstructionType === InstructionType.L
      ) {
        const symbol = parseSymbol(lineInstructionType, lineCleaned)
        translation = translateAInstruction(symbol)
      } else if (lineInstructionType === InstructionType.C) {
        const comp = parseComp(lineCleaned)
        const dest = parseDest(lineCleaned)
        const jump = parseJump(lineCleaned)

        translation =
          '111' +
          translateComp(comp) +
          translateDest(dest) +
          translateJump(jump)
      }

      translatedArr.push(translation)
    } catch (err) {
      const message: string = err.message ?? 'Error translating instruction'
      throw new Error(`${message} - line ${i + 1} - ${arrayOfText[i]}`)
    }
  }

  const output = translatedArr.join('\n')

  const writeFilePromise = fs.writeFile(path + fileName + '.hack', output, {
    encoding: 'utf8'
  })

  await writeFilePromise

  console.log('Translated to .hack successfully')
}

main().catch(err => console.log(err))
