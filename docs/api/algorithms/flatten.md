# Flatten

**Since 1.4.0**

Flattens a nested tuple by one level, concatenating all inner arrays into a single tuple.

## Signature

```typescript
export type Flatten<T extends unknown[][], Acc extends unknown[] = []> = T extends [
	infer First extends unknown[],
	...infer Rest extends unknown[][],
]
	? Flatten<Rest, [...Acc, ...First]>
	: Acc
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | A tuple of arrays to flatten (one level) |
| `Acc` | Internal accumulator for building the result (default: `[]`) |

## Examples

### Basic Usage

```typescript
import type { Flatten } from 'uni-types'

type Result = Flatten<[[1, 2], [3, 4], [5, 6]]> // [1, 2, 3, 4, 5, 6]
```

### With Mixed Length Arrays

```typescript
import type { Flatten } from 'uni-types'

type Result = Flatten<[['a'], ['b', 'c'], ['d', 'e', 'f']]> // ['a', 'b', 'c', 'd', 'e', 'f']
```

## Related

- [FlattenDeep](./flattendeep.md) - Flatten nested tuple (deep)
- [Reverse](./reverse.md) - Reverse a tuple
- [Unique](./unique.md) - Remove duplicates from tuple
