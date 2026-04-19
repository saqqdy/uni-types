# Trace

**自 1.5.0 起**

Represents a distributed trace containing multiple spans with timing and status information.

## 签名

```typescript
type Trace<T = unknown> = {
  traceId: string
  spans: Span[]
  rootSpan: Span
  startTime: Date
  endTime?: Date
  duration?: number
  status: TraceStatus
  metadata?: T
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | The metadata type for the trace |

## 示例

### 基本用法

```typescript
import type { Trace, Span } from 'uni-types'

const rootSpan: Span = {
  traceId: 'trace-001',
  spanId: 'span-root',
  name: 'handleRequest',
  kind: 'server',
  startTime: new Date('2024-01-01T10:00:00Z'),
  endTime: new Date('2024-01-01T10:00:01Z'),
  status: 'ok',
  attributes: {},
  events: []
}

const trace: Trace = {
  traceId: 'trace-001',
  spans: [rootSpan],
  rootSpan,
  startTime: new Date('2024-01-01T10:00:00Z'),
  endTime: new Date('2024-01-01T10:00:01Z'),
  duration: 1000,
  status: 'completed'
}
```

### With Metadata

```typescript
import type { Trace, Span } from 'uni-types'

type TraceMetadata = {
  userId: string
  requestId: string
  service: string
}

const spans: Span[] = [
  {
    traceId: 'trace-api-001',
    spanId: 'span-1',
    name: 'api-gateway',
    kind: 'server',
    startTime: new Date(),
    status: 'ok',
    attributes: { 'http.path': '/api/users' },
    events: []
  },
  {
    traceId: 'trace-api-001',
    spanId: 'span-2',
    parentSpanId: 'span-1',
    name: 'user-service',
    kind: 'client',
    startTime: new Date(),
    status: 'ok',
    attributes: { 'rpc.system': 'grpc' },
    events: []
  }
]

const apiTrace: Trace<TraceMetadata> = {
  traceId: 'trace-api-001',
  spans,
  rootSpan: spans[0],
  startTime: new Date(),
  status: 'in-progress',
  metadata: {
    userId: 'u-42',
    requestId: 'req-abc123',
    service: 'api-gateway'
  }
}
```

## 相关

- [`Span`](./span)
- [`Tracer`](./tracer)
