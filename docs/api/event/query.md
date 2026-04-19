# Query

**Since 1.5.0**

Represents a query in CQRS pattern with type, parameters, and metadata.

## Signature

```typescript
type Query<T = string, R = unknown> = {
  type: T
  params: R
  timestamp: EventTimestamp
  queryId: string
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The query type identifier (string) |
| `R` | The parameters type for the query |

## Examples

### Basic Usage

```typescript
import type { Query } from 'uni-types'

type GetUserQuery = Query<
  'getUser',
  { userId: string }
>

const query: GetUserQuery = {
  type: 'getUser',
  params: { userId: 'u-123' },
  timestamp: Date.now(),
  queryId: 'q-001'
}
```

### Paginated Query

```typescript
import type { Query } from 'uni-types'

type ListOrdersQuery = Query<
  'listOrders',
  { userId: string; limit: number; offset: number }
>

const listQuery: ListOrdersQuery = {
  type: 'listOrders',
  params: { userId: 'u-42', limit: 10, offset: 0 },
  timestamp: Date.now(),
  queryId: 'q-list-001'
}
```

## Related

- [`Command`](./command)
- [`QueryHandler`](./query-handler)
