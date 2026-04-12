# PathValue

**Since 1.0.0**

Get the value type at a given path.

## Signature

```typescript
type PathValue<T, P extends string> = ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `P` | The dot-separated path string |

## Description

Extracts the type of the value at a specific path in a nested object.

## Examples

### Basic Usage

```typescript
import type { PathValue } from 'uni-types'

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

type Host = PathValue<Config, 'database.host'> // string
type Port = PathValue<Config, 'database.port'> // number
type Creds = PathValue<Config, 'database.credentials'>
// { username: string; password: string }
```

### Invalid Path

```typescript
type Invalid = PathValue<Config, 'database.invalid'> // never
```

## Related

- [`Paths`](./paths) - Get all possible paths
- [`SplitPath`](./split-path) - Split path into array