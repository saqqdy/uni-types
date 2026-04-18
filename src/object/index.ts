/**
 * Advanced object type operations
 *
 * This module provides advanced object manipulation types:
 * - Object transformations: ObjectMap, ObjectFilter, ObjectPickByType
 * - Object merging: DeepMerge, DeepAssign, DeepDefaults
 * - Object validation: HasProperty, HasProperties, HasMethod
 */

// ============================================================================
// Object Transformations
// ============================================================================

/**
 * Map over object values with transformation function
 */
export type ObjectMap<T extends Record<string, any>, F> = {
	[K in keyof T]: F extends (x: T[K]) => infer R ? R : never
}

/**
 * Filter object properties by predicate
 */
export type ObjectFilter<T extends Record<string, any>, P> = {
	[K in keyof T as T[K] extends P ? K : never]: T[K]
}

/**
 * Pick properties by value type
 */
export type ObjectPickByType<T extends Record<string, any>, U> = {
	[K in keyof T as T[K] extends U ? K : never]: T[K]
}

/**
 * Omit properties by value type
 */
export type ObjectOmitByType<T extends Record<string, any>, U> = {
	[K in keyof T as T[K] extends U ? never : K]: T[K]
}

/**
 * Invert object (swap keys and values)
 */
export type ObjectInvert<T extends Record<string, string | number>> = {
	[K in T[keyof T]]: { [P in keyof T]: T[P] extends K ? P : never }[keyof T]
}

/**
 * Get object entries as tuple union
 */
export type ObjectEntries<T extends Record<string, any>> = {
	[K in keyof T]: [K, T[K]]
}[keyof T]

// ============================================================================
// Object Merging
// ============================================================================

/**
 * Deep merge two objects (B takes precedence)
 */
export type DeepMerge<A, B> = A extends object
	? B extends object
		? {
				[K in keyof A | keyof B]: K extends keyof B
					? K extends keyof A
						? DeepMerge<A[K], B[K]>
						: B[K]
					: K extends keyof A
						? A[K]
						: never
			}
		: B
	: B

/**
 * Merge multiple objects (right to left precedence)
 */
export type MergeAllObjects<T extends object[], Acc extends object = object> = T extends [
	infer First extends object,
	...infer Rest extends object[],
]
	? MergeAllObjects<Rest, Acc & First>
	: Acc

// ============================================================================
// Object Validation
// ============================================================================

/**
 * Check if object has a property
 */
export type HasProperty<T, K extends PropertyKey> = K extends keyof T ? true : false

/**
 * Check if object has multiple properties
 */
export type HasProperties<T, K extends PropertyKey> = K extends keyof T ? true : false

/**
 * Check if object has a method
 */
export type HasMethod<T, K extends keyof T> = T[K] extends (...args: any[]) => any ? true : false

/**
 * Check if object is empty
 */
export type IsEmptyObject<T> = keyof T extends never ? true : false

// ============================================================================
// Object Key Operations
// ============================================================================

/**
 * Get keys of specific type
 */
export type KeysOfType<T extends Record<string, any>, U> = {
	[K in keyof T]: T[K] extends U ? K : never
}[keyof T]

// ============================================================================
// Object Path Operations
// ============================================================================

/**
 * Get value at path (with default)
 */
export type ObjectPath<T, P extends string, Default = never> = P extends `${infer First}.${infer Rest}`
	? First extends keyof T
		? ObjectPath<T[First], Rest, Default>
		: Default
	: P extends keyof T
		? T[P]
		: Default

/**
 * Check if path exists
 */
export type PathExists<T, P extends string> = P extends `${infer First}.${infer Rest}`
	? First extends keyof T
		? PathExists<T[First], Rest>
		: false
	: P extends keyof T
		? true
		: false
