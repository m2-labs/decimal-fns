import { asDecimal } from "./as-decimal"
import { DecimalLike } from "./decimal-like"
import { formatNumber } from "./format-number"

type HumanNumberOptions = {
  useWords?: boolean
}

const ONE_TRILLION = asDecimal(1e12)
const ONE_BILLION = asDecimal(1e9)
const ONE_MILLION = asDecimal(1e6)

/**
 * Convert a Decimal-Like param (string, number, Decimal) to a human-readable number in a string.
 *
 * @param value The DecimalLike number to convert to a human-readable number.
 * @param opts The options to use when converting the number to a human-readable number.
 * @param opts.useWords If true, use full words, instead of abbreviations (e.g. 'billion' instead of 'B')
 * @returns
 */
export const humanNumber = (
  value?: DecimalLike | null,
  { useWords }: HumanNumberOptions = {}
): string => {
  const number = asDecimal(value)

  if (number.abs().gte(ONE_TRILLION)) {
    return (
      number
        .div(ONE_TRILLION)
        .toFixed(3)
        .replace(/\.?0+$/, "") + (useWords ? " trillion" : "T")
    )
  } else if (number.abs().gte(ONE_BILLION)) {
    return (
      number
        .div(ONE_BILLION)
        .toFixed(2)
        .replace(/\.?0+$/, "") + (useWords ? " billion" : "B")
    )
  } else if (number.abs().gte(ONE_MILLION)) {
    return (
      number
        .div(ONE_MILLION)
        .toFixed(1)
        .replace(/\.?0+$/, "") + (useWords ? " million" : "M")
    )
  } else if (number.abs().gte(1000)) {
    return (
      number
        .div(1000)
        .toFixed(2)
        .replace(/\.?0+$/, "") + (useWords ? " thousand" : "K")
    )
  } else {
    return formatNumber(number, { numDecimals: 2 })
  }
}
