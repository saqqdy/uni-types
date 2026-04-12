# SnakeCaseKeys

**自 1.0.0 起**

将对象键转换为蛇形命名。

## 签名

```typescript
type SnakeCaseKeys<T> = {
  [K in keyof T as SnakeCase<K>]: T[K] extends object
    ? SnakeCaseKeys<T[K]>
    : T[K]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

将对象的所有键从 camelCase 转换为 snake_case。递归处理嵌套对象。

## 示例

### 基本用法

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

### 嵌套对象

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

## 相关

- [`SnakeCase`](./snake-case) - 将字符串转换为 snake_case
- [`CamelCaseKeys`](./camel-case-keys) - 将对象键转换为 camelCase
