# TreeNode

**Since 1.4.0**

Tree node with children.

## Signature

```typescript
type TreeNode<T, Children extends Record<string, TreeNode<T, any> | undefined> = object> = {
  value: T
} & Children
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Value type |
| `Children` | Record of child nodes |

## Description

Represents a tree node with a value and named children.

## Examples

### Basic Usage

```typescript
import type { TreeNode } from 'uni-types'

type BinaryTree = TreeNode<number, { left?: TreeNode<number>; right?: TreeNode<number> }>

const tree: BinaryTree = {
  value: 1,
  left: { value: 2 },
  right: { value: 3 }
}
```

## Related

- [`Tree`](./tree) - Tree type alias
- [`BinaryTreeNode`](./binarytreenode) - Binary tree node