# ListConcat

**Since 1.3.0**

Concatenate two type-level lists (tuples). Returns a new tuple with all elements from both lists.

## Signature

```typescript
export type ListConcat<A extends readonly unknown[], B extends readonly unknown[]> = [...A, ...B]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | The first tuple |
| `B` | The second tuple |

## Examples

### Basic Usage

```typescript
import type { ListConcat } from 'uni-types'

type Result = ListConcat<[1, 2], [3, 4]>
// [1, 2, 3, 4]
```

### Concatenating Empty Tuple

```typescript
type Result = ListConcat<['a', 'b'], []>
// ['a', 'b']
```
