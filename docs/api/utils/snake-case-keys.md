# SnakeCaseKeys

Convert object keys to snake_case.

## Signature

```typescript
type SnakeCaseKeys<T> = {
  [K in keyof T as SnakeCase<K>]: T[K] extends object
    ? SnakeCaseKeys<T[K]>
    : T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Converts all keys of an object from camelCase to snake_case. Recursively processes nested objects.

## Examples

### Basic Usage

```typescript
import type { SnakeCaseKeys } from 'uni-types'

interface User {
  userId: number
  userName: string
  createdAt: string
}

type ApiUser = SnakeCaseKeys<User>
// { user_id: number; user_name: string; created_at: string }
```

### Nested Objects

```typescript
interface Config {
  databaseHost: string
  databasePort: number
  cacheOptions: {
    maxSize: number
    ttlSeconds: number
  }
}

type ApiConfig = SnakeCaseKeys<Config>
// {
//   database_host: string
//   database_port: number
//   cache_options: {
//     max_size: number
//     ttl_seconds: number
//   }
// }
```

## Related

- [`SnakeCase`](./snake-case) - Convert string to snake_case
- [`CamelCaseKeys`](./camel-case-keys) - Convert object keys to camelCase
