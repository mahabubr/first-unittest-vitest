import { it, expect } from "vitest";
import { cleanNumbers } from "./numbers";

it("should return an array of number if an array of string number is provided", () => {
  const stringNumbers = ["2", "3"];

  const result = cleanNumbers(stringNumbers);

  expect(result[0]).toBeTypeOf("number");
});

it("should throw and error if at least an empty string is provided", () => {
  const stringNumbers = ["", "3"];

  const resultFN = () => cleanNumbers(stringNumbers);

  expect(resultFN).toThrow();
});
