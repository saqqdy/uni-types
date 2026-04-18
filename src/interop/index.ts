/**
 * Type-level interoperability utilities
 *
 * This module provides types for:
 * - type-fest interop
 * - ts-toolbelt interop
 * - utility-types interop
 * - Converter utilities
 * - Type compatibility
 */

// ============================================================================
// type-fest Interop
// ============================================================================

/**
 * Convert uni-types to type-fest format
 *
 * type-fest: https://github.com/sindresorhus/type-fest
 *
 * @example
 * ```ts
 * type FestType = ToTypeFest<{ a: string; b?: number }>
 * ```
 */
export type ToTypeFest<T> = {
	[K in keyof T]: T[K]
}

/**
 * Convert type-fest to uni-types format
 *
 * @example
 * ```ts
 * type UniType = FromTypeFest<{ a: string }>
 * ```
 */
export type FromTypeFest<T> = {
	[K in keyof T]: T[K]
}

/**
 * type-fest CamelCase mapping
 *
 * @example
 * ```ts
 * type Camel = TypeFestCamelCase<'foo-bar'>
 * ```
 */
export type TypeFestCamelCase<S extends string> = S extends `${infer First}-${infer Rest}`
	? `${First}${TypeFestCamelCase<Rest>}`
	: S

/**
 * type-fest SnakeCase mapping
 *
 * @example
 * ```ts
 * type Snake = TypeFestSnakeCase<'fooBar'>
 * ```
 */
export type TypeFestSnakeCase<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends Uppercase<First>
		? First extends Lowercase<First>
			? `${Lowercase<First>}${TypeFestSnakeCase<Rest>}`
			: `_${Lowercase<First>}${TypeFestSnakeCase<Rest>}`
		: `${Lowercase<First>}${TypeFestSnakeCase<Rest>}`
	: S

// ============================================================================
// ts-toolbelt Interop
// ============================================================================

/**
 * Convert uni-types to ts-toolbelt format
 *
 * ts-toolbelt: https://github.com/millsp/ts-toolbelt
 *
 * @example
 * ```ts
 * type ToolbeltType = ToTsToolbelt<{ a: string }>
 * ```
 */
export type ToTsToolbelt<T> = {
	[K in keyof T]: T[K]
}

/**
 * Convert ts-toolbelt to uni-types format
 *
 * @example
 * ```ts
 * type UniType = FromTsToolbelt<{ a: string }>
 * ```
 */
export type FromTsToolbelt<T> = {
	[K in keyof T]: T[K]
}

/**
 * ts-toolbelt Union.Pick equivalent
 *
 * @example
 * ```ts
 * type Picked = ToolbeltUnionPick<string | number, string>
 * ```
 */
export type ToolbeltUnionPick<T, U> = Extract<T, U>

/**
 * ts-toolbelt Union.Exclude equivalent
 *
 * @example
 * ```ts
 * type Excluded = ToolbeltUnionExclude<string | number, string>
 * ```
 */
export type ToolbeltUnionExclude<T, U> = Exclude<T, U>

/**
 * ts-toolbelt Object.Partial equivalent (deep)
 *
 * @example
 * ```ts
 * type Partial = ToolbeltDeepPartial<{ a: { b: string } }>
 * ```
 */
export type ToolbeltDeepPartial<T> = T extends object
	? { [K in keyof T]: ToolbeltDeepPartial<T[K]> }
	: T

// ============================================================================
// utility-types Interop
// ============================================================================

/**
 * Convert uni-types to utility-types format
 *
 * utility-types: https://github.com/piotrwitek/utility-types
 *
 * @example
 * ```ts
 * type UtilityType = ToUtilityTypes<{ a: string }>
 * ```
 */
export type ToUtilityTypes<T> = {
	[K in keyof T]: T[K]
}

/**
 * Convert utility-types to uni-types format
 *
 * @example
 * ```ts
 * type UniType = FromUtilityTypes<{ a: string }>
 * ```
 */
export type FromUtilityTypes<T> = {
	[K in keyof T]: T[K]
}

/**
 * utility-types DeepPartial equivalent
 *
 * @example
 * ```ts
 * type Partial = UtilityDeepPartial<{ a: { b: string } }>
 * ```
 */
export type UtilityDeepPartial<T> = T extends object
	? { [K in keyof T]?: UtilityDeepPartial<T[K]> }
	: T

/**
 * utility-types DeepReadonly equivalent
 *
 * @example
 * ```ts
 * type Readonly = UtilityDeepReadonly<{ a: { b: string } }>
 * ```
 */
export type UtilityDeepReadonly<T> = T extends object
	? { readonly [K in keyof T]: UtilityDeepReadonly<T[K]> }
	: T

// ============================================================================
// Converter Utilities
// ============================================================================

/**
 * Convert type to specific format
 *
 * @example
 * ```ts
 * type Fest = ConvertTo<{ a: string }, 'type-fest'>
 * ```
 */
export type ConvertTo<T, Format extends 'type-fest' | 'ts-toolbelt' | 'utility-types'> = Format extends 'type-fest'
	? ToTypeFest<T>
	: Format extends 'ts-toolbelt'
		? ToTsToolbelt<T>
		: Format extends 'utility-types'
			? ToUtilityTypes<T>
			: T

/**
 * Convert type from specific format
 *
 * @example
 * ```ts
 * type Uni = ConvertFrom<{ a: string }, 'type-fest'>
 * ```
 */
