# Caching Strategies

**Since 1.5.0**

Types for caching patterns and implementations.

## Overview

Caching Strategies provides types for implementing various caching patterns including LRU, TTL, and distributed caches. It supports cache invalidation strategies, cache-aside patterns, and cache cluster configurations.

This module enables building high-performance caching layers with proper type safety. It includes types for different eviction policies, distributed caching with consistent hashing, and cache decorators for method-level caching.

## Basic Usage

```typescript
import type { Cache, LRUCache, TTLCache, CacheInvalidation, DistributedCache } from 'uni-types'

// Basic cache
type UserCache = Cache<User>

// LRU cache with max size
type SessionCache = LRUCache<Session>

// TTL cache with expiration
type ApiCache = TTLCache<ApiResponse>
```

## Key Types

### Cache

Base cache interface with common operations.

```typescript
type Cache<T = unknown> = {
  get: (key: string) => Promise<T | undefined>
  set: (key: string, value: T, options?: CacheOptions) => Promise<void>
  has: (key: string) => Promise<boolean>
  delete: (key: string) => Promise<boolean>
  clear: () => Promise<void>
  keys: () => Promise<string[]>
}
```

### LRUCache

Least Recently Used cache with eviction.

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

### TTLCache

Time-To-Live cache with expiration.

```typescript
type TTLCache<T = unknown> = Cache<T> & {
  readonly defaultTTL: number
  getRemainingTTL: (key: string) => number
  refresh: (key: string) => boolean
}
```

### CacheInvalidation

Cache invalidation strategies.

```typescript
type CacheInvalidation<T = unknown> = {
  invalidate: (key: string) => Promise<void>
  invalidateByTag: (tag: string) => Promise<void>
  invalidateByPattern: (pattern: string | RegExp) => Promise<void>
  invalidateAll: () => Promise<void>
}
```

### DistributedCache

Distributed cache with replication.

```typescript
type DistributedCache<T = unknown> = Cache<T> & {
  nodes: CacheNode[]
  consistentHash: ConsistentHash
  replicate: (key: string, value: T) => Promise<void>
  failover: (failedNode: string) => Promise<void>
  sync: () => Promise<void>
}
```

## Related

- [API Reference](/api/cache/)
- [Config](./config) - Configuration types
