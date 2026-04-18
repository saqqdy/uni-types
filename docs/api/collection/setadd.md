# SetAdd

**Since 1.3.0**

Add an element to a type set. Returns a new set that includes the added type.

## Signature

```typescript
export type SetAdd<S, T> = S | T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The original type set |
| `T` | The element type to add |

## Examples

### Basic Usage

```typescript
import type { SetAdd } from 'uni-types'

type Result = SetAdd<string, number>
// string | number
```

### Adding to Existing Set

```typescript
type Existing = string | boolean
type Extended = SetAdd<Existing, number>
// string | boolean | number
```
