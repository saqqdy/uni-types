# Fibonacci

**Since 1.4.0**

Fibonacci number at position N.

## Signature

```typescript
type Fibonacci<N extends number> = N extends 0 | 1 ? N : FibonacciImpl<N, 0, 1, 0>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `N` | Position in Fibonacci sequence |

## Description

Computes the Nth Fibonacci number. F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2).

## Examples

### Basic Usage

```typescript
import type { Fibonacci } from 'uni-types'

type F0 = Fibonacci<0>
// 0

type F1 = Fibonacci<1>
// 1

type F10 = Fibonacci<10>
// 55

type F15 = Fibonacci<15>
// 610
```

## Related

- [`Factorial`](./factorial) - Factorial computation