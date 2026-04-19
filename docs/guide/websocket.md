# WebSocket & Real-Time

**Since 1.5.0**

Types for real-time communication with WebSocket and streaming.

## Overview

WebSocket & Real-Time provides types for building real-time applications using WebSockets, Server-Sent Events, and streaming APIs. It includes comprehensive types for message handling, event emitters, pub/sub patterns, and stream processing.

This module enables type-safe real-time features in your applications, from simple WebSocket connections to complex streaming pipelines. It supports both client and server implementations with proper typing throughout.

## Basic Usage

```typescript
import type { WebSocketMessage, WebSocketConfig, Stream, PubSub } from 'uni-types'

// Typed WebSocket configuration
type ChatConfig = WebSocketConfig<ChatMessage>

// Typed message
type Message = WebSocketMessage<{ text: string; userId: string }>
// { type: string; payload: { text: string; userId: string }; timestamp?: number; id?: string }

// Pub/Sub for real-time updates
type ChatPubSub = PubSub<ChatMessage>
```

## Key Types

### WebSocketMessage

WebSocket message structure with type, payload, and metadata.

```typescript
type WebSocketMessage<T = unknown> = {
  type: string
  payload: T
  timestamp?: number
  id?: string
}
```

### WebSocketConfig

Complete WebSocket configuration with handlers.

```typescript
type WebSocketConfig<T = unknown> = WebSocketOptions & {
  onMessage?: WebSocketHandler<T>
  onOpen?: () => void
  onClose?: (event: { code: number; reason: string }) => void
  onError?: (error: Error) => void
}
```

### Stream

Async iterable stream type for streaming data.

```typescript
type Stream<T = unknown> = {
  [Symbol.asyncIterator]: () => AsyncIterator<T>
  readable: boolean
  closed: boolean
}
```

### PubSub

Pub/Sub pattern for message distribution.

```typescript
type PubSub<T = unknown> = {
  publish: (topic: string, message: T) => void
  subscribe: (topic: string, handler: (message: T) => void) => () => void
  unsubscribe: (topic: string, handler?: (message: T) => void) => void
  topics: string[]
}
```

### RealTimeChannel

Channel-based real-time communication.

```typescript
type RealTimeChannel<T = unknown> = {
  name: string
  subscribe: (handler: (message: T) => void) => () => void
  publish: (message: T) => void
  unsubscribe: (handler: (message: T) => void) => void
  close: () => void
}
```

## Related

- [API Reference](/api/websocket/)
- [Event-Driven](./event) - Event architecture
