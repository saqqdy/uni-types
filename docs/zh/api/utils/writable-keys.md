# WritableKeys

获取可写属性的键。

## 签名

```typescript
type WritableKeys<T> = {
  [K in keyof T]-?: IfEquals<
    { [Q in K]: T[K] },
    { -readonly [Q in K]: T[K] },
    K,
    never
  >
}[keyof T]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

从对象类型中提取所有可写（非只读）属性的键。

## 示例

### 基本用法

```typescript
import type { WritableKeys } from 'uni-types'

interface User {
  id: number
  name: string
  readonly email: string
  readonly createdAt: Date
}

type Writable = WritableKeys<User>
// 'id' | 'name'
```

### 全部只读

```typescript
interface ReadonlyUser {
  readonly id: number
  readonly name: string
}

type NoWritable = WritableKeys<ReadonlyUser> // never
```

## 相关

- [`ReadonlyKeys`](./readonly-keys) - 获取只读属性的键
- [`RequiredKeys`](./required-keys) - 获取必需属性的键
- [`OptionalKeys`](./optional-keys) - 获取可选属性的键
