# Nullable

Add null to a type.

## Signature

```typescript
type Nullable<T> = T | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The base type |

## Description

Creates a type that can be `null`. Useful for explicitly marking values that may be empty.

## Examples

### Basic Usage

```typescript
import type { Nullable } from 'uni-types'

type Name = Nullable<string> // string | null

function greet(name: Nullable<string>) {
  if (name === null) {
    return 'Hello, stranger!'
  }
  return `Hello, ${name}!`
}
```

### With Objects

```typescript
interface User {
  id: number
  name: string
}

type MaybeUser = Nullable<User> // User | null

function findUser(id: number): MaybeUser {
  // May return User or null
  return null
}
```

## Related

- [`Optional`](./optional) - Add undefined to a type
- [`Maybe`](./maybe) - Add null/undefined to a type
- [`NonNullable`](./non-nullable) - Exclude null/undefined
