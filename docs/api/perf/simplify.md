# Simplify

Flatten intersection types into a single object type.

## Signature

```typescript
type Simplify<T> = { [K in keyof T]: T[K] } & unknown
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to simplify |

## Description

Converts complex intersection types into a single flattened object type, making the type easier to read and work with.

## Examples

### Basic Usage

```typescript
import type { Simplify } from 'uni-types'

type Complex = { a: string } & { b: number }
type Simple = Simplify<Complex>
// { a: string; b: number }
```

### With Merge Utility

```typescript
import type { Merge, Simplify } from 'uni-types'

type Base = { id: string }
type Extended = { name: string; age: number }

type Result = Simplify<Base & Extended>
// { id: string; name: string; age: number }
```

### Nested Intersections

```typescript
type A = { x: string }
type B = { y: number } & { z: boolean }

type Combined = Simplify<A & B>
// { x: string; y: number; z: boolean }
```

## Related

- [`DeepSimplify`](./deep-simplify) - Recursively simplify nested types
- [`MergeAll`](./merge-all) - Merge multiple object types