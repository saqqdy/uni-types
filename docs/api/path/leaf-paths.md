# LeafPaths

**Since 1.1.0**

Get paths to leaf nodes only (primitive values).

## Signature

```typescript
type LeafPaths<T, D extends number = 10> = ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `D` | Maximum depth (default: 10) |

## Description

Returns paths only to primitive/leaf values, excluding intermediate object paths.

## Examples

### Basic Usage

```typescript
import type { LeafPaths } from 'uni-types'

interface Data {
  config: {
    host: string
    port: number
    nested: {
      value: boolean
    }
  }
}

type Paths = LeafPaths<Data>
// 'config.host' | 'config.port' | 'config.nested.value'
```

### With Arrays

```typescript
interface Users {
  users: { name: string; age: number }[]
}

type Paths = LeafPaths<Users>
// `users.${number}.name` | `users.${number}.age`
```

## Related

- [`ArrayPaths`](./array-paths) - Get all paths including arrays
- [`DeepOmit`](../deep/deep-omit) - Omit at paths