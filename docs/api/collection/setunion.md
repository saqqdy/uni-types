# SetUnion

**Since 1.3.0**

Compute the union of two type sets. Returns a new set containing all elements from both sets.

## Signature

```typescript
export type SetUnion<A, B> = A | B
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | The first type set |
| `B` | The second type set |

## Examples

### Basic Usage

```typescript
import type { SetUnion } from 'uni-types'

type SetA = string | number
type SetB = boolean | null
type Result = SetUnion<SetA, SetB>
// string | number | boolean | null
```

### Overlapping Sets

```typescript
type SetA = string | number
type SetB = number | boolean
type Result = SetUnion<SetA, SetB>
// string | number | boolean
```
