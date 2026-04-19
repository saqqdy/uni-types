# Cache

**自 1.5.0 起**

Generic cache interface with get, set, delete, and batch operations.

## 签名

```typescript
type Cache<T = unknown> = {
  get: (key: string) => Promise<T | undefined>
  set: (key: string, value: T, options?: CacheOptions) => Promise<void>
  has: (key: string) => Promise<boolean>
  delete: (key: string) => Promise<boolean>
  clear: () => Promise<void>
  keys: () => Promise<string[]>
  getMany: (keys: string[]) => Promise<(T | undefined)[]>
  setMany: (entries: CacheEntry<T>[]) => Promise<void>
  deleteMany: (keys: string[]) => Promise<number>
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | The cached value type |

## 示例

### 基本用法

```typescript
import type { Cache } from 'uni-types'

const cache: Cache<User> = {
  get: async (key) => { return undefined },
  set: async (key, value, options) => { /* store */ },
  has: async (key) => { return false },
  delete: async (key) => { return true },
  clear: async () => { /* clear all */ },
  keys: async () => { return [] },
  getMany: async (keys) => { return keys.map(() => undefined) },
  setMany: async (entries) => { /* store batch */ },
  deleteMany: async (keys) => { return keys.length }
}

await cache.set('user:123', { id: '123', name: 'John' }, { ttl: 3600 })
const user = await cache.get('user:123')
```

### Batch Operations

```typescript
import type { Cache, CacheEntry } from 'uni-types'

const userCache: Cache<User> = {
  get: async (key) => { return undefined },
  set: async (key, value, options) => { /* store */ },
  has: async (key) => { return false },
  delete: async (key) => { return true },
  clear: async () => { /* clear */ },
  keys: async () => { return [] },
  getMany: async (keys) => { return [] },
  setMany: async (entries) => { /* batch store */ },
  deleteMany: async (keys) => { return keys.length }
}

const entries: CacheEntry<User>[] = [
  { key: 'user:1', value: { id: '1', name: 'Alice' }, ttl: 600 },
  { key: 'user:2', value: { id: '2', name: 'Bob' }, ttl: 600 },
  { key: 'user:3', value: { id: '3', name: 'Charlie' }, ttl: 600 }
]

await userCache.setMany(entries)
const users = await userCache.getMany(['user:1', 'user:2', 'user:3'])
const deleted = await userCache.deleteMany(['user:1', 'user:2'])
```

## 相关

- [`LRUCache`](./lru-cache)
- [`TTLCache`](./ttl-cache)
