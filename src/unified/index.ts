/**
 * Unified Type System Preview
 *
 * Preview of the v2.0.0 unified type system with consistent naming
 * conventions and simplified API.
 */

// ============== Core v2 Wrappers ==============

/**
 * TypeV2 - Core type wrapper for v2.0.0 (preview)
 */
export interface TypeV2<T> {
	/** The underlying type */
	readonly _type: T
	/** Version marker */
	readonly _version: 'v2'
}

/**
 * OpsV2 - Type operations namespace (preview)
 */
export interface OpsV2<T> {
	/** The type being operated on */
	readonly _target: T
	/** Operation version */
	readonly _opsVersion: 'v2'
}

/**
 * ExtV2 - Extensions namespace (preview)
 */
export interface ExtV2<T> {
	/** The type being extended */
	readonly _target: T
	/** Extension version */
	readonly _extVersion: 'v2'
}

/**
 * UtilV2 - Utilities namespace (preview)
 */
export interface UtilV2<T> {
	/** The type being utilized */
	readonly _target: T
	/** Utility version */
	readonly _utilVersion: 'v2'
}

// ============== V2 Type Implementations ==============

/**
 * PickRequiredV2 - New implementation for v2.0.0
 * Makes specified keys required while keeping others as-is
 */
export type PickRequiredV2<T, K extends keyof T> = T & {
	[P in K]-?: NonNullable<T[P]>
}

/**
 * DeepPartialV2 - New implementation for v2.0.0
 * Makes all properties including nested ones optional
 */
export type DeepPartialV2<T> = T extends object
	? T extends (...args: unknown[]) => unknown
		? T
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartialV2<U>>
			: T extends unknown[]
				? Array<DeepPartialV2<T[number]>>
				: { [K in keyof T]?: DeepPartialV2<T[K]> }
	: T

/**
 * IsArrayV2 - New implementation for v2.0.0
 * Checks if a type is an array
 */
export type IsArrayV2<T> = T extends unknown[] ? true : false

/**
 * DeepReadonlyV2 - Deep readonly for v2.0.0
 */
export type DeepReadonlyV2<T> = T extends object
	? T extends (...args: unknown[]) => unknown
		? T
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepReadonlyV2<U>>
			: { readonly [K in keyof T]: DeepReadonlyV2<T[K]> }
	: T

/**
 * DeepRequiredV2 - Deep required for v2.0.0
 */
export type DeepRequiredV2<T> = T extends object
	? T extends (...args: unknown[]) => unknown
		? T
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepRequiredV2<U>>
			: T extends unknown[]
				? Array<DeepRequiredV2<T[number]>>
				: { [K in keyof T]-?: DeepRequiredV2<NonNullable<T[K]>> }
	: T

// ============== Unified Operations ==============

/**
 * UnifiedPick - Unified pick operation for v2.0.0
 */
export type UnifiedPick<T, K extends keyof T> = {
	[P in K]: T[P]
}

/**
 * UnifiedOmit - Unified omit operation for v2.0.0
 */
export type UnifiedOmit<T, K extends keyof T> = {
	[P in keyof T as P extends K ? never : P]: T[P]
}

/**
 * UnifiedPartial - Unified partial operation for v2.0.0
 */
export type UnifiedPartial<T> = {
	[K in keyof T]?: T[K]
}

/**
 * UnifiedRequired - Unified required operation for v2.0.0
 */
export type UnifiedRequired<T> = {
	[K in keyof T]-?: T[K]
}

// ============== Unified Merging ==============

/**
 * UnifiedMerge - Unified merge operation for v2.0.0
 */
export type UnifiedMerge<T, U> = {
	[K in keyof T | keyof U]: K extends keyof U
		? U[K]
		: K extends keyof T
			? T[K]
			: never
}

/**
 * UnifiedDeepMerge - Unified deep merge for v2.0.0
 */
export type UnifiedDeepMerge<T, U> = {
	[K in keyof T | keyof U]: K extends keyof U
		? U[K] extends object
			? K extends keyof T
				? T[K] extends object
					? UnifiedDeepMerge<T[K], U[K]>
					: U[K]
				: U[K]
			: U[K]
		: K extends keyof T
			? T[K]
			: never
}

// ============== V2 Type Predicates ==============

/**
 * IsEqualV2 - v2 exact equality check
 */
export type IsEqualV2<T, U> = T extends U
	? U extends T
		? true
		: false
	: false

/**
 * IsSubtypeV2 - v2 subtype check
 */
export type IsSubtypeV2<T, U> = T extends U ? true : false

/**
 * IsSupertypeV2 - v2 supertype check
 */
export type IsSupertypeV2<T, U> = U extends T ? true : false

// ============== V2 Type Builders ==============

/**
 * TypeBuilderV2 - Builder pattern for types (v2.0.0 preview)
 * Note: Uses type representation instead of interface with generic methods
 * for bundler compatibility.
 */
export interface TypeBuilderV2<T = unknown> {
	/** The current type being built */
	readonly _type: T
}

// ============== V2 Migration Helpers ==============

/**
 * V1Compat - Compatibility wrapper for v1.x types
 */
export type V1Compat<T> = T & { __v1_compat__: true }

/**
 * V2Migration - Migration helper from v1 to v2
 */
export interface V2Migration<T, U> {
	/** v1 type */
	v1: T
	/** v2 type */
	v2: U
	/** Migration path */
	path: string
	/** Breaking changes */
	breaking: boolean
}

/**
 * V2APIVersion - API version marker
 */
export type V2APIVersion = 'v1' | 'v2'
