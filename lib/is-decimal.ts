import Decimal from "decimal.js"

/**
 * Determines if a parameter is a Decimal type, while also indicating to the
 * Typescript parser to treat the value as a Decimal going forward
 *
 * @param value the value to check
 * @returns true if the item is a Decimal, false otherwise
 */
export const isDecimal = (value?: unknown): value is Decimal => {
  return Decimal.isDecimal(value)
}
