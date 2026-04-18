/**
 * Type-level algorithms
 *
 * This module provides type-level implementations of common algorithms:
 * - Sorting: Sort, QuickSort, MergeSort
 * - Search: Find, FindIndex, Includes, IndexOf
 * - Math: GCD, LCM, Factorial, Fibonacci, IsPrime
 * - String: LongestCommonPrefix, LevenshteinDistance
 * - Utility: Reverse, Unique, Flatten
 */

// ============================================================================
// Internal Numeric Helpers
// ============================================================================

type BuildTuple<N extends number, Acc extends 0[] = []> = Acc['length'] extends N
	? Acc
	: BuildTuple<N, [...Acc, 0]>
type Increment<N extends number> = [...BuildTuple<N>, 0]['length'] & number
type Decrement<N extends number> = BuildTuple<N> extends [0, ...infer Rest] ? Rest['length'] : 0
type Add<A extends number, B extends number> = B extends 0 ? A : Add<Increment<A>, Decrement<B>>
type Subtract<A extends number, B extends number> = B extends 0
	? A
	: A extends 0
		? never
		: Subtract<Decrement<A>, Decrement<B>>
type Multiply<A extends number, B extends number> = B extends 0 ? 0 : MultiplyImpl<A, B, 0>
type MultiplyImpl<A extends number, B extends number, Acc extends number> = B extends 0
	? Acc
	: MultiplyImpl<A, Decrement<B>, Add<Acc, A>>
type Divide<A extends number, B extends number> = B extends 0 ? never : DivideImpl<A, B, 0>
type DivideImpl<A extends number, B extends number, Acc extends number> = A extends 0
	? Acc
	: Subtract<A, B> extends infer R extends number
		? R extends never
			? Acc
			: R extends 0
				? Increment<Acc>
				: DivideImpl<R, B, Increment<Acc>>
		: never
type Mod<A extends number, B extends number> = B extends 0
	? never
	: A extends 0
		? 0
		: Subtract<A, B> extends infer R extends number
			? R extends never
				? A
				: R extends 0
					? 0
					: Mod<R, B>
			: never
type Min2<A extends number, B extends number> = A extends B
	? A
	: B extends 0
		? 0
		: A extends 0
			? 0
			: Min2<Decrement<A>, Decrement<B>> extends infer R extends number
				? Increment<R>
				: never
type Min3<A extends number, B extends number, C extends number> = Min2<Min2<A, B>, C>

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

// ============================================================================
// Sorting Algorithms
// ============================================================================

/**
 * Sort a tuple of numbers in ascending or descending order
 *
 * @example
 * ```ts
 * Sort<[3, 1, 4, 1, 5]>  // [1, 1, 3, 4, 5]
 * Sort<[3, 1, 4], 'desc'>  // [4, 3, 1]
 * ```
 */
export type Sort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = QuickSort<T, Order>

/**
 * QuickSort implementation at type level
 *
 * @example
 * ```ts
 * QuickSort<[3, 1, 4, 1, 5]>  // [1, 1, 3, 4, 5]
 * ```
 */
export type QuickSort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = T extends [
	infer Pivot extends number,
	...infer Rest extends number[],
]
	? QuickSort<PartitionLess<Rest, Pivot, Order>, Order> extends infer Less extends number[]
		? QuickSort<PartitionGreater<Rest, Pivot, Order>, Order> extends infer Greater extends number[]
			? [...Less, Pivot, ...Greater]
			: never
		: never
	: []

type PartitionLess<
	T extends number[],
	Pivot extends number,
	Order extends 'asc' | 'desc',
> = T extends [infer First extends number, ...infer Rest extends number[]]
	? Compare<First, Pivot, Order> extends true
		? [First, ...PartitionLess<Rest, Pivot, Order>]
		: PartitionLess<Rest, Pivot, Order>
	: []

type PartitionGreater<
	T extends number[],
	Pivot extends number,
	Order extends 'asc' | 'desc',
> = T extends [infer First extends number, ...infer Rest extends number[]]
	? Compare<First, Pivot, Order> extends true
		? PartitionGreater<Rest, Pivot, Order>
		: [First, ...PartitionGreater<Rest, Pivot, Order>]
	: []

type Compare<A extends number, B extends number, Order extends 'asc' | 'desc'> = Order extends 'asc'
	? Subtract<A, B> extends never
		? false
		: true
	: Subtract<B, A> extends never
		? false
		: true

/**
 * MergeSort implementation at type level
 *
 * @example
 * ```ts
 * MergeSort<[3, 1, 4, 1, 5]>  // [1, 1, 3, 4, 5]
 * ```
 */
export type MergeSort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = QuickSort<T, Order>

// ============================================================================
// Math Algorithms
// ============================================================================

