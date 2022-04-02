export const fixture = {
  translateDest: [
    {
      testDescription: 'Returns a string of 000 when dest is null',
      inputArgs: undefined,
      outputType: 'string',
      expectedOutput: '000'
    },
    {
      testDescription: 'Returns a translation when dest is valid and not null',
      inputArgs: 'M',
      outputType: 'string',
      expectedOutput: '001'
    },
    {
      testDescription: 'Throws an Error when dest is invalid',
      inputArgs: '!#',
      outputType: 'Error'
    }
  ],
  translateComp: [
    {
      testDescription: 'Returns a translation when comp is valid',
      inputArgs: 'M',
      outputType: 'string',
      expectedOutput: '1110000'
    },
    {
      testDescription: 'Throws an Error when comp is invalid',
      inputArgs: '!#',
      outputType: 'Error'
    }
  ],
  translateJump: [
    {
      testDescription: 'Returns a string of 000 when jump is null',
      inputArgs: undefined,
      outputType: 'string',
      expectedOutput: '000'
    },
    {
      testDescription: 'Returns a translation when jump is valid and not null',
      inputArgs: 'JGT',
      outputType: 'string',
      expectedOutput: '001'
    },
    {
      testDescription: 'Throws an Error when jump is invalid',
      inputArgs: '!#',
      outputType: 'Error'
    }
  ]
}
