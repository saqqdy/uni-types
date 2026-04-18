# ListFilter

**Since 1.3.0**

Filter elements of a type-level list (tuple) based on a predicate. Returns a new tuple containing only elements that match the predicate.

## Signature

```typescript
export type ListFilter<T extends readonly unknown[], P> = T extends [infer First, ...infer Rest]
  ? First extends P
    ? [First, ...ListFilter<Rest, P>]
    : ListFilter<Rest, P>
  : []
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to filter |
| `P` | The predicate type to match against |

## Examples

### Basic Usage

```typescript
import type { ListFilter } from 'uni-types'

type Result = ListFilter<[1, 'a', 2, 'b', 3], number>
// [1, 2, 3]
```

### Filter Strings

```typescript
type Result = ListFilter<[1, 'a', 2, 'b', 3], string>
// ['a', 'b']
```
