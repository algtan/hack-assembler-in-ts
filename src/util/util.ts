export const cleanLine = (line: string): string => {
  const lineWithNoWhitespaces = line.replace('\r', '').replaceAll(' ', '')
  const lineArr = lineWithNoWhitespaces.split('//')
  return lineArr[0]
}

export const translateAInstruction = (symbol: string): string => {
  const addressInt = Number(symbol)
  const address = addressInt < 32768 ? addressInt : 0 // replace 0 with symbol table result

  let binaryString = address.toString(2)

  while (binaryString.length < 16) {
    binaryString = '0' + binaryString
  }

  return binaryString
}
