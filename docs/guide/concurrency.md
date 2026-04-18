# Concurrency Types

**Since 1.4.0**

Type-level concurrency patterns.

## Task Types

### Task

Task type.

```typescript
import type { Task } from 'uni-types'

type MyTask = Task<string>
// { id: string; status: TaskStatus; result?: string; error?: Error; ... }
```

### TaskStatus

Task status.

```typescript
import type { TaskStatus } from 'uni-types'

type Status = TaskStatus  // 'pending' | 'running' | 'completed' | 'failed' | 'cancelled'
```

### TaskResult / TaskError

Task result and error types.

```typescript
import type { TaskResult, TaskError } from 'uni-types'

type Result = TaskResult<string>  // { success: boolean; data?: string; error?: Error }
type Error = TaskError<{ message: string; code: 'TIMEOUT' }>
```

### TaskPriority

Task priority levels.

```typescript
import type { TaskPriority } from 'uni-types'

type Priority = TaskPriority  // 'high' | 'normal' | 'low'
```

## Pipeline Types

### Pipeline

Pipeline type.

```typescript
import type { Pipeline } from 'uni-types'

type MyPipeline = Pipeline<string, number>
```

### PipelineStage

Pipeline stage.

```typescript
import type { PipelineStage } from 'uni-types'

type Stage = PipelineStage<'parse', string, object>
```

### AddStage

Add stage to pipeline.

```typescript
import type { AddStage } from 'uni-types'

type NewPipeline = AddStage<Pipeline<string, string>, PipelineStage<'transform', string, number>>
```

## Scheduler Types

### Scheduler

Scheduler type.

```typescript
import type { Scheduler } from 'uni-types'

type MyScheduler = Scheduler<{ maxConcurrent: 5 }>
```

### ScheduledJob

Scheduled job type.

```typescript
import type { ScheduledJob } from 'uni-types'

type Job = ScheduledJob<string>
```

### PriorityQueue

Job priority queue.

```typescript
import type { PriorityQueue } from 'uni-types'

type Queue = PriorityQueue<ScheduledJob>
```

## Worker Types

### Worker

Worker type.

```typescript
import type { Worker } from 'uni-types'

type MyWorker = Worker<string, number>
```

### WorkerPool

Worker pool type.

```typescript
import type { WorkerPool } from 'uni-types'

type Pool = WorkerPool<string, number, { size: 4 }>
```

## Rate Limiting

### RateLimiter

Rate limiter type.

```typescript
import type { RateLimiter } from 'uni-types'

type Limiter = RateLimiter<{ maxRequests: 100; windowMs: 60000 }>
```

### Throttle / Debounce

Throttle and debounce types.

```typescript
import type { Throttle, Debounce } from 'uni-types'

type ThrottleState = Throttle<{ limit: 10; period: 1000 }>
type DebounceState = Debounce<{ delay: 500 }>
```

## Async Patterns

### Semaphore

Semaphore type.

```typescript
import type { Semaphore } from 'uni-types'

type Sem = Semaphore<{ permits: 3 }>
```

### MutexState

Mutex type (binary semaphore).

```typescript
import type { MutexState } from 'uni-types'

type Mutex = MutexState
```

### Bulkhead

Bulkhead (isolation pattern).

```typescript
import type { Bulkhead } from 'uni-types'

type Bulk = Bulkhead<{ maxConcurrent: 10 }>
```

## Related

- [Async Utilities](./async) - Promise utilities
- [Testing](./testing) - Testing utilities