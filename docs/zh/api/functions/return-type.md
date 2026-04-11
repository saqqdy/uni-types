# ReturnType

获取函数返回类型。

## 签名

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 函数类型 |

## 示例

### 基本用法

```typescript
import type { ReturnType } from 'uni-types'

type Fn = (a: string) => number
type Result = ReturnType<Fn>  // number
```

### 函数类型

```typescript
function createUser(name: string) {
  return { id: 1, name }
}

type User = ReturnType<typeof createUser>
// { id: number; name: string }
```

### 复杂返回类型

```typescript
type AsyncFn = () => Promise<string>
type Result = ReturnType<AsyncFn>  // Promise<string>

// 要解包异步返回类型，请使用 AsyncReturnType
```

## 相关

- [`Parameters`](./parameters) - 获取函数参数
- [`AsyncReturnType`](./async-return-type) - 解包 Promise 返回类型