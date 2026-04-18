/**
 * Advanced type patterns for type-level programming
 */

/**
 * Type-level pattern matching
 */
export type Match<T, Patterns extends Record<string, any>> = T extends keyof Patterns
	? Patterns[T]
	: Patterns extends { _: infer Default }
		? Default
		: never

/**
 * Case helper for pattern matching
 */
export type Case<P extends PropertyKey> = P

/**
 * Default case for pattern matching
 */
export type Default<R> = R

/**
 * Type-level filter - filter tuple elements by predicate
 */
export type TypeFilter<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? [First, ...TypeFilter<Rest, P>]
		: TypeFilter<Rest, P>
	: []

/**
 * Type-level find - find first element matching predicate
 */
export type TypeFind<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? First
		: TypeFind<Rest, P>
	: never

/**
 * Type-level includes - check if type exists in tuple
 */
export type TypeIncludes<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? true
		: TypeIncludes<Rest, P>
	: false

/**
 * Type-level every - check if all elements match predicate
 */
export type TypeEvery<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? TypeEvery<Rest, P>
		: false
	: true

/**
 * Type-level some - check if any element matches predicate
 */
export type TypeSome<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? true
		: TypeSome<Rest, P>
	: false

/**
 * Type-level iteration - apply transformation N times
 */
export type Iterate<T, F extends (x: T) => any, N extends number, Count extends 0[] = []> = Count['length'] extends N
	? T
	: Iterate<F extends (x: T) => infer R ? R : never, F, N, [...Count, 0]>

/**
 * Type-level reduce - accumulate values from tuple
 */
export type Reduce<
	T extends unknown[],
	F,
	Initial,
	Acc = Initial,
> = T extends [infer First, ...infer Rest]
	? Reduce<Rest, F, Initial, F extends (acc: Acc, val: First) => infer R ? R : never>
	: Acc

/**
 * Type-level for-each - apply function to each element
 */
export type ForEach<T extends unknown[], F> = T extends [infer First, ...infer Rest]
	? [F extends (x: First) => infer R ? R : never, ...ForEach<Rest, F>]
	: []
