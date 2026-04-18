# PromiseResult

**Since 1.3.0**

从 Promise 中获取解析值类型（单层）。与 `PromiseValue` 不同，这只会解包一层。

## Signature

```typescript
type PromiseResult<T> = T extends Promise<infer V> ? V : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | 要提取结果的类型 |

## Examples

### Basic Usage

```typescript
import type { PromiseResult } from 'uni-types'

type Result = PromiseResult<Promise<string>> // string
```

### 非 Promise 类型

```typescript
import type { PromiseResult } from 'uni-types'

type Direct = PromiseResult<number> // number
```

### 嵌套 Promise

```typescript
import type { PromiseResult } from 'uni-types'

type Nested = PromiseResult<Promise<Promise<boolean>>> // Promise<boolean>
```

## Related

- [`PromiseValue`](./promisevalue) - 递归提取值
- [`UnwrapPromise`](./unwrappromise) - 解包 Promise 到其值