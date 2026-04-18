# IsPrime

**Since 1.4.0**

Check if a number is prime.

## Signature

```typescript
type IsPrime<N extends number> = N extends 0 | 1 ? false : N extends 2 ? true : ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `N` | Number to check |

## Description

Determines if a number is prime. Uses lookup table for small numbers.

## Examples

### Basic Usage

```typescript
import type { IsPrime } from 'uni-types'

type Check1 = IsPrime<2>
// true

type Check2 = IsPrime<17>
// true

type Check3 = IsPrime<4>
// false

type Check4 = IsPrime<1>
// false
```

## Related

- [`GCD`](./gcd) - Greatest Common Divisor