# FunctionKeys

**自 1.0.0 起**

获取函数属性的键。

## 签名

```typescript
type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never
}[keyof T]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

从对象类型中提取所有函数属性的键。

## 示例

### 基本用法

```typescript
import type { FunctionKeys } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
  onChange: (value: string) => void
}

type FnKeys = FunctionKeys<User>
// 'onClick' | 'onChange'
```

### 没有函数

```typescript
interface Data {
  name: string
  email: string
}

type NoFns = FunctionKeys<Data> // never
```

## 相关

- [`NonFunctionKeys`](./non-function-keys) - 获取非函数属性键
- [`FunctionOnly`](./function-only) - 提取函数属性
- [`DataOnly`](./data-only) - 提取非函数属性