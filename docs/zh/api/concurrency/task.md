# Task

**自 1.4.0 起**

异步任务类型。

## 签名

```typescript
interface Task<T> {
  id: string
  status: TaskStatus
  result?: TaskResult<T>
  error?: TaskError<T>
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 任务结果类型 |

## 描述

表示带有状态跟踪的异步任务。

## 示例

### 基本用法

```typescript
import type { Task, TaskStatus } from 'uni-types'

type DataTask = Task<{ data: string }>

const task: DataTask = {
  id: 'task-1',
  status: 'completed',
  result: { data: 'result' }
}
```

## 相关

- [`TaskResult`](./taskresult) - 任务结果类型
- [`Pipeline`](./pipeline) - 管道类型