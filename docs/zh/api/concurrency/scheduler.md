# Scheduler

**自 1.4.0 起**

任务调度器类型。

## 签名

```typescript
interface Scheduler<T extends { maxConcurrent?: number; queueSize?: number } = object> {
  options: T
  queue: ScheduledJob[]
  running: ScheduledJob[]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 调度器选项类型 |

## 描述

管理带有并发限制的定时任务执行。

## 示例

### 基本用法

```typescript
import type { Scheduler } from 'uni-types'

type MyScheduler = Scheduler<{ maxConcurrent: 5 }>
```

## 相关

- [`WorkerPool`](./workerpool) - 工作池类型
- [`Task`](./task) - 任务类型