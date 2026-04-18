# Factorial

**Since 1.4.0**

Factorial of a number.

## Signature

```typescript
type Factorial<N extends number> = N extends 0 ? 1 : Multiply<N, Factorial<Decrement<N>>>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `N` | Number to compute factorial for |

## Description

Computes N! = N * (N-1) * ... * 1.

## Examples

### Basic Usage

```typescript
import type { Factorial } from 'uni-types'

type F0 = Factorial<0>
// 1

type F1 = Factorial<1>
// 1

type F5 = Factorial<5>
// 120

type F6 = Factorial<6>
// 720
```

## Related

- [`Fibonacci`](./fibonacci) - Fibonacci sequence