# 性能监控

**始于 1.6.0**

用于性能监控和分析的类型。

## 概述

性能监控提供了用于构建性能监控系统的类型，包括指标收集、分析、追踪和告警。它支持 CPU/内存监控、计时操作和性能基准测试。

此模块支持构建具有指标、追踪和告警正确类型约束的类型安全可观测性工具。

## 基本用法

```typescript
import type { Performance, Timing, MemoryUsage, CPUUsage, Profiler, TraceSpan, PerformanceAlert } from 'uni-types'

// 性能指标
type AppPerformance = Performance<{
  metrics: PerformanceMetric[]
  entries: PerformanceEntry[]
}>

// 内存追踪
type MemoryStats = MemoryUsage<{
  heapUsed: number
  heapTotal: number
  external: number
}>

// 分析
type AppProfiler = Profiler<{
  frames: ProfileFrame[]
  duration: number
}>
```

## 核心类型

### Performance

性能监控类型。

```typescript
type Performance = {
  now: () => number
  mark: (name: string) => void
  measure: (name: string, startMark: string, endMark?: string) => void
  getEntries: () => PerformanceEntry[]
  clear: () => void
}
```

### PerformanceMetric

性能指标类型。

```typescript
type PerformanceMetric<T = unknown> = {
  name: string
  value: number
  unit: 'ms' | 's' | 'bytes' | 'percent' | 'count'
  timestamp: Date
  tags?: Record<string, string>
}
```

### PerformanceEntry

性能条目类型。

```typescript
type PerformanceEntry = {
  name: string
  entryType: 'mark' | 'measure' | 'resource' | 'navigation'
  startTime: number
  duration: number
}
```

### Timing

计时操作类型。

```typescript
type Timing = {
  start: (name: string) => void
  end: (name: string) => TimingResult
  measure: (name: string, fn: () => void) => TimingResult
}
```

### TimingResult

计时结果类型。

```typescript
type TimingResult = {
  name: string
  duration: number
  startTime: number
  endTime: number
}
```

### MemoryUsage

内存使用类型。

```typescript
type MemoryUsage = {
  heapUsed: number
  heapTotal: number
  external: number
  arrayBuffers: number
  rss?: number
}
```

### MemoryMetric

内存指标类型。

```typescript
type MemoryMetric<T = unknown> = {
  type: 'heap' | 'rss' | 'external'
  value: number
  timestamp: Date
  snapshot?: MemorySnapshot
}
```

### CPUUsage

CPU 使用类型。

```typescript
type CPUUsage = {
  user: number
  system: number
  percent?: number
}
```

### Profiler

分析器类型。

```typescript
type Profiler = {
  start: () => void
  stop: () => ProfileResult
  isRunning: boolean
}
```

### ProfileResult

分析结果类型。

```typescript
type ProfileResult<T = unknown> = {
  duration: number
  frames: ProfileFrame[]
  hotspots: ProfileHotspot[]
  statistics: ProfileStatistics
}
```

### TraceSpan

追踪跨度类型。

```typescript
type TraceSpan<T = unknown> = {
  traceId: string
  spanId: string
  parentSpanId?: string
  name: string
  startTime: number
  duration: number
  status: 'ok' | 'error'
  attributes?: Record<string, unknown>
}
```

### PerformanceTrace

性能追踪类型。

```typescript
type PerformanceTrace<T = unknown> = {
  traceId: string
  spans: TraceSpan[]
  duration: number
  config: T
}
```

### PerformanceAlert

性能告警类型。

```typescript
type PerformanceAlert = {
  id: string
  name: string
  severity: 'info' | 'warning' | 'critical'
  message: string
  timestamp: Date
  resolved: boolean
}
```

## 相关

- [测试](./testing) - 测试类型
- [日志](./logging) - 日志类型