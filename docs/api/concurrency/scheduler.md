# Scheduler

**Since 1.4.0**

Task scheduler type.

## Signature

```typescript
interface Scheduler<T extends { maxConcurrent?: number; queueSize?: number } = object> {
  options: T
  queue: ScheduledJob[]
  running: ScheduledJob[]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Scheduler options type |

## Description

Manages scheduled job execution with concurrency limits.

## Examples

### Basic Usage

```typescript
import type { Scheduler } from 'uni-types'

type MyScheduler = Scheduler<{ maxConcurrent: 5 }>
```

## Related

- [`WorkerPool`](./workerpool) - Worker pool type
- [`Task`](./task) - Task type