# AsyncReturnType

提取异步函数返回类型（解包 Promise）。

## 签名

```typescript
type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : T extends (...args: any[]) => infer R
    ? R
    : never
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 异步函数类型 |

## 描述

与 `ReturnType` 不同，`AsyncReturnType` 解包 Promise 以获取解析后的类型。

## 示例

### 基本用法

```typescript
import type { AsyncReturnType } from 'uni-types'

type AsyncFn = () => Promise<string>
type Result = AsyncReturnType<AsyncFn>  // string

// 与 ReturnType 比较:
type Wrapped = ReturnType<AsyncFn>  // Promise<string>
```

### 真实 API

```typescript
async function fetchUser(id: string) {
  const res = await fetch(`/api/users/${id}`)
  return res.json() as Promise<{ id: string; name: string }>
}

type User = AsyncReturnType<typeof fetchUser>
// { id: string; name: string }
```

### 同步函数

```typescript
type SyncFn = () => string
type Result = AsyncReturnType<SyncFn>  // string
```

## 相关

- [`ReturnType`](./return-type) - 获取函数返回类型