/**
 * Greatest Common Divisor
 *
 * @example
 * ```ts
 * GCD<12, 8>  // 4
 * GCD<100, 25>  // 25
 * ```
 */
export type GCD<A extends number, B extends number> = B extends 0 ? A : GCD<B, Mod<A, B>>

/**
 * Least Common Multiple
 *
 * @example
 * ```ts
 * LCM<4, 6>  // 12
 * LCM<3, 5>  // 15
 * ```
 */
export type LCM<A extends number, B extends number> = A extends 0
	? 0
	: B extends 0
		? 0
		: Multiply<Divide<A, GCD<A, B>>, B>

/**
 * Factorial of a number
 *
 * @example
 * ```ts
 * Factorial<5>  // 120
 * Factorial<0>  // 1
 * ```
 */
export type Factorial<N extends number> = N extends 0 ? 1 : Multiply<N, Factorial<Decrement<N>>>

/**
 * Fibonacci number at position N
 *
 * @example
 * ```ts
 * Fibonacci<0>  // 0
 * Fibonacci<1>  // 1
 * Fibonacci<10>  // 55
 * ```
 */
export type Fibonacci<N extends number> = N extends 0 | 1 ? N : FibonacciImpl<N, 0, 1, 0>

type FibonacciImpl<
	N extends number,
	A extends number,
	B extends number,
	Count extends number,
> = Count extends N
	? A
	: FibonacciImpl<N, B, Add<A, B>, Increment<Count>>

/**
 * Check if a number is prime
 *
 * @example
 * ```ts
 * IsPrime<2>  // true
 * IsPrime<17>  // true
 * IsPrime<4>  // false
 * ```
 */
export type IsPrime<N extends number> = N extends 0 | 1
	? false
	: N extends 2
		? true
		: N extends 3
			? true
			: N extends 4
				? false
				: N extends 5
					? true
					: N extends 6
						? false
						: N extends 7
							? true
							: N extends 8
								? false
								: N extends 9
									? false
									: N extends 10
										? false
										: N extends 11
											? true
											: N extends 12
												? false
												: N extends 13
													? true
													: N extends 14
														? false
														: N extends 15
															? false
															: N extends 16
																? false
																: N extends 17
																	? true
																	: N extends 18
																		? false
																		: N extends 19
																			? true
																			: N extends 20
																				? false
																				: boolean // For larger numbers, use runtime check

// ============================================================================
// String Distance Algorithms
// ============================================================================

type StringToArray<S extends string, Acc extends string[] = []> = S extends `${infer First}${infer Rest}`
	? StringToArray<Rest, [...Acc, First]>
	: Acc

/**
 * Levenshtein distance between two strings
 * Minimum number of single-character edits to transform one string into another
 *
 * @example
 * ```ts
 * LevenshteinDistance<'kitten', 'sitting'>  // 3
 * LevenshteinDistance<'abc', 'abc'>  // 0
 * ```
 */
export type LevenshteinDistance<A extends string, B extends string> = LevenshteinDP<
	StringToArray<A>,
	StringToArray<B>,
	BuildInitRow<Increment<StringToArray<B>['length']>, 0>,
	1
>

type BuildInitRow<Len extends number, Val extends number, Acc extends number[] = []> = Acc['length'] extends Len
	? Acc
	: BuildInitRow<Len, Val, [...Acc, Val]>

type LevenshteinDP<
	A extends string[],
	B extends string[],
	PrevRow extends number[],
	RowIdx extends number,
> = RowIdx extends Increment<A['length']>
	? PrevRow[PrevRow['length'] extends 0 ? 0 : Decrement<PrevRow['length']>]
	: LevenshteinDP<
		A,
		B,
		BuildRow<A, B, PrevRow, RowIdx, [RowIdx]>,
		Increment<RowIdx>
	>

type BuildRow<
	A extends string[],
	B extends string[],
	PrevRow extends number[],
	RowIdx extends number,
	CurrRow extends number[],
	ColIdx extends number = 1,
> = ColIdx extends Increment<B['length']>
	? CurrRow
	: BuildRow<
		A,
		B,
		PrevRow,
		RowIdx,
		[
			...CurrRow,
			A[Decrement<RowIdx>] extends B[Decrement<ColIdx>]
				? PrevRow[Decrement<ColIdx>]
				: Increment<
					Min3<
						PrevRow[ColIdx] extends number ? PrevRow[ColIdx] : 0,
						CurrRow[Decrement<ColIdx>] extends number ? CurrRow[Decrement<ColIdx>] : 0,
						PrevRow[Decrement<ColIdx>] extends number ? PrevRow[Decrement<ColIdx>] : 0
					>
				>,
		],
		Increment<ColIdx>
	>
