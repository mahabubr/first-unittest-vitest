import { it, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum if an array of number is provided", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedNumber = numbers.reduce((acc, curr) => acc + curr);

  // Action
  const result = add(numbers);

  // Assertion
  expect(result).toBe(expectedNumber);
});

it("should provide NaN if at least one invalid number is provided", () => {
  // Arrange
  const numbers = [1, "invalid", 3];

  // Action
  const result = add(numbers);

  // Assertion
  expect(result).toBeNaN();
});

it("should provide correct sum if an array of numeric string  is provided", () => {
  // Arrange
  const numbers = ["1", "2", "3"];
  const expectedNumber = numbers.reduce((acc, curr) => +acc + +curr);

  // Action
  const result = add(numbers);

  // Assertion
  expect(result).toBe(expectedNumber);
});

it("should throw an error if no argument passed", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();

  //   try {
  //     const result = add();
  //   } catch (error) {
  //     expect(error).toBeDefined;
  //   }
});

it("should throw an error if multiple argument provided", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };

  expect(resultFn).toThrow(/is not iterable/i);
});
