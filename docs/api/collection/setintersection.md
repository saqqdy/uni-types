# SetIntersection

**Since 1.3.0**

Compute the intersection of two type sets. Returns a new set containing only elements present in both sets.

## Signature

```typescript
export type SetIntersection<A, B> = A & B
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | The first type set |
| `B` | The second type set |

## Examples

### Basic Usage

```typescript
import type { SetIntersection } from 'uni-types'

type SetA = string | number
type SetB = number | boolean
type Result = SetIntersection<SetA, SetB>
// number
```

### No Overlap

```typescript
type SetA = string
type SetB = number
type Result = SetIntersection<SetA, SetB>
// never
```
