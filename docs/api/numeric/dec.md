# Dec

Decrement a number type by 1.

## Signature

```typescript
type Dec<N extends number> = N extends 0 
  ? 0 
  : NumberToArray<N> extends [0, ...infer Rest] 
    ? Rest['length'] 
    : 0
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `N` | The number to decrement |

## Description

Decrement is clamped at 0 - decrementing 0 returns 0.

## Examples

### Basic Usage

```typescript
import type { Dec } from 'uni-types'

type A = Dec<5>   // 4
type B = Dec<1>   // 0
type C = Dec<0>   // 0 (clamped)
```

## Related

- [`Inc`](./inc) - Increment a number
- [`Subtract`](./subtract) - Subtract two numbers