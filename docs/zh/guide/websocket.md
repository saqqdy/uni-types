# WebSocket 与实时通信

**自 1.5.0 起**

用于实时通信和 WebSocket 连接的类型工具。

## 概述

WebSocket 模块提供了实时通信所需的完整类型支持，包括 WebSocket 消息、事件处理、流式传输和发布订阅模式。这些类型可以帮助你构建响应式的实时应用程序，如聊天应用、实时数据仪表盘和协作工具。

模块支持多种实时通信模式，包括点对点消息传递、广播通道和数据流处理，确保类型安全贯穿整个通信链路。

## 基本用法

```typescript
import type { WebSocketMessage, WebSocketEvent, Stream, PubSub, RealTimeChannel } from 'uni-types'

// 定义 WebSocket 消息类型
type ChatMessage = WebSocketMessage<{
  text: string
  sender: string
  timestamp: number
}>

// 定义事件映射
interface MyEvents {
  message: { content: string }
  notification: { type: string; data: unknown }
}

// 使用流类型
type DataStream = Stream<number>
```

## 主要类型

### WebSocketMessage

WebSocket 消息类型，包含类型、载荷和时间戳。

```typescript
type WebSocketMessage<T = unknown> = {
  type: string
  payload: T
  timestamp?: number
  id?: string
}
```

### WebSocketEvent

WebSocket 事件类型，用于表示连接事件和数据事件。

```typescript
type WebSocketEvent<T = unknown> = {
  event: string
  data: T
  timestamp: number
}
```

### Stream

异步流类型，支持异步迭代器协议。

```typescript
type Stream<T = unknown> = {
  [Symbol.asyncIterator]: () => AsyncIterator<T>
  readable: boolean
  closed: boolean
}
```

### PubSub

发布订阅类型，实现消息的多播分发。

```typescript
type PubSub<T = unknown> = {
  publish: (topic: string, message: T) => void
  subscribe: (topic: string, handler: (message: T) => void) => () => void
  unsubscribe: (topic: string, handler?: (message: T) => void) => void
  topics: string[]
}
```

### RealTimeChannel

实时通道类型，用于管理订阅和消息发布。

```typescript
type RealTimeChannel<T = unknown> = {
  name: string
  subscribe: (handler: (message: T) => void) => () => void
  publish: (message: T) => void
  unsubscribe: (handler: (message: T) => void) => void
  close: () => void
}
```

## 相关

- [API 参考](/zh/api/websocket/)
