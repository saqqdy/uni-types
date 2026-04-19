# CacheInvalidation

**Since 1.5.0**

Cache invalidation interface with key, tag, and pattern-based invalidation strategies.

## Signature

```typescript
type CacheInvalidation<T = unknown> = {
  invalidate: (key: string) => Promise<void>
  invalidateByTag: (tag: string) => Promise<void>
  invalidateByPattern: (pattern: string | RegExp) => Promise<void>
  invalidateAll: () => Promise<void>
  onInvalidation?: (event: InvalidationEvent<T>) => void
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The cached value type |

## Examples

### Basic Usage

```typescript
import type { CacheInvalidation } from 'uni-types'

const invalidation: CacheInvalidation = {
  invalidate: async (key) => { /* remove key */ },
  invalidateByTag: async (tag) => { /* remove by tag */ },
  invalidateByPattern: async (pattern) => { /* remove by pattern */ },
  invalidateAll: async () => { /* clear all */ },
  onInvalidation: (event) => {
    console.log(`Invalidated: ${event.keys.join(', ')}`)
  }
}

await invalidation.invalidate('user:123')
await invalidation.invalidateByTag('users')
await invalidation.invalidateByPattern(/^user:/)
```

### With Event Handling

```typescript
import type { CacheInvalidation, InvalidationEvent } from 'uni-types'

type CachedUser = { id: string; name: string }

const userInvalidation: CacheInvalidation<CachedUser> = {
  invalidate: async (key) => { /* remove */ },
  invalidateByTag: async (tag) => { /* remove by tag */ },
  invalidateByPattern: async (pattern) => { /* remove by pattern */ },
  invalidateAll: async () => { /* clear */ },
  onInvalidation: (event: InvalidationEvent<CachedUser>) => {
    console.log(`Type: ${event.type}`)
    console.log(`Keys: ${event.keys.join(', ')}`)
    console.log(`Timestamp: ${event.timestamp}`)
    if (event.reason) {
      console.log(`Reason: ${event.reason}`)
    }
    if (event.entry) {
      console.log(`Entry: ${event.entry.key}`)
    }
  }
}

// Trigger invalidation with custom reason
await userInvalidation.invalidateByTag('stale-data')
```

## Related

- [`Cache`](./cache)
- [`InvalidationRule`](./invalidation-rule)
