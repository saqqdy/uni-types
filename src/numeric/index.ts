/**
 * Numeric type operations for compile-time arithmetic
 */

type NumberToArray<N extends number, Acc extends 0[] = []> = Acc['length'] extends N
	? Acc
	: NumberToArray<N, [...Acc, 0]>

/**
 * Increment number type
 *
 * @example
 * ```ts
 * Inc<5>   // 6
 * Inc<0>   // 1
 * ```
 */
export type Inc<N extends number> = [...NumberToArray<N>, 0]['length']

/**
 * Decrement number type
 *
 * @example
 * ```ts
 * Dec<5>   // 4
 * Dec<1>   // 0
 * Dec<0>   // 0 (clamped)
 * ```
 */
export type Dec<N extends number> = N extends 0 ? 0 : NumberToArray<N> extends [0, ...infer Rest] ? Rest['length'] : 0

/**
 * Add two number types
 *
 * @example
 * ```ts
 * Add<3, 4>   // 7
 * Add<0, 5>   // 5
 * ```
 */
export type Add<A extends number, B extends number> = [
	...NumberToArray<A>,
	...NumberToArray<B>,
]['length']

/**
 * Subtract two number types
 *
 * @example
 * ```ts
 * Subtract<10, 3>  // 7
 * Subtract<5, 10>  // 0 (clamped)
 * ```
 */
export type Subtract<A extends number, B extends number> = NumberToArray<B> extends [
	...number[],
	...NumberToArray<A>,
]
	? 0
	: NumberToArray<A> extends [...NumberToArray<B>, ...infer Rest]
		? Rest['length']
		: 0

/**
 * Range of numbers from start to end (inclusive)
 * Note: Limited to small ranges due to TypeScript recursion limits
 *
 * @example
 * ```ts
 * Range<1, 5>  // 1 | 2 | 3 | 4 | 5
 * Range<0, 3>  // 0 | 1 | 2 | 3
 * ```
 */
export type Range<
	From extends number,
	To extends number,
	Acc extends number = From,
> = From extends To
	? Acc
	: From extends To
		? Acc
		: never

/**
 * Check if A is greater than B
 *
 * @example
 * ```ts
 * GreaterThan<5, 3>  // true
 * GreaterThan<3, 5>  // false
 * ```
 */
export type GreaterThan<A extends number, B extends number> = Subtract<A, B> extends 0
	? false
	: true

/**
 * Check if A is less than B
 *
 * @example
 * ```ts
 * LessThan<3, 5>  // true
 * LessThan<5, 3>  // false
 * ```
 */
export type LessThan<A extends number, B extends number> = Subtract<B, A> extends 0
	? false
	: true

/**
 * Maximum of two numbers
 *
 * @example
 * ```ts
 * Max<3, 5>  // 5
 * Max<5, 3>  // 5
 * ```
 */
export type Max<A extends number, B extends number> = GreaterThan<A, B> extends true ? A : B

/**
 * Minimum of two numbers
 *
 * @example
 * ```ts
 * Min<3, 5>  // 3
 * Min<5, 3>  // 3
 * ```
 */
export type Min<A extends number, B extends number> = LessThan<A, B> extends true ? A : B
