# GraphQLMutation

**Since 1.5.0**

Represents a GraphQL mutation with typed variables and return type.

## Signature

```typescript
type GraphQLMutation<T, V = Record<string, never>> = {
  __mutation?: string
  variables: V
  return: T
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The return type of the mutation |
| `V` | The variables type for the mutation (defaults to empty object) |

## Examples

### Basic Usage

```typescript
import type { GraphQLMutation } from 'uni-types'

type CreatePostMutation = GraphQLMutation<
  { createPost: { id: string; title: string } },
  { title: string; content: string }
>

const mutation: CreatePostMutation = {
  variables: { title: 'Hello', content: 'World' },
  return: { createPost: { id: '1', title: 'Hello' } }
}
```

### With Optional Fields

```typescript
import type { GraphQLMutation } from 'uni-types'

type UpdateUserMutation = GraphQLMutation<
  { updateUser: { id: string; name: string } },
  { id: string; name?: string; email?: string }
>

const updateMutation: UpdateUserMutation = {
  variables: { id: '123', name: 'Jane' },
  return: { updateUser: { id: '123', name: 'Jane' } }
}
```

## Related

- [`GraphQLQuery`](./graphql-query)
- [`GraphQLResolver`](./graphql-resolver)
