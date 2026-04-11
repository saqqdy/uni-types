# CamelCaseKeys

Convert object keys to camelCase.

## Signature

```typescript
type CamelCaseKeys<T> = {
  [K in keyof T as CamelCase<K>]: T[K] extends object
    ? CamelCaseKeys<T[K]>
    : T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Converts all keys of an object from snake_case or kebab-case to camelCase. Recursively processes nested objects.

## Examples

### Basic Usage

```typescript
import type { CamelCaseKeys } from 'uni-types'

interface ApiUser {
  user_id: number
  user_name: string
  created_at: string
}

type User = CamelCaseKeys<ApiUser>
// { userId: number; userName: string; createdAt: string }
```

### Nested Objects

```typescript
interface ApiConfig {
  database_host: string
  database_port: number
  cache_options: {
    max_size: number
    ttl_seconds: number
  }
}

type Config = CamelCaseKeys<ApiConfig>
// {
//   databaseHost: string
//   databasePort: number
//   cacheOptions: {
//     maxSize: number
//     ttlSeconds: number
//   }
// }
```

## Related

- [`CamelCase`](./camel-case) - Convert string to camelCase
- [`SnakeCaseKeys`](./snake-case-keys) - Convert object keys to snake_case
