/**
 * Metaprogramming Utilities
 *
 * Type-level metaprogramming utilities for advanced type manipulation.
 */

// ============================================================================
// Type Reflection
// ============================================================================

/**
 * Reflect type - get runtime-like type information
 */
export interface Reflect<T> {
	type: TypeName<T>
	category: TypeCategory
	nullable: IsNullable<T>
	optional: IsOptionalType<T>
	readonly: IsReadonlyType<T>
}

/**
 * Type information structure
 */
export interface TypeInfo<T> {
	name: TypeName<T>
	category: TypeCategory
	nullable: boolean
	optional: boolean
	readonly: boolean
	abstract: boolean
	generic: boolean
}

/**
 * Get type name as string literal
 */
export type TypeName<T> = T extends string
	? 'string'
	: T extends number
		? 'number'
		: T extends boolean
			? 'boolean'
			: T extends null
				? 'null'
				: T extends undefined
					? 'undefined'
					: T extends void
						? 'void'
						: T extends unknown[]
							? 'array'
							: T extends (...args: unknown[]) => unknown
								? 'function'
								: T extends object
									? 'object'
									: 'unknown'

/**
 * Type category enumeration
 */
export type TypeCategory
	= | 'primitive'
		| 'object'
		| 'array'
		| 'tuple'
		| 'function'
		| 'union'
		| 'intersection'
		| 'literal'
		| 'generic'
		| 'unknown'
		| 'any'
		| 'never'
		| 'void'
		| 'null'
		| 'undefined'

/**
 * Get the category of a type
 */
export type GetTypeCategory<T> = T extends string
	? (string extends T ? 'primitive' : 'literal')
	: T extends number
		? (number extends T ? 'primitive' : 'literal')
		: T extends boolean
			? (boolean extends T ? 'primitive' : 'literal')
			: T extends null
				? 'null'
				: T extends undefined
					? 'undefined'
					: T extends void
						? 'void'
						: T extends unknown[]
							? (number extends T['length'] ? 'array' : 'tuple')
							: T extends (...args: unknown[]) => unknown
								? 'function'
								: T extends object
									? 'object'
									: 'unknown'

// ============================================================================
// Type Manipulation
// ============================================================================

/**
 * Transform type using rules
 */
export type Transform<T, Rules extends Record<string, unknown>> = {
	[K in keyof T as K extends keyof Rules ? Rules[K] extends string ? Rules[K] : K : K]: T[K]
}

/**
 * Apply function to type
 */
export type Apply<T, F extends (x: T) => unknown> = ReturnType<F>

/**
 * Compose two types
 */
export type ComposeTypes<T, U> = T & U

/**
 * Merge two types (deep)
 */
export type MergeTypes<T, U> = {
	[K in keyof T | keyof U]: K extends keyof U
		? U[K]
		: K extends keyof T
			? T[K]
			: never
}

// ============================================================================
// Type Predicates
// ============================================================================

/**
 * Check if type satisfies constraint
 */
export type Satisfies<T, U extends T> = T extends U ? true : false

/**
 * Check if type extends another
 */
export type ExtendsType<T, U> = T extends U ? true : false

/**
 * Check for exact type match
 */
export type Exactly<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false

/**
 * Check type compatibility
 */
export type Compatible<T, U> = T extends U ? (U extends T ? true : false) : false

/**
 * Check if type is nullable
 */
export type IsNullable<T> = null extends T ? true : false

/**
 * Check if type is optional
 */
export type IsOptionalType<T> = undefined extends T ? true : false

/**
 * Check if type is readonly
 */
export type IsReadonlyType<T> = T extends { readonly [K: string]: unknown } ? true : false

// ============================================================================
// Type Construction
// ============================================================================

/**
 * Construct type from shape
 */
export type Construct<T> = { [K in keyof T]: T[K] }

/**
 * Deconstruct type to parts
 */
export type Deconstruct<T> = T extends infer U
	? {
			keys: keyof U
			values: U[keyof U]
			entries: [keyof U, U[keyof U]]
		}
	: never

/**
 * Flatten type to single level
 */
export type FlattenType<T> = T extends object
	? { [K in keyof T]: T[K] }
	: T

// ============================================================================
// Type Analysis
// ============================================================================

/**
 * Analyze type structure
 */
