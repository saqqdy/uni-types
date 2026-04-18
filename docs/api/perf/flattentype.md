# FlattenType

**Since 1.2.0**

Flatten type - remove extra intersections.

## Signature

```typescript
type FlattenType<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to flatten |

## Description

Flattens intersection types and extra type wrappings into a single cohesive object type. Similar to Simplify but more focused on removing intersections.

## Examples

### Basic Usage

```typescript
import type { FlattenType } from 'uni-types'

type Intersection = { a: string } & { b: number }
type Flattened = FlattenType<Intersection>
// { a: string; b: number }
```

### With Nested Objects

```typescript
import type { FlattenType } from 'uni-types'

type Nested = { x: string } & { y: number } & { z: boolean }
type Result = FlattenType<Nested>
// { x: string; y: number; z: boolean }
```

## Related

- [`Simplify`](./simplify) - Simplify intersection types
- [`DeepSimplify`](./deep-simplify) - Recursively simplify nested types
