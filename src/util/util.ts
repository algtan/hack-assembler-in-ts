export const cleanLine = (line: string): string => {
  const lineWithNoWhitespaces = line.replace('\r', '').replaceAll(' ', '')
  const lineArr = lineWithNoWhitespaces.split('//')
  return lineArr[0]
}

export const translateAInstruction = (address: number): string => {
  if (address > 32767) {
    throw new Error('Invalid address')
  }

  let binaryString = address.toString(2)

  while (binaryString.length < 16) {
    binaryString = '0' + binaryString
  }

  return binaryString
}
