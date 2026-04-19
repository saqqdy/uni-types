# GraphQLResolver

**自 1.5.0 起**

GraphQL 解析器函数类型，用于定义字段的解析逻辑。

## 签名

```typescript
type GraphQLResolver<T, C = unknown, A = Record<string, unknown>> = (
  parent: unknown,
  args: A,
  context: C,
  info: GraphQLResolveInfo
) => T | Promise<T>
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 解析器返回值类型 |
| `C` | GraphQL 上下文类型 |
| `A` | 解析器参数类型 |

## 示例

### 基本用法

```typescript
import type { GraphQLResolver, GraphQLResolveInfo } from 'uni-types'

// 定义用户查询解析器
type UserResolver = GraphQLResolver<
  { id: string; name: string; email: string },
  { userId: string },
  { userId: string }
>

const userResolver: UserResolver = (
  parent,
  args,
  context,
  info: GraphQLResolveInfo
) => {
  return {
    id: args.userId,
    name: '张三',
    email: 'zhang@example.com'
  }
}
```

### 异步解析器

```typescript
import type { GraphQLResolver, GraphQLResolveInfo } from 'uni-types'

// 定义异步用户创建解析器
type CreateUserResolver = GraphQLResolver<
  { id: string; name: string },
  { name: string; email: string },
  { db: Database }
>

const createUserResolver: CreateUserResolver = async (
  parent,
  args,
  context,
  info
) => {
  // 从数据库创建用户
  const user = await context.db.users.create({
    name: args.name,
    email: args.email
  })
  return user
}
```

## 相关

- [`GraphQLQuery`](./graphql-query)
- [`GraphQLMutation`](./graphql-mutation)
- [`GraphQLSelection`](./graphql-selection)