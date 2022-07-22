# decimal-fns

Useful functions to make working with Decimal.js more enjoyable.

## Installation

```sh
npm i decimal-fns decimal.js
```

NOTE: This package relies on [Decimal.js](https://mikemcl.github.io/decimal.js/) as a Peer Dependency and does not bundle it as part of this repository.

## Usage

```ts
import { asDecimal, formatNumber, humanNumber, isDecimal} from 'decimal-fns'

const number = 5
const decimal = asDecimal(5)

const biggerDecimal = decimal.plus("2000") // 2005

isDecimal(biggerDecimal) // true

formatNumber(biggerDecimal) // "2,005"

humanNumber(biggerDecimal.times(100)) // "200.5K"
```

## Exported Methods

### `asDecimal(value, [fallback])`

Converts a Decimal-Like param (string, number, Decimal) and attempts to convert it to the Decimal type. If the conversion fails (e.g. NaN is provided), it will attempt to return the fallback parameter as a Decimal. If no fallback is provided, or if the fallback can not be converted to a Decimal (e.g. NaN is provided), then the method will throw.

```ts
import { asDecimal } from 'decimal-fns'

const value = "5"
const decimal = asDecimal(value, 0) // returns a Decimal of 5
const fallback = asDecimal(undefined, 0) // returns a Decimal of 0
```

### `isDecimal(value)`

Determines if a parameter is a Decimal type, while also indicating to the Typescript parser to treat the item as a Decimal going forward.

```ts
import { isDecimal } from 'decimal-fns'

isDecimal(5) // false
isDecimal(new Decimal(5)) // true
```

### `formatNumber(value, { numDecimals })`

Format a number with thousands separators and a fixed number of decimal places.

```ts
import { formatNumber } from 'decimal-fns'

formatNumber(5) // "5"
formatNumber(5000.555555, { numDecimals: 1 }) // "5,000.6"
formatNumber(1234567890) // "1,234,567,890"
```

### `humanNumber(value, { useWords })`

Convert a Decimal-Like param (string, number, Decimal) to a human-readable number in a string.

```ts
import { humanNumber } from 'decimal-fns'

humanNumber(5) // "5"
humanNumber(new Decimal(5000)) // "5K"
humanNumber(1234, { useWords: true }) // "1.23 thousand"
humanNumber("1234560") // "1.2M"
humanNumber(1234567890) // "1.23B"
humanNumber(1_234_560_000_000) // "1.235T"
```

## Brought to you by M2 Labs

<img src="https://m2.xyz/github.png" alt="M2 Labs" width="427" height="94" />

This project is maintained and funded by [M2 Labs](https://m2.xyz), a Web3 product development studio.
