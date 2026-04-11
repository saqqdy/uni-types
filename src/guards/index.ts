/**
 * Check if type is an array
 *
 * @example
 * ```ts
 * IsArray<string[]> // true
 * IsArray<string>   // false
 * ```
 */
export type IsArray<T> = T extends readonly unknown[]
	? T extends readonly [...unknown[]]
		? true
		: false
	: false

/**
 * Check if type is a tuple
 *
 * @example
 * ```ts
 * IsTuple<[string, number]> // true
 * IsTuple<string[]>         // false
 * ```
 */
export type IsTuple<T> = T extends readonly [unknown, ...unknown[]]
	? T extends readonly unknown[]
		? number extends T['length']
			? false
			: true
		: false
	: false

/**
 * Check if two types are equal
 *
 * @example
 * ```ts
 * IsEqual<string, string>   // true
 * IsEqual<string, number>   // false
 * ```
 */
export type IsEqual<X, Y>
	= (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
		? true
		: false

/**
 * Check if type is any
 */
export type IsAny<T> = 0 extends 1 & T ? true : false

/**
 * Check if type is never
 */
export type IsNever<T> = [T] extends [never] ? true : false

/**
 * Check if type is unknown
 */
export type IsUnknown<T> = IsEqual<T, unknown> extends true
	? IsAny<T> extends true
		? false
		: true
	: false