# Logging & Observability

**Since 1.5.0**

Types for logging, metrics, and distributed tracing.

## Overview

Logging & Observability provides types for building observable applications with structured logging, metrics collection, and distributed tracing. It supports popular observability standards and integrates with monitoring systems.

This module includes types for loggers with multiple log levels, various metric types (counters, gauges, histograms), and distributed tracing with spans. It enables building comprehensive monitoring and debugging capabilities.

## Basic Usage

```typescript
import type { Logger, LogEntry, Metric, Counter, Span, Trace } from 'uni-types'

// Typed logger
type AppLogger = Logger<{ userId?: string; requestId?: string }>

// Log entry
type Entry = LogEntry<{ service: string }>
// { level: LogLevel; message: string; timestamp: Date; context?: { service: string } }

// Metrics
type RequestCounter = Counter<number>
type LatencyHistogram = Histogram
```

## Key Types

### Logger

Logger interface with multiple log levels.

```typescript
type Logger<T = Record<string, unknown>> = {
  trace: (message: string, context?: T) => void
  debug: (message: string, context?: T) => void
  info: (message: string, context?: T) => void
  warn: (message: string, context?: T) => void
  error: (message: string, error?: Error, context?: T) => void
  fatal: (message: string, error?: Error, context?: T) => void
  child: (context: Partial<T>) => Logger<T>
}
```

### LogEntry

Structured log entry type.

```typescript
type LogEntry<T = Record<string, unknown>> = {
  level: LogLevel
  message: string
  timestamp: Date
  context?: T
  error?: { message: string; stack?: string; name: string }
  traceId?: string
  spanId?: string
}
```

### Metric

Metric type with labels and metadata.

```typescript
type Metric<T = number> = {
  name: string
  value: T
  timestamp: Date
  labels?: Record<string, string>
  help?: string
  type: MetricType
}
```

### Span

Distributed tracing span.

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

### Alert

Alert type for monitoring systems.

```typescript
type Alert<T = unknown> = {
  id: string
  name: string
  severity: AlertSeverity
  status: AlertStatus
  message: string
  timestamp: Date
  resolvedAt?: Date
  labels: Record<string, string>
  annotations: Record<string, string>
  details?: T
}
```

## Related

- [API Reference](/api/logging/)
- [Event-Driven](./event) - Event architecture
