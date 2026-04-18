# WrapPromise

**Since 1.3.0**

将类型包装在 Promise 中。如果类型已经是 Promise，它会先递归提取值以避免双重包装。

## Signature

```typescript
type WrapPromise<T> = Promise<PromiseValue<T>>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | 要包装在 Promise 中的类型 |

## Examples

### Basic Usage

```typescript
import type { WrapPromise } from 'uni-types'

type Wrapped = WrapPromise<string> // Promise<string>
```

### 已经是 Promise

```typescript
import type { WrapPromise } from 'uni-types'

// 通过先提取值避免双重包装
type StillSingle = WrapPromise<Promise<number>> // Promise<number>
```

### 使用联合类型

```typescript
import type { WrapPromise } from 'uni-types'

type MaybeAsync = string | Promise<string>
type AlwaysAsync = WrapPromise<MaybeAsync> // Promise<string>
```

## Related

- [`PromiseValue`](./promisevalue) - 从 Promise 提取值
- [`IsPromise`](./ispromise) - 检查类型是否为 Promise