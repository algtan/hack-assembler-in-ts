export const fixture = {
  validateAInstruction: [
    {
      testDescription: 'Does not throw for an A instruction with valid symbols',
      inputArgs: '@aZ1_.$;',
      outputType: 'void'
    },
    {
      testDescription:
        'Throws an Error for an A instruction symbol that starts with a number but contains other characters',
      inputArgs: '@0aZ1_.$;',
      outputType: 'Error'
    },
    {
      testDescription:
        'Throws an Error for invalid characters in the A instruction',
      inputArgs: '@!!!',
      outputType: 'Error'
    }
  ],
  validateLInstruction: [
    {
      testDescription: 'Does not throw for an L instruction with valid symbols',
      inputArgs: '(aZ1_.$;)',
      outputType: 'void'
    },
    {
      testDescription:
        'Throws an Error for an L instruction symbol that starts with a number but contains other characters',
      inputArgs: '(0aZ1_.$;)',
      outputType: 'Error'
    },
    {
      testDescription:
        'Throws an Error for invalid characters in the L instruction',
      inputArgs: '(!!!)',
      outputType: 'Error'
    }
  ],
  validateCInstruction: [
    {
      testDescription: 'Does not throw for a C instruction with valid symbols',
      inputArgs: '!A+1=M-D|M&0;JMP',
      outputType: 'void'
    },
    {
      testDescription:
        'Throws an Error for invalid characters in the C instruction',
      inputArgs: 'a_9',
      outputType: 'Error'
    }
  ],
  instructionType: [
    {
      testDescription:
        'Returns a string of A_INSTRUCTION for a valid A Instruction',
      inputArgs: '@R1',
      outputType: 'string',
      expectedOutput: 'A_INSTRUCTION'
    },
    {
      testDescription: 'Throws an Error for invalid A Instruction',
      inputArgs: '@A!',
      outputType: 'Error'
    },
    {
      testDescription:
        'Returns a string of L_INSTRUCTION for a valid L Instruction',
      inputArgs: '(LOOP)',
      outputType: 'string',
      expectedOutput: 'L_INSTRUCTION'
    },
    {
      testDescription: 'Throws an Error for invalid L Instruction',
      inputArgs: '@(LOOP!)',
      outputType: 'Error'
    },
    {
      testDescription:
        'Returns a string of C_INSTRUCTION for a valid C Instruction',
      inputArgs: 'A=M+1;JMP',
      outputType: 'string',
      expectedOutput: 'C_INSTRUCTION'
    },
    {
      testDescription: 'Throws an Error for invalid C Instruction',
      inputArgs: 'a?=90',
      outputType: 'Error'
    }
  ],
  parseSymbol: [
    {
      testDescription:
        'Returns a string containing the symbol for a valid A Instruction',
      inputArgs: ['A_INSTRUCTION', '@R1'],
      outputType: 'string',
      expectedOutput: 'R1'
    },
    {
      testDescription:
        'Returns a string containing the symbol for a valid L Instruction',
      inputArgs: ['L_INSTRUCTION', '(LOOP)'],
      outputType: 'string',
      expectedOutput: 'LOOP'
    },
    {
      testDescription:
        'Throws an Error when the instruction type is not an A Instruction or L Instruction',
      inputArgs: ['C_INSTRUCTION', '0;JMP'],
      outputType: 'Error'
    }
  ],
  parseDest: [
    {
      testDescription:
        'Returns a string containing the dest part of a C Instruction',
      inputArgs: 'A=0;JMP',
      outputType: 'string',
      expectedOutput: 'A'
    },
    {
      testDescription:
        'Returns undefined if there is no dest part in the C Instruction',
      inputArgs: '0;JMP',
      outputType: 'undefined',
      expectedOutput: undefined
    }
  ],
  parseJump: [
    {
      testDescription:
        'Returns a string containing the jump part of a C Instruction',
      inputArgs: 'A=0;JMP',
      outputType: 'string',
      expectedOutput: 'JMP'
    },
    {
      testDescription:
        'Returns undefined if there is no jump part in the C Instruction',
      inputArgs: 'A=0',
      outputType: 'undefined',
      expectedOutput: undefined
    }
  ],
  parseComp: [
    {
      testDescription:
        'Returns a string containing the comp part of a C Instruction when a dest and comp are also provided',
      inputArgs: 'A=0;JMP',
      outputType: 'string',
      expectedOutput: '0'
    },
    {
      testDescription:
        'Returns a string containing the comp part of a C Instruction when a dest is also provided',
      inputArgs: 'A=0',
      outputType: 'string',
      expectedOutput: '0'
    },
    {
      testDescription:
        'Returns a string containing the comp part of a C Instruction when a jump is also provided',
      inputArgs: '0;JMP',
      outputType: 'string',
      expectedOutput: '0'
    },
    {
      testDescription:
        'Returns the same input string when only a comp is provided for a C Instruction',
      inputArgs: '0',
      outputType: 'string',
      expectedOutput: '0'
    }
  ]
}