export interface Analyze<T> {
	depth: Depth<T>
	width: Width<T>
	keys: keyof T extends never ? 0 : keyof T extends string ? number : number
	nullable: IsNullable<T>
	optional: IsOptionalType<T>
}

/**
 * Get type depth
 */
export type Depth<T, Acc extends unknown[] = []> = Acc['length'] extends 10
	? never
	: T extends object
		? T extends unknown[]
			? Depth<T[number], [...Acc, unknown]>
			: Depth<T[keyof T], [...Acc, unknown]>
		: Acc['length']

/**
 * Get type width (number of keys)
 */
export type Width<T> = T extends object
	? (keyof T extends never ? 0 : keyof T extends string ? number : number)
	: 0

/**
 * Get type complexity score
 */
export type Complexity<T> = T extends primitive
	? 1
	: T extends unknown[]
		? 2
		: T extends object
			? 3
			: T extends (...args: unknown[]) => unknown
				? 2
				: 1

type primitive = string | number | boolean | null | undefined | void | symbol | bigint

// ============================================================================
// Type Generation
// ============================================================================

/**
 * Generate type from template
 */
export type Generate<T extends Record<string, unknown>> = { [K in keyof T]: T[K] }

/**
 * Generate type from schema
 */
export type GenerateFromSchema<S extends Record<string, unknown>> = {
	[K in keyof S]: S[K] extends { type: infer T } ? T : S[K]
}

/**
 * Generate all possible types from union
 */
export type GenerateAll<T> = T extends unknown ? T : never

// ============================================================================
// Type Utilities
// ============================================================================

/**
 * Get type at path
 */
export type TypeAtPath<T, P extends string> = P extends `${infer K}.${infer Rest}`
	? K extends keyof T
		? TypeAtPath<T[K], Rest>
		: never
	: P extends keyof T
		? T[P]
		: never

/**
 * Set type at path
 */
export type SetTypeAtPath<T, P extends string, V> = P extends `${infer K}.${infer Rest}`
	? K extends keyof T
		? Omit<T, K> & { [Key in K]: SetTypeAtPath<T[K], Rest, V> }
		: T
	: P extends keyof T
		? Omit<T, P> & { [Key in P]: V }
		: T

/**
 * Omit type at path
 */
export type OmitTypeAtPath<T, P extends string> = P extends `${infer K}.${infer Rest}`
	? K extends keyof T
		? Omit<T, K> & { [Key in K]: OmitTypeAtPath<T[K], Rest> }
		: T
	: P extends keyof T
		? Omit<T, P>
		: T

/**
 * Pick type at path
 */
export type PickTypeAtPath<T, P extends string> = P extends `${infer K}.${infer Rest}`
	? K extends keyof T
		? { [Key in K]: PickTypeAtPath<T[K], Rest> }
		: never
	: P extends keyof T
		? { [Key in P]: T[P] }
		: never

// ============================================================================
// Type Patterns
// ============================================================================

/**
 * Pattern match on type
 */
export type PatternMatch<T, Patterns extends Record<string, unknown>> = T extends infer U
	? {
			[K in keyof Patterns]: U extends Patterns[K] ? K : never
		}[keyof Patterns]
	: never

/**
 * Extract type by pattern
 */
export type ExtractByPattern<T, Pattern> = T extends Pattern ? T : never

/**
 * Exclude type by pattern
 */
export type ExcludeByPattern<T, Pattern> = T extends Pattern ? never : T

// ============================================================================
// Type Relations
// ============================================================================

/**
 * Get common properties between types
 */
export type CommonKeys<T, U> = keyof T & keyof U

/**
 * Get unique properties of first type
 */
export type UniqueKeys<T, U> = Exclude<keyof T, keyof U>

/**
 * Get all property keys
 */
export type AllKeys<T, U> = keyof T | keyof U

/**
 * Check if types share properties
 */
export type HasCommonKeys<T, U> = CommonKeys<T, U> extends never ? false : true

// ============================================================================
// Type Wrappers
// ============================================================================

/**
 * Lazy type wrapper
 */
export type Lazy<T> = () => T

/**
 * Thunk type
 */
export type Thunk<T> = () => T

/**
 * Identity type
 */
export type Identity<T> = T

/**
 * Constant type
 */
export type Constant<T> = T

/**
 * Flip type arguments
 */
export type Flip<T> = T extends (a: infer A, b: infer B) => infer R
	? (b: B, a: A) => R
	: T
