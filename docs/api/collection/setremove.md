# SetRemove

**Since 1.3.0**

Remove an element from a type set. Returns a new set excluding the removed type.

## Signature

```typescript
export type SetRemove<S, T> = Exclude<S, T>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The original type set |
| `T` | The element type to remove |

## Examples

### Basic Usage

```typescript
import type { SetRemove } from 'uni-types'

type Result = SetRemove<string | number | boolean, number>
// string | boolean
```

### Removing from Union

```typescript
type Mixed = string | number | boolean | null
type NoNull = SetRemove<Mixed, null>
// string | number | boolean
```
