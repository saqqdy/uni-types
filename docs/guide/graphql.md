# GraphQL Integration

**Since 1.5.0**

Type utilities for GraphQL schemas and operations.

## Overview

GraphQL Integration provides comprehensive type utilities for building type-safe GraphQL applications. It includes types for schema definitions, queries, mutations, subscriptions, and resolvers, enabling full type safety across your GraphQL layer.

This module helps bridge the gap between TypeScript and GraphQL, ensuring that your resolvers, queries, and mutations are all properly typed. It supports schema-first and code-first approaches with utilities for converting between TypeScript and GraphQL types.

## Basic Usage

```typescript
import type { GraphQLSchema, GraphQLQuery, GraphQLResolver, GraphQLContext } from 'uni-types'

// Define a typed schema
type UserSchema = GraphQLSchema<{
  Query: { user: User }
  Mutation: { createUser: User }
}>

// Typed query
type GetUserQuery = GraphQLQuery<User, { id: string }>
// { __query?: string; variables: { id: string }; return: User }

// Typed resolver
type UserResolver = GraphQLResolver<User, Context, { id: string }>
```

## Key Types

### GraphQLSchema

Schema type representation with query, mutation, and subscription definitions.

```typescript
type GraphQLSchema<T> = {
  query: T
  mutation?: T
  subscription?: T
  types: Record<string, GraphQLType<any>>
}
```

### GraphQLQuery

Typed GraphQL query with variables and return type.

```typescript
type GraphQLQuery<T, V = Record<string, never>> = {
  __query?: string
  variables: V
  return: T
}
```

### GraphQLResolver

Resolver function type with parent, args, context, and info.

```typescript
type GraphQLResolver<T, C = unknown, A = Record<string, unknown>> = (
  parent: unknown,
  args: A,
  context: C,
  info: GraphQLResolveInfo
) => T | Promise<T>
```

### GraphQLContext

Typed GraphQL context for resolvers.

```typescript
type GraphQLContext<T = Record<string, unknown>> = T & {
  __graphqlContext?: true
}
```

### GraphQLFragment

Fragment type for reusable selections.

```typescript
type GraphQLFragment<T, N extends string> = {
  __fragment: N
  __typename?: string
} & T
```

## Related

- [API Reference](/api/graphql/)
- [HTTP & API](./http) - HTTP types
