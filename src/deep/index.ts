export * from './path'

type BuiltIn = Date | ((...args: unknown[]) => unknown) | Map<unknown, unknown> | Set<unknown> | RegExp

/**
 * Deep optional - Make all nested properties optional
 *
 * @example
 * ```ts
 * interface Nested {
 *   a: {
 *     b: {
 *       c: string
 *     }
 *   }
 * }
 *
 * type Deep = DeepPartial<Nested>
 * // { a?: { b?: { c?: string } } }
 * ```
 */
export type DeepPartial<T> = T extends BuiltIn
	? T
	: T extends Map<infer K, infer V>
		? Map<DeepPartial<K>, DeepPartial<V>>
		: T extends Set<infer V>
			? Set<DeepPartial<V>>
			: T extends (infer E)[]
				? DeepPartial<E>[]
				: T extends object
					? { [P in keyof T]?: DeepPartial<T[P]> }
					: T

/**
 * Deep required - Make all nested properties required
 *
 * @example
 * ```ts
 * interface Nested {
 *   a?: {
 *     b?: {
 *       c?: string
 *     }
 *   }
 * }
 *
 * type Deep = DeepRequired<Nested>
 * // { a: { b: { c: string } } }
 * ```
 */
export type DeepRequired<T> = T extends BuiltIn
	? T
	: T extends Map<infer K, infer V>
		? Map<DeepRequired<K>, DeepRequired<V>>
		: T extends Set<infer V>
			? Set<DeepRequired<V>>
			: T extends (infer E)[]
				? DeepRequired<E>[]
				: T extends object
					? { [P in keyof T]-?: DeepRequired<T[P]> }
					: T

/**
 * Deep readonly - Make all nested properties readonly
 *
 * @example
 * ```ts
 * interface Nested {
 *   a: {
 *     b: string
 *   }
 * }
 *
 * type Deep = DeepReadonly<Nested>
 * // { readonly a: { readonly b: string } }
 * ```
 */
export type DeepReadonly<T> = T extends BuiltIn
	? T
	: T extends Map<infer K, infer V>
		? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
		: T extends Set<infer V>
			? ReadonlySet<DeepReadonly<V>>
			: T extends (infer E)[]
				? readonly DeepReadonly<E>[]
				: T extends object
					? { readonly [P in keyof T]: DeepReadonly<T[P]> }
					: T

/**
 * Deep mutable - Make all nested properties mutable (remove readonly)
 *
 * @example
 * ```ts
 * interface Nested {
 *   readonly a: {
 *     readonly b: string
 *   }
 * }
 *
 * type Deep = DeepMutable<Nested>
 * // { a: { b: string } }
 * ```
 */
export type DeepMutable<T> = T extends BuiltIn
	? T
	: T extends Map<infer K, infer V>
		? Map<DeepMutable<K>, DeepMutable<V>>
		: T extends Set<infer V>
			? Set<DeepMutable<V>>
			: T extends readonly (infer E)[]
				? DeepMutable<E>[]
				: T extends object
					? { -readonly [P in keyof T]: DeepMutable<T[P]> }
					: T
