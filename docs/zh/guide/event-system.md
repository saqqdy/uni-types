# 事件系统类型

**始于 1.9.0**

用于高级事件驱动架构的类型。

## 概述

事件系统类型提供了类型级事件系统工具。它支持事件发射器、事件总线、事件队列、订阅、模式匹配、聚合和历史管理。

此模块支持构建具有事件、处理器和事件传播正确约束的类型安全事件驱动应用。

## 基本用法

```typescript
import type { Event, EventEmitter, EventBus, EventSubscription, EventHandler } from 'uni-types'

// 定义事件类型
type ClickEvent = Event<{ x: number, y: number }, 'click'>

// 定义事件发射器
type MyEmitter = EventEmitter<{ click: ClickEvent, hover: HoverEvent }>

// 定义事件处理器
type ClickHandler = EventHandler<ClickEvent>
```

## 核心类型

### Event

基础事件接口。

```typescript
interface Event<T = unknown, P extends EventType = EventType> {
  id?: EventId
  type: P
  payload: T
  timestamp: EventTimestamp
  source?: string
  target?: string
  correlationId?: string
  bubbles?: boolean
  cancelable?: boolean
  defaultPrevented?: boolean
  propagationStopped?: boolean
}
```

### TypedEvent

具有特定类型的类型化事件。

```typescript
type TypedEvent<K extends string, V = unknown> = Event<V, K> & { type: K }
```

### EventEmitter

事件发射器接口。

```typescript
interface EventEmitter<T extends EventMap = EventMap> {
  emit: <K extends keyof T>(type: K, payload: T[K]) => void
  emitAsync: <K extends keyof T>(type: K, payload: T[K]) => Promise<void>
  on: <K extends keyof T>(type: K, handler: EventHandler<T[K]>, options?: ListenerOptions) => EventSubscription
  once: <K extends keyof T>(type: K, handler: EventHandler<T[K]>) => EventSubscription
  off: <K extends keyof T>(type: K, handler: EventHandler<T[K]>) => boolean
  removeAllListeners: (type?: keyof T) => void
  listenerCount: (type: keyof T) => number
}
```

### EventBus

事件总线接口。

```typescript
interface EventBus<T extends EventMap = EventMap> extends EventEmitter<T> {
  publish: <K extends keyof T>(event: TypedEvent<K, T[K]>) => void
  subscribe: <K extends keyof T>(type: K, handler: EventHandler<T[K]>) => EventSubscription
  unsubscribe: (subscription: EventSubscription) => void
  getHistory: <K extends keyof T>(type: K, limit?: number) => Event<T[K]>[]
  clearHistory: (type?: keyof T) => void
}
```

### EventSubscription

事件订阅类型。

```typescript
interface EventSubscription {
  unsubscribe: () => void
  closed: boolean
  eventType: EventType
}
```

### EventHandler

事件处理函数。

```typescript
type EventHandler<T = unknown> = (event: Event<T>) => void | boolean | Promise<void | boolean>
```

### EventQueue

事件队列接口。

```typescript
interface EventQueue<T = unknown> {
  enqueue: (event: Event<T>) => void
  dequeue: () => Event<T> | undefined
  peek: () => Event<T> | undefined
  clear: () => void
  size: number
  empty: boolean
}
```

### Subscription

订阅接口。

```typescript
interface Subscription {
  id: string
  active: boolean
  unsubscribe: () => void
  pause: () => void
  resume: () => void
}
```

### PropagationPhase

传播阶段类型。

```typescript
type PropagationPhase =
  | 'capturing'
  | 'at-target'
  | 'bubbling'
```

### EventPattern

事件模式（字符串或正则）。

```typescript
type EventPattern = string | RegExp
```

### DomainEvent

用于 DDD 的领域事件。

```typescript
interface DomainEvent<A = string, T = unknown> extends Event<T> {
  aggregateId: A
  aggregateType: string
  version: number
}
```

## 相关

- [错误处理](./error-handling) - 错误类型
- [响应式编程](./reactive) - 响应式类型
- [WebSocket](./websocket) - WebSocket 类型