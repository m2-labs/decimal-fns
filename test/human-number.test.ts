import { humanNumber } from "../lib/human-number"

test("humanNumber formats a trillion", () => {
  expect(humanNumber("1200000000000")).toBe("1.2T")
})

test("humanNumber formats a trillion to 3 decimal places", () => {
  expect(humanNumber("1234560000000")).toBe("1.235T")
})

test("humanNumber formats a trillion with full words", () => {
  expect(humanNumber("1200000000000", { useWords: true })).toBe("1.2 trillion")
})

test("humanNumber formats a billion", () => {
  expect(humanNumber("1200000000")).toBe("1.2B")
})

test("humanNumber formats a billion to 2 decimal places", () => {
  expect(humanNumber("1234567890")).toBe("1.23B")
})

test("humanNumber formats a billion with full words", () => {
  expect(humanNumber("1200000000", { useWords: true })).toBe("1.2 billion")
})

test("humanNumber formats a million", () => {
  expect(humanNumber("1200000")).toBe("1.2M")
})

test("humanNumber formats a million to 1 decimal place", () => {
  expect(humanNumber("1234560")).toBe("1.2M")
})

test("humanNumber formats a million with full words", () => {
  expect(humanNumber("1200000", { useWords: true })).toBe("1.2 million")
})

test("humanNumber formats a thousand", () => {
  expect(humanNumber("1200")).toBe("1.2K")
})

test("humanNumber formats a thousand with full words", () => {
  expect(humanNumber("1200", { useWords: true })).toBe("1.2 thousand")
})

test("humanNumber formats a thousand to 2 decimal place", () => {
  expect(humanNumber("1234")).toBe("1.23K")
})

test("humanNumber returns a formatted number to two decimal places if less than one thousand", () => {
  expect(humanNumber("123.456")).toBe("123.46")
})
