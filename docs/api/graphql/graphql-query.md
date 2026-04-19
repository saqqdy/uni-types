# GraphQLQuery

**Since 1.5.0**

Represents a GraphQL query with typed variables and return type.

## Signature

```typescript
type GraphQLQuery<T, V = Record<string, never>> = {
  __query?: string
  variables: V
  return: T
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The return type of the query |
| `V` | The variables type for the query (defaults to empty object) |

## Examples

### Basic Usage

```typescript
import type { GraphQLQuery } from 'uni-types'

type GetUserQuery = GraphQLQuery<
  { user: { id: string; name: string } },
  { userId: string }
>

const query: GetUserQuery = {
  variables: { userId: '123' },
  return: { user: { id: '123', name: 'John' } }
}
```

### Without Variables

```typescript
import type { GraphQLQuery } from 'uni-types'

type ListUsersQuery = GraphQLQuery<{
  users: Array<{ id: string; email: string }>
}>

const listQuery: ListUsersQuery = {
  variables: {},
  return: { users: [] }
}
```

## Related

- [`GraphQLMutation`](./graphql-mutation)
- [`GraphQLSubscription`](./graphql-subscription)