export type ConvertFrom<T, Format extends 'type-fest' | 'ts-toolbelt' | 'utility-types'> = Format extends 'type-fest'
	? FromTypeFest<T>
	: Format extends 'ts-toolbelt'
		? FromTsToolbelt<T>
		: Format extends 'utility-types'
			? FromUtilityTypes<T>
			: T

/**
 * Type conversion map
 *
 * @example
 * ```ts
 * type Map = ConversionMap<{ a: string }>
 * ```
 */
export interface ConversionMap<T> {
	'type-fest': ToTypeFest<T>
	'ts-toolbelt': ToTsToolbelt<T>
	'utility-types': ToUtilityTypes<T>
	'uni-types': T
}

// ============================================================================
// Type Compatibility
// ============================================================================

/**
 * Check if types are compatible (structurally)
 *
 * @example
 * ```ts
 * IsCompatible<{ a: string }, { a: string; b?: number }>  // true
 * ```
 */
export type IsCompatible<T, U> = T extends U ? true : false

/**
 * Check if type is compatible with multiple libraries
 *
 * @example
 * ```ts
 * type Compat = CompatibleWith<{ a: string }, ['type-fest', 'ts-toolbelt']>
 * ```
 */
export type CompatibleWith<
	T,
	Libraries extends ('type-fest' | 'ts-toolbelt' | 'utility-types')[],
> = Libraries extends [infer First, ...infer Rest]
	? First extends 'type-fest' | 'ts-toolbelt' | 'utility-types'
		? IsCompatible<T, ConversionMap<T>[First]> extends true
			? CompatibleWith<T, Rest extends ('type-fest' | 'ts-toolbelt' | 'utility-types')[] ? Rest : []>
			: false
		: true
	: true

/**
 * Get intersection of compatible types
 *
 * @example
 * ```ts
 * type Intersect = CompatibleIntersection<{ a: string }, { a: string }>
 * ```
 */
export type CompatibleIntersection<T, U> = T & U

/**
 * Merge types for compatibility
 *
 * @example
 * ```ts
 * type Merged = CompatibleMerge<{ a: string }, { b: number }>
 * ```
 */
export type CompatibleMerge<T, U> = T & U

/**
 * Get compatible keys between two types
 *
 * @example
 * ```ts
 * type Keys = CompatibleKeys<{ a: string; b: number }, { a: string }>
 * ```
 */
export type CompatibleKeys<T, U> = keyof T & keyof U

/**
 * Get incompatible keys between two types
 *
 * @example
 * ```ts
 * type Keys = IncompatibleKeys<{ a: string; b: number }, { a: string }>
 * ```
 */
export type IncompatibleKeys<T, U> = Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>

/**
 * Type compatibility report
 *
 * @example
 * ```ts
 * type Report = CompatibilityReport<{ a: string }, { a: number }>
 * ```
 */
export interface CompatibilityReport<T, U> {
	compatible: IsCompatible<T, U>
	compatibleKeys: CompatibleKeys<T, U>
	incompatibleKeys: IncompatibleKeys<T, U>
	missingInT: Exclude<keyof U, keyof T>
	missingInU: Exclude<keyof T, keyof U>
	typeMismatch: {
		[K in CompatibleKeys<T, U>]: T[K] extends U[K] ? never : U[K] extends T[K] ? never : K
	}[CompatibleKeys<T, U>]
}

// ============================================================================
// Utility Mappings
// ============================================================================

/**
 * Map uni-types utility to library equivalent
 *
 * @example
 * ```ts
 * type Eq = UtilityMap<'DeepPartial', 'type-fest'>
 * ```
 */
export type UtilityMap<
	Utility extends
	| 'DeepPartial'
	| 'DeepRequired'
	| 'DeepReadonly'
	| 'DeepMutable'
	| 'PickRequired'
	| 'OmitRequired',
	Library extends 'type-fest' | 'ts-toolbelt' | 'utility-types',
> = Utility extends 'DeepPartial'
	? Library extends 'type-fest'
		? 'PartialDeep'
		: Library extends 'ts-toolbelt'
			? 'O.Partial'
			: 'DeepPartial'
	: Utility extends 'DeepRequired'
		? Library extends 'type-fest'
			? 'RequiredDeep'
			: Library extends 'ts-toolbelt'
				? 'O.Required'
				: 'DeepRequired'
		: Utility extends 'DeepReadonly'
			? Library extends 'type-fest'
				? 'ReadonlyDeep'
				: Library extends 'ts-toolbelt'
					? 'O.Readonly'
					: 'DeepReadonly'
			: Utility extends 'DeepMutable'
				? Library extends 'type-fest'
					? 'WritableDeep'
					: Library extends 'ts-toolbelt'
						? 'O.Writable'
						: 'DeepMutable'
				: Utility

/**
 * Library feature comparison
 *
 * @example
 * ```ts
 * type Features = LibraryFeatures<'type-fest'>
 * ```
 */
export type LibraryFeatures<Library extends 'type-fest' | 'ts-toolbelt' | 'utility-types'> = Library extends 'type-fest'
	? ['CamelCase', 'SnakeCase', 'PartialDeep', 'ReadonlyDeep', 'Merge', 'SetRequired', 'SetOptional']
	: Library extends 'ts-toolbelt'
		? ['O.Partial', 'O.Required', 'O.Readonly', 'O.Writable', 'U.Pick', 'U.Exclude', 'M.Merge']
		: ['DeepPartial', 'DeepReadonly', 'DeepRequired', 'PickByValue', 'OmitByValue', 'UnionToIntersection']
