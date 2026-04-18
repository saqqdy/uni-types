# Queue

**Since 1.4.0**

Queue type (FIFO - First In First Out).

## Signature

```typescript
type Queue<T> = T[]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Value type |

## Description

Represents a queue data structure with FIFO semantics.

## Examples

### Basic Usage

```typescript
import type { Queue, Enqueue, Dequeue } from 'uni-types'

type MyQueue = Queue<string>
// string[]

type AfterEnqueue = Enqueue<['a', 'b'], 'c'>
// ['a', 'b', 'c']

type AfterDequeue = Dequeue<['a', 'b', 'c']>
// { queue: ['b', 'c']; value: 'a' }
```

## Related

- [`Enqueue`](./enqueue) - Add to queue
- [`Dequeue`](./dequeue) - Remove from queue
- [`Stack`](./stack) - Stack type (LIFO)