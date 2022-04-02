import { expect } from 'chai'
import { describe, it } from 'mocha'

import {
  translateComp,
  translateDest,
  translateJump
} from '../../lib/util/codeModule.js'
import { fixture } from './codeModuleFixtures.js'

describe('translateDest', () => {
  for (const testCase of fixture.translateDest) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => translateDest(inputArgs)).to.throw(Error)
      } else {
        // Act
        const actualResult = translateDest(inputArgs)

        // Assert
        expect(actualResult).to.be.an(outputType)
        expect(actualResult).to.equal(expectedOutput)
      }
    })
  }
})

describe('translateComp', () => {
  for (const testCase of fixture.translateComp) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => translateComp(inputArgs)).to.throw(Error)
      } else {
        // Act
        const actualResult = translateComp(inputArgs)

        // Assert
        expect(actualResult).to.be.an(outputType)
        expect(actualResult).to.equal(expectedOutput)
      }
    })
  }
})

describe('translateJump', () => {
  for (const testCase of fixture.translateJump) {
    it(testCase.testDescription, () => {
      // Arrange
      const { inputArgs, outputType, expectedOutput } = testCase

      // Parameter typing tests
      if (outputType === 'Error') {
        expect(() => translateJump(inputArgs)).to.throw(Error)
      } else {
        // Act
        const actualResult = translateJump(inputArgs)

        // Assert
        expect(actualResult).to.be.an(outputType)
        expect(actualResult).to.equal(expectedOutput)
      }
    })
  }
})
