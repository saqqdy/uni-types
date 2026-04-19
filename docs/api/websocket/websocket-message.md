# WebSocketMessage

**Since 1.5.0**

Represents a typed WebSocket message with a type discriminator, payload, and metadata.

## Signature

```typescript
type WebSocketMessage<T = unknown> = {
  type: string
  payload: T
  timestamp?: number
  id?: string
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The payload type of the message |

## Examples

### Basic Usage

```typescript
import type { WebSocketMessage } from 'uni-types'

type ChatPayload = { userId: string; text: string }

const message: WebSocketMessage<ChatPayload> = {
  type: 'chat',
  payload: { userId: 'u1', text: 'Hello!' },
  timestamp: Date.now(),
  id: 'msg-001'
}
```

### System Message

```typescript
import type { WebSocketMessage } from 'uni-types'

const pingMessage: WebSocketMessage<null> = {
  type: 'ping',
  payload: null,
  timestamp: Date.now()
}

const pongMessage: WebSocketMessage<null> = {
  type: 'pong',
  payload: null,
  id: 'pong-001'
}
```

## Related

- [`WebSocketEvent`](./websocket-event)
- [`WebSocketHandler`](./websocket-handler)
