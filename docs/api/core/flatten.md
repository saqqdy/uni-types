# Flatten

Flatten nested tuples.

## Signature

```typescript
type Flatten<T extends readonly unknown[], Acc extends readonly unknown[] = []> = 
  T extends readonly [infer H, ...infer R]
    ? H extends readonly unknown[]
      ? Flatten<[...H, ...R], Acc>
      : Flatten<R, [...Acc, H]>
    : Acc
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The nested tuple type |

## Examples

### Basic Usage

```typescript
import type { Flatten } from 'uni-types'

type Flat = Flatten<[1, [2, [3]]]> // [1, 2, 3]
type Nested = Flatten<[[1, 2], [3, 4]]> // [1, 2, 3, 4]
type Deep = Flatten<[1, [2, [3, [4, [5]]]]]> // [1, 2, 3, 4, 5]
```

### Already Flat

```typescript
type FlatAlready = Flatten<[1, 2, 3]> // [1, 2, 3]
```

### Empty Tuple

```typescript
type Empty = Flatten<[]> // []
```

## Related

- [`Reverse`](./reverse) - Reverse a tuple
- [`Tail`](./tail) - Get all elements except first