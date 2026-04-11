/**
 * Deep path operations for precise nested property manipulation
 */

import type { SplitPath } from '../utils/path'

type PathSegments<_T, P extends string> = P extends ''
	? []
	: SplitPath<P>

/**
 * Deep omit by path - removes properties at specified paths
 *
 * @example
 * ```ts
 * interface User {
 *   profile: {
 *     name: string
 *     email: string
 *     settings: {
 *       theme: string
 *       lang: string
 *     }
 *   }
 * }
 *
 * DeepOmit<User, 'profile.settings'>
 * // { profile: { name: string; email: string } }
 * ```
 */
export type DeepOmit<T, P extends string> = T extends object
	? P extends ''
		? T
		: DeepOmitBySegments<T, PathSegments<T, P>>
	: T

type DeepOmitBySegments<T, Segments extends string[]> = Segments extends [
	infer First extends string,
	...infer Rest extends string[],
]
	? First extends keyof T
		? Rest extends []
			? Omit<T, First>
			: {
					[K in keyof T]: K extends First
						? DeepOmitBySegments<T[K], Rest>
						: T[K]
				}
		: T
	: T

/**
 * Deep pick by path - keeps only properties at specified paths
 *
 * @example
 * ```ts
 * interface User {
 *   profile: {
 *     name: string
 *     email: string
 *     settings: {
 *       theme: string
 *       lang: string
 *     }
 *   }
 * }
 *
 * DeepPick<User, 'profile.name' | 'profile.settings.theme'>
 * // { profile: { name: string; settings: { theme: string } } }
 * ```
 */
export type DeepPick<T, P extends string> = T extends object
	? P extends ''
		? T
		: DeepPickBySegments<T, PathSegments<T, P>>
	: T

type DeepPickBySegments<T, Segments extends string[]> = Segments extends [
	infer First extends string,
	...infer Rest extends string[],
]
	? First extends keyof T
		? Rest extends []
			? Pick<T, First>
			: {
					[K in First]: DeepPickBySegments<T[K], Rest>
				}
		: Record<string, never>
	: T

/**
 * Deep pick for union paths
 */
export type DeepPickPaths<T, P extends string> = P extends P
	? DeepPick<T, P>
	: never

/**
 * Deep omit for union paths
 */
export type DeepOmitPaths<T, P extends string> = P extends P
	? DeepOmit<T, P>
	: never
