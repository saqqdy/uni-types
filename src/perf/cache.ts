/**
 * Type caching utilities
 *
 * These types help cache and memoize type computations.
 */

/**
 * Cached type - prevents re-computation
 *
 * @example
 * ```ts
 * type CachedResult = Cached<ComplexComputation>
 * ```
 */
export type Cached<T> = T extends infer U ? { __cached: U } : never

/**
 * Extract cached value
 *
 * @example
 * ```ts
 * type Value = CachedValue<Cached<string>>  // string
 * ```
 */
export type CachedValue<T> = T extends { __cached: infer U } ? U : never

/**
 * Memoized type - remembers computation
 *
 * @example
 * ```ts
 * type Memo = Memoized<{ a: string } & { b: number }>
 * ```
 */
export type Memoized<T> = T extends infer U ? U : never

/**
 * Type identity - prevents structural typing
 */
export interface TypeIdentity<T> { __brand: T }

/**
 * Brand cache for memoization
 */
export type BrandCache<T, B extends string> = T & { __brandCache: B }

/**
 * Resolve brand cache
 */
export type ResolveBrandCache<T> = T extends { __brandCache: infer _ } ? Omit<T, '__brandCache'> : T

/**
 * Cached intersection
 */
export type CachedIntersection<A, B> = Cached<A & B>

/**
 * Cached union
 */
export type CachedUnion<A, B> = Cached<A | B>

/**
 * Cached keyof
 */
export type CachedKeyOf<T> = Cached<keyof T>

/**
 * Cached property access
 */
export type CachedProperty<T, K extends keyof T> = Cached<T[K]>

/**
 * Type computation cache key
 */
export type CacheKey<T> = symbol & { __cacheKey: T }

/**
 * Cache entry
 */
export interface CacheEntry<K, V> {
	key: K
	value: V
	timestamp: number
}

/**
 * Type cache structure
 */
export type TypeCache<T extends Record<string, unknown>> = {
	[K in keyof T]: Cached<T[K]>
}

/**
 * Flush cache - force re-computation
 */
export type FlushCache<T> = T extends Cached<infer U> ? U : T
