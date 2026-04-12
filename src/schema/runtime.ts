/**
 * Runtime type checking utilities
 */

/**
 * Runtime type guard function type
 *
 * @example
 * ```ts
 * const isString: RuntimeGuard<string> = (value): value is string =>
 *   typeof value === 'string'
 * ```
 */
export type RuntimeGuard<T> = (value: unknown) => value is T

/**
 * Extract the guarded type from a type guard function
 *
 * @example
 * ```ts
 * const isNumber = (value: unknown): value is number => typeof value === 'number'
 * type Num = GuardedType<typeof isNumber>  // number
 * ```
 */
export type GuardedType<G> = G extends (value: unknown) => value is infer T ? T : never

/**
 * Check if a type has a runtime check function
 *
 * @example
 * ```ts
 * type A = HasRuntimeCheck<string>  // true (typeof check)
 * type B = HasRuntimeCheck<object>  // false (no direct check)
 * ```
 */
export type HasRuntimeCheck<T> = T extends string | number | boolean | symbol | bigint | null | undefined
	? true
	: T extends Array<infer _>
		? true
		: T extends Map<infer _, infer _>
			? true
			: T extends Set<infer _>
				? true
				: T extends Date
					? true
					: false

/**
 * Primitive type guard mapping
 */
export interface PrimitiveGuardMap {
	string: (value: unknown) => value is string
	number: (value: unknown) => value is number
	boolean: (value: unknown) => value is boolean
	symbol: (value: unknown) => value is symbol
	bigint: (value: unknown) => value is bigint
	null: (value: unknown) => value is null
	undefined: (value: unknown) => value is undefined
}

/**
 * Get primitive guard type
 */
export type PrimitiveGuard<T extends keyof PrimitiveGuardMap> = PrimitiveGuardMap[T]

/**
 * Composite type guard for objects
 *
 * @example
 * ```ts
 * interface User {
 *   name: string
 *   age: number
 * }
 *
 * const isUser: CompositeGuard<User> = (value): value is User => {
 *   return typeof value === 'object' && value !== null &&
 *     'name' in value && 'age' in value
 * }
 * ```
 */
export type CompositeGuard<T extends object> = (value: unknown) => value is T

/**
 * Array element guard
 */
export type ArrayElementGuard<T> = (value: unknown) => value is T[]

/**
 * Create a type guard that checks for null
 */
export type NullGuard = RuntimeGuard<null>

/**
 * Create a type guard that checks for undefined
 */
export type UndefinedGuard = RuntimeGuard<undefined>

/**
 * Create a type guard that checks for null or undefined
 */
export type NullishGuard = RuntimeGuard<null | undefined>

/**
 * Negate a type guard
 *
 * @example
 * ```ts
 * const isNotString: NegateGuard<string> = (value): value is Exclude<unknown, string> =>
 *   typeof value !== 'string'
 * ```
 */
export type NegateGuard<T> = (value: unknown) => value is Exclude<unknown, T>

/**
 * Combine multiple type guards (AND)
 */
export type CombinedGuard<T, U> = (value: unknown) => value is T & U

/**
 * Union type guard (OR)
 */
export type UnionGuard<T, U> = (value: unknown) => value is T | U

/**
 * Type predicate helper
 */
export type TypePredicate = (value: unknown) => boolean

/**
 * Assertion function type
 */
export type AssertionFunction<T> = (value: unknown) => asserts value is T

/**
 * Convert type to guard name mapping
 */
export type TypeToGuardKey<T> = T extends string
	? 'string'
	: T extends number
		? 'number'
		: T extends boolean
			? 'boolean'
			: T extends symbol
				? 'symbol'
				: T extends bigint
					? 'bigint'
					: T extends null
						? 'null'
						: T extends undefined
							? 'undefined'
							: never

/**
 * Type guard for any value
 */
export type AnyGuard = RuntimeGuard<unknown>
