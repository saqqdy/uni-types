# Event-Driven Architecture

**Since 1.5.0**

Types for event-driven patterns and architectures.

## Overview

Event-Driven Architecture provides types for implementing event sourcing, CQRS, sagas, and message queues. It supports building scalable, loosely-coupled systems with proper typing for events, commands, queries, and their handlers.

This module is essential for building reactive applications that respond to changes in real-time. It includes types for event buses, event stores, command and query handling, and saga orchestration for distributed transactions.

## Basic Usage

```typescript
import type { EventBus, Command, Query, Saga, EventHandler } from 'uni-types'

// Define typed events
type UserEvents = {
  userCreated: { userId: string; email: string }
  userUpdated: { userId: string; changes: Partial<User> }
}

// Typed event bus
type UserEventBus = EventBus<UserEvents>

// Typed command
type CreateUserCommand = Command<'createUser', { email: string; name: string }>
```

## Key Types

### EventBus

Event bus for publishing and subscribing to typed events.

```typescript
type EventBus<T extends Record<string, unknown> = Record<string, unknown>> = {
  publish<E extends keyof T>(event: E, data: T[E]): void
  subscribe<E extends keyof T>(
    event: E,
    handler: (data: T[E]) => void | Promise<void>
  ): () => void
  emit: <E extends keyof T>(event: E, data: T[E]) => Promise<void>
}
```

### Command

Command type for CQRS pattern.

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

Query type for CQRS read operations.

```typescript
type Query<T = string, R = unknown> = {
  type: T
  params: R
  timestamp: EventTimestamp
  queryId: string
}
```

### Saga

Saga type for distributed transaction management.

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

Message queue for asynchronous processing.

```typescript
type MessageQueue<M = unknown> = {
  publish: (message: M) => Promise<void>
  consume: (handler: (message: M) => Promise<void>) => void
  ack: (messageId: string) => Promise<void>
  nack: (messageId: string, reason?: string) => Promise<void>
  close: () => Promise<void>
}
```

## Related

- [API Reference](/api/event/)
- [WebSocket & Real-Time](./websocket) - Real-time types
