# OptionalKeys

Get keys of optional properties.

## Signature

```typescript
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Extracts the keys of all optional properties from an object type.

## Examples

### Basic Usage

```typescript
import type { OptionalKeys } from 'uni-types'

interface User {
  name: string
  email: string
  age?: number
  phone?: string
}

type Optional = OptionalKeys<User>
// 'age' | 'phone'
```

### All Required

```typescript
interface Required {
  a: string
  b: number
}

type NoOptional = OptionalKeys<Required> // never
```

## Related

- [`RequiredKeys`](./required-keys) - Get required property keys
- [`WritableKeys`](./writable-keys) - Get writable property keys
- [`ReadonlyKeys`](./readonly-keys) - Get readonly property keys