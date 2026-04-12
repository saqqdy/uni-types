# DeepSimplify

Recursively simplify nested intersection types.

## Signature

```typescript
type DeepSimplify<T> = T extends object
  ? T extends (...args: any[]) => any
    ? T
    : T extends Array<infer E>
      ? DeepSimplify<E>[]
      : { [K in keyof T]: DeepSimplify<T[K]> }
  : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to deeply simplify |

## Description

Recursively traverses nested objects and arrays, simplifying all intersection types throughout the structure.

## Examples

### Basic Usage

```typescript
import type { DeepSimplify } from 'uni-types'

type Nested = {
  a: { b: string } & { c: number }
}

type Simple = DeepSimplify<Nested>
// { a: { b: string; c: number } }
```

### Deeply Nested

```typescript
type Deep = {
  level1: {
    level2: {
      level3: { x: string } & { y: number }
    }
  }
}

type Result = DeepSimplify<Deep>
// All nested intersections are flattened
```

### With Arrays

```typescript
type WithArray = {
  items: ({ id: string } & { name: string })[]
}

type Simplified = DeepSimplify<WithArray>
// { items: { id: string; name: string }[] }
```

## Related

- [`Simplify`](./simplify) - Single-level simplification
- [`FlattenType`](./flatten-type) - Flatten type