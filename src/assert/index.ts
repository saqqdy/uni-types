/**
 * Type assertions and constraints for compile-time type validation
 *
 * This module provides utilities for:
 * - Type assertions: Compile-time validation that types match expectations
 * - Type constraints: Enforcing specific property requirements
 */

// ============================================================================
// Type Assertions
// ============================================================================

/**
 * Assert that type T equals Expected at compile time
 */
export type AssertEqual<T, Expected> = (() => T extends Expected
	? Expected extends T
		? 1
		: 2
	: 2) extends () => 1
	? T
	: never

/**
 * Assert that type T extends U at compile time
 */
export type AssertExtends<T, U> = T extends U ? T : never

/**
 * Assert that K is a key of T at compile time
 */
export type AssertKeyof<T, K> = K extends keyof T ? K : never

/**
 * Assert that type T is not never
 */
export type AssertNotNil<T> = [T] extends [never] ? never : T

/**
 * Require specific keys to be present
 */
export type RequireKeys<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: T[P] }

/**
 * Make specific keys optional
 */
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]+?: T[P] }

/**
 * Require at least one of the specified keys
 */
export type RequireAtLeastOne<T, K extends keyof T = keyof T> = K extends K
	? Omit<T, K> & { [P in K]-?: T[P] } & { [P in Exclude<K, K>]+?: T[P] }
	: never

/**
 * Require exactly one of the specified keys
 */
export type RequireExactlyOne<T, K extends keyof T = keyof T> = K extends K
	? Omit<T, K> & Required<Pick<T, K>> & Partial<Omit<T, K>>
	: never

/**
 * Ensure object has a specific property
 */
export type AssertHasProperty<T, K extends PropertyKey> = K extends keyof T ? T : never

/**
 * Ensure type is not null or undefined
 */
export type RequireNotNullish<T> = null extends T ? never : undefined extends T ? never : T

/**
 * Ensure type is an array
 */
export type RequireArray<T> = T extends unknown[] ? T : never

/**
 * Ensure type is a function
 */
export type RequireFunction<T> = T extends (...args: any[]) => any ? T : never
