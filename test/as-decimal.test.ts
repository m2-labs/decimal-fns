import Decimal from "decimal.js"
import { asDecimal } from "../lib/as-decimal"

test("asDecimal returns a Decimal from a Decimal", () => {
  expect(asDecimal(new Decimal(1.0)).eq(new Decimal(1.0))).toBe(true)
})

test("asDecimal returns a Decimal from a string", () => {
  expect(asDecimal(new Decimal("7")).eq(new Decimal(7.0))).toBe(true)
})

test("asDecimal returns a Decimal from a number", () => {
  expect(asDecimal(new Decimal(420)).eq(new Decimal(420))).toBe(true)
})

test("asDecimal returns the fallback on error", () => {
  expect(asDecimal("not a number", 100).eq(new Decimal(100))).toBe(true)
})

test("asDecimal returns the fallback if given no primary value", () => {
  expect(asDecimal(undefined, 100).eq(new Decimal(100))).toBe(true)
})

test("asDecimal throws on error if the fallback is invalid", () => {
  expect(() => {
    asDecimal("not a number", "also not a number")
  }).toThrow("[DecimalError] Invalid argument: also not a number")
})

test("asDecimal throws on error if an invalid number and no fallback is given", () => {
  expect(() => {
    asDecimal("not a number")
  }).toThrow("[DecimalError] Invalid argument: not a number")
})

test("asDecimal throws if given no arguments", () => {
  expect(() => {
    asDecimal()
  }).toThrow("[DecimalError] Invalid argument: undefined")
})
