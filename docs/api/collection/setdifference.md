# SetDifference

**Since 1.3.0**

Compute the difference of two type sets. Returns a new set containing elements from the first set that are not in the second set.

## Signature

```typescript
export type SetDifference<A, B> = Exclude<A, B>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | The source type set |
| `B` | The type set to subtract |

## Examples

### Basic Usage

```typescript
import type { SetDifference } from 'uni-types'

type SetA = string | number | boolean
type SetB = number | null
type Result = SetDifference<SetA, SetB>
// string | boolean
```

### Complete Removal

```typescript
type SetA = string | number
type SetB = string | number | boolean
type Result = SetDifference<SetA, SetB>
// never
```
