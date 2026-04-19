# EnvVar

**自 1.5.0 起**

Represents an environment variable with metadata about its source, requirements, and default value.

## 签名

```typescript
type EnvVar<T = unknown> = {
  value: T
  source: ConfigSource
  required: boolean
  default?: T
  description?: string
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | The value type of the environment variable |

## 示例

### 基本用法

```typescript
import type { EnvVar } from 'uni-types'

const portVar: EnvVar<number> = {
  value: 3000,
  source: 'env',
  required: false,
  default: 3000,
  description: 'Server port number'
}
```

### Multiple Environment Variables

```typescript
import type { EnvVar } from 'uni-types'

const envVars = {
  DATABASE_URL: {
    value: 'postgres://localhost:5432/mydb',
    source: 'env' as const,
    required: true,
    description: 'Database connection URL'
  } satisfies EnvVar<string>,
  
  REDIS_URL: {
    value: 'redis://localhost:6379',
    source: 'env' as const,
    required: false,
    default: 'redis://localhost:6379',
    description: 'Redis connection URL'
  } satisfies EnvVar<string>,
  
  MAX_CONNECTIONS: {
    value: 100,
    source: 'default' as const,
    required: false,
    default: 100,
    description: 'Maximum number of connections'
  } satisfies EnvVar<number>
}
```

## 相关

- [`Environment`](./environment)
- [`ConfigSource`](./config-source)
