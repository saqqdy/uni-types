# Deferred

**Since 1.2.0**

Deferred type - prevents immediate expansion.

## Signature

```typescript
type Deferred<T> = T extends infer U ? U : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to defer |

## Description

Creates a deferred type that prevents TypeScript from immediately expanding type expressions. This can help with readability and type-checking performance.

## Examples

### Basic Usage

```typescript
import type { Deferred } from 'uni-types'

type MyType = Deferred<{ a: string } & { b: number }>
// { a: string } & { b: number } (not expanded)
```

### With Union Types

```typescript
import type { Deferred } from 'uni-types'

type MyUnion = Deferred<string | number | boolean>
// string | number | boolean
```

## Related

- [`Lazy`](./lazy) - Lazy type wrapper
- [`ForceEvaluate`](./forceevaluate) - Force evaluate a lazy type
