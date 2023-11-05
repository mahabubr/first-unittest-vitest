import { it, expect, describe } from "vitest";
import { validateArrayNonEmpty, validateEmail } from "./validation";

describe("validateEmail()", () => {
  it("Should validate correct email address", () => {
    const email = "example@email.com";
    const resultFn = () => validateEmail(email);
    expect(resultFn).not.toThrow();
  });

  it("Should throw an error if an invalid email is passes", () => {
    const email = "example";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it("Should throw an error if an empty string is passes", () => {
    const email = "";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it("Throw a error for null email address", () => {
    expect(() => validateEmail(null)).toThrow("Invalid Email Address");
  });

  it("Throw a error for undefined email address", () => {
    expect(() => validateEmail(undefined)).toThrow("Invalid Email Address");
  });
});

describe("validateArrayNonEmpty()", () => {
  it("Should validate a non empty array", () => {
    const array = [2, 5];

    const resultFn = () => validateArrayNonEmpty(array);

    expect(resultFn).not.toThrow();
  });

  it("Throw and error for an empty array", () => {
    expect(() => validateArrayNonEmpty([])).throw("Array can not be empty");
  });

  it("Throw and error for non array input", () => {
    expect(() => validateArrayNonEmpty("not an array")).throw(
      "Array can not be empty"
    );
  });

  it("Throw and error for a null input", () => {
    expect(() => validateArrayNonEmpty(null)).throw("Array can not be empty");
  });

  it("Throw and error for a undefined input", () => {
    expect(() => validateArrayNonEmpty(undefined)).throw(
      "Array can not be empty"
    );
  });
});
