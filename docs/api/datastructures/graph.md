# Graph

**Since 1.4.0**

Graph type using adjacency list.

## Signature

```typescript
type Graph<Adjacency extends Record<string, string[]>> = {
  [K in keyof Adjacency]: GraphNode<K & string, Adjacency[K]>
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `Adjacency` | Adjacency list mapping nodes to edges |

## Description

Represents a graph structure using adjacency list representation.

## Examples

### Basic Usage

```typescript
import type { Graph } from 'uni-types'

type MyGraph = Graph<{
  a: ['b', 'c']
  b: ['c']
  c: []
}>
```

## Related

- [`GraphNode`](./graphnode) - Graph node type
- [`GraphPath`](./graphpath) - Find path between nodes