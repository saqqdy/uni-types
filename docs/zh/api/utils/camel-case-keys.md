# CamelCaseKeys

**自 1.0.0 起**

将对象键转换为驼峰命名。

## 签名

```typescript
type CamelCaseKeys<T> = {
  [K in keyof T as CamelCase<K>]: T[K] extends object
    ? CamelCaseKeys<T[K]>
    : T[K]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

将对象的所有键从 snake_case 或 kebab-case 转换为 camelCase。递归处理嵌套对象。

## 示例

### 基本用法

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

### 嵌套对象

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

## 相关

- [`CamelCase`](./camel-case) - 将字符串转换为 camelCase
- [`SnakeCaseKeys`](./snake-case-keys) - 将对象键转换为 snake_case
