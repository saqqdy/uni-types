# FunctionOnly

从对象中仅提取函数属性。

## 签名

```typescript
type FunctionOnly<T> = Pick<T, FunctionKeys<T>>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

创建一个新类型，仅包含原始类型的函数属性。

## 示例

### 基本用法

```typescript
import type { FunctionOnly } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
  onChange: (value: string) => void
}

type Fns = FunctionOnly<User>
// { onClick: () => void; onChange: (value: string) => void }
```

### 没有函数

```typescript
interface Data {
  name: string
  email: string
}

type NoFns = FunctionOnly<Data> // {}
```

## 相关

- [`DataOnly`](./data-only) - 提取非函数属性
- [`FunctionKeys`](./function-keys) - 获取函数属性键