/**
 * Type Inference Enhancements
 *
 * Advanced type inference utilities.
 */

// ============================================================================
// Inference Helpers
// ============================================================================

/**
 * Infer type
 */
export type Infer<T> = T extends Promise<infer U> ? U : T

/**
 * Infer return type
 */
export type InferReturn<T extends (...args: unknown[]) => unknown> = T extends (...args: unknown[]) => infer R ? R : never

/**
 * Infer arguments type
 */
export type InferArgs<T extends (...args: unknown[]) => unknown> = T extends (...args: infer A) => unknown ? A : never

/**
 * Infer promise type
 */
export type InferPromise<T> = T extends Promise<infer U> ? U : T

/**
 * Infer array element
 */
export type InferArrayElement<T> = T extends (infer U)[] ? U : never

/**
 * Infer tuple element
 */
export type InferTupleElement<T extends readonly unknown[]> = T[number]

/**
 * Infer object value
 */
export type InferObjectValue<T> = T extends Record<string, infer V> ? V : never

/**
 * Infer function parameter
 */
export type InferFunctionParam<T extends (...args: unknown[]) => unknown, N extends number> = Parameters<T>[N]

// ============================================================================
// Type Extraction
// ============================================================================

/**
 * Extract function type
 */
export type ExtractFunction<T> = T extends (...args: unknown[]) => unknown ? T : never

/**
 * Extract class type
 */
export type ExtractClass<T> = T extends abstract new (...args: unknown[]) => unknown ? T : never

/**
 * Extract constructor type
 */
export type ExtractConstructor<T> = T extends new (...args: infer A) => infer R ? { new (...args: A): R } : never

/**
 * Extract method type
 */
export type ExtractMethod<T, K extends keyof T> = T[K] extends (...args: unknown[]) => unknown ? T[K] : never

/**
 * Extract property type
 */
export type ExtractProperty<T, K extends keyof T> = T[K]

/**
 * Extract keys by value
 */
export type ExtractKeysByValue<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T]

/**
 * Extract required keys
 */
