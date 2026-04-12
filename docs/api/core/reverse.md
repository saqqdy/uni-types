# Reverse

**Since 1.0.0**

Reverse a tuple.

## Signature

```typescript
type Reverse<T extends readonly unknown[], Acc extends readonly unknown[] = []> = 
  T extends readonly [infer H, ...infer R]
    ? Reverse<R, [H, ...Acc]>
    : Acc
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type |

## Examples

### Basic Usage

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<[1, 2, 3]> // [3, 2, 1]
type ReversedStr = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
```

### Empty Tuple

```typescript
type Empty = Reverse<[]> // []
```

### Single Element

```typescript
type Single = Reverse<[string]> // [string]
```

## Related

- [`Head`](./head) - Get first element
- [`Last`](./last) - Get last element
- [`Tail`](./tail) - Get all elements except first