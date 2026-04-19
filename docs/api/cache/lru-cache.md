# LRUCache

**Since 1.5.0**

Least Recently Used (LRU) cache with size limits, peek, dump, and restore capabilities.

## Signature

```typescript
type LRUCache<T = unknown> = Cache<T> & {
  readonly maxSize: number
  readonly currentSize: number
  peek: (key: string) => T | undefined
  dump: () => CacheEntry<T>[]
  restore: (entries: CacheEntry<T>[]) => void
  prune: () => void
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The cached value type |

## Examples

### Basic Usage

```typescript
import type { LRUCache } from 'uni-types'

const lruCache: LRUCache<string> = {
  get: async (key) => { return undefined },
  set: async (key, value) => { /* store */ },
  has: async (key) => { return false },
  delete: async (key) => { return true },
  clear: async () => { /* clear */ },
  keys: async () => { return [] },
  getMany: async (keys) => { return [] },
  setMany: async (entries) => { /* batch */ },
  deleteMany: async (keys) => { return keys.length },
  maxSize: 100,
  currentSize: 42,
  peek: (key) => { return undefined },
  dump: () => { return [] },
  restore: (entries) => { /* restore */ },
  prune: () => { /* remove expired */ }
}

await lruCache.set('key1', 'value1')
const value = lruCache.peek('key1') // Peek without affecting LRU order
console.log(`Cache size: ${lruCache.currentSize}/${lruCache.maxSize}`)
```

### Dump and Restore

```typescript
import type { LRUCache, CacheEntry } from 'uni-types'

const cache: LRUCache<number> = {
  get: async (key) => { return undefined },
  set: async (key, value) => { /* store */ },
  has: async (key) => { return false },
  delete: async (key) => { return true },
  clear: async () => { /* clear */ },
  keys: async () => { return [] },
  getMany: async (keys) => { return [] },
  setMany: async (entries) => { /* batch */ },
  deleteMany: async (keys) => { return keys.length },
  maxSize: 50,
  currentSize: 10,
  peek: (key) => { return undefined },
  dump: () => { return [] },
  restore: (entries) => { /* restore */ },
  prune: () => { /* prune */ }
}

// Dump cache state for persistence
const entries = cache.dump()

// Restore cache from saved state
cache.restore([
  { key: 'a', value: 1 },
  { key: 'b', value: 2 },
  { key: 'c', value: 3 }
])

// Prune expired or invalid entries
cache.prune()
```

## Related

- [`Cache`](./cache)
- [`LFUCache`](./lfu-cache)
