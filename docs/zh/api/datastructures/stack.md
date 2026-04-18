# Stack

**自 1.4.0 起**

栈类型（LIFO - 后进先出）。

## 签名

```typescript
type Stack<T> = T[]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 值类型 |

## 描述

表示具有后进先出语义的栈数据结构。

## 示例

### 基本用法

```typescript
import type { Stack, Push, Pop } from 'uni-types'

type MyStack = Stack<number>
// number[]

type AfterPush = Push<[1, 2], 3>
// [1, 2, 3]

type AfterPop = Pop<[1, 2, 3]>
// { stack: [1, 2]; value: 3 }
```

## 相关

- [`Push`](./push) - 入栈
- [`Pop`](./pop) - 出栈
- [`Queue`](./queue) - 队列类型（FIFO）