# NonFunctionKeys

获取非函数属性的键。

## 签名

```typescript
type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K
}[keyof T]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

从对象类型中提取所有非函数属性的键。

## 示例

### 基本用法

```typescript
import type { NonFunctionKeys } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type DataKeys = NonFunctionKeys<User>
// 'name' | 'age'
```

### 只有函数

```typescript
interface Handlers {
  onClick: () => void
  onChange: (v: string) => void
}

type NoData = NonFunctionKeys<Handlers> // never
```

## 相关

- [`FunctionKeys`](./function-keys) - 获取函数属性键
- [`FunctionOnly`](./function-only) - 提取函数属性
- [`DataOnly`](./data-only) - 提取非函数属性