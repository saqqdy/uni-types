/**
 * Object key utilities
 */

import type { CamelCase } from '../utils'

/**
 * Get all keys as literal union
 *
 * @example
 * ```ts
 * Keys<{ a: string; b: number }> // 'a' | 'b'
 * ```
 */
export type Keys<T> = keyof T

/**
 * Rename object keys based on a mapping
 *
 * @example
 * ```ts
 * RenameKeys<{ oldName: string }, { oldName: 'newName' }>
 * // { newName: string }
 * ```
 */
export type RenameKeys<T, M extends Record<string, string>> = {
	[K in keyof T as K extends keyof M ? M[K] : K]: T[K]
}

/**
 * Prefix all keys with a string
 *
 * @example
 * ```ts
 * PrefixKeys<{ a: string; b: number }, 'data'>
 * // { dataA: string; dataB: number }
 * ```
 */
export type PrefixKeys<T, P extends string> = {
	[K in keyof T as `${P}${Capitalize<K & string>}`]: T[K]
}

/**
 * Suffix all keys with a string
 *
 * @example
 * ```ts
 * SuffixKeys<{ a: string; b: number }, 'Data'>
 * // { aData: string; bData: number }
 * ```
 */
export type SuffixKeys<T, S extends string> = {
	[K in keyof T as `${K & string}${S}`]: T[K]
}

/**
 * Convert keys to PascalCase
 *
 * @example
 * ```ts
 * PascalCaseKeys<{ helloWorld: string }>
 * // { HelloWorld: string }
 * ```
 */
export type PascalCaseKeys<T> = {
	[K in keyof T as Capitalize<CamelCase<K & string>>]: T[K]
}

/**
 * Get keys by value type
 *
 * @example
 * ```ts
 * interface User {
 *   name: string
 *   age: number
 *   email: string
 * }
 *
 * KeysByValueType<User, string> // 'name' | 'email'
 * ```
 */
export type KeysByValueType<T, V> = {
	[K in keyof T]: T[K] extends V ? K : never
}[keyof T]

/**
 * Get keys that match a pattern
 *
 * @example
 * ```ts
 * interface User {
 *   userName: string
 *   userId: number
 *   userEmail: string
 *   age: number
 * }
 *
 * FilterKeys<User, `user${string}`> // 'userName' | 'userId' | 'userEmail'
 * ```
 */
export type FilterKeys<T, P extends string> = keyof T extends infer K
	? K extends P
		? K
		: never
	: never
