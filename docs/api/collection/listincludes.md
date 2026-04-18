# ListIncludes

**Since 1.3.0**

Check if a type-level list (tuple) includes a specific element. Returns `true` if the element is found, otherwise `false`.

## Signature

```typescript
export type ListIncludes<T extends readonly unknown[], U> = T extends [infer First, ...infer Rest]
  ? First extends U
    ? true
    : ListIncludes<Rest, U>
  : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to search in |
| `U` | The element type to check for |

## Examples

### Basic Usage

```typescript
import type { ListIncludes } from 'uni-types'

type Result = ListIncludes<[1, 2, 3], 2>
// true
```

### Element Not Found

```typescript
type Result = ListIncludes<[1, 2, 3], 4>
// false
```
