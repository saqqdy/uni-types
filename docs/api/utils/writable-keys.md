# WritableKeys

**Since 1.0.0**

Get writable property keys.

## Signature

```typescript
type WritableKeys<T> = {
  [K in keyof T]-?: IfEquals<
    { [Q in K]: T[K] },
    { -readonly [Q in K]: T[K] },
    K,
    never
  >
}[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Extracts all writable (non-readonly) property keys from an object type.

## Examples

### Basic Usage

```typescript
import type { WritableKeys } from 'uni-types'

interface User {
  id: number
  name: string
  readonly email: string
  readonly createdAt: Date
}

type Writable = WritableKeys<User>
// 'id' | 'name'
```

### All Readonly

```typescript
interface ReadonlyUser {
  readonly id: number
  readonly name: string
}

type NoWritable = WritableKeys<ReadonlyUser> // never
```

## Related

- [`ReadonlyKeys`](./readonly-keys) - Get readonly property keys
- [`RequiredKeys`](./required-keys) - Get required property keys
- [`OptionalKeys`](./optional-keys) - Get optional property keys
