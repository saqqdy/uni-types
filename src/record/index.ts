/**
 * Record and object manipulation types
 */

/**
 * Deep nullable - make all properties nullable
 *
 * @example
 * ```ts
 * DeepNullable<{ a: { b: string } }>
 * // { a: { b: string | null } }
 * ```
 */
export type DeepNullable<T> = T extends (...args: any[]) => any
	? T
	: T extends Map<infer K, infer V>
		? Map<DeepNullable<K>, DeepNullable<V>>
		: T extends Set<infer V>
			? Set<DeepNullable<V>>
			: T extends readonly (infer E)[]
				? DeepNullable<E>[]
				: T extends object
					? { [K in keyof T]: DeepNullable<T[K]> | null }
					: T | null

/**
 * Deep optional - make all properties optional
 *
 * @example
 * ```ts
 * DeepOptional<{ a: { b: string } }>
 * // { a?: { b?: string } }
 * ```
 */
export type DeepOptional<T> = T extends (...args: any[]) => any
	? T
	: T extends Map<infer K, infer V>
		? Map<DeepOptional<K>, DeepOptional<V>>
		: T extends Set<infer V>
			? Set<DeepOptional<V>>
			: T extends readonly (infer E)[]
				? DeepOptional<E>[]
				: T extends object
					? { [K in keyof T]?: DeepOptional<T[K]> }
					: T

/**
 * Immutable object - deep readonly alternative
 *
 * @example
 * ```ts
 * Immutable<{ a: { b: string[] } }>
 * // { readonly a: { readonly b: readonly string[] } }
 * ```
 */
export type Immutable<T> = T extends (...args: any[]) => any
	? T
	: T extends Map<infer K, infer V>
		? ReadonlyMap<Immutable<K>, Immutable<V>>
		: T extends Set<infer V>
			? ReadonlySet<Immutable<V>>
			: T extends readonly (infer E)[]
				? readonly Immutable<E>[]
				: T extends object
					? { readonly [K in keyof T]: Immutable<T[K]> }
					: T

/**
 * Mutable object - deep mutable alternative
 *
 * @example
 * ```ts
 * Mutable<{ readonly a: { readonly b: readonly string[] } }>
 * // { a: { b: string[] } }
 * ```
 */
export type Mutable<T> = T extends (...args: any[]) => any
	? T
	: T extends Map<infer K, infer V>
		? Map<Mutable<K>, Mutable<V>>
		: T extends Set<infer V>
			? Set<Mutable<V>>
			: T extends readonly (infer E)[]
				? Mutable<E>[]
				: T extends object
					? { -readonly [K in keyof T]: Mutable<T[K]> }
					: T

/**
 * Deep non-nullable - remove null and undefined from all properties
 *
 * @example
 * ```ts
 * DeepNonNullable<{ a: string | null; b: number | undefined }>
 * // { a: string; b: number }
 * ```
 */
export type DeepNonNullable<T> = T extends (...args: any[]) => any
	? T
	: T extends Map<infer K, infer V>
		? Map<DeepNonNullable<K>, DeepNonNullable<V>>
		: T extends Set<infer V>
			? Set<DeepNonNullable<V>>
			: T extends readonly (infer E)[]
				? DeepNonNullable<E>[]
				: T extends object
					? { [K in keyof T]: DeepNonNullable<NonNullable<T[K]>> }
					: NonNullable<T>

/**
 * Exact type - ensure object has exactly these keys
 *
 * @example
 * ```ts
 * Exact<{ a: string }, { a: string }>       // { a: string }
 * Exact<{ a: string }, { a: string, b: number }>  // never
 * ```
 */
export type Exact<T, Shape> = T extends Shape
	? Exclude<keyof T, keyof Shape> extends never
		? T
		: never
	: never

/**
 * Make all properties non-optional
 *
 * @example
 * ```ts
 * Required<{ a?: string; b?: number }>
 * // { a: string; b: number }
 * ```
 */
export type Required<T> = {
	[K in keyof T]-?: T[K]
}

/**
 * Deep required with null/undefined handling
 *
 * @example
 * ```ts
 * DeepRequired<{ a?: { b?: string } }>
 * // { a: { b: string } }
 * ```
 */
export type DeepRequiredProperties<T> = T extends (...args: any[]) => any
	? T
	: T extends Map<infer K, infer V>
		? Map<DeepRequiredProperties<K>, DeepRequiredProperties<V>>
		: T extends Set<infer V>
			? Set<DeepRequiredProperties<V>>
			: T extends readonly (infer E)[]
				? DeepRequiredProperties<E>[]
				: T extends object
					? { [K in keyof T]-?: DeepRequiredProperties<T[K]> }
					: T

/**
 * Object with at least the specified keys
 *
 * @example
 * ```ts
 * HasKeys<{ a: string; b: number }, 'a'>
 * // { a: string; b: number }
 * HasKeys<{ a: string }, 'b'>
 * // never
 * ```
 */
export type HasKeys<T, K extends keyof any> = K extends keyof T ? T : never

/**
 * Object with exactly the specified keys
 *
 * @example
 * ```ts
 * HasExactKeys<{ a: string }, 'a'>
 * // true
 * HasExactKeys<{ a: string; b: number }, 'a'>
 * // false
 * ```
 */
export type HasExactKeys<T, K extends keyof any> = keyof T extends K
	? K extends keyof T
		? true
		: false
	: false
