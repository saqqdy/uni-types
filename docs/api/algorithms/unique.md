# Unique

**Since 1.4.0**

Removes duplicate elements from a tuple, preserving only the first occurrence of each unique type.

## Signature

```typescript
export type Unique<T extends unknown[], Seen extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends Seen[number] ? Unique<Rest, Seen> : [First, ...Unique<Rest, [...Seen, First]>]
	: []
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to remove duplicates from |
| `Seen` | Internal accumulator for tracking seen elements (default: `[]`) |

## Examples

### Basic Usage

```typescript
import type { Unique } from 'uni-types'

type Result = Unique<[1, 2, 1, 3, 2, 4]> // [1, 2, 3, 4]
```

### With String Literals

```typescript
import type { Unique } from 'uni-types'

type Result = Unique<['a', 'b', 'a', 'c', 'b']> // ['a', 'b', 'c']
```

## Related

- [Find](./find.md) - Find first matching element
- [Reverse](./reverse.md) - Reverse a tuple
- [Includes](./includes.md) - Check if tuple includes element
