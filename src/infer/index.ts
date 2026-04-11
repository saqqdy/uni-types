/**
 * Get Promise value type (recursive unwrapping)
 *
 * @example
 * ```ts
 * Awaited<Promise<string>>        // string
 * Awaited<Promise<Promise<number>>> // number
 * ```
 */
export type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T

/**
 * Get array element type
 *
 * @example
 * ```ts
 * ArrayElement<string[]>  // string
 * ArrayElement<(number | boolean)[]> // number | boolean
 * ```
 */
export type ArrayElement<T> = T extends readonly (infer E)[] ? E : never

/**
 * Get object value type
 *
 * @example
 * ```ts
 * ValueOf<{ a: string; b: number }> // string | number
 * ```
 */
export type ValueOf<T> = T[keyof T]

/**
 * Get function type keys
 *
 * @example
 * ```ts
 * interface Obj {
 *   name: string
 *   onClick: () => void
 *   onChange: (v: string) => void
 * }
 * FunctionKeys<Obj> // 'onClick' | 'onChange'
 * ```
 */
export type FunctionKeys<T> = {
	[K in keyof T]: T[K] extends (...args: any[]) => any ? K : never
}[keyof T]

/**
 * Get non-function type keys
 *
 * @example
 * ```ts
 * interface Obj {
 *   name: string
 *   onClick: () => void
 * }
 * NonFunctionKeys<Obj> // 'name'
 * ```
 */
export type NonFunctionKeys<T> = {
	[K in keyof T]: T[K] extends (...args: any[]) => any ? never : K
}[keyof T]

/**
 * Get function's first parameter type
 */
export type FirstParameter<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never

/**
 * Extract function properties
 */
export type FunctionOnly<T> = Pick<T, FunctionKeys<T>>

/**
 * Extract non-function properties
 */
export type DataOnly<T> = Pick<T, NonFunctionKeys<T>>
