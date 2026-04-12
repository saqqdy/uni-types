# PrismaCreateInput

**Since 1.2.0**

Create input type for Prisma models.

## Signature

```typescript
type PrismaCreateInput<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The Prisma model type |

## Description

Generates the input type for Prisma `create` operations, separating required and optional fields appropriately.

## Examples

### Basic Usage

```typescript
import type { PrismaCreateInput } from 'uni-types'

interface User {
  id: string
  name: string
  email: string
  age?: number
  createdAt: Date
}

type CreateInput = PrismaCreateInput<User>
// Required: id, name, email, createdAt
// Optional: age
```

### With Relations

```typescript
interface Post {
  id: string
  title: string
  authorId: string
  author?: User
}

type CreatePost = PrismaCreateInput<Post>
// Required: id, title, authorId
// Optional: author (relation)
```

## Related

- [`PrismaUpdateInput`](./prisma-update-input) - Update input type
- [`PrismaWhereInput`](./prisma-where-input) - Where input type