# TTLCache

**Since 1.5.0**

Time-To-Live (TTL) cache with automatic expiration and refresh capabilities.

## Signature

```typescript
type TTLCache<T = unknown> = Cache<T> & {
  readonly defaultTTL: number
  getRemainingTTL: (key: string) => number
  refresh: (key: string) => boolean
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The cached value type |

## Examples

### Basic Usage

```typescript
import type { TTLCache } from 'uni-types'

const ttlCache: TTLCache<string> = {
  get: async (key) => { return undefined },
  set: async (key, value, options) => { /* store with TTL */ },
  has: async (key) => { return false },
  delete: async (key) => { return true },
  clear: async () => { /* clear */ },
  keys: async () => { return [] },
  getMany: async (keys) => { return [] },
  setMany: async (entries) => { /* batch */ },
  deleteMany: async (keys) => { return keys.length },
  defaultTTL: 3600,
  getRemainingTTL: (key) => { return 1800 },
  refresh: (key) => { return true }
}

await ttlCache.set('session:abc', 'user-data', { ttl: 1800 })

const remaining = ttlCache.getRemainingTTL('session:abc')
console.log(`Session expires in ${remaining} seconds`)

// Refresh TTL to default value
ttlCache.refresh('session:abc')
```

### Session Management

```typescript
import type { TTLCache } from 'uni-types'

type Session = { userId: string; createdAt: Date; lastAccess: Date }

const sessionCache: TTLCache<Session> = {
  get: async (key) => { return undefined },
  set: async (key, value, options) => { /* store */ },
  has: async (key) => { return false },
  delete: async (key) => { return true },
  clear: async () => { /* clear */ },
  keys: async () => { return [] },
  getMany: async (keys) => { return [] },
  setMany: async (entries) => { /* batch */ },
  deleteMany: async (keys) => { return keys.length },
  defaultTTL: 86400, // 24 hours
  getRemainingTTL: (key) => { return 0 },
  refresh: (key) => { return false }
}

await sessionCache.set('sess:user42', {
  userId: 'user42',
  createdAt: new Date(),
  lastAccess: new Date()
}, { ttl: 3600 })

// Check if session is about to expire
const ttl = sessionCache.getRemainingTTL('sess:user42')
if (ttl < 300) {
  sessionCache.refresh('sess:user42')
}
```

## Related

- [`Cache`](./cache)
- [`CacheInvalidation`](./cache-invalidation)
