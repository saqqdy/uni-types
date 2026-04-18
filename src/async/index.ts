/**
 * Promise and async type utilities
 *
 * This module provides types for:
 * - Promise value extraction and manipulation
 * - Async function types
 * - Promise settlement types
 */

// ============================================================================
// Promise Value Extraction
// ============================================================================

/**
 * Extract the value type from a Promise
 */
export type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> : T

/**
 * Get the resolved value type from Promise (single level)
 */
export type PromiseResult<T> = T extends Promise<infer V> ? V : T

/**
 * Check if type is a Promise
 */
export type IsPromise<T> = T extends Promise<any> ? true : false

/**
 * Unwrap promise to its value
 */
export type UnwrapPromise<T> = T extends Promise<infer V> ? V : T

/**
 * Make a type wrapped in Promise
 */
export type WrapPromise<T> = Promise<PromiseValue<T>>

// ============================================================================
// Promise Settlement Types
// ============================================================================

/**
 * Result of a settled promise
 */
export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult

/**
 * Fulfilled promise result
 */
export interface PromiseFulfilledResult<T> {
	status: 'fulfilled'
	value: T
}

/**
 * Rejected promise result
 */
export interface PromiseRejectedResult {
	status: 'rejected'
	reason: unknown
}

// ============================================================================
// Async Function Types
// ============================================================================

/**
 * Get return type of async function (unwrapped)
 */
export type AsyncReturnTypeFromPromise<T extends (...args: any) => Promise<any>> = T extends (
	...args: any
) => Promise<infer R>
	? R
	: never

/**
 * Get parameters of async function
 */
export type AsyncParameters<T extends (...args: any) => Promise<any>> = T extends (
	...args: infer P
) => Promise<any>
	? P
	: never

/**
 * Make function async
 */
export type MakeAsync<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer R
	? (...args: P) => Promise<R>
	: never

// ============================================================================
// Async Utility Types
// ============================================================================

/**
 * Result type for async operations (Rust-style)
 */
export type AsyncResult<T, E = Error> = AsyncSuccess<T> | AsyncFailure<E>

/**
 * Success result
 */
export interface AsyncSuccess<T> {
	ok: true
	value: T
}

/**
 * Failure result
 */
export interface AsyncFailure<E = Error> {
	ok: false
	error: E
}
