import { it, expect } from "vitest";
import { strLength } from "./stringLength";

it("return correct length of non-empty string", () => {
  expect(strLength("hello")).toBe(5);
  expect(strLength("world")).toBe(5);
  expect(strLength("hello world")).toBe(11);
});

it("return 0 for empty string", () => {
  expect(strLength("")).toBe(0);
});

it("throw errors for non-string input", () => {
  expect(() => strLength(null)).toThrow();
  expect(() => strLength(undefined)).toThrow();
  expect(strLength(123)).toBeUndefined();
});
