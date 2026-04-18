# IndexOf

**Since 1.4.0**

Gets the index of a specific element type in a tuple. This is an alias for `FindIndex`. Returns `-1` if not found.

## Signature

```typescript
export type IndexOf<T extends unknown[], U> = FindIndex<T, U>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to search through |
| `U` | The type to find the index of |

## Examples

### Basic Usage

```typescript
import type { IndexOf } from 'uni-types'

type Index = IndexOf<['a', 'b', 'c', 'b'], 'b'> // 1
```

### Element Not Found

```typescript
import type { IndexOf } from 'uni-types'

type Index = IndexOf<['a', 'b', 'c'], 'd'> // -1
```

## Related

- [FindIndex](./findindex.md) - Find index of first matching element
- [Find](./find.md) - Find first matching element
- [Includes](./includes.md) - Check if tuple includes element
