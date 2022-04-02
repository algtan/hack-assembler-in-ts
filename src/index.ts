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
import { predefinedSymbols } from './util/symbolTable.js'
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
  const textArr = fileContents.split('\n')

  const cleanedTextArr = []
  const translatedArr = []
  let nextAvailableRAM = 16
  let romLocation = 0
  const symbolTable = { ...predefinedSymbols }

  for (let i = 0; i < textArr.length; i++) {
    const lineCleaned = cleanLine(textArr[i])
    cleanedTextArr.push(lineCleaned)

    if (lineCleaned.length === 0) continue

    const lineInstructionType = instructionType(lineCleaned)

    if (
      lineInstructionType === InstructionType.A ||
      lineInstructionType === InstructionType.C
    ) {
      romLocation += 1
    } else {
      const symbol = parseSymbol(lineInstructionType, lineCleaned)
      const address = Number(symbol)

      if (isNaN(address)) {
        symbolTable[symbol] = romLocation
      }
    }
  }

  for (let i = 0; i < cleanedTextArr.length; i++) {
    try {
      let translation
      const lineCleaned = cleanedTextArr[i]

      if (lineCleaned.length === 0) continue

      const lineInstructionType = instructionType(lineCleaned)

      if (lineInstructionType === InstructionType.A) {
        const symbol = parseSymbol(lineInstructionType, lineCleaned)
        let address = Number(symbol)

        if (isNaN(address) && symbolTable[symbol] == null) {
          address = symbolTable[symbol] = nextAvailableRAM
          nextAvailableRAM += 1
        } else if (isNaN(address)) {
          address = symbolTable[symbol]
        }

        translation = translateAInstruction(address)
      } else if (lineInstructionType === InstructionType.C) {
        const comp = parseComp(lineCleaned)
        const dest = parseDest(lineCleaned)
        const jump = parseJump(lineCleaned)

        translation =
          '111' +
          translateComp(comp) +
          translateDest(dest) +
          translateJump(jump)
      } else if (lineInstructionType === InstructionType.L) {
        continue
      }

      translatedArr.push(translation)
    } catch (err) {
      const message: string = err.message ?? 'Error translating instruction'
      throw new Error(`${message} - line ${i + 1} - ${textArr[i]}`)
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
