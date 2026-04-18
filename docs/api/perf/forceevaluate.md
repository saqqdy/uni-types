# ForceEvaluate

**Since 1.2.0**

Force evaluate a lazy type.

## Signature

```typescript
type ForceEvaluate<T> = T extends () => infer R ? R : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The lazy type to evaluate |

## Description

Extracts the result type from a lazy thunk. If the type is not lazy, returns it unchanged.

## Examples

### Basic Usage

```typescript
import type { Lazy, ForceEvaluate } from 'uni-types'

type LazyString = Lazy<string>
type Evaluated = ForceEvaluate<LazyString>
// string
```

### With Non-Lazy Types

```typescript
import type { ForceEvaluate } from 'uni-types'

type NotLazy = { name: string }
type Result = ForceEvaluate<NotLazy>
// { name: string } (unchanged)
```

## Related

- [`Lazy`](./lazy) - Lazy type wrapper
- [`Deferred`](./deferred) - Deferred type
