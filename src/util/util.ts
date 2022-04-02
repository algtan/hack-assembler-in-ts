export const cleanLine = (line: string): string => {
  const lineWithNoWhitespaces = line.replace('\r', '').replaceAll(' ', '')
  const lineArr = lineWithNoWhitespaces.split('//')
  return lineArr[0]
}
