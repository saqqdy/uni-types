# GraphQLMutation

**自 1.5.0 起**

GraphQL 变更类型，定义变更操作的变量和返回类型。

## 签名

```typescript
type GraphQLMutation<T, V = Record<string, never>> = {
  __mutation?: string
  variables: V
  return: T
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 变更操作返回的数据类型 |
| `V` | 变更变量类型，默认为空对象 |

## 示例

### 基本用法

```typescript
import type { GraphQLMutation } from 'uni-types'

// 定义创建用户的变更
type CreateUserMutation = GraphQLMutation<
  { id: string; name: string; createdAt: Date },
  { name: string; email: string }
>

const mutation: CreateUserMutation = {
  variables: { name: '张三', email: 'zhang@example.com' },
  return: { id: 'user-123', name: '张三', createdAt: new Date() }
}
```

### 更新操作变更

```typescript
import type { GraphQLMutation } from 'uni-types'

// 定义更新用户信息的变更
type UpdateUserMutation = GraphQLMutation<
  { success: boolean; user: { id: string; name: string } },
  { userId: string; updates: { name?: string; email?: string } }
>

const updateMutation: UpdateUserMutation = {
  variables: {
    userId: 'user-123',
    updates: { name: '李四' }
  },
  return: {
    success: true,
    user: { id: 'user-123', name: '李四' }
  }
}
```

## 相关

- [`GraphQLQuery`](./graphql-query)
- [`GraphQLSchema`](./graphql-schema)
- [`GraphQLResolver`](./graphql-resolver)