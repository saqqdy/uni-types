# Graph

**自 1.4.0 起**

使用邻接表的图类型。

## 签名

```typescript
type Graph<Adjacency extends Record<string, string[]>> = {
  [K in keyof Adjacency]: GraphNode<K & string, Adjacency[K]>
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `Adjacency` | 将节点映射到边的邻接表 |

## 描述

使用邻接表表示的图结构。

## 示例

### 基本用法

```typescript
import type { Graph } from 'uni-types'

type MyGraph = Graph<{
  a: ['b', 'c']
  b: ['c']
  c: []
}>
```

## 相关

- [`GraphNode`](./graphnode) - 图节点类型
- [`GraphPath`](./graphpath) - 查找节点间路径