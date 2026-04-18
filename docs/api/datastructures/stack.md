# Stack

**Since 1.4.0**

Stack type (LIFO - Last In First Out).

## Signature

```typescript
type Stack<T> = T[]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Value type |

## Description

Represents a stack data structure with LIFO semantics.

## Examples

### Basic Usage

```typescript
import type { Stack, Push, Pop } from 'uni-types'

type MyStack = Stack<number>
// number[]

type AfterPush = Push<[1, 2], 3>
// [1, 2, 3]

type AfterPop = Pop<[1, 2, 3]>
// { stack: [1, 2]; value: 3 }
```

## Related

- [`Push`](./push) - Push onto stack
- [`Pop`](./pop) - Pop from stack
- [`Queue`](./queue) - Queue type (FIFO)