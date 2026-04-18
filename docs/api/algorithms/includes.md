# Includes

**Since 1.4.0**

Checks if a tuple includes an element that matches the given type. Returns `true` if found, `false` otherwise.

## Signature

```typescript
export type Includes<T extends unknown[], U> = T extends [infer First, ...infer Rest]
	? First extends U ? (U extends First ? true : Includes<Rest, U>) : Includes<Rest, U>
	: false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to search through |
| `U` | The type to check for |

## Examples

### Basic Usage

```typescript
import type { Includes } from 'uni-types'

type HasString = Includes<[1, 'a', 2], string> // true
```

### Element Not Found

```typescript
import type { Includes } from 'uni-types'

type HasBoolean = Includes<[1, 'a', 2], boolean> // false
```

## Related

- [Find](./find.md) - Find first matching element
- [FindIndex](./findindex.md) - Find index of first matching element
- [IndexOf](./indexof.md) - Get index of specific element
