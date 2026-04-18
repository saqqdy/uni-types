# AssertHasProperty

**Since 1.3.0**

Ensure an object type has a specific property.

## Signature

```typescript
type AssertHasProperty<T, K extends PropertyKey> = K extends keyof T ? T : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to check |
| `K` | The property key to verify |

## Examples

### Basic Usage

```typescript
import type { AssertHasProperty } from 'uni-types'

type User = { name: string; age: number }
type HasName = AssertHasProperty<User, 'name'> // User
type NoEmail = AssertHasProperty<User, 'email'> // never
```

### With Generic Types

```typescript
type EnsureId<T> = AssertHasProperty<T, 'id'>
type Valid = EnsureId<{ id: number; name: string }> // { id: number; name: string }
type Invalid = EnsureId<{ name: string }> // never
```

### With Symbol Properties

```typescript
const key = Symbol('key')
type Obj = { [key]: string }
type Result = AssertHasProperty<Obj, typeof key> // Obj
```

## Related

- [`AssertKeyof`](./assertkeyof) - Assert key exists on type
- [`RequireKeys`](./requirekeys) - Make specific keys required
