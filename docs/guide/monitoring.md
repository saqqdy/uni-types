# Performance Monitoring

**Since 1.6.0**

Types for performance monitoring and profiling.

## Overview

Performance Monitoring provides types for building performance monitoring systems including metrics collection, profiling, tracing, and alerting. It supports CPU/memory monitoring, timing operations, and performance benchmarks.

This module enables building type-safe observability tools with proper constraints for metrics, traces, and alerts.

## Basic Usage

```typescript
import type { Performance, Timing, MemoryUsage, CPUUsage, Profiler, TraceSpan, PerformanceAlert } from 'uni-types'

// Performance metrics
type AppPerformance = Performance<{
  metrics: PerformanceMetric[]
  entries: PerformanceEntry[]
}>

// Memory tracking
type MemoryStats = MemoryUsage<{
  heapUsed: number
  heapTotal: number
  external: number
}>

// Profiling
type AppProfiler = Profiler<{
  frames: ProfileFrame[]
  duration: number
}>
```

## Key Types

### Performance

Performance monitoring type.

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

Performance metric type.

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

Performance entry type.

```typescript
type PerformanceEntry = {
  name: string
  entryType: 'mark' | 'measure' | 'resource' | 'navigation'
  startTime: number
  duration: number
}
```

### Timing

Timing operation type.

```typescript
type Timing = {
  start: (name: string) => void
  end: (name: string) => TimingResult
  measure: (name: string, fn: () => void) => TimingResult
}
```

### TimingResult

Timing result type.

```typescript
type TimingResult = {
  name: string
  duration: number
  startTime: number
  endTime: number
}
```

### MemoryUsage

Memory usage type.

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

Memory metric type.

```typescript
type MemoryMetric<T = unknown> = {
  type: 'heap' | 'rss' | 'external'
  value: number
  timestamp: Date
  snapshot?: MemorySnapshot
}
```

### CPUUsage

CPU usage type.

```typescript
type CPUUsage = {
  user: number
  system: number
  percent?: number
}
```

### Profiler

Profiler type.

```typescript
type Profiler = {
  start: () => void
  stop: () => ProfileResult
  isRunning: boolean
}
```

### ProfileResult

Profile result type.

```typescript
type ProfileResult<T = unknown> = {
  duration: number
  frames: ProfileFrame[]
  hotspots: ProfileHotspot[]
  statistics: ProfileStatistics
}
```

### TraceSpan

Tracing span type.

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

Performance trace type.

```typescript
type PerformanceTrace<T = unknown> = {
  traceId: string
  spans: TraceSpan[]
  duration: number
  config: T
}
```

### PerformanceAlert

Performance alert type.

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

## Related

- [Testing](./testing) - Testing types
- [Logging](./logging) - Logging types