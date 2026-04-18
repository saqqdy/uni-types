# 并发模式类型

**自 1.4.0 起**

类型级并发模式。

## 任务类型

### Task

任务类型。

```typescript
import type { Task } from 'uni-types'

type MyTask = Task<string>
// { id: string; status: TaskStatus; result?: string; error?: Error; ... }
```

### TaskStatus

任务状态。

```typescript
import type { TaskStatus } from 'uni-types'

type Status = TaskStatus  // 'pending' | 'running' | 'completed' | 'failed' | 'cancelled'
```

### TaskResult / TaskError

任务结果和错误类型。

```typescript
import type { TaskResult, TaskError } from 'uni-types'

type Result = TaskResult<string>  // { success: boolean; data?: string; error?: Error }
type Error = TaskError<{ message: string; code: 'TIMEOUT' }>
```

### TaskPriority

任务优先级。

```typescript
import type { TaskPriority } from 'uni-types'

type Priority = TaskPriority  // 'high' | 'normal' | 'low'
```

## 管道类型

### Pipeline

管道类型。

```typescript
import type { Pipeline } from 'uni-types'

type MyPipeline = Pipeline<string, number>
```

### PipelineStage

管道阶段。

```typescript
import type { PipelineStage } from 'uni-types'

type Stage = PipelineStage<'parse', string, object>
```

### AddStage

向管道添加阶段。

```typescript
import type { AddStage } from 'uni-types'

type NewPipeline = AddStage<Pipeline<string, string>, PipelineStage<'transform', string, number>>
```

## 调度器类型

### Scheduler

调度器类型。

```typescript
import type { Scheduler } from 'uni-types'

type MyScheduler = Scheduler<{ maxConcurrent: 5 }>
```

### ScheduledJob

调度任务类型。

```typescript
import type { ScheduledJob } from 'uni-types'

type Job = ScheduledJob<string>
```

### PriorityQueue

任务优先队列。

```typescript
import type { PriorityQueue } from 'uni-types'

type Queue = PriorityQueue<ScheduledJob>
```

## Worker 类型

### Worker

Worker 类型。

```typescript
import type { Worker } from 'uni-types'

type MyWorker = Worker<string, number>
```

### WorkerPool

Worker 池类型。

```typescript
import type { WorkerPool } from 'uni-types'

type Pool = WorkerPool<string, number, { size: 4 }>
```

## 限流

### RateLimiter

限流器类型。

```typescript
import type { RateLimiter } from 'uni-types'

type Limiter = RateLimiter<{ maxRequests: 100; windowMs: 60000 }>
```

### Throttle / Debounce

节流和防抖类型。

```typescript
import type { Throttle, Debounce } from 'uni-types'

type ThrottleState = Throttle<{ limit: 10; period: 1000 }>
type DebounceState = Debounce<{ delay: 500 }>
```

## 异步模式

### Semaphore

信号量类型。

```typescript
import type { Semaphore } from 'uni-types'

type Sem = Semaphore<{ permits: 3 }>
```

### MutexState

互斥锁类型（二元信号量）。

```typescript
import type { MutexState } from 'uni-types'

type Mutex = MutexState
```

### Bulkhead

舱壁隔离模式。

```typescript
import type { Bulkhead } from 'uni-types'

type Bulk = Bulkhead<{ maxConcurrent: 10 }>
```

## 相关

- [异步工具](./async) - Promise 工具
- [类型测试](./testing) - 测试工具