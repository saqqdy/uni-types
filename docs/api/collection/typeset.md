# TypeSet

**Since 1.3.0**

A type-level Set implementation. Represents a set of types at the type level.

## Signature

```typescript
export type TypeSet<T> = T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The element type contained in the set |

## Examples

### Basic Usage

```typescript
import type { TypeSet } from 'uni-types'

type StringSet = TypeSet<string>
// string
```

### Union Type Set

```typescript
type NumberOrBoolean = TypeSet<number | boolean>
// number | boolean
```
