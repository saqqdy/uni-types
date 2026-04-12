# DataOnly

**自 1.0.0 起**

从对象中仅提取非函数属性。

## 签名

```typescript
type DataOnly<T> = Pick<T, NonFunctionKeys<T>>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

创建一个新类型，仅包含原始类型的非函数（数据）属性。

## 示例

### 基本用法

```typescript
import type { DataOnly } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type Data = DataOnly<User>
// { name: string; age: number }
```

### 只有函数

```typescript
interface Handlers {
  onClick: () => void
  onChange: () => void
}

type NoData = DataOnly<Handlers> // {}
```

## 相关

- [`FunctionOnly`](./function-only) - 提取函数属性
- [`NonFunctionKeys`](./non-function-keys) - 获取非函数属性键