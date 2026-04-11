# LoosePartial

Make all properties optional.

## Signature

```typescript
type LoosePartial<T> = {
  [K in keyof T]?: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Similar to TypeScript's built-in `Partial<T>`, but with a looser implementation that allows more flexible type inference.

## Examples

### Basic Usage

```typescript
import type { LoosePartial } from 'uni-types'

interface User {
  id: number
  name: string
  email: string
}

type PartialUser = LoosePartial<User>
// { id?: number; name?: string; email?: string }

const user: PartialUser = {
  name: 'John'
  // id and email can be omitted
}
```

### With Update Functions

```typescript
function updateUser(id: number, updates: LoosePartial<User>) {
  // Only update provided fields
}

updateUser(1, { name: 'Jane' })
updateUser(2, { email: 'jane@example.com', name: 'Jane' })
```

## Related

- [`RequiredKeys`](./required-keys) - Get required property keys
- [`OptionalKeys`](./optional-keys) - Get optional property keys
