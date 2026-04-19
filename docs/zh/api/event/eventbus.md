# EventBus

**自 1.5.0 起**

事件总线类型，用于实现事件的发布、订阅和管理，支持中间件和错误处理。

## 签名

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

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 事件名称与数据类型的映射表 |

## 示例

### 基本用法

```typescript
import type { EventBus } from 'uni-types'

// 定义事件映射
interface AppEvents {
  'user:created': { userId: string; name: string }
  'user:deleted': { userId: string }
  'order:placed': { orderId: string; total: number }
}

type AppEventBus = EventBus<AppEvents>

// 订阅用户创建事件
const unsubscribe = eventBus.subscribe('user:created', (data) => {
  console.log(`新用户创建: ${data.name}`)
})

// 发布事件
eventBus.publish('user:created', { userId: 'u-1', name: '张三' })
```

### 异步事件处理

```typescript
import type { EventBus } from 'uni-types'

interface OrderEvents {
  'order:created': { orderId: string; items: string[] }
  'order:shipped': { orderId: string; trackingNumber: string }
}

type OrderEventBus = EventBus<OrderEvents>

// 使用异步处理器
const eventBus: OrderEventBus = {
  publish: (event, data) => {},
  subscribe: (event, handler) => () => {},
  unsubscribe: (event, handler) => {},
  emit: async (event, data) => {
    console.log(`异步触发事件 ${String(event)}`)
  }
}

// 异步触发事件
await eventBus.emit('order:shipped', { orderId: 'o-1', trackingNumber: 'SF123456' })
```

## 相关

- [`EventStore`](./eventstore)
- [`Command`](./command)
- [`Saga`](./saga)