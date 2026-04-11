# SplitPath

Split path into array.

## Signature

```typescript
type SplitPath<S extends string> = S extends `${infer Head}.${infer Tail}`
  ? [Head, ...SplitPath<Tail>]
  : [S]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The dot-separated path string |

## Description

Converts a dot-separated path string into a string tuple type.

## Examples

### Basic Usage

```typescript
import type { SplitPath } from 'uni-types'

type Path1 = SplitPath<'user.name'> // ['user', 'name']
type Path2 = SplitPath<'database.config.host'> // ['database', 'config', 'host']
type Path3 = SplitPath<'single'> // ['single']
```

### Deep Nested Paths

```typescript
type Deep = SplitPath<'a.b.c.d.e.f'>
// ['a', 'b', 'c', 'd', 'e', 'f']
```

## Related

- [`Paths`](./paths) - Get all possible paths
- [`PathValue`](./path-value) - Get value type at path
