/**
 * Type-level algorithms
 *
 * This module provides type-level implementations of common algorithms:
 * - Search: Find, FindIndex, Includes, IndexOf
 * - String: LongestCommonPrefix
 * - Utility: Reverse, Unique, Flatten
 */

// ============================================================================
// Search Algorithms
// ============================================================================

/**
 * Find first element matching predicate in tuple
 *
 * @example
 * ```ts
 * Find<[1, 2, 3], 2>  // 2
 * Find<[1, 2, 3], 4>  // never
 * ```
 */
export type Find<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P ? First : Find<Rest, P>
	: never

/**
 * Find index of first element matching predicate
 *
 * @example
 * ```ts
 * FindIndex<[1, 2, 3], 2>  // 1
 * FindIndex<[1, 2, 3], 4>  // -1
 * ```
 */
export type FindIndex<T extends unknown[], P, Acc extends 0[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends P ? Acc['length'] : FindIndex<Rest, P, [...Acc, 0]>
	: -1

/**
 * Check if tuple includes element
 *
 * @example
 * ```ts
 * Includes<[1, 2, 3], 2>  // true
 * Includes<[1, 2, 3], 4>  // false
 * ```
 */
export type Includes<T extends unknown[], U> = T extends [infer First, ...infer Rest]
	? First extends U ? (U extends First ? true : Includes<Rest, U>) : Includes<Rest, U>
	: false

/**
 * Get index of element in tuple
 *
 * @example
 * ```ts
 * IndexOf<[1, 2, 3], 2>  // 1
 * IndexOf<[1, 2, 3], 4>  // -1
 * ```
 */
export type IndexOf<T extends unknown[], U> = FindIndex<T, U>

// ============================================================================
// String Algorithms
// ============================================================================

/**
 * Find longest common prefix of strings in tuple
 *
 * @example
 * ```ts
 * LongestCommonPrefix<['flower', 'flow', 'flight']>  // 'fl'
 * ```
 */
export type LongestCommonPrefix<T extends string[]> = T extends [
	infer First extends string,
	...infer Rest extends string[],
]
	? Rest extends [infer Second extends string, ...infer Others extends string[]]
		? LongestCommonPrefix<[CommonPrefix<First, Second>, ...Others]>
		: First
	: ''

type CommonPrefix<A extends string, B extends string> = A extends `${infer AF}${infer AR}`
	? B extends `${infer BF}${infer BR}`
		? AF extends BF ? `${AF}${CommonPrefix<AR, BR>}` : ''
		: ''
	: ''

// ============================================================================
// Utility Algorithms
// ============================================================================

/**
 * Reverse a tuple
 *
 * @example
 * ```ts
 * Reverse<[1, 2, 3]>  // [3, 2, 1]
 * ```
 */
export type Reverse<T extends unknown[], Acc extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? Reverse<Rest, [First, ...Acc]>
	: Acc

/**
 * Remove duplicates from tuple
 *
 * @example
 * ```ts
 * Unique<[1, 2, 1, 3, 2]>  // [1, 2, 3]
 * ```
 */
export type Unique<T extends unknown[], Seen extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends Seen[number] ? Unique<Rest, Seen> : [First, ...Unique<Rest, [...Seen, First]>]
	: []

/**
 * Flatten nested tuple (one level)
 *
 * @example
 * ```ts
 * Flatten<[[1, 2], [3, 4]]>  // [1, 2, 3, 4]
 * ```
 */
export type Flatten<T extends unknown[][], Acc extends unknown[] = []> = T extends [
	infer First extends unknown[],
	...infer Rest extends unknown[][],
]
	? Flatten<Rest, [...Acc, ...First]>
	: Acc

/**
 * Flatten nested tuple (deep)
 *
 * @example
 * ```ts
 * FlattenDeep<[[1, [2, 3]], [4]]>  // [1, 2, 3, 4]
 * ```
 */
export type FlattenDeep<T extends unknown[], Acc extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends unknown[]
		? FlattenDeep<Rest, [...Acc, ...FlattenDeep<First>]>
		: FlattenDeep<Rest, [...Acc, First]>
	: Acc