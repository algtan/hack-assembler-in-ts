import { expect } from 'chai'
import { describe, it } from 'mocha'

import { cleanLine, translateAInstruction } from '../../lib/util/util.js'
import { fixture } from './utilFixtures.js'

describe('cleanLine', () => {
  for (const testCase of fixture.cleanLine) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Act
      const actualResult = cleanLine(inputArgs)

      // Assert
      expect(actualResult).to.be.an(outputType)
      expect(actualResult).to.equal(expectedOutput)
    })
  }
})

describe('translateAInstruction', () => {
  for (const testCase of fixture.translateAInstruction) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => translateAInstruction(inputArgs)).to.throw(Error)
      } else {
        // Act
        const actualResult = translateAInstruction(inputArgs)

        // Assert
        expect(actualResult).to.be.an(outputType)
        expect(actualResult).to.equal(expectedOutput)
      }
    })
  }
})
