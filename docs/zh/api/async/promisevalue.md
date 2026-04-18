# PromiseValue

**Since 1.3.0**

递归地从 Promise 中提取值类型。这会解包嵌套的 Promise，直到达到非 Promise 值为止。

## Signature

```typescript
type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | 要提取值的类型 |

## Examples

### Basic Usage

```typescript
import type { PromiseValue } from 'uni-types'

type Value = PromiseValue<Promise<string>> // string
```

### 嵌套 Promise

```typescript
import type { PromiseValue } from 'uni-types'

type DeepValue = PromiseValue<Promise<Promise<number>>> // number
```

### 非 Promise 类型

```typescript
import type { PromiseValue } from 'uni-types'

type Direct = PromiseValue<boolean> // boolean
```

## Related

- [`PromiseResult`](./promiseresult) - 获取解析值（单层）
- [`UnwrapPromise`](./unwrappromise) - 解包 Promise 到其值