# ArrayPaths

**Since 1.1.0**

Get all paths including array indices.

## Signature

```typescript
type ArrayPaths<T, D extends number = 10> = ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `D` | Maximum depth (default: 10) |

## Description

Generates all possible paths to properties, including array index paths using `${number}`.

## Examples

### Basic Usage

```typescript
import type { ArrayPaths } from 'uni-types'

interface Users {
  users: { name: string; age: number }[]
}

type Paths = ArrayPaths<Users>
// 'users' | `users.${number}` | `users.${number}.name` | `users.${number}.age`
```

### Nested Arrays

```typescript
interface Matrix {
  grid: number[][]
}

type Paths = ArrayPaths<Matrix>
// 'grid' | `grid.${number}` | `grid.${number}.${number}`
```

## Related

- [`LeafPaths`](./leaf-paths) - Get paths to leaf nodes only
- [`ValidPath`](./valid-path) - Check if path exists