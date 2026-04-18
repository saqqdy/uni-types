# QueryBuilder

**Since 1.4.0**

Type-safe query builder.

## Signature

```typescript
interface QueryBuilder<T extends Record<string, any>> {
  select: <Fields extends (keyof T)[]>(fields: Fields) => SelectQuery<T, Fields>
  insert: (data: Partial<T>) => InsertQuery<T>
  update: (data: Partial<T>) => UpdateQuery<T>
  delete: () => DeleteQuery<T>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Table row type |

## Description

Type-safe query builder for database operations.

## Examples

### Basic Usage

```typescript
import type { QueryBuilder } from 'uni-types'

interface User {
  id: number
  name: string
  email: string
}

type UserQuery = QueryBuilder<User>
```

## Related

- [`WhereBuilder`](./wherebuilder) - WHERE clause builder
- [`SelectQuery`](./selectquery) - SELECT query type