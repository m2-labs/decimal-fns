import { asDecimal } from "./as-decimal"
import { DecimalLike } from "./decimal-like"

type FormatNumberOptions = {
  numDecimals?: number
}

/**
 * Format a value with thousands separators and a fixed value of decimal places
 *
 * @param value The value to format
 * @param opts Optional set of options to use when formatting the number.
 * @param opts.numDecimals The number of decimals to use when formatting the number.
 * @returns A string representation of the number.
 */
export const formatNumber = (
  value?: DecimalLike | null,
  { numDecimals }: FormatNumberOptions = {}
): string => {
  const decimal = asDecimal(value)
  const str = numDecimals ? decimal.toFixed(numDecimals) : decimal.toString()
  const parts = str.split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const combined = parts.join(".")

  return combined
}
