# LCM

**Since 1.4.0**

Least Common Multiple of two numbers.

## Signature

```typescript
type LCM<A extends number, B extends number> = A extends 0 ? 0 : B extends 0 ? 0 : Multiply<Divide<A, GCD<A, B>>, B>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | First number |
| `B` | Second number |

## Description

Computes the least common multiple using GCD: LCM(a, b) = (a / GCD(a, b)) * b.

## Examples

### Basic Usage

```typescript
import type { LCM } from 'uni-types'

type Result1 = LCM<4, 6>
// 12

type Result2 = LCM<3, 5>
// 15

type Result3 = LCM<12, 8>
// 24
```

## Related

- [`GCD`](./gcd) - Greatest Common Divisor