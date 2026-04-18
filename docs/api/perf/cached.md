# Cached

**Since 1.2.0**

Cached type - prevents re-computation.

## Signature

```typescript
type Cached<T> = T extends infer U ? { __cached: U } : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to cache |

## Description

Wraps a type in a cached container to prevent TypeScript from re-computing complex type expressions. This can improve type-checking performance for expensive computations.

## Examples

### Basic Usage

```typescript
import type { Cached } from 'uni-types'

type ComplexCalculation = /* expensive type computation */
type CachedResult = Cached<ComplexCalculation>
// { __cached: ComplexCalculation }
```

### With Conditional Types

```typescript
import type { Cached } from 'uni-types'

type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T

type CachedReadonly = Cached<DeepReadonly<{ a: { b: string } }>>
// { __cached: { readonly a: { readonly b: string } } }
```

## Related

- [`CachedValue`](./cachedvalue) - Extract cached value
- [`Memoized`](./memoized) - Memoized type
