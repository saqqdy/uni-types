/**
 * Lazy type evaluation utilities
 *
 * These types help defer type evaluation for better compilation performance.
 */

/**
 * Lazy type wrapper - defers type evaluation
 *
 * @example
 * ```ts
 * // Instead of complex immediate evaluation
 * type Result = Lazy<ComplexUnion>
 * ```
 */
export type Lazy<T> = () => T

/**
 * Force evaluate a lazy type
 *
 * @example
 * ```ts
 * type Deferred = Lazy<string>
 * type Evaluated = ForceEvaluate<Deferred>  // string
 * ```
 */
export type ForceEvaluate<T> = T extends () => infer R ? R : T

/**
 * Deferred type - prevents immediate expansion
 *
 * @example
 * ```ts
 * type Complex = Deferred<{ a: string } & { b: number }>
 * ```
 */
export type Deferred<T> = T extends infer U ? U : never

/**
 * Thunk type - zero-argument function returning a type
 *
 * @example
 * ```ts
 * type StringThunk = Thunk<string>
 * // () => string
 * ```
 */
export type Thunk<T> = () => T

/**
 * Lazy property access
 *
 * @example
 * ```ts
 * type Props = { a: string; b: number; c: boolean }
 * type LazyA = LazyKey<Props, 'a'>  // () => Props['a']
 * ```
 */
export type LazyKey<T, K extends keyof T> = () => T[K]

/**
 * Lazy conditional - defers conditional evaluation
 *
 * @example
 * ```ts
 * type Cond = LazyConditional<true, string, number>
 * // () => string
 * ```
 */
export type LazyConditional<C extends boolean, T, F> = C extends true ? () => T : () => F

/**
 * Lazy array element
 */
export type LazyArrayElement<T> = T extends readonly (infer E)[] ? () => E : never

/**
 * Lazy promise unwrap
 */
export type LazyAwaited<T> = T extends PromiseLike<infer U> ? () => U : () => T

/**
 * Lazy function return
 */
export type LazyReturnType<T> = T extends (...args: any[]) => infer R ? () => R : never

/**
 * Lazy function parameters
 */
export type LazyParameters<T> = T extends (...args: infer P) => any ? () => P : never

/**
 * Chain lazy evaluations
 */
export type LazyChain<T, F extends (value: T) => unknown> = () => ReturnType<F>

/**
 * Lazy map over array type
 */
export type LazyMap<T extends readonly unknown[], F extends (value: T[number]) => unknown> = {
	[K in keyof T]: () => ReturnType<F>
}
