import Decimal from "decimal.js"

/**
 * Determines if a parameter is a Decimal type, while also indicating to the
 * Typescript parser to treat the item as a Decimal going forward
 *
 * @param item the item to check
 * @returns true if the item is a Decimal, false otherwise
 */
export const isDecimal = (item?: unknown): item is Decimal => {
  return Decimal.isDecimal(item)
}
