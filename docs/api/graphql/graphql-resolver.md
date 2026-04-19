# GraphQLResolver

**Since 1.5.0**

Represents a GraphQL resolver function that returns data for a field.

## Signature

```typescript
type GraphQLResolver<T, C = unknown, A = Record<string, unknown>> = (
  parent: unknown,
  args: A,
  context: C,
  info: GraphQLResolveInfo
) => T | Promise<T>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The return type of the resolver |
| `C` | The context type passed to the resolver |
| `A` | The arguments type for the resolver |

## Examples

### Basic Usage

```typescript
import type { GraphQLResolver } from 'uni-types'

type UserResolver = GraphQLResolver<
  { id: string; name: string },
  { db: Database },
  { userId: string }
>

const resolveUser: UserResolver = async (parent, args, context) => {
  const user = await context.db.findUser(args.userId)
  return { id: user.id, name: user.name }
}
```

### With Arguments

```typescript
import type { GraphQLResolver, GraphQLResolveInfo } from 'uni-types'

type PostResolver = GraphQLResolver<
  Post[],
  { userId: string },
  { limit: number; offset: number }
>

const resolvePosts: PostResolver = async (
  parent,
  args,
  context,
  info: GraphQLResolveInfo
) => {
  return context.db.getPosts(args.limit, args.offset)
}
```

## Related

- [`GraphQLFieldResolver`](./graphql-field-resolver)
- [`GraphQLContext`](./graphql-context)
