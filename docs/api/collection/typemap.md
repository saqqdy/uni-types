# TypeMap

**Since 1.3.0**

A type-level Map implementation. Represents a mapping from key types to value types at the type level.

## Signature

```typescript
export type TypeMap<K, V> = {
  readonly [key in K]: V
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `K` | The key type of the map |
| `V` | The value type of the map |

## Examples

### Basic Usage

```typescript
import type { TypeMap } from 'uni-types'

type StringMap = TypeMap<string, number>
// { readonly [key in string]: number }
```

### Literal Key Map

```typescript
type UserRoleMap = TypeMap<'admin' | 'user' | 'guest', string>
// { readonly admin: string; readonly user: string; readonly guest: string }
```
