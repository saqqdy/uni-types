# GraphQL 集成

**自 1.5.0 起**

用于 GraphQL 模式和操作的类型工具。

## 概述

GraphQL 集成模块提供了完整的 GraphQL 类型系统支持，包括模式定义、查询类型、变更操作和解析器类型。这些类型可以帮助你在 TypeScript 中构建类型安全的 GraphQL 应用，确保前端查询与后端模式的一致性。

通过这些类型工具，你可以定义强类型的 GraphQL 模式、验证查询变量类型，以及为解析器提供完整的类型推导。

## 基本用法

```typescript
import type { GraphQLSchema, GraphQLQuery, GraphQLMutation, GraphQLResolver } from 'uni-types'

// 定义 GraphQL 模式
type MySchema = GraphQLSchema<{
  user: { id: string; name: string }
  posts: { id: string; title: string }[]
}>

// 定义查询类型
type GetUserQuery = GraphQLQuery<
  { id: string; name: string },
  { userId: string }
>

// 定义变更类型
type CreateUserMutation = GraphQLMutation<
  { id: string },
  { name: string; email: string }
>

// 定义解析器
type UserResolver = GraphQLResolver<{ id: string; name: string }, MyContext>
```

## 主要类型

### GraphQLSchema

GraphQL 模式类型表示，定义查询、变更和订阅的根类型。

```typescript
type GraphQLSchema<T> = {
  query: T
  mutation?: T
  subscription?: T
  types: Record<string, GraphQLType<any>>
}
```

### GraphQLQuery

GraphQL 查询类型，包含变量和返回类型。

```typescript
type GraphQLQuery<T, V = Record<string, never>> = {
  __query?: string
  variables: V
  return: T
}
```

### GraphQLMutation

GraphQL 变更类型，用于定义数据修改操作。

```typescript
type GraphQLMutation<T, V = Record<string, never>> = {
  __mutation?: string
  variables: V
  return: T
}
```

### GraphQLResolver

GraphQL 解析器函数类型，提供父对象、参数、上下文和解析信息的类型安全。

```typescript
type GraphQLResolver<T, C = unknown, A = Record<string, unknown>> = (
  parent: unknown,
  args: A,
  context: C,
  info: GraphQLResolveInfo
) => T | Promise<T>
```

### GraphQLSelection

GraphQL 选择集类型，用于定义查询的字段选择。

```typescript
type GraphQLSelection<T> = {
  [K in keyof T]: T[K] extends object ? GraphQLSelection<T[K]> : boolean
}
```

## 相关

- [API 参考](/zh/api/graphql/)
