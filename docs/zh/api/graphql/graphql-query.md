# GraphQLQuery

**自 1.5.0 起**

GraphQL 查询类型，定义查询的变量和返回类型。

## 签名

```typescript
type GraphQLQuery<T, V = Record<string, never>> = {
  __query?: string
  variables: V
  return: T
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 查询返回的数据类型 |
| `V` | 查询变量类型，默认为空对象 |

## 示例

### 基本用法

```typescript
import type { GraphQLQuery } from 'uni-types'

// 定义获取用户信息的查询
type GetUserQuery = GraphQLQuery<
  { id: string; name: string; email: string },
  { userId: string }
>

const query: GetUserQuery = {
  variables: { userId: '123' },
  return: { id: '123', name: '张三', email: 'zhang@example.com' }
}
```

### 多变量查询

```typescript
import type { GraphQLQuery } from 'uni-types'

// 定义搜索用户的查询
type SearchUsersQuery = GraphQLQuery<
  { users: Array<{ id: string; name: string }> },
  { keyword: string; limit: number; offset: number }
>

const searchQuery: SearchUsersQuery = {
  variables: { keyword: '张', limit: 10, offset: 0 },
  return: {
    users: [
      { id: '1', name: '张三' },
      { id: '2', name: '张四' }
    ]
  }
}
```

## 相关

- [`GraphQLMutation`](./graphql-mutation)
- [`GraphQLSchema`](./graphql-schema)
- [`GraphQLResolver`](./graphql-resolver)