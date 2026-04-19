# WebSocketEvent

**Since 1.5.0**

Represents a typed WebSocket event with an event name, data, and timestamp.

## Signature

```typescript
type WebSocketEvent<T = unknown> = {
  event: string
  data: T
  timestamp: number
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The data type carried by the event |

## Examples

### Basic Usage

```typescript
import type { WebSocketEvent } from 'uni-types'

type NotificationData = { title: string; body: string }

const event: WebSocketEvent<NotificationData> = {
  event: 'notification',
  data: { title: 'New Message', body: 'You have a new message' },
  timestamp: Date.now()
}
```

### Status Event

```typescript
import type { WebSocketEvent } from 'uni-types'

type StatusData = { userId: string; online: boolean }

const statusEvent: WebSocketEvent<StatusData> = {
  event: 'user:status',
  data: { userId: 'u-42', online: true },
  timestamp: Date.now()
}
```

## Related

- [`WebSocketMessage`](./websocket-message)
- [`RealTimeChannel`](./realtime-channel)
