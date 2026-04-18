# Type-Level Data Structures

**Since 1.4.0**

Advanced data structure types for complex type modeling.

## Tree Structures

### TreeNode

Tree node structure.

```typescript
import type { TreeNode } from 'uni-types'

type MyTree = TreeNode<string, { left?: TreeNode<string>; right?: TreeNode<string> }>
```

### BinaryTreeNode

Binary tree node.

```typescript
import type { BinaryTreeNode } from 'uni-types'

type BinTree = BinaryTreeNode<number>
// { value: number; left?: BinaryTreeNode<number>; right?: BinaryTreeNode<number> }
```

### TreeLeaves

Get all leaf values of tree.

```typescript
import type { TreeLeaves } from 'uni-types'

type Leaves = TreeLeaves<{ value: 1; left: { value: 2 }; right: { value: 3 } }>
// [2, 3]
```

### TreeFlatten

Flatten tree to array (pre-order traversal).

```typescript
import type { TreeFlatten } from 'uni-types'

type Flat = TreeFlatten<{ value: 1; left: { value: 2 }; right: { value: 3 } }>
// [1, 2, 3]
```

## Graph Structures

### Graph

Graph type (adjacency list).

```typescript
import type { Graph } from 'uni-types'

type MyGraph = Graph<{
  a: ['b', 'c']
  b: ['c']
  c: []
}>
```

### GraphNodes

Get all nodes in graph.

```typescript
import type { GraphNodes } from 'uni-types'

type Nodes = GraphNodes<Graph<{ a: ['b']; b: [] }>>  // 'a' | 'b'
```

## Linked List

### ListNode

Linked list node.

```typescript
import type { ListNode } from 'uni-types'

type Node = ListNode<string>
// { value: string; next?: ListNode<string> }
```

### ListHead / ListTail

Get head or tail of linked list.

```typescript
import type { ListHead, ListTail } from 'uni-types'

type Head = ListHead<{ value: 1; next: { value: 2 } }>  // 1
type Tail = ListTail<{ value: 1; next: { value: 2 } }>  // 2
```

## Stack & Queue

### Stack

Stack type (LIFO).

```typescript
import type { Stack, Push, Pop, Peek } from 'uni-types'

type MyStack = Stack<string>

type AfterPush = Push<[1, 2], 3>  // [1, 2, 3]
type AfterPop = Pop<[1, 2, 3]>  // { stack: [1, 2]; value: 3 }
type Top = Peek<[1, 2, 3]>  // 3
```

### Queue

Queue type (FIFO).

```typescript
import type { Queue, Enqueue, Dequeue, Front } from 'uni-types'

type MyQueue = Queue<string>

type AfterEnqueue = Enqueue<[1, 2], 3>  // [1, 2, 3]
type AfterDequeue = Dequeue<[1, 2, 3]>  // { queue: [2, 3]; value: 1 }
type First = Front<[1, 2, 3]>  // 1
```

## Related

- [Algorithms](./algorithms) - Search and utility algorithms
- [Collection Types](./collection) - Set, Map, List operations
