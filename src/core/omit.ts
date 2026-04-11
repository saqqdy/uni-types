/**
 * Make all properties required except specified ones
 *
 * @example
 * ```ts
 * interface User {
 *   name?: string
 *   age?: number
 *   email?: string
 * }
 *
 * type RequiredExceptName = OmitRequired<User, 'name'>
 * // { name?: string; age: number; email: string }
 * ```
 *
 * @see PickRequired - Direct selection
 * @see OmitPartial - Opposite operation
 */
export type OmitRequired<T, K extends keyof T> = {
	[P in K]: T[P]
} & Omit<Required<T>, K>

/**
 * Make all properties optional except specified ones
 *
 * @example
 * ```ts
 * interface User {
 *   name: string
 *   age: number
 *   email: string
 * }
 *
 * type OptionalExceptName = OmitPartial<User, 'name'>
 * // { name: string; age?: number; email?: string }
 * ```
 *
 * @see PickPartial - Direct selection
 * @see OmitRequired - Opposite operation
 */
export type OmitPartial<T, K extends keyof T> = {
	[P in K]: T[P]
} & Omit<Partial<T>, K>