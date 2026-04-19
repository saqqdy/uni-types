# GraphQLSchema

**Since 1.5.0**

Represents a GraphQL schema with query, mutation, and subscription types.

## Signature

```typescript
type GraphQLSchema<T> = {
  query: T
  mutation?: T
  subscription?: T
  types: Record<string, GraphQLType<any>>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type representing the root query, mutation, and subscription types |

## Examples

### Basic Usage

```typescript
import type { GraphQLSchema } from 'uni-types'

type BlogSchema = GraphQLSchema<{
  posts: Post[]
  users: User[]
}>

const schema: BlogSchema = {
  query: { posts: [], users: [] },
  types: {
    Post: { __typename: 'Post' },
    User: { __typename: 'User' }
  }
}
```

### With Mutations

```typescript
import type { GraphQLSchema } from 'uni-types'

type TodoSchema = GraphQLSchema<{
  todos: Todo[]
}, {
  createTodo: Todo
  deleteTodo: boolean
}>

const todoSchema: TodoSchema = {
  query: { todos: [] },
  mutation: { createTodo: {} as Todo, deleteTodo: true },
  types: {}
}
```

## Related

- [`GraphQLType`](./graphql-type)
- [`GraphQLQuery`](./graphql-query)
