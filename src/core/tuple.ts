/**
 * Get the first element of a tuple
 *
 * @example
 * ```ts
 * Head<[1, 2, 3]> // 1
 * Head<string[]> // string
 * ```
 */
export type Head<T extends readonly unknown[]> = T extends readonly [infer H, ...unknown[]]
	? H
	: T extends readonly (infer E)[]
		? E
		: never

/**
 * Get the last element of a tuple
 *
 * @example
 * ```ts
 * Last<[1, 2, 3]> // 3
 * Last<string[]> // string
 * ```
 */
export type Last<T extends readonly unknown[]> = T extends readonly [...unknown[], infer L]
	? L
	: T extends readonly (infer E)[]
		? E
		: never

/**
 * Get all elements except the first (tail)
 *
 * @example
 * ```ts
 * Tail<[1, 2, 3]> // [2, 3]
 * Tail<[1]> // []
 * ```
 */
export type Tail<T extends readonly unknown[]> = T extends readonly [unknown, ...infer R]
	? R
	: []

/**
 * Get all elements except the last (init)
 *
 * @example
 * ```ts
 * Init<[1, 2, 3]> // [1, 2]
 * Init<[1]> // []
 * ```
 */
export type Init<T extends readonly unknown[]> = T extends readonly [...infer I, unknown]
	? I
	: []

/**
 * Reverse a tuple
 *
 * @example
 * ```ts
 * Reverse<[1, 2, 3]> // [3, 2, 1]
 * ```
 */
export type Reverse<T extends readonly unknown[], Acc extends readonly unknown[] = []> = T extends readonly [infer H, ...infer R]
	? Reverse<R, [H, ...Acc]>
	: Acc

/**
 * Flatten nested tuples
 *
 * @example
 * ```ts
 * Flatten<[1, [2, [3]]]> // [1, 2, 3]
 * ```
 */
export type Flatten<T extends readonly unknown[], Acc extends readonly unknown[] = []> = T extends readonly [infer H, ...infer R]
	? H extends readonly unknown[]
		? Flatten<[...H, ...R], Acc>
		: Flatten<R, [...Acc, H]>
	: Acc

/**
 * Get the length of a tuple
 *
 * @example
 * ```ts
 * TupleLength<[1, 2, 3]> // 3
 * ```
 */
export type TupleLength<T extends readonly unknown[]> = T['length']

/**
 * Check if tuple is empty
 *
 * @example
 * ```ts
 * IsEmptyTuple<[]> // true
 * IsEmptyTuple<[1]> // false
 * ```
 */
export type IsEmptyTuple<T extends readonly unknown[]> = T extends readonly []
	? true
	: false
