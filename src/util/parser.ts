export enum InstructionType {
  A = 'A_INSTRUCTION',
  C = 'C_INSTRUCTION',
  L = 'L_INSTRUCTION'
}

const symbolRegExp = /^[a-zA-Z_.$;][a-zA-Z0-9_.$;]*$/

export const instructionType = (line: string): InstructionType => {
  try {
    if (line[0] === '@') {
      validateAInstruction(line)
      return InstructionType.A
    } else if (line[0] === '(' && line[line.length - 1] === ')') {
      validateLInstruction(line)
      return InstructionType.L
    } else {
      validateCInstruction(line)
      return InstructionType.C
    }
  } catch (err) {
    const message: string = err.message ?? 'Invalid Instruction'
    throw new Error(message)
  }
}

export const validateAInstruction = (line: string): void => {
  const symbol = line.slice(1)

  if (isNaN(Number(symbol)) && !symbolRegExp.test(symbol)) {
    throw new Error('Invalid A Instruction')
  }
}

export const validateLInstruction = (line: string): void => {
  const symbol = line.slice(1, -1)

  if (!symbolRegExp.test(symbol)) {
    throw new Error('Invalid L Instruction')
  }
}

export const validateCInstruction = (line: string): void => {
  const cInstructionRegExp = /^[A-Z0-1+\-!&|=;]*$/

  if (!cInstructionRegExp.test(line)) {
    throw new Error('Invalid C Instruction')
  }
}

export const parseSymbol = (
  instructionType: InstructionType,
  line: string
): string => {
  if (instructionType === InstructionType.A) {
    return line.slice(1)
  } else if (instructionType === InstructionType.L) {
    return line.slice(1, -1)
  } else {
    throw new Error('Cannot parse symbol')
  }
}

export const parseDest = (line: string): string | undefined => {
  return line.includes('=') ? line.split('=')[0] : undefined
}

export const parseJump = (line: string): string | undefined => {
  return line.includes(';') ? line.split(';').pop() : undefined
}

export const parseComp = (line: string): string => {
  let comp = line
  const dest = parseDest(line)
  const jump = parseJump(line)

  if (dest != null) {
    comp = comp.replace(dest + '=', '')
  }

  if (jump != null) {
    comp = comp.replace(';' + jump, '')
  }

  return comp
}
