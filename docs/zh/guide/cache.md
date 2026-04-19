# 缓存策略

**自 1.5.0 起**

用于缓存模式和实现的类型工具。

## 概述

缓存策略模块提供了应用程序缓存所需的完整类型支持，包括基础缓存操作、缓存淘汰策略、缓存失效和分布式缓存。这些类型可以帮助你优化应用程序性能，减少数据库负载。

通过这些类型工具，你可以实现多种缓存模式（如 Cache-Aside、Read-Through、Write-Through），配置缓存淘汰策略（如 LRU、LFU、TTL），以及构建分布式缓存集群。

## 基本用法

```typescript
import type { Cache, LRUCache, TTLCache, CacheInvalidation, DistributedCache } from 'uni-types'

// 定义基础缓存
type UserCache = Cache<{ id: string; name: string }>

// 定义 LRU 缓存
type SessionCache = LRUCache<{ token: string; userId: string }>

// 定义 TTL 缓存
type ApiCache = TTLCache<unknown>

// 定义缓存失效
type MyInvalidation = CacheInvalidation<{ key: string; value: unknown }>
```

## 主要类型

### Cache

基础缓存类型，提供通用的缓存操作接口。

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

LRU（最近最少使用）缓存类型，自动淘汰最久未使用的条目。

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

TTL（生存时间）缓存类型，自动过期条目。

```typescript
type TTLCache<T = unknown> = Cache<T> & {
  readonly defaultTTL: number
  getRemainingTTL: (key: string) => number
  refresh: (key: string) => boolean
}
```

### CacheInvalidation

缓存失效类型，管理缓存条目的失效策略。

```typescript
type CacheInvalidation<T = unknown> = {
  invalidate: (key: string) => Promise<void>
  invalidateByTag: (tag: string) => Promise<void>
  invalidateByPattern: (pattern: string | RegExp) => Promise<void>
  invalidateAll: () => Promise<void>
}
```

### DistributedCache

分布式缓存类型，支持多节点和一致性哈希。

```typescript
type DistributedCache<T = unknown> = Cache<T> & {
  nodes: CacheNode[]
  consistentHash: ConsistentHash
  replicate: (key: string, value: T) => Promise<void>
  failover: (failedNode: string) => Promise<void>
  sync: () => Promise<void>
}
```

## 相关

- [API 参考](/zh/api/cache/)
