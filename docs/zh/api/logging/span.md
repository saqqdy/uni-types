# Span

**自 1.5.0 起**

Represents a tracing span with identifiers, timing, status, and attributes for distributed tracing.

## 签名

```typescript
type Span = {
  traceId: string
  spanId: string
  parentSpanId?: string
  name: string
  kind: SpanKind
  startTime: Date
  endTime?: Date
  status: SpanStatus
  attributes: Record<string, unknown>
  events: SpanEvent[]
}
```

## 参数

This type has no generic parameters.

## 示例

### 基本用法

```typescript
import type { Span } from 'uni-types'

const span: Span = {
  traceId: 'trace-abc123',
  spanId: 'span-xyz789',
  name: 'HTTP GET /api/users',
  kind: 'server',
  startTime: new Date(),
  status: 'ok',
  attributes: {
    'http.method': 'GET',
    'http.url': '/api/users',
    'http.status_code': 200
  },
  events: []
}

// End the span
span.endTime = new Date()
```

### Nested Spans

```typescript
import type { Span } from 'uni-types'

const parentSpan: Span = {
  traceId: 'trace-parent',
  spanId: 'span-parent',
  name: 'processOrder',
  kind: 'server',
  startTime: new Date(),
  status: 'ok',
  attributes: { 'order.id': 'order-001' },
  events: []
}

const childSpan: Span = {
  traceId: parentSpan.traceId,
  spanId: 'span-child-1',
  parentSpanId: parentSpan.spanId,
  name: 'validatePayment',
  kind: 'client',
  startTime: new Date(),
  status: 'ok',
  attributes: { 'payment.method': 'credit_card' },
  events: [
    { name: 'validation_start', timestamp: new Date() },
    { name: 'validation_end', timestamp: new Date(), attributes: { valid: true } }
  ]
}
```

## 相关

- [`Trace`](./trace)
- [`Tracer`](./tracer)
