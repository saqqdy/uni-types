# Tree

**Since 1.4.0**

Tree type (alias for TreeNode).

## Signature

```typescript
type Tree<T> = TreeNode<T>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Value type |

## Description

Represents a tree structure with a value and optional children.

## Examples

### Basic Usage

```typescript
import type { Tree } from 'uni-types'

type StringTree = Tree<string>
// TreeNode<string>
```

## Related

- [`TreeNode`](./treenode) - Tree node type
- [`TreePath`](./treepath) - Path to value
- [`TreeDepth`](./treedepth) - Tree depth