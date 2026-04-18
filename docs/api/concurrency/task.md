# Task

**Since 1.4.0**

Async task type.

## Signature

```typescript
interface Task<T> {
  id: string
  status: TaskStatus
  result?: TaskResult<T>
  error?: TaskError<T>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Task result type |

## Description

Represents an async task with status tracking.

## Examples

### Basic Usage

```typescript
import type { Task, TaskStatus } from 'uni-types'

type DataTask = Task<{ data: string }>

const task: DataTask = {
  id: 'task-1',
  status: 'completed',
  result: { data: 'result' }
}
```

## Related

- [`TaskResult`](./taskresult) - Task result type
- [`Pipeline`](./pipeline) - Pipeline type