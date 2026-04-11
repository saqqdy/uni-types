# ReadonlyKeys

获取只读属性的键。

## 签名

```typescript
type ReadonlyKeys<T> = {
  [K in keyof T]-?: IfEquals<
    { [Q in K]: T[K] },
    { -readonly [Q in K]: T[K] },
    never,
    K
  >
}[keyof T]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

从对象类型中提取所有只读属性的键。

## 示例

### 基本用法

```typescript
import type { ReadonlyKeys } from 'uni-types'

interface User {
  id: number
  name: string
  readonly email: string
  readonly createdAt: Date
}

type Readonly = ReadonlyKeys<User>
// 'email' | 'createdAt'
```

### 全部可写

```typescript
interface WritableUser {
  id: number
  name: string
}

type NoReadonly = ReadonlyKeys<WritableUser> // never
```

## 相关

- [`WritableKeys`](./writable-keys) - 获取可写属性的键
- [`RequiredKeys`](./required-keys) - 获取必需属性的键
- [`OptionalKeys`](./optional-keys) - 获取可选属性的键
