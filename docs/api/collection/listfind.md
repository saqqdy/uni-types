# ListFind

**Since 1.3.0**

Find the first element in a type-level list (tuple) that matches a predicate. Returns the matching element or `never` if not found.

## Signature

```typescript
export type ListFind<T extends readonly unknown[], P> = T extends [infer First, ...infer Rest]
  ? First extends P
    ? First
    : ListFind<Rest, P>
  : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to search in |
| `P` | The predicate type to match against |

## Examples

### Basic Usage

```typescript
import type { ListFind } from 'uni-types'

type Result = ListFind<['a', 1, 'b', 2], number>
// 1
```

### Not Found

```typescript
type Result = ListFind<['a', 'b', 'c'], number>
// never
```
