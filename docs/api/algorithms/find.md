# Find

**Since 1.4.0**

Finds the first element in a tuple that matches a given predicate type.

## Signature

```typescript
export type Find<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P ? First : Find<Rest, P>
	: never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to search through |
| `P` | The predicate type to match against |

## Examples

### Basic Usage

```typescript
import type { Find } from 'uni-types'

type Result = Find<[1, 'a', 2, 'b'], string> // 'a'
```

### With Union Predicate

```typescript
import type { Find } from 'uni-types'

type Numbers = Find<['hello', 42, 'world', 100], number> // 42
```

## Related

- [FindIndex](./findindex.md) - Find the index of first matching element
- [Includes](./includes.md) - Check if tuple includes element
- [Unique](./unique.md) - Remove duplicates from tuple
