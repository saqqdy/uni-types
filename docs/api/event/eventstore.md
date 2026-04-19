# EventStore

**Since 1.5.0**

Event store for event sourcing with append, retrieval, and subscription capabilities.

## Signature

```typescript
type EventStore<E = unknown> = {
  append: (event: E) => Promise<void>
  getEvents: (aggregateId: string) => Promise<E[]>
  getAllEvents: () => Promise<E[]>
  subscribe: (handler: (event: E) => void) => () => void
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `E` | The event type stored |

## Examples

### Basic Usage

```typescript
import type { EventStore } from 'uni-types'

type OrderEvent = {
  type: 'created' | 'shipped' | 'delivered'
  orderId: string
  timestamp: Date
}

const store: EventStore<OrderEvent> = {
  append: async (event) => { /* persist */ },
  getEvents: async (aggregateId) => { return [] },
  getAllEvents: async () => { return [] },
  subscribe: (handler) => { return () => {} }
}

await store.append({ type: 'created', orderId: 'o1', timestamp: new Date() })

const events = await store.getEvents('o1')
```

### Aggregate Events

```typescript
import type { EventStore, BaseEvent } from 'uni-types'

type UserCreated = BaseEvent<'user:created', { userId: string; name: string }>
type UserUpdated = BaseEvent<'user:updated', { userId: string; changes: object }>

type UserEvent = UserCreated | UserUpdated

const userStore: EventStore<UserEvent> = {
  append: async (event) => { /* persist */ },
  getEvents: async (aggregateId) => { return [] },
  getAllEvents: async () => { return [] },
  subscribe: (handler) => { return () => {} }
}

const unsubscribe = userStore.subscribe((event) => {
  console.log(`${event.type}: ${event.payload.userId}`)
})
```

## Related

- [`EventBus`](./eventbus)
- [`Command`](./command)
