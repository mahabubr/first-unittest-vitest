export function add(numbers) {
  let sum = 0;

  //   throw new Error("Something went Wrong");

  for (const number of numbers) {
    sum += +number;
  }

  return sum;
}
