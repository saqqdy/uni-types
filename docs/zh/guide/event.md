# 事件驱动架构

**自 1.5.0 起**

用于事件驱动模式和架构的类型工具。

## 概述

事件驱动模块提供了构建事件驱动系统所需的完整类型支持，包括事件总线、事件溯源、CQRS 模式和 Saga 模式。这些类型可以帮助你设计松耦合、可扩展的分布式系统。

通过这些类型工具，你可以实现事件发布订阅、命令查询分离、以及复杂业务流程的编排和补偿机制，适用于微服务架构和领域驱动设计。

## 基本用法

```typescript
import type { EventBus, EventStore, Command, Query, Saga, MessageQueue } from 'uni-types'

// 定义事件映射
interface UserEvents {
  userCreated: { id: string; name: string }
  userUpdated: { id: string; changes: Record<string, unknown> }
}

// 使用事件总线
type MyEventBus = EventBus<UserEvents>

// 定义命令
type CreateUserCommand = Command<'createUser', { name: string; email: string }>

// 定义查询
type GetUserQuery = Query<'getUser', { id: string }>
```

## 主要类型

### EventBus

事件总线类型，提供事件的发布和订阅功能。

```typescript
type EventBus<T extends Record<string, unknown> = Record<string, unknown>> = {
  publish<E extends keyof T>(event: E, data: T[E]): void
  subscribe<E extends keyof T>(event: E, handler: (data: T[E]) => void | Promise<void>): () => void
  emit: <E extends keyof T>(event: E, data: T[E]) => Promise<void>
}
```

### EventStore

事件存储类型，用于事件溯源模式中的事件持久化。

```typescript
type EventStore<E = unknown> = {
  append: (event: E) => Promise<void>
  getEvents: (aggregateId: string) => Promise<E[]>
  getAllEvents: () => Promise<E[]>
  subscribe: (handler: (event: E) => void) => () => void
}
```

### Command

CQRS 命令类型，表示改变系统状态的操作请求。

```typescript
type Command<T = string, P = unknown> = {
  type: T
  payload: P
  timestamp: EventTimestamp
  commandId: string
  aggregateId?: string
}
```

### Query

CQRS 查询类型，表示读取系统数据的操作请求。

```typescript
type Query<T = string, R = unknown> = {
  type: T
  params: R
  timestamp: EventTimestamp
  queryId: string
}
```

### Saga

Saga 模式类型，用于管理长运行事务和补偿操作。

```typescript
type Saga<T = unknown> = {
  sagaId: string
  steps: SagaStep[]
  currentStep: number
  status: SagaStatus
  context: T
  compensations: SagaCompensation[]
}
```

### MessageQueue

消息队列类型，实现异步消息处理。

```typescript
type MessageQueue<M = unknown> = {
  publish: (message: M) => Promise<void>
  consume: (handler: (message: M) => Promise<void>) => void
  ack: (messageId: string) => Promise<void>
  nack: (messageId: string, reason?: string) => Promise<void>
}
```

## 相关

- [API 参考](/zh/api/event/)