export type ExtractRequiredKeys<T> = { [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? never : K }[keyof T]

/**
 * Extract optional keys
 */
export type ExtractOptionalKeys<T> = { [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? K : never }[keyof T]

/**
 * Extract function keys
 */
export type ExtractFunctionKeys<T> = ExtractKeysByValue<T, (...args: unknown[]) => unknown>

/**
 * Extract non-function keys
 */
export type ExtractNonFunctionKeys<T> = Exclude<keyof T, ExtractFunctionKeys<T>>

// ============================================================================
// Type Reconstruction
// ============================================================================

/**
 * Reconstruct type
 */
export type Reconstruct<T> = T extends infer U ? { [K in keyof U]: U[K] } : never

/**
 * Reconstruct deep
 */
export type ReconstructDeep<T> = T extends object
	? T extends Array<infer U>
		? ReconstructDeep<U>[]
		: { [K in keyof T]: ReconstructDeep<T[K]> }
	: T

/**
 * Reconstruct strict
 */
export type ReconstructStrict<T> = T extends infer U
	? {
			[K in keyof U]: U[K] extends (...args: infer A) => infer R
				? (...args: A) => R
				: U[K] extends object
					? ReconstructStrict<U[K]>
					: U[K]
		}
	: never

/**
 * Flatten type
 */
export type FlattenType<T> = T extends object
	? {
			[K in keyof T]: T[K]
		}
	: T

// ============================================================================
// Type Narrowing
// ============================================================================

/**
 * Narrow type
 */
export type Narrow<T> = T extends unknown ? (x: T) => T : never

/**
 * Narrow by predicate
 */
export type NarrowBy<T, P extends (value: T) => boolean> = T extends unknown ? (P extends (value: T) => infer R ? (R extends true ? T : never) : never) : never

/**
 * Narrow to type
 */
export type NarrowTo<T, U extends T> = U

/**
 * Narrow with discriminator
 */
export type NarrowWithDiscriminator<T, D extends keyof T, V extends T[D]> = Extract<T, Record<D, V>>

/**
 * Narrow by tag
 */
export type NarrowByTag<T, Tag extends string, Value extends string> = T extends { [K in Tag]: Value } ? T : never

// ============================================================================
// Type Widening
// ============================================================================

/**
 * Widen type
 */
export type Widen<T> = T extends string
	? string
	: T extends number
		? number
		: T extends boolean
			? boolean
			: T extends bigint
				? bigint
				: T

/**
 * Widen literal
 */
export type WidenLiteral<T> = T extends string
	? string
	: T extends number
		? number
		: T extends boolean
			? boolean
			: T extends bigint
				? bigint
				: T extends symbol
					? symbol
					: T

/**
 * Widen to type
 */
export type WidenTo<T, U> = T extends U ? U : never

/**
 * Widen array element
 */
export type WidenArrayElement<T> = T extends (infer U)[] ? U[] : never

// ============================================================================
// Type Mapping
// ============================================================================

/**
 * Type map
 */
export type TypeMap<T = unknown> = Map<string, T>

/**
 * Type map entry
 */
export type TypeMapEntry<K = string, V = unknown> = [K, V]

/**
 * Type map get
 */
export type TypeMapGet<M extends Map<unknown, unknown>, K> = M extends Map<K, infer V> ? V : never

/**
 * Type map set
 */
export type TypeMapSet<M extends Map<unknown, unknown>, _K = unknown, _V = unknown> = M

/**
 * Type map has
 */
export type TypeMapHas<M extends Map<unknown, unknown>, K> = M extends Map<K, unknown> ? true : false

/**
 * Type map keys
 */
export type TypeMapKeys<M extends Map<unknown, unknown>> = M extends Map<infer K, unknown> ? K : never

/**
 * Type map values
 */
export type TypeMapValues<M extends Map<unknown, unknown>> = M extends Map<unknown, infer V> ? V : never

// ============================================================================
// Type Predicates
// ============================================================================

/**
 * Is any type
 */
export type IsAny<T> = 0 extends (1 & T) ? true : false

/**
 * Is never type
 */
export type IsNever<T> = [T] extends [never] ? true : false

/**
 * Is unknown type
 */
export type IsUnknown<T> = unknown extends T ? (T extends Record<string, never> ? false : true) : false

/**
 * Is null type
 */
export type IsNull<T> = T extends null ? (null extends T ? true : false) : false

/**
 * Is undefined type
 */
export type IsUndefined<T> = T extends undefined ? (undefined extends T ? true : false) : false

/**
 * Is void type
 */
export type IsVoid<T> = T extends void ? (void extends T ? true : false) : false

/**
 * Is function type
 */
export type IsFunction<T> = T extends (...args: unknown[]) => unknown ? true : false

/**
 * Is object type
 */
export type IsObject<T> = T extends object ? (T extends (...args: unknown[]) => unknown ? false : true) : false

/**
 * Is array type
 */
export type IsArray<T> = T extends unknown[] ? true : false

/**
 * Is tuple type
 */
export type IsTuple<T> = T extends readonly unknown[] ? (number extends T['length'] ? false : true) : false

/**
 * Is string type
 */
export type IsString<T> = T extends string ? (string extends T ? false : true) : false

/**
 * Is number type
 */
export type IsNumber<T> = T extends number ? (number extends T ? false : true) : false

/**
 * Is boolean type
 */
export type IsBoolean<T> = T extends boolean ? (boolean extends T ? false : true) : false

/**
 * Is literal type
 */
export type IsLiteral<T> = T extends string | number | boolean | bigint ? (T extends string ? false : T extends number ? false : T extends boolean ? false : T extends bigint ? false : true) : false

/**
 * Is union type
 */
export type IsUnion<T, U = T> = (T extends U ? (U extends T ? true : false) : false) extends true ? false : true

/**
 * Is optional type
 */
export type IsOptional<T, K extends keyof T> = Record<string, never> extends Pick<T, K> ? true : false

/**
 * Is readonly type
 */
export type IsReadonly<T, K extends keyof T> = T extends { readonly [P in K]: T[K] } ? true : false

// ============================================================================
// Type Equality
// ============================================================================

/**
 * Equals type
 */
export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

/**
 * Extends type
 */
export type Extends<T, U> = T extends U ? true : false

/**
 * Strict extends
 */
export type StrictExtends<T, U> = T extends U ? (U extends T ? true : false) : false

/**
 * Assignable type
 */
export type Assignable<T, U> = U extends T ? true : false

// ============================================================================
// Type Info
// ============================================================================

/**
 * Type name
 */
export type TypeName<T> = T extends string
	? 'string'
	: T extends number
		? 'number'
		: T extends boolean
			? 'boolean'
			: T extends undefined
				? 'undefined'
				: T extends null
					? 'null'
					: T extends object
						? 'object'
						: T extends ((...args: unknown[]) => unknown)
							? 'function'
							: 'unknown'

/**
 * Type category
 */
export type TypeCategory = 'primitive' | 'object' | 'array' | 'function' | 'union' | 'intersection' | 'tuple' | 'literal' | 'unknown' | 'any' | 'never' | 'void' | 'null' | 'undefined'

/**
 * Get type category
 */
export type GetTypeCategory<T> = IsAny<T> extends true
	? 'any'
	: IsNever<T> extends true
		? 'never'
		: IsUnknown<T> extends true
			? 'unknown'
			: IsVoid<T> extends true
				? 'void'
				: IsNull<T> extends true
					? 'null'
					: IsUndefined<T> extends true
						? 'undefined'
						: IsFunction<T> extends true
							? 'function'
							: IsTuple<T> extends true
								? 'tuple'
								: IsArray<T> extends true
									? 'array'
									: IsObject<T> extends true
										? 'object'
										: IsLiteral<T> extends true
											? 'literal'
											: IsUnion<T> extends true
												? 'union'
												: 'primitive'

// ============================================================================
// Type Resolution
// ============================================================================

/**
 * Resolve promise
 */
export type ResolvePromise<T> = T extends Promise<infer U> ? U : T

/**
 * Resolve array
 */
export type ResolveArray<T> = T extends (infer U)[] ? U[] : T

/**
 * Resolve optional
 */
export type ResolveOptional<T> = T extends undefined | null ? never : T

/**
 * Deep resolve
 */
export type DeepResolve<T> = T extends Promise<infer U>
	? DeepResolve<U>
	: T extends (infer U)[]
		? DeepResolve<U>[]
		: T extends object
			? { [K in keyof T]: DeepResolve<T[K]> }
			: T
