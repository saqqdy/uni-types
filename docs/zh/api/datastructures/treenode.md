# TreeNode

**自 1.4.0 起**

带子节点的树节点。

## 签名

```typescript
type TreeNode<T, Children extends Record<string, TreeNode<T, any> | undefined> = object> = {
  value: T
} & Children
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 值类型 |
| `Children` | 子节点记录 |

## 描述

表示带有值和命名子节点的树节点。

## 示例

### 基本用法

```typescript
import type { TreeNode } from 'uni-types'

type BinaryTree = TreeNode<number, { left?: TreeNode<number>; right?: TreeNode<number> }>

const tree: BinaryTree = {
  value: 1,
  left: { value: 2 },
  right: { value: 3 }
}
```

## 相关

- [`Tree`](./tree) - 树类型别名
- [`BinaryTreeNode`](./binarytreenode) - 二叉树节点