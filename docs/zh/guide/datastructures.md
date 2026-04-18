# 类型级数据结构

**自 1.4.0 起**

用于复杂类型建模的高级数据结构类型。

## 树结构

### TreeNode

树节点结构。

```typescript
import type { TreeNode } from 'uni-types'

type MyTree = TreeNode<string, { left?: TreeNode<string>; right?: TreeNode<string> }>
```

### BinaryTreeNode

二叉树节点。

```typescript
import type { BinaryTreeNode } from 'uni-types'

type BinTree = BinaryTreeNode<number>
// { value: number; left?: BinaryTreeNode<number>; right?: BinaryTreeNode<number> }
```

### TreeLeaves

获取树的所有叶节点值。

```typescript
import type { TreeLeaves } from 'uni-types'

type Leaves = TreeLeaves<{ value: 1; left: { value: 2 }; right: { value: 3 } }>
// [2, 3]
```

### TreeFlatten

将树展平为数组（前序遍历）。

```typescript
import type { TreeFlatten } from 'uni-types'

type Flat = TreeFlatten<{ value: 1; left: { value: 2 }; right: { value: 3 } }>
// [1, 2, 3]
```

## 图结构

### Graph

图类型（邻接表）。

```typescript
import type { Graph } from 'uni-types'

type MyGraph = Graph<{
  a: ['b', 'c']
  b: ['c']
  c: []
}>
```

### GraphNodes

获取图中的所有节点。

```typescript
import type { GraphNodes } from 'uni-types'

type Nodes = GraphNodes<Graph<{ a: ['b']; b: [] }>>  // 'a' | 'b'
```

## 链表

### ListNode

链表节点。

```typescript
import type { ListNode } from 'uni-types'

type Node = ListNode<string>
// { value: string; next?: ListNode<string> }
```

### ListHead / ListTail

获取链表的头或尾。

```typescript
import type { ListHead, ListTail } from 'uni-types'

type Head = ListHead<{ value: 1; next: { value: 2 } }>  // 1
type Tail = ListTail<{ value: 1; next: { value: 2 } }>  // 2
```

## 栈与队列

### Stack

栈类型（后进先出）。

```typescript
import type { Stack, Push, Pop, Peek } from 'uni-types'

type MyStack = Stack<string>

type AfterPush = Push<[1, 2], 3>  // [1, 2, 3]
type AfterPop = Pop<[1, 2, 3]>  // { stack: [1, 2]; value: 3 }
type Top = Peek<[1, 2, 3]>  // 3
```

### Queue

队列类型（先进先出）。

```typescript
import type { Queue, Enqueue, Dequeue, Front } from 'uni-types'

type MyQueue = Queue<string>

type AfterEnqueue = Enqueue<[1, 2], 3>  // [1, 2, 3]
type AfterDequeue = Dequeue<[1, 2, 3]>  // { queue: [2, 3]; value: 1 }
type First = Front<[1, 2, 3]>  // 1
```

## 相关

- [算法](./algorithms) - 搜索和实用算法
- [集合类型](./collection) - Set、Map、List 操作
