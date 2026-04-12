# Merge

**Since 1.0.0**

Merge two types (second overrides first).

## Signature

```typescript
type Merge<T, U> = Omit<T, keyof U> & U
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The first type |
| `U` | The second type (overrides T) |

## Description

Merges two object types. When both types have the same key, the type from `U` takes precedence.

## Examples

### Basic Usage

```typescript
import type { Merge } from 'uni-types'

type Result = Merge<{ a: string; b: number }, { b: boolean; c: string }>
// { a: string; b: boolean; c: string }
```

### Override Types

```typescript
type Base = {
  id: number
  name: string
  active: boolean
}

type Override = {
  active: string
  role: 'admin' | 'user'
}

type Merged = Merge<Base, Override>
// { id: number; name: string; active: string; role: 'admin' | 'user' }
```

## Related

- [`AtLeastOne`](./at-least-one) - Require at least one property