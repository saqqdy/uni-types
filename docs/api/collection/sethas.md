# SetHas

**Since 1.3.0**

Check if an element exists in a type set. Returns `true` if the element is present, otherwise `false`.

## Signature

```typescript
export type SetHas<S, T> = T extends S ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The type set to search in |
| `T` | The element type to check for |

## Examples

### Basic Usage

```typescript
import type { SetHas } from 'uni-types'

type Result = SetHas<string | number, string>
// true
```

### Element Not Found

```typescript
type Result = SetHas<string | number, boolean>
// false
```
