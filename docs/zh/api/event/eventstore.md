# EventStore

**自 1.5.0 起**

事件存储类型，用于持久化和检索事件，是事件溯源模式的核心组件。

## 签名

```typescript
type EventStore<E = unknown> = {
  append: (event: E) => Promise<void>
  getEvents: (aggregateId: string) => Promise<E[]>
  getAllEvents: () => Promise<E[]>
  subscribe: (handler: (event: E) => void) => () => void
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `E` | 存储的事件类型 |

## 示例

### 基本用法

```typescript
import type { EventStore, BaseEvent } from 'uni-types'

// 定义订单事件
type OrderEvent = BaseEvent<'order', {
  orderId: string
  action: 'created' | 'paid' | 'shipped'
  amount: number
}>

const orderStore: EventStore<OrderEvent> = {
  append: async (event) => { /* 追加事件到存储 */ },
  getEvents: async (aggregateId) => [],
  getAllEvents: async () => [],
  subscribe: (handler) => () => {}
}

// 追加事件
await orderStore.append({
  type: 'order',
  payload: { orderId: 'o-1', action: 'created', amount: 99.9 },
  timestamp: Date.now(),
  version: 1
})

// 获取聚合根的所有事件
const events = await orderStore.getEvents('o-1')
```

### 事件订阅与投影

```typescript
import type { EventStore, BaseEvent } from 'uni-types'

// 定义用户事件
type UserEvent = BaseEvent<'user', {
  userId: string
  action: 'registered' | 'updated' | 'deactivated'
  data: Record<string, unknown>
}>

const userStore: EventStore<UserEvent> = {
  append: async (event) => {},
  getEvents: async (aggregateId) => [],
  getAllEvents: async () => [],
  subscribe: (handler) => () => {}
}

// 订阅新事件
const unsubscribe = userStore.subscribe((event) => {
  console.log(`用户事件: ${event.payload.action}`, event.payload.data)
})

// 获取所有事件用于构建投影
const allEvents = await userStore.getAllEvents()
```

## 相关

- [`EventBus`](./eventbus)
- [`Command`](./command)
- [`Query`](./query)