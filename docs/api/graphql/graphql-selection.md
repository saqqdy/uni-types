# GraphQLSelection

**Since 1.5.0**

Represents a GraphQL selection set for type-safe field selection.

## Signature

```typescript
type GraphQLSelection<T> = {
  [K in keyof T]: T[K] extends object ? GraphQLSelection<T[K]> : boolean
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to create a selection for |

## Examples

### Basic Usage

```typescript
import type { GraphQLSelection } from 'uni-types'

type User = {
  id: string
  name: string
  email: string
  profile: {
    avatar: string
    bio: string
  }
}

type UserSelection = GraphQLSelection<User>

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

### Nested Selection

```typescript
import type { GraphQLSelection } from 'uni-types'

type Post = {
  id: string
  title: string
  author: {
    id: string
    name: string
  }
  comments: Array<{
    id: string
    text: string
  }>
}

type PostSelection = GraphQLSelection<Post>

const postSelection: PostSelection = {
  id: true,
  title: true,
  author: {
    id: true,
    name: true
  },
  comments: {
    id: true,
    text: true
  }
}
```

## Related

- [`GraphQLSelectionSet`](./graphql-selection-set)
- [`GraphQLFlatSelection`](./graphql-flat-selection)
