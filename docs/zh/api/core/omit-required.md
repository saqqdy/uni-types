# OmitRequired

**自 1.0.0 起**

将除指定属性外的所有属性设置为必选。

## 签名

```typescript
type OmitRequired<T, K extends keyof T> = {
  [P in K]: T[P]
} & Omit<Required<T>, K>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 目标类型 |
| `K` | 要保持原样的键（必须是 T 的键） |

## 示例

### 基本用法

```typescript
import type { OmitRequired } from 'uni-types'

interface User {
  name?: string
  age?: number
  email?: string
}

type RequiredExceptName = OmitRequired<User, 'name'>
// { name?: string; age: number; email: string }
```

### 多个属性

```typescript
type RequiredExceptSome = OmitRequired<User, 'name' | 'age'>
// { name?: string; age?: number; email: string }
```

## 相关

- [`PickRequired`](./pick-required) - 将指定属性设置为必选
- [`OmitPartial`](./omit-partial) - 将除指定属性外的所有属性设置为可选
