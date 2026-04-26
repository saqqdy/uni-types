# Event System Types

**Since 1.9.0**

Types for advanced event-driven architecture.

## Overview

Event System Types provides type-level event system utilities. It supports event emitters, event buses, event queues, subscriptions, pattern matching, aggregation, and history management.

This module enables building type-safe event-driven applications with proper constraints for events, handlers, and event propagation.

## Basic Usage

```typescript
import type { Event, EventEmitter, EventBus, EventSubscription, EventHandler } from 'uni-types'

// Define event type
type ClickEvent = Event<{ x: number, y: number }, 'click'>

// Define event emitter
type MyEmitter = EventEmitter<{ click: ClickEvent, hover: HoverEvent }>

// Define event handler
type ClickHandler = EventHandler<ClickEvent>
```

## Key Types

### Event

Base event interface.

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

Typed event with specific type.

```typescript
type TypedEvent<K extends string, V = unknown> = Event<V, K> & { type: K }
```

### EventEmitter

Event emitter interface.

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

Event bus interface.

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

Event subscription type.

```typescript
interface EventSubscription {
  unsubscribe: () => void
  closed: boolean
  eventType: EventType
}
```

### EventHandler

Event handler function.

```typescript
type EventHandler<T = unknown> = (event: Event<T>) => void | boolean | Promise<void | boolean>
```

### EventQueue

Event queue interface.

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

Subscription interface.

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

Propagation phase types.

```typescript
type PropagationPhase =
  | 'capturing'
  | 'at-target'
  | 'bubbling'
```

### EventPattern

Event pattern (string or regex).

```typescript
type EventPattern = string | RegExp
```

### DomainEvent

Domain event for DDD.

```typescript
interface DomainEvent<A = string, T = unknown> extends Event<T> {
  aggregateId: A
  aggregateType: string
  version: number
}
```

## Related

- [Error Handling](./error-handling) - Error types
- [Reactive Programming](./reactive) - Reactive types
- [WebSocket](./websocket) - WebSocket types