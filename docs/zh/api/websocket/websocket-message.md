# WebSocketMessage

**自 1.5.0 起**

WebSocket 消息类型，定义 WebSocket 通信中的消息结构。

## 签名

```typescript
type WebSocketMessage<T = unknown> = {
  type: string
  payload: T
  timestamp?: number
  id?: string
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 消息载荷的数据类型 |

## 示例

### 基本用法

```typescript
import type { WebSocketMessage } from 'uni-types'

// 定义聊天消息
type ChatMessage = WebSocketMessage<{
  userId: string
  content: string
}>

const message: ChatMessage = {
  type: 'chat',
  payload: { userId: 'user-1', content: '你好！' },
  timestamp: Date.now(),
  id: 'msg-001'
}
```

### 系统通知消息

```typescript
import type { WebSocketMessage } from 'uni-types'

// 定义系统通知消息
type SystemNotification = WebSocketMessage<{
  level: 'info' | 'warning' | 'error'
  title: string
  body: string
}>

const notification: SystemNotification = {
  type: 'notification',
  payload: {
    level: 'warning',
    title: '系统维护',
    body: '系统将于今晚 22:00 进行维护'
  },
  timestamp: Date.now()
}
```

## 相关

- [`WebSocketEvent`](./websocket-event)
- [`PubSub`](./pubsub)
- [`RealTimeChannel`](./realtime-channel)