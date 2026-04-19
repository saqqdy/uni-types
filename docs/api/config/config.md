# Config

**Since 1.5.0**

Type-safe configuration container with a marker for configuration values.

## Signature

```typescript
type Config<T = unknown> = {
  [key: string]: T
} & {
  __config?: true
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The value type for configuration entries |

## Examples

### Basic Usage

```typescript
import type { Config } from 'uni-types'

type AppConfig = Config<{
  port: number
  host: string
  debug: boolean
}>

const config: AppConfig = {
  port: 3000,
  host: '0.0.0.0',
  debug: false,
  __config: true
}
```

### Nested Configuration

```typescript
import type { Config } from 'uni-types'

type DatabaseConfig = Config<{
  host: string
  port: number
  username: string
  password: string
  database: string
  pool: {
    min: number
    max: number
  }
}>

const dbConfig: DatabaseConfig = {
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'secret',
  database: 'myapp',
  pool: { min: 2, max: 10 },
  __config: true
}
```

## Related

- [`ConfigSchema`](./config-schema)
- [`Environment`](./environment)
