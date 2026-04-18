# WorkerPool

**Since 1.4.0**

Worker pool type.

## Signature

```typescript
interface WorkerPool<Input, Output, Options extends { size?: number; maxTasksPerWorker?: number } = object> {
  workers: Worker<Input, Output>[]
  options: Options
  queue: Input[]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `Input` | Worker input type |
| `Output` | Worker output type |
| `Options` | Pool options |

## Description

Manages a pool of workers for parallel task execution.

## Examples

### Basic Usage

```typescript
import type { WorkerPool } from 'uni-types'

type Pool = WorkerPool<string, number, { size: 4 }>
```

## Related

- [`Worker`](./worker) - Worker type
- [`Scheduler`](./scheduler) - Scheduler type