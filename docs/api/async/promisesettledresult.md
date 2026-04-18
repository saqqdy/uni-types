# PromiseSettledResult

**Since 1.3.0**

Represents the result of a settled promise, which can be either fulfilled or rejected.

## Signature

```typescript
type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type of the fulfilled value |

## Examples

### Basic Usage

```typescript
import type { PromiseSettledResult } from 'uni-types'

const results: PromiseSettledResult<string>[] = await Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject(new Error('failed'))
])
```

### Type Guard Usage

```typescript
import type { PromiseSettledResult } from 'uni-types'

function isFulfilled<T>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T> {
  return result.status === 'fulfilled'
}
```

### Processing Results

```typescript
import type { PromiseSettledResult } from 'uni-types'

async function processResults<T>(results: PromiseSettledResult<T>[]) {
  return results
    .filter((r): r is PromiseFulfilledResult<T> => r.status === 'fulfilled')
    .map(r => r.value)
}
```

## Related

- [`PromiseResult`](./promiseresult) - Get resolved value from Promise
- [`PromiseValue`](./promisevalue) - Extract value from Promise
