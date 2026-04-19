# GraphQLSchema

**自 1.5.0 起**

GraphQL 模架类型表示，定义了 GraphQL 模架的结构，包括查询、变更、订阅和类型定义。

## 签名

```typescript
type GraphQLSchema<T> = {
  query: T
  mutation?: T
  subscription?: T
  types: Record<string, GraphQLType<any>>
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 查询、变更和订阅的类型定义 |

## 示例

### 基本用法

```typescript
import type { GraphQLSchema } from 'uni-types'

type AppSchema = GraphQLSchema<{
  getUser: { id: string; name: string }
  createUser: { name: string; email: string }
}>

// 定义完整的 GraphQL 模架
const schema: AppSchema = {
  query: { getUser: { id: '1', name: '张三' } },
  mutation: { createUser: { name: '李四', email: 'li@example.com' } },
  types: {
    User: { id: 'String', name: 'String', email: 'String' }
  }
}
```

### 定义订阅模架

```typescript
import type { GraphQLSchema, GraphQLType } from 'uni-types'

type SubscriptionSchema = GraphQLSchema<{
  messages: { id: string; content: string }
  notifications: { type: string; message: string }
}>

const subscriptionSchema: SubscriptionSchema = {
  query: {},
  subscription: {
    messages: { id: 'msg-1', content: '你好' }
  },
  types: {
    Message: 'String',
    Notification: 'String'
  }
}
```

## 相关

- [`GraphQLType`](./graphql-type)
- [`GraphQLQuery`](./graphql-query)
- [`GraphQLMutation`](./graphql-mutation)