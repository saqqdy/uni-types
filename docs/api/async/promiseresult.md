# PromiseResult

**Since 1.3.0**

Get the resolved value type from a Promise at a single level. Unlike `PromiseValue`, this only unwraps one layer.

## Signature

```typescript
type PromiseResult<T> = T extends Promise<infer V> ? V : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to extract the result from |

## Examples

### Basic Usage

```typescript
import type { PromiseResult } from 'uni-types'

type Result = PromiseResult<Promise<string>> // string
```

### Non-Promise Type

```typescript
import type { PromiseResult } from 'uni-types'

type Direct = PromiseResult<number> // number
```

### Nested Promises

```typescript
import type { PromiseResult } from 'uni-types'

type Nested = PromiseResult<Promise<Promise<boolean>>> // Promise<boolean>
```

## Related

- [`PromiseValue`](./promisevalue) - Extract value recursively
- [`UnwrapPromise`](./unwrappromise) - Unwrap promise to its value
