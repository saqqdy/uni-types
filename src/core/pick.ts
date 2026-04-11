/**
 * Make specified properties required
 *
 * @template T - Target type
 * @template K - Property keys to make required
 *
 * @example
 * ```ts
 * interface User {
 *   name?: string
 *   age?: number
 *   email: string
 * }
 *
 * type RequiredName = PickRequired<User, 'name'>
 * // { name: string; age?: number; email: string }
 * ```
 *
 * @see PickPartial - Opposite operation
 * @see OmitRequired - Inverse selection
 */
export type PickRequired<T, K extends keyof T> = {
	[P in K]-?: T[P]
} & Omit<T, K>

/**
 * Make specified properties optional
 *
 * @example
 * ```ts
 * interface User {
 *   name: string
 *   age: number
 *   email: string
 * }
 *
 * type OptionalName = PickPartial<User, 'name'>
 * // { name?: string; age: number; email: string }
 * ```
 *
 * @see PickRequired - Opposite operation
 * @see OmitPartial - Inverse selection
 */
export type PickPartial<T, K extends keyof T> = {
	[P in K]?: T[P]
} & Omit<T, K>