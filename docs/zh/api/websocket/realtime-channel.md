# RealTimeChannel

**自 1.5.0 起**

实时通道类型，用于建立和管理实时通信频道。

## 签名

```typescript
type RealTimeChannel<T = unknown> = {
  name: string
  subscribe: (handler: (message: T) => void) => () => void
  publish: (message: T) => void
  unsubscribe: (handler: (message: T) => void) => void
  close: () => void
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 通道中传输的消息类型 |

## 示例

### 基本用法

```typescript
import type { RealTimeChannel } from 'uni-types'

// 定义聊天室通道
type ChatChannel = RealTimeChannel<{
  userId: string
  username: string
  message: string
  timestamp: number
}>

const chatChannel: ChatChannel = {
  name: 'chat-room-1',
  subscribe: (handler) => {
    handler({ userId: 'u-1', username: '张三', message: '大家好！', timestamp: Date.now() })
    return () => {}
  },
  publish: (message) => {},
  unsubscribe: (handler) => {},
  close: () => console.log('聊天室已关闭')
}
```

### 股票行情通道

```typescript
import type { RealTimeChannel } from 'uni-types'

// 定义股票行情通道
type StockChannel = RealTimeChannel<{
  symbol: string
  price: number
  change: number
  volume: number
  updatedAt: Date
}>

const stockChannel: StockChannel = {
  name: 'stock:AAPL',
  subscribe: (handler) => {
    handler({ symbol: 'AAPL', price: 175.50, change: 2.3, volume: 1000000, updatedAt: new Date() })
    return () => {}
  },
  publish: (message) => {},
  unsubscribe: (handler) => {},
  close: () => {}
}
```

## 相关

- [`WebSocketMessage`](./websocket-message)
- [`WebSocketEvent`](./websocket-event)
- [`PubSub`](./pubsub)