# UnionToTuple

Convert union to tuple.

## Signature

```typescript
type UnionToTuple<T> = ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The union type |

## Description

Converts a union type to a tuple type. Note: The order of elements in the tuple is an implementation detail and should not be relied upon.

## Examples

### Basic Usage

```typescript
import type { UnionToTuple } from 'uni-types'

type Status = 'pending' | 'active' | 'inactive'
type StatusTuple = UnionToTuple<Status>
// ['pending', 'active', 'inactive'] or other permutation
```

### With Primitive Types

```typescript
type Primitive = string | number | boolean
type PrimitiveTuple = UnionToTuple<Primitive>
// [string, number, boolean] or other permutation
```

## Related

- [`UnionToIntersection`](./union-to-intersection) - Convert union to intersection
