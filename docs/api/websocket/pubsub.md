# PubSub

**Since 1.5.0**

Represents a publish-subscribe pattern for topic-based message distribution.

## Signature

```typescript
type PubSub<T = unknown> = {
  publish: (topic: string, message: T) => void
  subscribe: (topic: string, handler: (message: T) => void) => () => void
  unsubscribe: (topic: string, handler?: (message: T) => void) => void
  topics: string[]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The message type published and subscribed to |

## Examples

### Basic Usage

```typescript
import type { PubSub } from 'uni-types'

type Notification = { title: string; body: string }

const pubsub: PubSub<Notification> = {
  publish: (topic, message) => { /* broadcast */ },
  subscribe: (topic, handler) => { return () => {} },
  unsubscribe: (topic, handler) => { /* remove handler */ },
  topics: ['alerts', 'updates']
}

const unsubscribe = pubsub.subscribe('alerts', (msg) => {
  console.log(msg.title, msg.body)
})

pubsub.publish('alerts', { title: 'Alert', body: 'Server down' })
unsubscribe()
```

### Chat Rooms

```typescript
import type { PubSub } from 'uni-types'

type ChatMessage = { user: string; text: string; roomId: string }

const chatPubSub: PubSub<ChatMessage> = {
  publish: (topic, message) => { /* emit */ },
  subscribe: (topic, handler) => { return () => {} },
  unsubscribe: (topic, handler) => { /* remove */ },
  topics: ['room-1', 'room-2']
}

chatPubSub.subscribe('room-1', (msg) => {
  console.log(`[${msg.roomId}] ${msg.user}: ${msg.text}`)
})
```

## Related

- [`RealTimeChannel`](./realtime-channel)
- [`WebSocketMessage`](./websocket-message)
