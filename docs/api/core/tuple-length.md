# TupleLength

**Since 1.0.0**

Get the length of a tuple.

## Signature

```typescript
type TupleLength<T extends readonly unknown[]> = T['length']
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type |

## Examples

### Basic Usage

```typescript
import type { TupleLength } from 'uni-types'

type Len3 = TupleLength<[1, 2, 3]> // 3
type Len0 = TupleLength<[]> // 0
type Len5 = TupleLength<['a', 'b', 'c', 'd', 'e']> // 5
```

### With Arrays

```typescript
type ArrayLen = TupleLength<string[]> // number
```

## Related

- [`IsEmptyTuple`](./is-empty-tuple) - Check if tuple is empty