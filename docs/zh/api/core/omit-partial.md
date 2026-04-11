# OmitPartial

将除指定属性外的所有属性设置为可选。

## 签名

```typescript
type OmitPartial<T, K extends keyof T> = {
  [P in K]: T[P]
} & Omit<Partial<T>, K>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 目标类型 |
| `K` | 要保持必选的键（必须是 T 的键） |

## 示例

### 基本用法

```typescript
import type { OmitPartial } from 'uni-types'

interface User {
  name: string
  age: number
  email: string
}

type OptionalExceptEmail = OmitPartial<User, 'email'>
// { name?: number; age?: number; email: string }
```

### 多个属性

```typescript
type OptionalExceptSome = OmitPartial<User, 'name' | 'email'>
// { name: string; age?: number; email: string }
```

## 相关

- [`PickPartial`](./pick-partial) - 将指定属性设置为可选
- [`OmitRequired`](./omit-required) - 将除指定属性外的所有属性设置为必选
