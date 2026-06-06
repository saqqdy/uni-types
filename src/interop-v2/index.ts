/**
 * Interop Enhancements
 *
 * Improved interoperability with other libraries, frameworks,
 * and schema systems for v2.0.0.
 */

// ============== Library Interop ==============

/**
 * Interop - Generic library interop wrapper
 */
export type Interop<T, Library extends string> = T & {
	__interop__: Library
}

/**
 * ConvertTo - Convert a type to a target library format
 */
export type ConvertTo<T, Target extends string> = T extends object
	? Target extends 'zod'
		? ToZodSchema<T>
		: Target extends 'yup'
			? ToYupSchema<T>
			: Target extends 'json-schema'
				? ToJSONSchema<T>
				: T
	: T

/**
 * ConvertFrom - Convert a type from a source library format
 */
export type ConvertFrom<T, Source extends string> = T extends object
	? Source extends 'zod'
		? FromZodSchema<T>
		: Source extends 'yup'
			? FromYupSchema<T>
			: Source extends 'json-schema'
				? FromJSONSchema<T>
				: T
	: T

/**
 * BiDirectional - Bi-directional interop between two types
 */
export interface BiDirectional<T, U> {
	/** Forward conversion */
	to: (value: T) => U
	/** Reverse conversion */
	from: (value: U) => T
	/** Check if conversion is lossless */
	isLossless: boolean
}

// ============== Schema Interop ==============

/**
 * ToZodSchema - Convert type to Zod schema shape
 */
export type ToZodSchema<T> = T extends string
	? { type: 'string' }
	: T extends number
		? { type: 'number' }
		: T extends boolean
			? { type: 'boolean' }
			: T extends Date
				? { type: 'date' }
				: T extends unknown[]
					? { type: 'array', element: ToZodSchema<T[number]> }
					: T extends object
						? { type: 'object', shape: { [K in keyof T]: ToZodSchema<T[K]> } }
						: { type: 'unknown' }

/**
 * FromZodSchema - Convert from Zod schema shape to type
 */
export type FromZodSchema<T> = T extends { type: 'string' }
	? string
	: T extends { type: 'number' }
		? number
		: T extends { type: 'boolean' }
			? boolean
			: T extends { type: 'date' }
				? Date
				: T extends { type: 'array', element: infer E }
					? Array<FromZodSchema<E>>
					: T extends { type: 'object', shape: infer S }
						? { [K in keyof S]: FromZodSchema<S[K]> }
						: unknown

/**
 * ToYupSchema - Convert type to Yup schema shape
 */
export type ToYupSchema<T> = T extends string
	? { type: 'string' }
	: T extends number
		? { type: 'number' }
		: T extends boolean
			? { type: 'boolean' }
			: T extends Date
				? { type: 'date' }
				: T extends unknown[]
					? { type: 'array', of: ToYupSchema<T[number]> }
					: T extends object
						? { type: 'object', fields: { [K in keyof T]: ToYupSchema<T[K]> } }
						: { type: 'mixed' }

/**
 * FromYupSchema - Convert from Yup schema shape to type
 */
export type FromYupSchema<T> = T extends { type: 'string' }
	? string
	: T extends { type: 'number' }
		? number
		: T extends { type: 'boolean' }
			? boolean
			: T extends { type: 'date' }
				? Date
				: T extends { type: 'array', of: infer E }
					? Array<FromYupSchema<E>>
					: T extends { type: 'object', fields: infer F }
						? { [K in keyof F]: FromYupSchema<F[K]> }
						: unknown

/**
 * ToJSONSchema - Convert type to JSON Schema representation
 */
export type ToJSONSchema<T> = T extends string
	? { type: 'string' }
	: T extends number
		? { type: 'number' }
		: T extends boolean
			? { type: 'boolean' }
			: T extends null
				? { type: 'null' }
				: T extends unknown[]
					? { type: 'array', items: ToJSONSchema<T[number]> }
					: T extends object
						? {
								type: 'object'
								properties: { [K in keyof T]: ToJSONSchema<T[K]> }
								required: RequiredKeys<T>
							}
						: Record<string, never>

/**
 * FromJSONSchema - Convert from JSON Schema to type
 */
export type FromJSONSchema<T> = T extends { type: 'string' }
	? string
	: T extends { type: 'number' }
		? number
		: T extends { type: 'boolean' }
			? boolean
			: T extends { type: 'null' }
				? null
				: T extends { type: 'array', items: infer I }
					? Array<FromJSONSchema<I>>
					: T extends { type: 'object', properties: infer P }
						? { [K in keyof P]: FromJSONSchema<P[K]> }
						: unknown

// ============== Framework Interop ==============

/**
 * ToReact - Convert type to React-compatible type
 */
export type ToReact<T> = T extends object
	? T & { children?: unknown, key?: string | number }
	: T

/**
 * ToVue - Convert type to Vue-compatible type
 */
export type ToVue<T> = T extends object
	? { [K in keyof T]: T[K] } & { __vue__?: true }
	: T

/**
 * ToSvelte - Convert type to Svelte-compatible type
 */
export type ToSvelte<T> = T extends object
	? { [K in keyof T]: T[K] } & { $$slots?: Record<string, unknown> }
	: T

/**
 * ToAngular - Convert type to Angular-compatible type
 */
export type ToAngular<T> = T extends object
	? { [K in keyof T]: T[K] } & { __angular__: true }
	: T

// ============== Type Library Interop ==============

/**
 * ToTypeFest - Convert to type-fest compatible type
 */
export type ToTypeFest<T> = T extends object
	? { [K in keyof T]: ToTypeFest<T[K]> }
	: T

/**
 * FromTypeFest - Convert from type-fest compatible type
 */
export type FromTypeFest<T> = T extends object
	? { [K in keyof T]: FromTypeFest<T[K]> }
	: T

/**
 * ToTsToolbelt - Convert to ts-toolbelt compatible type
 */
export type ToTsToolbelt<T> = T extends object
	? { [K in keyof T]: ToTsToolbelt<T[K]> }
	: T

/**
 * FromTsToolbelt - Convert from ts-toolbelt compatible type
 */
export type FromTsToolbelt<T> = T extends object
	? { [K in keyof T]: FromTsToolbelt<T[K]> }
	: T

// ============== Utility Types ==============

/**
 * RequiredKeys - Extract required keys from an object type
 */
type RequiredKeys<T> = {
	[K in keyof T]-?: object extends Pick<T, K> ? never : K
}[keyof T]

/**
 * OptionalKeys - Extract optional keys from an object type
 */
export type OptionalKeys<T> = {
	[K in keyof T]-?: object extends Pick<T, K> ? K : never
}[keyof T]

/**
 * InteropResult - Result of an interop conversion
 */
export interface InteropResult<T, Source extends string, Target extends string> {
	/** The converted type */
	converted: ConvertTo<T, Target>
	/** Source library */
	source: Source
	/** Target library */
	target: Target
	/** Whether conversion is lossless */
	lossless: boolean
}

/**
 * InteropMap - Map of interop conversions
 */
export type InteropMap<T, Libraries extends string = string> = {
	[Lib in Libraries]: ConvertTo<T, Lib>
}
