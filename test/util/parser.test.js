import { expect } from 'chai'
import { describe, it } from 'mocha'

import {
  instructionType,
  parseComp,
  parseDest,
  parseJump,
  parseSymbol,
  validateAInstruction,
  validateCInstruction,
  validateLInstruction
} from '../../lib/util/parser.js'
import { fixture } from './parserFixtures.js'

describe('validateAInstruction', () => {
  for (const testCase of fixture.validateAInstruction) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => validateAInstruction(inputArgs)).to.throw(Error)
      } else {
        expect(() => validateAInstruction(inputArgs)).to.not.throw()
      }
    })
  }
})

describe('validateLInstruction', () => {
  for (const testCase of fixture.validateLInstruction) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => validateLInstruction(inputArgs)).to.throw(Error)
      } else {
        expect(() => validateLInstruction(inputArgs)).to.not.throw()
      }
    })
  }
})

describe('validateCInstruction', () => {
  for (const testCase of fixture.validateCInstruction) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => validateCInstruction(inputArgs)).to.throw(Error)
      } else {
        expect(() => validateCInstruction(inputArgs)).to.not.throw()
      }
    })
  }
})

describe('instructionType', () => {
  for (const testCase of fixture.instructionType) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => instructionType(inputArgs)).to.throw(Error)
      } else {
        // Act
        const actualResult = instructionType(inputArgs)

        // Assert
        expect(actualResult).to.be.an(outputType)
        expect(actualResult).to.equal(expectedOutput)
      }
    })
  }
})

describe('parseSymbol', () => {
  for (const testCase of fixture.parseSymbol) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => parseSymbol(...inputArgs)).to.throw(Error)
      } else {
        // Act
        const actualResult = parseSymbol(...inputArgs)

        // Assert
        expect(actualResult).to.be.an(outputType)
        expect(actualResult).to.equal(expectedOutput)
      }
    })
  }
})

describe('parseDest', () => {
  for (const testCase of fixture.parseDest) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Act
      const actualResult = parseDest(inputArgs)

      // Assert
      expect(actualResult).to.be.an(outputType)
      expect(actualResult).to.equal(expectedOutput)
    })
  }
})

describe('parseJump', () => {
  for (const testCase of fixture.parseJump) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Act
      const actualResult = parseJump(inputArgs)

      // Assert
      expect(actualResult).to.be.an(outputType)
      expect(actualResult).to.equal(expectedOutput)
    })
  }
})

describe('parseComp', () => {
  for (const testCase of fixture.parseComp) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Act
      const actualResult = parseComp(inputArgs)

      // Assert
      expect(actualResult).to.be.an(outputType)
      expect(actualResult).to.equal(expectedOutput)
    })
  }
})
