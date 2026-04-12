/**
 * Type optimization utilities
 *
 * These types help simplify and optimize complex types for better compilation.
 */

/**
 * Simplify complex types - flatten intersections
 *
 * @example
 * ```ts
 * type Complex = { a: string } & { b: number }
 * type Simple = Simplify<Complex>
 * // { a: string; b: number }
 * ```
 */
export type Simplify<T> = { [K in keyof T]: T[K] } & unknown

/**
 * Deep simplify - recursively flatten types
 *
 * @example
 * ```ts
 * type Nested = { a: { b: string } & { c: number } }
 * type Deep = DeepSimplify<Nested>
 * ```
 */
export type DeepSimplify<T> = T extends object
	? T extends (...args: any[]) => any
		? T
		: T extends Array<infer E>
			? DeepSimplify<E>[]
			: { [K in keyof T]: DeepSimplify<T[K]> }
	: T

/**
 * Flatten type - remove extra intersections
 *
 * @example
 * ```ts
 * type Flat = FlattenType<{ a: string } & { b: number } & { c: boolean }>
 * // { a: string; b: number; c: boolean }
 * ```
 */
export type FlattenType<T> = T extends infer U ? { [K in keyof U]: U[K] } : never

/**
 * Reduce intersection - simplify intersection types
 *
 * @example
 * ```ts
 * type Reduced = ReduceIntersection<{ a: string } & { a: string; b: number }>
 * // { a: string; b: number }
 * ```
 */
export type ReduceIntersection<T> = T extends infer U ? Simplify<U> : never

/**
 * Reduce union - remove duplicate union members
 *
 * @example
 * ```ts
 * type Reduced = ReduceUnion<string | number | string>
 * // string | number
 * ```
 */
export type ReduceUnion<T> = T extends infer U ? U : never

/**
 * Compact type - remove never and undefined from objects
 *
 * @example
 * ```ts
 * type Compacted = Compact<{ a: string; b: never; c?: undefined }>
 * // { a: string }
 * ```
 */
export type Compact<T> = {
	[K in keyof T as T[K] extends never ? never : undefined extends T[K] ? never : K]: T[K]
}

/**
 * Strip never from object
 *
 * @example
 * ```ts
 * type Stripped = StripNever<{ a: string; b: never; c: number }>
 * // { a: string; c: number }
 * ```
 */
export type StripNever<T> = {
	[K in keyof T as T[K] extends never ? never : K]: T[K]
}

/**
 * Strip undefined from object
 *
 * @example
 * ```ts
 * type Stripped = StripUndefined<{ a: string; b?: undefined; c: number }>
 * // { a: string; c: number }
 * ```
 */
export type StripUndefined<T> = {
	[K in keyof T as undefined extends T[K] ? never : K]: T[K]
}

/**
 * Strip null from object
 */
export type StripNull<T> = {
	[K in keyof T as null extends T[K] ? never : K]: T[K]
}

/**
 * Merge all - deeply merge object types
 */
export type MergeAll<T extends object[]> = T extends [infer First extends object, ...infer Rest extends object[]]
	? Rest extends []
		? Simplify<First>
		: Simplify<First & MergeAll<Rest>>
	: Record<string, never>

/**
 * Pick non-nullable - pick only non-nullable properties
 */
export type PickNonNullable<T> = {
	[K in keyof T as null | undefined extends T[K] ? never : K]: T[K]
}

/**
 * Pick nullable - pick only nullable properties
 */
export type PickNullable<T> = {
	[K in keyof T as null | undefined extends T[K] ? K : never]: T[K]
}

/**
 * Type equivalence check (optimized)
 */
export type TypeEq<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
	? true
	: false

/**
 * Exact type - ensure exact shape match
 */
export type ExactType<T, Shape> = T extends Shape
	? Exclude<keyof T, keyof Shape> extends never
		? T
		: never
	: never

/**
 * Normalize - remove optional markers while preserving types
 */
export type Normalize<T> = { [K in keyof T]-?: T[K] }

/**
 * Optionalize - make all properties optional
 */
export type Optionalize<T> = { [K in keyof T]?: T[K] }
