# ListReverse

**Since 1.3.0**

Reverse a type-level list (tuple). Returns a new tuple with elements in reverse order.

## Signature

```typescript
export type ListReverse<T extends readonly unknown[]> = T extends [infer First, ...infer Rest]
  ? [...ListReverse<Rest>, First]
  : []
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to reverse |

## Examples

### Basic Usage

```typescript
import type { ListReverse } from 'uni-types'

type Result = ListReverse<[1, 2, 3]>
// [3, 2, 1]
```

### String Tuple

```typescript
type Result = ListReverse<['a', 'b', 'c']>
// ['c', 'b', 'a']
```
