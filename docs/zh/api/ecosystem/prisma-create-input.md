# PrismaCreateInput

为 Prisma 模型创建输入类型。

## 签名

```typescript
type PrismaCreateInput<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: T[K]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | Prisma 模型类型 |

## 描述

为 Prisma `create` 操作生成输入类型，适当地分离必需和可选字段。

## 示例

### 基本用法

```typescript
import type { PrismaCreateInput } from 'uni-types'

interface User {
  id: string
  name: string
  email: string
  age?: number
  createdAt: Date
}

type CreateInput = PrismaCreateInput<User>
// 必需: id, name, email, createdAt
// 可选: age
```

### 关联关系

```typescript
interface Post {
  id: string
  title: string
  authorId: string
  author?: User
}

type CreatePost = PrismaCreateInput<Post>
// 必需: id, title, authorId
// 可选: author (关联)
```

## 相关

- [`PrismaUpdateInput`](./prisma-update-input) - 更新输入类型
- [`PrismaWhereInput`](./prisma-where-input) - Where 输入类型
