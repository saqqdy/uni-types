# Queue

**自 1.4.0 起**

队列类型（FIFO - 先进先出）。

## 签名

```typescript
type Queue<T> = T[]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 值类型 |

## 描述

表示具有先进先出语义的队列数据结构。

## 示例

### 基本用法

```typescript
import type { Queue, Enqueue, Dequeue } from 'uni-types'

type MyQueue = Queue<string>
// string[]

type AfterEnqueue = Enqueue<['a', 'b'], 'c'>
// ['a', 'b', 'c']

type AfterDequeue = Dequeue<['a', 'b', 'c']>
// { queue: ['b', 'c']; value: 'a' }
```

## 相关

- [`Enqueue`](./enqueue) - 入队
- [`Dequeue`](./dequeue) - 出队
- [`Stack`](./stack) - 栈类型（LIFO）