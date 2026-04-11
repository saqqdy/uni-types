type Primitive = string | number | boolean | null | undefined | symbol | bigint

type Join<K, P> = K extends string | number
	? P extends string | number
		? `${K}${'' extends P ? '' : '.'}${P}`
		: never
	: never

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/**
 * Get all possible paths to nested properties
 *
 * @example
 * ```ts
 * interface Obj {
 *   a: {
 *     b: string
 *     c: {
 *       d: number
 *     }
 *   }
 * }
 *
 * type P = Paths<Obj>
 * // 'a' | 'a.b' | 'a.c' | 'a.c.d'
 * ```
 */
export type Paths<T, D extends number = 10> = [D] extends [never]
	? never
	: T extends Primitive
		? never
		: {
				[K in keyof T]: T[K] extends Primitive
					? `${K & string}`
					: Join<K, Paths<T[K], Prev[D]>>
			}[keyof T]

/**
 * Get the value type at a given path
 *
 * @example
 * ```ts
 * interface Obj {
 *   a: {
 *     b: string
 *   }
 * }
 *
 * type V = PathValue<Obj, 'a.b'> // string
 * ```
 */
export type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
	? K extends keyof T
		? PathValue<T[K], Rest>
		: never
	: P extends keyof T
		? T[P]
		: never

/**
 * Split a path string into an array
 *
 * @example
 * ```ts
 * SplitPath<'a.b.c'> // ['a', 'b', 'c']
 * ```
 */
export type SplitPath<S extends string, Acc extends string[] = []> = S extends `${infer H}.${infer T}`
	? SplitPath<T, [...Acc, H]>
	: S extends `${infer H}`
		? [...Acc, H]
		: Acc