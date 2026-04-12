# Paths

**Since 1.0.0**

Get all possible paths to nested properties.

## Signature

```typescript
type Paths<T, D extends number = 10> = ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `D` | Maximum depth (default: 10) |

## Description

Generates a union of all possible dot-separated paths to nested properties.

## Examples

### Basic Usage

```typescript
import type { Paths } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
    credentials: {
      username: string
      password: string
    }
  }
}

type AllPaths = Paths<Config>
// 'database' | 'database.host' | 'database.port' | 'database.credentials' | 'database.credentials.username' | 'database.credentials.password'
```

### With Arrays

```typescript
interface Data {
  items: { id: number; name: string }[]
}

type ItemPaths = Paths<Data>
// 'items' | 'items.0' | 'items.1' | ...
```

## Related

- [`PathValue`](./path-value) - Get value type at path
- [`SplitPath`](./split-path) - Split path into array