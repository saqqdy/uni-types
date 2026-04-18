/**
 * Caching Strategies Types
 *
 * Types for caching patterns and implementations.
 */

// ============================================================================
// Cache Types
// ============================================================================

/**
 * Cache type
 */
export type Cache<T = unknown> = {
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

/**
 * Cache entry
 */
export type CacheEntry<T = unknown> = {
	key: string
	value: T
	ttl?: number
	createdAt?: Date
	updatedAt?: Date
	tags?: string[]
}

/**
 * Cache key type
 */
export type CacheKey = string | CacheKeyBuilder

/**
 * Cache key builder
 */
export type CacheKeyBuilder = (params: unknown) => string

/**
 * Cache value
 */
export type CacheValue<T = unknown> = T

/**
 * Cache options
 */
export type CacheOptions = {
	ttl?: number
	tags?: string[]
	version?: number
	noEvict?: boolean
	priority?: number
}

/**
 * Cache statistics
 */
export type CacheStats = {
	hits: number
	misses: number
	hitRate: number
	missRate: number
	size: number
	maxSize?: number
	evictions: number
	memoryUsage?: number
	uptime: number
}

/**
 * Hit rate type
 */
export type HitRate = number

/**
 * Miss rate type
 */
export type MissRate = number

// ============================================================================
// Cache Strategies
// ============================================================================

/**
 * Cache strategy
 */
export type CacheStrategy = 'lru' | 'lfu' | 'fifo' | 'ttl' | 'arc' | 'lfru' | '2q'

/**
 * LRU Cache
 */
export type LRUCache<T = unknown> = Cache<T> & {
	readonly maxSize: number
	readonly currentSize: number
	peek: (key: string) => T | undefined
	dump: () => CacheEntry<T>[]
	restore: (entries: CacheEntry<T>[]) => void
	prune: () => void
}

/**
 * LFU Cache
 */
export type LFUCache<T = unknown> = Cache<T> & {
	readonly maxSize: number
	getFrequency: (key: string) => number
}

/**
 * TTL Cache
 */
export type TTLCache<T = unknown> = Cache<T> & {
	readonly defaultTTL: number
	getRemainingTTL: (key: string) => number
	refresh: (key: string) => boolean
}

/**
 * FIFO Cache
 */
export type FIFOCache<T = unknown> = Cache<T> & {
	readonly maxSize: number
	readonly currentSize: number
}

/**
 * ARC Cache (Adaptive Replacement Cache)
 */
export type ARCCache<T = unknown> = Cache<T> & {
	readonly p: number
	readonly recentKeys: Set<string>
	readonly frequentKeys: Set<string>
}

// ============================================================================
// Cache Invalidation
// ============================================================================

/**
 * Cache invalidation
 */
export type CacheInvalidation<T = unknown> = {
	invalidate: (key: string) => Promise<void>
	invalidateByTag: (tag: string) => Promise<void>
	invalidateByPattern: (pattern: string | RegExp) => Promise<void>
	invalidateAll: () => Promise<void>
	onInvalidation?: (event: InvalidationEvent<T>) => void
}

/**
 * Invalidation rule
 */
export type InvalidationRule<T = unknown> = {
	type: 'key' | 'tag' | 'pattern' | 'custom'
	pattern?: string | RegExp
	tags?: string[]
	custom?: (entry: CacheEntry<T>) => boolean
	debounce?: number
}

/**
 * Invalidation strategy
 */
export type InvalidationStrategy = 'time-based' | 'event-based' | 'manual' | 'write-through' | 'write-behind'

/**
 * Invalidation event
 */
export type InvalidationEvent<T = unknown> = {
	type: InvalidationStrategy
	keys: string[]
	timestamp: Date
	reason?: string
	entry?: CacheEntry<T>
}

// ============================================================================
// Distributed Cache
// ============================================================================

/**
 * Distributed cache
 */
export type DistributedCache<T = unknown> = Cache<T> & {
	nodes: CacheNode[]
	consistentHash: ConsistentHash
	replicate: (key: string, value: T) => Promise<void>
	failover: (failedNode: string) => Promise<void>
	sync: () => Promise<void>
}

/**
 * Cache cluster
 */
export type CacheCluster = {
	nodes: CacheNode[]
	strategy: 'replicated' | 'partitioned' | 'consistent-hashing'
	replicationFactor: number
	partitioner?: (key: string) => string
}

/**
 * Cache node
 */
export type CacheNode = {
	id: string
	host: string
	port: number
	status: 'online' | 'offline' | 'syncing' | 'degraded'
	weight: number
	tags?: string[]
}

/**
 * Consistent hash
 */
export type ConsistentHash = {
	addNode: (node: CacheNode) => void
	removeNode: (nodeId: string) => void
	getNode: (key: string) => CacheNode | undefined
	getNodes: (key: string, count?: number) => CacheNode[]
}

// ============================================================================
// Cache Decorators
// ============================================================================

/**
 * Cache decorator options
 */
export type CacheDecoratorOptions = {
	key: string | ((...args: unknown[]) => string)
	ttl?: number
	tags?: string[]
	condition?: (...args: unknown[]) => boolean
	refresh?: boolean
}

/**
 * Cache aside pattern
 */
export type CacheAside<T = unknown> = {
	get: (key: string, loader: () => Promise<T>) => Promise<T>
	set: (key: string, value: T) => Promise<void>
	invalidate: (key: string) => Promise<void>
}

/**
 * Read through cache
 */
export type ReadThroughCache<T = unknown> = {
	get: (key: string) => Promise<T | undefined>
	set: (key: string, value: T) => Promise<void>
	invalidate: (key: string) => Promise<void>
	loader: (key: string) => Promise<T>
}

/**
 * Write through cache
 */
export type WriteThroughCache<T = unknown> = {
	set: (key: string, value: T) => Promise<void>
	get: (key: string) => Promise<T | undefined>
	delete: (key: string) => Promise<void>
	writer: (key: string, value: T) => Promise<void>
}

/**
 * Write behind cache
 */
export type WriteBehindCache<T = unknown> = {
	set: (key: string, value: T) => Promise<void>
	get: (key: string) => Promise<T | undefined>
	delete: (key: string) => Promise<void>
	flush: () => Promise<void>
	writer: (entries: CacheEntry<T>[]) => Promise<void>
	writeDelay: number
	batchSize: number
}

// ============================================================================
// Cache Serialization
// ============================================================================

/**
 * Cache serializer
 */
export type CacheSerializer<T = unknown> = {
	serialize: (value: T) => string
	deserialize: (data: string) => T
}

/**
 * Cache compression options
 */
export type CacheCompressionOptions = {
	enabled: boolean
	threshold: number
	algorithm: 'gzip' | 'deflate' | 'brotli'
	level?: number
}
