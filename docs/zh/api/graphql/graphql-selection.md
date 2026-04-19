# GraphQLSelection

**自 1.5.0 起**

GraphQL 选择集类型，用于定义查询中选择的字段。

## 签名

```typescript
type GraphQLSelection<T> = {
  [K in keyof T]: T[K] extends object ? GraphQLSelection<T[K]> : boolean
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 要选择的类型结构 |

## 示例

### 基本用法

```typescript
import type { GraphQLSelection } from 'uni-types'

// 定义用户类型的选择集
type UserSelection = GraphQLSelection<{
  id: string
  name: string
  email: string
  profile: {
    avatar: string
    bio: string
  }
}>

// 只选择 id 和 name
const selection: UserSelection = {
  id: true,
  name: true,
  email: false,
  profile: {
    avatar: true,
    bio: false
  }
}
```

### 嵌套选择集

```typescript
import type { GraphQLSelection } from 'uni-types'

// 定义文章类型及其作者的选择集
type ArticleSelection = GraphQLSelection<{
  id: string
  title: string
  content: string
  author: {
    id: string
    name: string
    avatar: string
  }
  comments: Array<{
    id: string
    text: string
    user: {
      name: string
    }
  }>
}>

const articleSelection: ArticleSelection = {
  id: true,
  title: true,
  content: false,
  author: {
    id: true,
    name: true,
    avatar: true
  },
  comments: {
    id: true,
    text: true,
    user: {
      name: true
    }
  }
}
```

## 相关

- [`GraphQLQuery`](./graphql-query)
- [`GraphQLResolver`](./graphql-resolver)
- [`GraphQLSchema`](./graphql-schema)