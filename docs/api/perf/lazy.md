# Lazy

**Since 1.2.0**

Lazy type wrapper - defers type evaluation.

## Signature

```typescript
type Lazy<T> = () => T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to wrap in a lazy thunk |

## Description

Creates a lazy type that defers evaluation until needed. Useful for avoiding circular type references or lazy-loading expensive types.

## Examples

### Basic Usage

```typescript
import type { Lazy } from 'uni-types'

type LazyString = Lazy<string>
// () => string

type LazyObject = Lazy<{ name: string; age: number }>
// () => { name: string; age: number }
```

### With Circular References

```typescript
import type { Lazy } from 'uni-types'

interface TreeNode {
  value: number
  left?: Lazy<TreeNode>
  right?: Lazy<TreeNode>
}
```

## Related

- [`ForceEvaluate`](./forceevaluate) - Force evaluate a lazy type
- [`Deferred`](./deferred) - Deferred type
