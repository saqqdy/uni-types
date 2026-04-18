# PromiseSettledResult

**Since 1.3.0**

表示已结算 Promise 的结果，可以是已 fulfilled 或已 rejected。

## Signature

```typescript
type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | fulfilled 值的类型 |

## Examples

### Basic Usage

```typescript
import type { PromiseSettledResult } from 'uni-types'

const results: PromiseSettledResult<string>[] = await Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject(new Error('failed'))
])
```

### 类型守卫用法

```typescript
import type { PromiseSettledResult } from 'uni-types'

function isFulfilled<T>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T> {
  return result.status === 'fulfilled'
}
```

### 处理结果

```typescript
import type { PromiseSettledResult } from 'uni-types'

async function processResults<T>(results: PromiseSettledResult<T>[]) {
  return results
    .filter((r): r is PromiseFulfilledResult<T> => r.status === 'fulfilled')
    .map(r => r.value)
}
```

## Related

- [`PromiseResult`](./promiseresult) - 从 Promise 获取解析值
- [`PromiseValue`](./promisevalue) - 从 Promise 提取值