import Decimal from "decimal.js"
import { isDecimal } from "../lib/is-decimal"

test("isDecimal returns true if the item is a Decimal", () => {
  expect(isDecimal(new Decimal(1))).toBe(true)
})

test("isDecimal returns false if the item is not a Decimal", () => {
  expect(isDecimal(12)).toBe(false)
})

test("isDecimal returns false if the item is undefined", () => {
  expect(isDecimal(undefined)).toBe(false)
})
