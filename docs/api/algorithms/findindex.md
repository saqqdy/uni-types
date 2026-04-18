# FindIndex

**Since 1.4.0**

Finds the index of the first element in a tuple that matches a given predicate type. Returns `-1` if no match is found.

## Signature

```typescript
export type FindIndex<T extends unknown[], P, Acc extends 0[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends P ? Acc['length'] : FindIndex<Rest, P, [...Acc, 0]>
	: -1
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to search through |
| `P` | The predicate type to match against |
| `Acc` | Internal accumulator for tracking index (default: `[]`) |

## Examples

### Basic Usage

```typescript
import type { FindIndex } from 'uni-types'

type Index = FindIndex<[1, 'a', 2, 'b'], string> // 1
```

### No Match Found

```typescript
import type { FindIndex } from 'uni-types'

type Index = FindIndex<[1, 2, 3], string> // -1
```

## Related

- [Find](./find.md) - Find first matching element
- [IndexOf](./indexof.md) - Get index of specific element
- [Includes](./includes.md) - Check if tuple includes element
