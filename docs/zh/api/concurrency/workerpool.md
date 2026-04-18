# WorkerPool

**自 1.4.0 起**

工作池类型。

## 签名

```typescript
interface WorkerPool<Input, Output, Options extends { size?: number; maxTasksPerWorker?: number } = object> {
  workers: Worker<Input, Output>[]
  options: Options
  queue: Input[]
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `Input` | 工作器输入类型 |
| `Output` | 工作器输出类型 |
| `Options` | 池选项 |

## 描述

管理工作池以并行执行任务。

## 示例

### 基本用法

```typescript
import type { WorkerPool } from 'uni-types'

type Pool = WorkerPool<string, number, { size: 4 }>
```

## 相关

- [`Worker`](./worker) - 工作器类型
- [`Scheduler`](./scheduler) - 调度器类型