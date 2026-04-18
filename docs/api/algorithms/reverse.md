# Reverse

**Since 1.4.0**

Reverses the order of elements in a tuple.

## Signature

```typescript
export type Reverse<T extends unknown[], Acc extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? Reverse<Rest, [First, ...Acc]>
	: Acc
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to reverse |
| `Acc` | Internal accumulator for building the result (default: `[]`) |

## Examples

### Basic Usage

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<[1, 2, 3, 4, 5]> // [5, 4, 3, 2, 1]
```

### With Mixed Types

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<['a', 1, 'b', 2]> // [2, 'b', 1, 'a']
```

## Related

- [Unique](./unique.md) - Remove duplicates from tuple
- [Flatten](./flatten.md) - Flatten nested tuple (one level)
- [FlattenDeep](./flattendeep.md) - Flatten nested tuple (deep)
