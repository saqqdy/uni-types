# ValidPath

Check if a path exists in a type.

## Signature

```typescript
type ValidPath<T, P extends string> = T extends Primitive
  ? P extends ''
    ? true
    : false
  : P extends ''
    ? true
    : P extends `${infer K}.${infer Rest}`
      ? K extends keyof T
        ? ValidPath<T[K], Rest>
        : false
      : P extends keyof T
        ? true
        : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `P` | The path to check |

## Description

Returns `true` if the path exists in the type, `false` otherwise.

## Examples

### Basic Usage

```typescript
import type { ValidPath } from 'uni-types'

interface Obj {
  a: {
    b: string
    c: {
      d: number
    }
  }
}

type Path1 = ValidPath<Obj, 'a.b'>    // true
type Path2 = ValidPath<Obj, 'a.c.d'>  // true
type Path3 = ValidPath<Obj, 'a.x'>    // false
type Path4 = ValidPath<Obj, ''>       // true (root)
```

### Conditional Types

```typescript
type SafePath<T, P extends string> = ValidPath<T, P> extends true
  ? P
  : never
```

## Related

- [`PathLength`](./path-length) - Get path segment count
- [`DeepPick`](../deep/deep-pick) - Pick nested properties