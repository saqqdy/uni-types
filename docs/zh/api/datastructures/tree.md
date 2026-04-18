# Tree

**自 1.4.0 起**

树类型（TreeNode 的别名）。

## 签名

```typescript
type Tree<T> = TreeNode<T>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 值类型 |

## 描述

表示带有值和可选子节点的树结构。

## 示例

### 基本用法

```typescript
import type { Tree } from 'uni-types'

type StringTree = Tree<string>
// TreeNode<string>
```

## 相关

- [`TreeNode`](./treenode) - 树节点类型
- [`TreePath`](./treepath) - 到值的路径
- [`TreeDepth`](./treedepth) - 树深度