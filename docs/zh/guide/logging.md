# 日志与可观测性

**自 1.5.0 起**

用于日志记录和监控系统的类型工具。

## 概述

日志与可观测性模块提供了应用程序监控所需的完整类型支持，包括日志记录、指标收集、分布式追踪和告警配置。这些类型可以帮助你构建可观测的系统，快速定位和解决问题。

通过这些类型工具，你可以定义结构化日志、配置性能指标、实现分布式追踪，以及设置自动告警规则，确保系统的健康状态得到全面监控。

## 基本用法

```typescript
import type { Logger, LogEntry, LogLevel, Metric, Counter, Span, Trace, Alert } from 'uni-types'

// 定义日志记录器
type AppLogger = Logger<{ requestId: string; userId: string }>

// 定义指标
type RequestCounter = Counter<number>

// 定义追踪
type RequestSpan = Span

// 定义告警
type HighCpuAlert = Alert<{ cpuUsage: number }>
```

## 主要类型

### Logger

日志记录器类型，提供多级别的日志记录功能。

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

### LogLevel

日志级别类型，定义日志的严重程度。

```typescript
type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'
```

### LogEntry

日志条目类型，包含完整的日志信息。

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

指标类型，用于收集和报告性能数据。

```typescript
type Metric<T = number> = {
  name: string
  value: T
  timestamp: Date
  labels?: Record<string, string>
  type: MetricType
}
```

### Counter

计数器指标类型，支持递增和递减操作。

```typescript
type Counter<T = number> = {
  inc: (value?: T) => void
  dec: (value?: T) => void
  reset: () => void
  getValue: () => T
}
```

### Span

追踪跨度类型，表示一个操作单元。

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

### Trace

追踪类型，包含完整的调用链信息。

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

### Alert

告警类型，定义告警信息和状态。

```typescript
type Alert<T = unknown> = {
  id: string
  name: string
  severity: AlertSeverity
  status: AlertStatus
  message: string
  timestamp: Date
  labels: Record<string, string>
  annotations: Record<string, string>
  details?: T
}
```

## 相关

- [API 参考](/zh/api/logging/)
