export const fixture = {
  cleanLine: [
    {
      testDescription: 'Returns an empty string when the line is a comment',
      inputArgs: '// Comment 1',
      outputType: 'string',
      expectedOutput: ''
    },
    {
      testDescription:
        'Returns an empty string when the line is full of whitespaces',
      inputArgs: '     ',
      outputType: 'string',
      expectedOutput: ''
    },
    {
      testDescription:
        'Returns an empty string when the line is a return character',
      inputArgs: '\r',
      outputType: 'string',
      expectedOutput: ''
    },
    {
      testDescription: 'Returns an instruction without whitespaces and comment',
      inputArgs: '     @R0 // R0 is equal to zero \r',
      outputType: 'string',
      expectedOutput: '@R0'
    }
  ],
  translateAInstruction: [
    {
      testDescription:
        'Returns a string with the binary translation of a symbol that is a number',
      inputArgs: '3',
      outputType: 'string',
      expectedOutput: '0000000000000011'
    },
    {
      testDescription:
        'Returns a string with the binary translation of the symbol based on the symbol table',
      inputArgs: 'R0',
      outputType: 'string',
      expectedOutput: '0000000000000000'
    }
  ]
}
