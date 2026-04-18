# CompositeGuard

**Since 1.2.0**

Composite type guard for objects.

## Signature

```typescript
type CompositeGuard<T extends object> = (value: unknown) => value is T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to guard |

## Description

Defines a type guard function specifically for object types. Useful for creating runtime validation for complex object structures.

## Examples

### Basic Usage

```typescript
import type { CompositeGuard } from 'uni-types'

interface User {
  id: string
  name: string
  age: number
}

const isUser: CompositeGuard<User> = (value): value is User => {
  return typeof value === 'object' && value !== null &&
    'id' in value && 'name' in value && 'age' in value
}
```

### With Nested Objects

```typescript
import type { CompositeGuard } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

const isConfig: CompositeGuard<Config> = (value): value is Config => {
  return typeof value === 'object' && value !== null &&
    'database' in value &&
    typeof (value as Config).database === 'object'
}
```

## Related

- [`RuntimeGuard`](./runtime-guard) - Define type guard function
- [`GuardedType`](./guarded-type) - Extract type from guard
