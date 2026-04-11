export * from './path'

/**
 * Merge two types (latter overrides former)
 *
 * @example
 * ```ts
 * Merge<{ a: string; b: number }, { b: boolean; c: string }>
 * // { a: string; b: boolean; c: string }
 * ```
 */
export type Merge<T, U> = Omit<T, keyof U> & U

/**
 * Non null/undefined
 *
 * @example
 * ```ts
 * NonNullable<string | null | undefined> // string
 * ```
 */
export type NonNullable<T> = T & {}

/**
 * Exclusive properties (only one can be selected)
 *
 * @example
 * ```ts
 * type Result = Exclusive<{ type: 'a'; valueA: string } | { type: 'b'; valueB: number }, 'type'>
 * // Only type: 'a' or type: 'b' can be selected
 * ```
 */
export type Exclusive<T, K extends keyof T> = T extends unknown
	? Omit<T, K> & { [P in K]?: never }
	: never

/**
 * Remove null and undefined from all properties
 */
export type NoNullish<T> = {
	[K in keyof T]: NonNullable<T[K]>
}

/**
 * Make all properties optional while preserving undefined/null values
 */
export type LoosePartial<T> = {
	[P in keyof T]?: T[P]
}

/**
 * Literal types
 */
export type Literal = string | number | boolean | undefined | null | void | bigint

/**
 * Exact literal types
 */
export type LiteralString<T extends string> = T
export type LiteralNumber<T extends number> = T
export type LiteralBoolean<T extends boolean> = T

/**
 * Nullable type
 */
export type Nullable<T> = T | null

/**
 * Optional type
 */
export type Optional<T> = T | undefined

/**
 * Maybe type (nullable and optional)
 */
export type Maybe<T> = T | null | undefined

/**
 * Convert string to camelCase
 */
export type CamelCase<S extends string> = S extends `${infer P}_${infer Q}`
	? `${P}${Capitalize<CamelCase<Q>>}`
	: S extends `${infer P}-${infer Q}`
		? `${P}${Capitalize<CamelCase<Q>>}`
		: S

/**
 * Convert object keys to camelCase
 */
export type CamelCaseKeys<T> = {
	[K in keyof T as CamelCase<string & K>]: T[K]
}

/**
 * Convert string to snake_case
 * Handles consecutive uppercase letters correctly (e.g., XMLParser -> xml_parser)
 */
export type SnakeCase<S extends string> = S extends `${infer C0}${infer C1}${infer Rest}`
	? C0 extends Uppercase<C0>
		? C0 extends Lowercase<C0>
			? `${C0}${SnakeCase<`${C1}${Rest}`>}`
			: C1 extends Uppercase<C1>
				? C1 extends Lowercase<C1>
					? `_${Lowercase<C0>}${SnakeCase<`${C1}${Rest}`>}`
					: `${Lowercase<C0>}${SnakeCase<`${C1}${Rest}`>}`
				: `_${Lowercase<C0>}${SnakeCase<`${C1}${Rest}`>}`
		: `${C0}${SnakeCase<`${C1}${Rest}`>}`
	: S extends `${infer C}`
		? C extends Uppercase<C>
			? C extends Lowercase<C>
				? `${C}`
				: `_${Lowercase<C>}`
			: `${C}`
		: S

/**
 * Convert object keys to snake_case
 */
export type SnakeCaseKeys<T> = {
	[K in keyof T as SnakeCase<string & K>]: T[K]
}

/**
 * Require at least one property
 */
export type AtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>>
	& {
		[K in Keys]: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
	}[Keys]

/**
 * Strict extract
 */
export type StrictExtract<T, U extends keyof any> = T extends Record<U, any> ? T : never

/**
 * Strict exclude
 */
export type StrictExclude<T, U extends T> = T extends U ? never : T

/**
 * Convert union type to intersection type
 */
export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (
	k: infer I,
) => void
	? I
	: never

/**
 * Convert union type to tuple
 */
export type UnionToTuple<T> = UnionToIntersection<
	T extends unknown ? (t: T) => T : never
> extends (_: any) => infer W
	? [...UnionToTuple<Exclude<T, W>>, W]
	: []

/**
 * Get all required keys of a type
 *
 * @example
 * ```ts
 * interface User {
 *   name: string
 *   age?: number
 * }
 * RequiredKeys<User> // 'name'
 * ```
 */
export type RequiredKeys<T> = {
	[K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

/**
 * Get all optional keys of a type
 *
 * @example
 * ```ts
 * interface User {
 *   name: string
 *   age?: number
 * }
 * OptionalKeys<User> // 'age'
 * ```
 */
export type OptionalKeys<T> = {
	[K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]

/**
 * Get all writable (non-readonly) keys of a type
 *
 * @example
 * ```ts
 * interface User {
 *   name: string
 *   readonly age: number
 * }
 * WritableKeys<User> // 'name'
 * ```
 */
export type WritableKeys<T> = {
	[K in keyof T]: IfEquals<Readonly<Pick<T, K>>, Pick<T, K>, K, never>
}[keyof T]

/**
 * Get all readonly keys of a type
 *
 * @example
 * ```ts
 * interface User {
 *   name: string
 *   readonly age: number
 * }
 * ReadonlyKeys<User> // 'age'
 * ```
 */
export type ReadonlyKeys<T> = {
	[K in keyof T]: IfEquals<Readonly<Pick<T, K>>, Pick<T, K>, never, K>
}[keyof T]

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
	? 1
	: 2
	? A
	: B
