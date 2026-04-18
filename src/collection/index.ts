/**
 * Type-level collection utilities
 *
 * This module provides type-level data structures and operations:
 * - TypeSet: Type-level set operations
 * - TypeMap: Type-level map operations
 * - List: Type-level list/array operations
 */

// ============================================================================
// Type-Level Set Operations
// ============================================================================

/**
 * Type-level Set
 */
export type TypeSet<T> = T

/**
 * Add element to type set
 */
export type SetAdd<S, T> = S | T

/**
 * Remove element from type set
 */
export type SetRemove<S, T> = Exclude<S, T>

/**
 * Check if element exists in type set
 */
export type SetHas<S, T> = T extends S ? true : false

/**
 * Union of two type sets
 */
export type SetUnion<A, B> = A | B

/**
 * Intersection of two type sets
 */
export type SetIntersection<A, B> = A & B

/**
 * Difference of two type sets
 */
export type SetDifference<A, B> = Exclude<A, B>

/**
 * Check if type set is empty
 */
export type SetIsEmpty<S> = [S] extends [never] ? true : false

/**
 * Check if A is subset of B
 */
export type SetIsSubset<A, B> = A extends B ? true : false

// ============================================================================
// Type-Level Map Operations
// ============================================================================

/**
 * Type-level Map
 */
export type TypeMap<K extends PropertyKey = PropertyKey, V = unknown> = Record<K, V>

/**
 * Get value from type map
 */
export type MapGet<M extends Record<PropertyKey, any>, K extends PropertyKey> = K extends keyof M
	? M[K]
	: never

/**
 * Set key-value pair in type map
 */
export type MapSet<M extends Record<PropertyKey, any>, K extends PropertyKey, V> = Omit<M, K> & {
	[P in K]: V
}

/**
 * Delete key from type map
 */
export type MapDelete<M extends Record<PropertyKey, any>, K extends PropertyKey> = Omit<M, K>

/**
 * Check if key exists in type map
 */
export type MapHas<M extends Record<PropertyKey, any>, K extends PropertyKey> = K extends keyof M
	? true
	: false

/**
 * Get all keys from type map
 */
export type MapKeys<M extends Record<PropertyKey, any>> = keyof M

/**
 * Get all values from type map
 */
export type MapValues<M extends Record<PropertyKey, any>> = M[keyof M]

// ============================================================================
// Type-Level List Operations
// ============================================================================

/**
 * Filter list elements by predicate
 */
export type ListFilter<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? [First, ...ListFilter<Rest, P>]
		: ListFilter<Rest, P>
	: []

/**
 * Find first element matching predicate
 */
export type ListFind<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? First
		: ListFind<Rest, P>
	: never

/**
 * Check if list includes element
 */
export type ListIncludes<T extends unknown[], E> = T extends [infer First, ...infer Rest]
	? First extends E
		? true
		: ListIncludes<Rest, E>
	: false

/**
 * Reverse a list
 */
export type ListReverse<T extends unknown[], Acc extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? ListReverse<Rest, [First, ...Acc]>
	: Acc

/**
 * Concatenate two lists
 */
export type ListConcat<A extends unknown[], B extends unknown[]> = [...A, ...B]

/**
 * Get length of list
 */
export type ListLength<T extends unknown[], Acc extends 0[] = []> = T extends [unknown, ...infer Rest]
	? ListLength<Rest, [...Acc, 0]>
	: Acc['length']
