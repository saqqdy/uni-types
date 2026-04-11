/**
 * Brand/Opaque types for nominal typing
 */

/**
 * Brand a type for nominal typing
 * Creates a unique type that cannot be accidentally mixed with other branded types
 *
 * @example
 * ```ts
 * type UserId = Brand<string, 'UserId'>
 * type OrderId = Brand<string, 'OrderId'>
 *
 * const userId: UserId = 'user-123' as UserId
 * const orderId: OrderId = 'order-456' as OrderId
 *
 * // These won't mix - type safety!
 * // const wrong: OrderId = userId  // Error!
 * ```
 */
export type Brand<T, B extends string> = T & { __brand: B }

/**
 * Unbrand a branded type - extracts the underlying type
 *
 * @example
 * ```ts
 * type UserId = Brand<string, 'UserId'>
 * Unbrand<UserId>  // string
 * ```
 */
export type Unbrand<T> = T extends Brand<infer U, infer _> ? U : T

/**
 * Common branded types for convenience
 */
export type BrandedString<B extends string> = Brand<string, B>
export type BrandedNumber<B extends string> = Brand<number, B>
