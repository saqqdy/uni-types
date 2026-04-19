# EventBus

**Since 1.5.0**

Typed event bus for publish-subscribe pattern with typed events and handlers.

## Signature

```typescript
type EventBus<T extends Record<string, unknown> = Record<string, unknown>> = {
  publish<E extends keyof T>(event: E, data: T[E]): void
  subscribe<E extends keyof T>(
    event: E,
    handler: (data: T[E]) => void | Promise<void>
  ): () => void
  unsubscribe<E extends keyof T>(
    event: E,
    handler: (data: T[E]) => void | Promise<void>
  ): void
  emit: <E extends keyof T>(event: E, data: T[E]) => Promise<void>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | A record mapping event names to their payload types |

## Examples

### Basic Usage

```typescript
import type { EventBus } from 'uni-types'

type AppEvents = {
  'user:created': { id: string; name: string }
  'user:deleted': { id: string }
  'order:placed': { orderId: string; userId: string }
}

const bus: EventBus<AppEvents> = {
  publish: (event, data) => { /* emit */ },
  subscribe: (event, handler) => { return () => {} },
  unsubscribe: (event, handler) => { /* remove */ },
  emit: async (event, data) => { /* async emit */ }
}

const unsubscribe = bus.subscribe('user:created', (data) => {
  console.log(`User created: ${data.name}`)
})

bus.emit('user:created', { id: 'u1', name: 'John' })
```

### Multiple Event Types

```typescript
import type { EventBus } from 'uni-types'

type Events = {
  'log:info': { message: string }
  'log:error': { message: string; error: Error }
}

const logBus: EventBus<Events> = {
  publish: (event, data) => { /* emit */ },
  subscribe: (event, handler) => { return () => {} },
  unsubscribe: (event, handler) => { /* remove */ },
  emit: async (event, data) => { /* async */ }
}

logBus.subscribe('log:error', (data) => {
  console.error(data.message, data.error)
})
```

## Related

- [`EventStore`](./eventstore)
- [`Command`](./command)
