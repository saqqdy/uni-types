# IsPromise

**Since 1.3.0**

检查类型是否为 Promise。如果类型是 Promise 则返回 `true`，否则返回 `false`。

## Signature

```typescript
type IsPromise<T> = T extends Promise<any> ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | 要检查的类型 |

## Examples

### Basic Usage

```typescript
import type { IsPromise } from 'uni-types'

type Check1 = IsPromise<Promise<string>> // true
type Check2 = IsPromise<string> // false
```

### 使用泛型类型

```typescript
import type { IsPromise } from 'uni-types'

type MaybePromise<T> = IsPromise<T> extends true ? T : Promise<T>
```

### 条件逻辑

```typescript
import type { IsPromise } from 'uni-types'

type UnwrapIfPromise<T> = IsPromise<T> extends true ? PromiseResult<T> : T
```

## Related

- [`PromiseResult`](./promiseresult) - 从 Promise 获取解析值
- [`WrapPromise`](./wrappromise) - 将类型包装在 Promise 中