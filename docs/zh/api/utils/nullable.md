# Nullable

向类型添加 null。

## 签名

```typescript
type Nullable<T> = T | null
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 基础类型 |

## 描述

创建一个可以为 `null` 的类型。适用于显式标记可能为空的值。

## 示例

### 基本用法

```typescript
import type { Nullable } from 'uni-types'

type Name = Nullable<string> // string | null

function greet(name: Nullable<string>) {
  if (name === null) {
    return 'Hello, stranger!'
  }
  return `Hello, ${name}!`
}
```

### 与对象一起使用

```typescript
interface User {
  id: number
  name: string
}

type MaybeUser = Nullable<User> // User | null

function findUser(id: number): MaybeUser {
  // 可能返回 User 或 null
  return null
}
```

## 相关

- [`Optional`](./optional) - 向类型添加 undefined
- [`Maybe`](./maybe) - 添加 null/undefined
- [`NonNullable`](./non-nullable) - 排除 null/undefined
