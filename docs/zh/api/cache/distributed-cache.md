# DistributedCache

**自 1.5.0 起**

Distributed cache with node management, consistent hashing, replication, and failover.

## 签名

```typescript
type DistributedCache<T = unknown> = Cache<T> & {
  nodes: CacheNode[]
  consistentHash: ConsistentHash
  replicate: (key: string, value: T) => Promise<void>
  failover: (failedNode: string) => Promise<void>
  sync: () => Promise<void>
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | The cached value type |

## 示例

### 基本用法

```typescript
import type { DistributedCache, CacheNode } from 'uni-types'

const nodes: CacheNode[] = [
  { id: 'node-1', host: '10.0.0.1', port: 6379, status: 'online', weight: 1 },
  { id: 'node-2', host: '10.0.0.2', port: 6379, status: 'online', weight: 1 },
  { id: 'node-3', host: '10.0.0.3', port: 6379, status: 'online', weight: 1 }
]

const distributedCache: DistributedCache<string> = {
  get: async (key) => { return undefined },
  set: async (key, value, options) => { /* store */ },
  has: async (key) => { return false },
  delete: async (key) => { return true },
  clear: async () => { /* clear */ },
  keys: async () => { return [] },
  getMany: async (keys) => { return [] },
  setMany: async (entries) => { /* batch */ },
  deleteMany: async (keys) => { return keys.length },
  nodes,
  consistentHash: {
    addNode: (node) => { /* add */ },
    removeNode: (nodeId) => { /* remove */ },
    getNode: (key) => { return undefined },
    getNodes: (key, count) => { return [] }
  },
  replicate: async (key, value) => { /* replicate */ },
  failover: async (failedNode) => { /* handle failover */ },
  sync: async () => { /* sync nodes */ }
}

// Write with replication
await distributedCache.set('user:123', 'data')
await distributedCache.replicate('user:123', 'data')
```

### Failover Scenario

```typescript
import type { DistributedCache, CacheNode } from 'uni-types'

const cache: DistributedCache<object> = {
  get: async (key) => { return undefined },
  set: async (key, value, options) => { /* store */ },
  has: async (key) => { return false },
  delete: async (key) => { return true },
  clear: async () => { /* clear */ },
  keys: async () => { return [] },
  getMany: async (keys) => { return [] },
  setMany: async (entries) => { /* batch */ },
  deleteMany: async (keys) => { return keys.length },
  nodes: [
    { id: 'n1', host: 'cache-1', port: 6379, status: 'online', weight: 1 },
    { id: 'n2', host: 'cache-2', port: 6379, status: 'degraded', weight: 1 }
  ],
  consistentHash: {
    addNode: () => {},
    removeNode: () => {},
    getNode: () => undefined,
    getNodes: () => []
  },
  replicate: async (key, value) => { /* replicate */ },
  failover: async (failedNode) => {
    console.log(`Failing over from ${failedNode}`)
    // Redistribute keys to remaining nodes
  },
  sync: async () => {
    console.log('Synchronizing cache nodes')
  }
}

// Handle node failure
const failedNode = cache.nodes.find(n => n.status === 'degraded')
if (failedNode) {
  await cache.failover(failedNode.id)
}
```

## 相关

- [`Cache`](./cache)
- [`CacheCluster`](./cache-cluster)
