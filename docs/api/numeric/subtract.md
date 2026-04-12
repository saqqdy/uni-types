# Subtract

**Since 1.1.0**

Subtract two number types.

## Signature

```typescript
type Subtract<A extends number, B extends number> = NumberToArray<B> extends [
  ...number[],
  ...NumberToArray<A>,
]
  ? 0
  : NumberToArray<A> extends [...NumberToArray<B>, ...infer Rest]
    ? Rest['length']
    : 0
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | First number (minuend) |
| `B` | Second number (subtrahend) |

## Description

Subtract is clamped at 0 - results below 0 return 0.

## Examples

### Basic Usage

```typescript
import type { Subtract } from 'uni-types'

type A = Subtract<10, 3>  // 7
type B = Subtract<5, 2>   // 3
type C = Subtract<5, 10>  // 0 (clamped)
```

## Related

- [`Add`](./add) - Add two numbers
- [`Inc`](./inc) - Increment by 1
- [`Dec`](./dec) - Decrement by 1