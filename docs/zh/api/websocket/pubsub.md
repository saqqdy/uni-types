# PubSub

**自 1.5.0 起**

发布/订阅类型，实现基于主题的消息发布与订阅模式。

## 签名

```typescript
type PubSub<T = unknown> = {
  publish: (topic: string, message: T) => void
  subscribe: (topic: string, handler: (message: T) => void) => () => void
  unsubscribe: (topic: string, handler?: (message: T) => void) => void
  topics: string[]
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 发布/订阅消息的数据类型 |

## 示例

### 基本用法

```typescript
import type { PubSub } from 'uni-types'

// 定义通知发布/订阅
type NotificationPubSub = PubSub<{
  id: string
  title: string
  body: string
  read: boolean
}>

const pubsub: NotificationPubSub = {
  publish: (topic, message) => {},
  subscribe: (topic, handler) => {
    handler({ id: '1', title: '新通知', body: '您有新消息', read: false })
    return () => {}
  },
  unsubscribe: (topic, handler) => {},
  topics: ['notifications', 'alerts']
}
```

### 订单事件发布/订阅

```typescript
import type { PubSub } from 'uni-types'

// 定义订单事件发布/订阅
type OrderEventPubSub = PubSub<{
  orderId: string
  event: 'created' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
  timestamp: Date
  data?: unknown
}>

const orderPubsub: OrderEventPubSub = {
  publish: (topic, message) => {
    console.log(`发布到 ${topic}: 订单 ${message.orderId} 状态 ${message.event}`)
  },
  subscribe: (topic, handler) => {
    return () => console.log(`取消订阅 ${topic}`)
  },
  unsubscribe: (topic) => {},
  topics: ['order-events', 'payment-events']
}
```

## 相关

- [`WebSocketMessage`](./websocket-message)
- [`RealTimeChannel`](./realtime-channel)
- [`Stream`](./stream)