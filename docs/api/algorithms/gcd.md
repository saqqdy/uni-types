# GCD

**Since 1.4.0**

Greatest Common Divisor of two numbers.

## Signature

```typescript
type GCD<A extends number, B extends number> = B extends 0 ? A : GCD<B, Mod<A, B>>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | First number |
| `B` | Second number |

## Description

Computes the greatest common divisor using Euclidean algorithm.

## Examples

### Basic Usage

```typescript
import type { GCD } from 'uni-types'

type Result1 = GCD<12, 8>
// 4

type Result2 = GCD<100, 25>
// 25

type Result3 = GCD<17, 13>
// 1
```

## Related

- [`LCM`](./lcm) - Least Common Multiple