# Stream

**自 1.5.0 起**

流类型，支持异步迭代的数据流结构。

## 签名

```typescript
type Stream<T = unknown> = {
  [Symbol.asyncIterator]: () => AsyncIterator<T>
  readable: boolean
  closed: boolean
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 流中数据项的类型 |

## 示例

### 基本用法

```typescript
import type { Stream } from 'uni-types'

// 定义消息流
type MessageStream = Stream<{
  id: string
  content: string
  timestamp: number
}>

// 使用异步迭代消费流
async function consumeStream(stream: MessageStream) {
  for await (const message of stream) {
    console.log(`收到消息: ${message.content}`)
  }
}
```

### 传感器数据流

```typescript
import type { Stream } from 'uni-types'

// 定义传感器数据流
type SensorDataStream = Stream<{
  sensorId: string
  temperature: number
  humidity: number
  recordedAt: Date
}>

// 处理传感器数据流
async function processSensorData(stream: SensorDataStream) {
  if (!stream.readable || stream.closed) return

  for await (const reading of stream) {
    if (reading.temperature > 30) {
      console.warn(`传感器 ${reading.sensorId} 温度过高: ${reading.temperature}°C`)
    }
  }
}
```

## 相关

- [`WebSocketMessage`](./websocket-message)
- [`PubSub`](./pubsub)
- [`RealTimeChannel`](./realtime-channel)