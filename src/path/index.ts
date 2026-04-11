/**
 * Enhanced path utilities with validation and array support
 */

type Primitive = string | number | boolean | null | undefined | symbol | bigint | Date | RegExp

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/**
 * Check if a path exists in type T
 *
 * @example
 * ```ts
 * interface Obj {
 *   a: {
 *     b: string
 *   }
 * }
 *
 * ValidPath<Obj, 'a.b'>   // true
 * ValidPath<Obj, 'a.c'>   // false
 * ```
 */
export type ValidPath<T, P extends string> = T extends Primitive
	? P extends ''
		? true
		: false
	: P extends ''
		? true
		: P extends `${infer K}.${infer Rest}`
			? K extends keyof T
				? ValidPath<T[K], Rest>
				: false
			: P extends keyof T
				? true
				: false

/**
 * Get all paths including array indices
 *
 * @example
 * ```ts
 * interface Users {
 *   users: { name: string }[]
 * }
 *
 * ArrayPaths<Users>
 * // 'users' | `users.${number}` | `users.${number}.name`
 * ```
 */
export type ArrayPaths<T, D extends number = 10> = [D] extends [never]
	? never
	: T extends Primitive
		? never
		: T extends readonly (infer E)[]
			? ArrayPaths<E, Prev[D]> extends infer P
				? P extends string
					? `${number}` | `${number}.${P}`
					: `${number}`
				: `${number}`
			: {
					[K in keyof T]: T[K] extends readonly unknown[]
						? `${K & string}` | `${K & string}.${ArrayPaths<T[K], Prev[D]>}`
						: T[K] extends Primitive
							? `${K & string}`
							: `${K & string}` | `${K & string}.${ArrayPaths<T[K], Prev[D]>}`
				}[keyof T]

/**
 * Get leaf node paths only (paths to primitive values)
 *
 * @example
 * ```ts
 * interface Users {
 *   users: { name: string, age: number }[]
 * }
 *
 * LeafPaths<Users>
 * // `users.${number}.name` | `users.${number}.age`
 * ```
 */
export type LeafPaths<T, D extends number = 10> = [D] extends [never]
	? never
	: T extends Primitive
		? never
		: T extends readonly (infer E)[]
			? LeafPaths<E, Prev[D]> extends infer P
				? P extends string
					? `${number}.${P}`
					: never
				: never
			: {
					[K in keyof T]: T[K] extends Primitive
						? `${K & string}`
						: LeafPaths<T[K], Prev[D]> extends never
							? never
							: `${K & string}.${LeafPaths<T[K], Prev[D]>}`
				}[keyof T]

/**
 * Get the length of a path (number of segments)
 *
 * @example
 * ```ts
 * PathLength<'a.b.c'>  // 3
 * PathLength<'single'> // 1
 * ```
 */
export type PathLength<P extends string> = P extends ''
	? 0
	: P extends `${string}.${infer Rest}`
		? Increment<PathLength<Rest>>
		: 1

type Increment<N extends number, Arr extends 0[] = []> = N extends Arr['length']
	? [...Arr, 0]['length']
	: Increment<N, [...Arr, 0]>

/**
 * Get the parent path of a given path
 *
 * @example
 * ```ts
 * ParentPath<'a.b.c'>  // 'a.b'
 * ParentPath<'a'>      // ''
 * ```
 */
export type ParentPath<P extends string> = P extends `${infer Head}.${infer _}`
	? Head
	: ''

/**
 * Get the last segment of a path
 *
 * @example
 * ```ts
 * PathLeaf<'a.b.c'>  // 'c'
 * PathLeaf<'a'>      // 'a'
 * ```
 */
export type PathLeaf<P extends string> = P extends `${string}.${infer Tail}`
	? PathLeaf<Tail>
	: P
