# ListLength

**Since 1.3.0**

Get the length of a type-level list (tuple). Returns the number of elements as a numeric literal type.

## Signature

```typescript
export type ListLength<T extends readonly unknown[]> = T['length']
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple to get the length of |

## Examples

### Basic Usage

```typescript
import type { ListLength } from 'uni-types'

type Result = ListLength<['a', 'b', 'c']>
// 3
```

### Empty Tuple

```typescript
type Result = ListLength<[]>
// 0
```
