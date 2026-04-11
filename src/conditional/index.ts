/**
 * Conditional type utilities for cleaner type logic
 */

/**
 * If-then-else at type level
 *
 * @example
 * ```ts
 * If<true, string, number>    // string
 * If<false, string, number>   // number
 * ```
 */
export type If<C extends boolean, T, F> = C extends true ? T : F

/**
 * Not operator for boolean types
 *
 * @example
 * ```ts
 * Not<true>   // false
 * Not<false>  // true
 * ```
 */
export type Not<B extends boolean> = B extends true ? false : true

/**
 * And operator for boolean types
 *
 * @example
 * ```ts
 * And<true, true>   // true
 * And<true, false>  // false
 * ```
 */
export type And<A extends boolean, B extends boolean> = A extends true ? B : false

/**
 * Or operator for boolean types
 *
 * @example
 * ```ts
 * Or<true, false>   // true
 * Or<false, false>  // false
 * ```
 */
export type Or<A extends boolean, B extends boolean> = A extends true ? true : B

/**
 * Type constraint assertion - ensures T extends U
 *
 * @example
 * ```ts
 * Assert<string | number, string>  // string
 * Assert<string, number>           // never
 * ```
 */
export type Assert<T, U extends T> = T extends U ? T : never
