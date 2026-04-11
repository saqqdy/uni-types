# RequiredKeys

Get keys of required properties.

## Signature

```typescript
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Extracts the keys of all required (non-optional) properties from an object type.

## Examples

### Basic Usage

```typescript
import type { RequiredKeys } from 'uni-types'

interface User {
  name: string
  email: string
  age?: number
  phone?: string
}

type Required = RequiredKeys<User>
// 'name' | 'email'
```

### All Optional

```typescript
interface Optional {
  a?: string
  b?: number
}

type NoRequired = RequiredKeys<Optional> // never
```

## Related

- [`OptionalKeys`](./optional-keys) - Get optional property keys
- [`WritableKeys`](./writable-keys) - Get writable property keys
- [`ReadonlyKeys`](./readonly-keys) - Get readonly property keys