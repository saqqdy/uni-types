# PromiseValue

**Since 1.3.0**

Extract the value type from a Promise recursively. This unwraps nested promises until it reaches the non-promise value.

## Signature

```typescript
type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to extract the value from |

## Examples

### Basic Usage

```typescript
import type { PromiseValue } from 'uni-types'

type Value = PromiseValue<Promise<string>> // string
```

### Nested Promises

```typescript
import type { PromiseValue } from 'uni-types'

type DeepValue = PromiseValue<Promise<Promise<number>>> // number
```

### Non-Promise Type

```typescript
import type { PromiseValue } from 'uni-types'

type Direct = PromiseValue<boolean> // boolean
```

## Related

- [`PromiseResult`](./promiseresult) - Get resolved value (single level)
- [`UnwrapPromise`](./unwrappromise) - Unwrap promise to its value
