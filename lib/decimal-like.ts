import type Decimal from "decimal.js"

/**
 * A type representing a number that can be used as a Decimal, mainly with
 * the `asDecimal` method.
 */
export type DecimalLike = Decimal | string | number
