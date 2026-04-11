# NoNullish

Remove null/undefined from all properties.

## Signature

```typescript
type NoNullish<T> = {
  [K in keyof T]: NonNullable<T[K]>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to clean up |

## Description

Removes `null` and `undefined` from all properties of an object. Unlike `NonNullable`, this recursively processes all properties.

## Examples

### Basic Usage

```typescript
import type { NoNullish } from 'uni-types'

interface User {
  name: string | null
  email: string | undefined
  age: number | null | undefined
}

type CleanUser = NoNullish<User>
// { name: string; email: string; age: number }
```

### Nested Objects

```typescript
interface Config {
  database: {
    host: string | null
    port: number | undefined
  } | null
}

type CleanConfig = NoNullish<Config>
// { database: { host: string; port: number } }
```

## Related

- [`NonNullable`](./non-nullable) - Exclude null/undefined from a type
- [`Nullable`](./nullable) - Add null to a type
- [`Optional`](./optional) - Add undefined to a type
