# ReadonlyKeys

Get readonly property keys.

## Signature

```typescript
type ReadonlyKeys<T> = {
  [K in keyof T]-?: IfEquals<
    { [Q in K]: T[K] },
    { -readonly [Q in K]: T[K] },
    never,
    K
  >
}[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Extracts all readonly property keys from an object type.

## Examples

### Basic Usage

```typescript
import type { ReadonlyKeys } from 'uni-types'

interface User {
  id: number
  name: string
  readonly email: string
  readonly createdAt: Date
}

type Readonly = ReadonlyKeys<User>
// 'email' | 'createdAt'
```

### All Writable

```typescript
interface WritableUser {
  id: number
  name: string
}

type NoReadonly = ReadonlyKeys<WritableUser> // never
```

## Related

- [`WritableKeys`](./writable-keys) - Get writable property keys
- [`RequiredKeys`](./required-keys) - Get required property keys
- [`OptionalKeys`](./optional-keys) - Get optional property keys
