# PathLength

**Since 1.1.0**

Get the number of segments in a path.

## Signature

```typescript
type PathLength<P extends string> = P extends ''
  ? 0
  : P extends `${string}.${infer Rest}`
    ? Increment<PathLength<Rest>>
    : 1
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `P` | The path string |

## Examples

### Basic Usage

```typescript
import type { PathLength } from 'uni-types'

type A = PathLength<'a.b.c'>   // 3
type B = PathLength<'single'>  // 1
type C = PathLength<''>        // 0
```

### Conditional Logic

```typescript
type ShallowPath<P extends string> = PathLength<P> extends 1 | 2
  ? P
  : never
```

## Related

- [`ParentPath`](./parent-path) - Get parent path
- [`PathLeaf`](./path-leaf) - Get last segment