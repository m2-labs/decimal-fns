import Decimal from "decimal.js"
import type { DecimalLike } from "./decimal-like"

/**
 * Converts a Decimal-Like param (string, value, Decimal) and attempts to
 * convert it to the Decimal type. If the conversion fails (e.g. NaN is
 * provided), it will attempt to return the fallback parameter as a Decimal. If
 * no fallback is provided, or if the fallback can not be converted to a Decimal
 * (e.g. NaN is provided), then the method will throw.
 *
 * @param value the Decimal-Like item to convert to a Decimal
 * @param fallback an optional fallback value to return if the initial param can not be converted to decimal
 * @throws if neither the value or fallback can be converted to a Decimal.
 * @returns a Decimal
 */
export const asDecimal = (
  value?: DecimalLike | null,
  fallback?: DecimalLike
): Decimal => {
  if (value === null || value === undefined) {
    if (fallback === null || fallback === undefined) {
      throw new Error(`[DecimalError] Invalid argument: ${value}`)
    }

    return asDecimal(fallback)
  }

  try {
    const decimal = tryDecimalAndString(value)
    return decimal
  } catch (e) {
    if (fallback !== undefined && fallback !== null) {
      return asDecimal(fallback)
    }

    throw e
  }
}

/**
 * Attempt to build a new Decimal object from the given value, or
 * fall back to building a Decimal from the values `toString()`
 * result.
 * @param value the number to convert to a Decimal
 * @returns a Decimal
 */
const tryDecimalAndString = (value: DecimalLike): Decimal => {
  try {
    const decimal = new Decimal(value as Decimal.Value)
    return decimal
  } catch (e) {
    return new Decimal(value.toString())
  }
}
