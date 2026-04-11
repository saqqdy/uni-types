# LoosePartial

将所有属性变为可选。

## 签名

```typescript
type LoosePartial<T> = {
  [K in keyof T]?: T[K]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

类似于 TypeScript 内置的 `Partial<T>`，但实现方式更宽松，允许更灵活的类型推断。

## 示例

### 基本用法

```typescript
import type { LoosePartial } from 'uni-types'

interface User {
  id: number
  name: string
  email: string
}

type PartialUser = LoosePartial<User>
// { id?: number; name?: string; email?: string }

const user: PartialUser = {
  name: 'John'
  // id 和 email 可以省略
}
```

### 与更新函数一起使用

```typescript
function updateUser(id: number, updates: LoosePartial<User>) {
  // 只更新提供的字段
}

updateUser(1, { name: 'Jane' })
updateUser(2, { email: 'jane@example.com', name: 'Jane' })
```

## 相关

- [`RequiredKeys`](./required-keys) - 获取必需属性的键
- [`OptionalKeys`](./optional-keys) - 获取可选属性的键
