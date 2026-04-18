# FlattenDeep

**Since 1.4.0**

Recursively flattens a nested tuple to any depth, producing a flat tuple of all elements.

## Signature

```typescript
export type FlattenDeep<T extends unknown[], Acc extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends unknown[]
		? FlattenDeep<Rest, [...Acc, ...FlattenDeep<First>]>
		: FlattenDeep<Rest, [...Acc, First]>
	: Acc
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The nested tuple to flatten recursively |
| `Acc` | Internal accumulator for building the result (default: `[]`) |

## Examples

### Basic Usage

```typescript
import type { FlattenDeep } from 'uni-types'

type Result = FlattenDeep<[1, [2, [3, [4, [5]]]]]> // [1, 2, 3, 4, 5]
```

### With Multiple Nesting Levels

```typescript
import type { FlattenDeep } from 'uni-types'

type Result = FlattenDeep<[['a', ['b']], [['c', ['d', ['e']]]]]> // ['a', 'b', 'c', 'd', 'e']
```

## Related

- [Flatten](./flatten.md) - Flatten nested tuple (one level)
- [Reverse](./reverse.md) - Reverse a tuple
- [Unique](./unique.md) - Remove duplicates from tuple
