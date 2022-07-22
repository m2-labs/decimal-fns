# decimal-fns

Useful functions to make working with Decimal.js more enjoyable

## Installation

```sh
npm i decimal-fns decimal.js
```

NOTE: This package relies on [Decimal.js](https://mikemcl.github.io/decimal.js/) as a Peer Dependency and does not bundle it as part of this repository.

## Usage

```ts
import { asDecimal } from 'decimal-fns'

const number = 5
const decimal = asDecimal(5)

const biggerDecimal = decimal.plus("2000") // 2005

formatNumber(biggerDecimal) // "2,005"

humanNumber(biggerDecimal.times(100)) // "200.5K"
```

## Exported Methods

### `asDecimal(value, [fallback])`

Converts a Decimal-Like param (string, number, Decimal) and attempts to convert it to the Decimal type. If the conversion fails (e.g. NaN is provided), it will attempt to return the fallback parameter as a Decimal. If no fallback is provided, or if the fallback can not be converted to a Decimal (e.g. NaN is provided), then the method will throw.

### `isDecimal(value)`

 Determines if a parameter is a Decimal type, while also indicating to the Typescript parser to treat the item as a Decimal going forward.

### `formatNumber(value, { numDecimals })`

Format a number with thousands separators and a fixed number of decimal places.

### `humanNumber(value, { useWords })`

Convert a Decimal-Like param (string, number, Decimal) to a human-readable number in a string.

## Brought to you by M2 Labs

<img src="https://m2.xyz/github.png" alt="M2 Labs" width="427" height="94" />

This project is maintained and funded by [M2 Labs](https://m2.xyz), a Web3 product development studio.
