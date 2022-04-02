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
  ]
}
