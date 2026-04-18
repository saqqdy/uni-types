# SetIsSubset

**Since 1.3.0**

Check if one type set is a subset of another. Returns `true` if all elements of `A` are also in `B`.

## Signature

```typescript
export type SetIsSubset<A, B> = A extends B ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | The potential subset type set |
| `B` | The potential superset type set |

## Examples

### Basic Usage

```typescript
import type { SetIsSubset } from 'uni-types'

type Result = SetIsSubset<string, string | number | boolean>
// true
```

### Not a Subset

```typescript
type Result = SetIsSubset<string | number, string | boolean>
// false
```
