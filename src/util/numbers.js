export function cleanNumbers(inputNumbers) {
  const numbers = [];

  for (const numberInput of inputNumbers) {
    validateStringNonEmpty(numberInput);
    const number = transFormToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
}
