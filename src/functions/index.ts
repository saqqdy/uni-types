/**
 * Function type utilities
 */

/**
 * Get function parameters as tuple
 *
 * @example
 * ```ts
 * type Fn = (a: string, b: number) => boolean
 * Parameters<Fn>    // [string, number]
 * ```
 */
export type Parameters<T> = T extends (...args: infer P) => any ? P : never

/**
 * Get function return type
 *
 * @example
 * ```ts
 * type Fn = (a: string) => number
 * ReturnType<Fn>    // number
 * ```
 */
export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

/**
 * Get Nth parameter type (0-indexed)
 *
 * @example
 * ```ts
 * type Fn = (a: string, b: number, c: boolean) => void
 * NthParameter<Fn, 0>  // string
 * NthParameter<Fn, 1>  // number
 * NthParameter<Fn, 2>  // boolean
 * ```
 */
export type NthParameter<T, N extends number> = T extends (
	...args: infer P
) => any
	? P[N]
	: never

/**
 * Extract async function return type (unwraps Promise)
 *
 * @example
 * ```ts
 * type AsyncFn = () => Promise<string>
 * AsyncReturnType<AsyncFn>  // string
 * ```
 */
export type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
	? R
	: T extends (...args: any[]) => infer R
		? R
		: never

/**
 * Get function this parameter type
 *
 * @example
 * ```ts
 * type Fn = (this: { x: number }) => void
 * ThisParameterType<Fn>  // { x: number }
 * ```
 */
export type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
	? U
	: unknown

/**
 * Omit this parameter from function type
 *
 * @example
 * ```ts
 * type Fn = (this: { x: number }, a: string) => void
 * OmitThisParameter<Fn>  // (a: string) => void
 * ```
 */
export type OmitThisParameter<T> = T extends (this: any, ...args: infer A) => infer R
	? (...args: A) => R
	: T

/**
 * Check if type is a function
 *
 * @example
 * ```ts
 * IsFunction<() => void>  // true
 * IsFunction<string>      // false
 * ```
 */
export type IsFunction<T> = T extends (...args: any[]) => any ? true : false

/**
 * Check if type is an async function
 *
 * @example
 * ```ts
 * IsAsyncFunction<() => Promise<string>>  // true
 * IsAsyncFunction<() => string>           // false
 * ```
 */
export type IsAsyncFunction<T> = T extends (...args: any[]) => Promise<any>
	? true
	: false

/**
 * Make function parameters optional
 *
 * @example
 * ```ts
 * type Fn = (a: string, b: number) => void
 * OptionalParameters<Fn>  // (a?: string, b?: number) => void
 * ```
 */
export type OptionalParameters<T> = T extends (...args: any[]) => infer R
	? (...args: Partial<Parameters<T>>) => R
	: never

/**
 * Append a parameter to a function
 *
 * @example
 * ```ts
 * type Fn = (a: string) => void
 * AppendParameter<Fn, number>  // (a: string, b: number) => void
 * ```
 */
export type AppendParameter<T, P> = T extends (...args: infer A) => infer R
	? (...args: [...A, P]) => R
	: never

/**
 * Prepend a parameter to a function
 *
 * @example
 * ```ts
 * type Fn = (a: string) => void
 * PrependParameter<Fn, number>  // (a: number, b: string) => void
 * ```
 */
export type PrependParameter<T, P> = T extends (...args: infer A) => infer R
	? (...args: [P, ...A]) => R
	: never
