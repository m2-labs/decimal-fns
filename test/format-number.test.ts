import { formatNumber } from "../lib/format-number"

test("formatNumber adds commas", () => {
  expect(formatNumber(1000000)).toBe("1,000,000")
})

test("formatNumber allows arbitrary decimal places", () => {
  expect(formatNumber(1000.12345, { numDecimals: 4 })).toBe("1,000.1235")
})

test("formatNumber will ensure a minimum of that number of decimals", () => {
  expect(formatNumber(1000.1, { numDecimals: 2 })).toBe("1,000.10")
  expect(formatNumber(1000.1, { numDecimals: 3 })).toBe("1,000.100")
  expect(formatNumber(1000, { numDecimals: 2 })).toBe("1,000.00")
  expect(formatNumber(1000.1, { numDecimals: 1 })).toBe("1,000.1")
})
