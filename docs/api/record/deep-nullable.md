# DeepNullable

**Since 1.1.0**

Make all properties nullable recursively.

## Signature

```typescript
type DeepNullable<T> = T extends (...args: any[]) => any
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepNullable<K>, DeepNullable<V>>
    : T extends Set<infer V>
      ? Set<DeepNullable<V>>
      : T extends readonly (infer E)[]
        ? DeepNullable<E>[]
        : T extends object
          ? { [K in keyof T]: DeepNullable<T[K]> | null }
          : T | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |

## Description

Recursively makes all properties in an object type nullable (adds `| null`).

## Examples

### Basic Usage

```typescript
import type { DeepNullable } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type Nullable = DeepNullable<Config>
// { database: { host: string | null; port: number | null } | null }
```

### With Nested Objects

```typescript
interface User {
  profile: {
    name: string
    address: {
      city: string
      zip: string
    }
  }
}

type NullableUser = DeepNullable<User>
// All nested properties can be null
```

## Related

- [`DeepOptional`](./deep-optional) - Make all properties optional
- [`DeepNonNullable`](./deep-non-nullable) - Remove null from all properties