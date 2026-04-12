/**
 * Zod schema integration types
 *
 * These types work with Zod schemas to provide type extraction and manipulation.
 * Note: Zod is an optional peer dependency.
 */

// Stub types for when Zod is not installed
declare const ZodTypeSymbol: unique symbol

/**
 * Base Zod schema type stub
 */
export interface ZodTypeStub<T = unknown> {
	[ZodTypeSymbol]?: T
}

/**
 * ZodObject shape stub
 */
export type ZodObjectShapeStub = Record<string, ZodTypeStub>

/**
 * Extract the output type from a Zod schema
 *
 * @example
 * ```ts
 * import { z } from 'zod'
 *
 * const UserSchema = z.object({
 *   name: z.string(),
 *   age: z.number()
 * })
 *
 * type User = ZodOutput<typeof UserSchema>
 * // { name: string; age: number }
 * ```
 */
export type ZodOutput<T> = T extends { _output: infer O } ? O : T extends { _def: { type: string } } ? T : never

/**
 * Extract the input type from a Zod schema
 *
 * @example
 * ```ts
 * import { z } from 'zod'
 *
 * const UserSchema = z.object({
 *   name: z.string(),
 *   age: z.number().optional()
 * })
 *
 * type UserInput = ZodInput<typeof UserSchema>
 * // { name: string; age?: number | undefined }
 * ```
 */
export type ZodInput<T> = T extends { _input: infer I } ? I : T extends { _def: { type: string } } ? T : never

/**
 * Check if a type is a Zod schema
 *
 * @example
 * ```ts
 * import { z } from 'zod'
 *
 * type A = IsZodSchema<z.ZodString>  // true
 * type B = IsZodSchema<string>       // false
 * ```
 */
export type IsZodSchema<T> = T extends { _def: object } ? true : false

/**
 * Extract shape from ZodObject
 *
 * @example
 * ```ts
 * import { z } from 'zod'
 *
 * const UserSchema = z.object({
 *   name: z.string(),
 *   age: z.number()
 * })
 *
 * type Shape = ZodShape<typeof UserSchema>
 * // { name: ZodString; age: ZodNumber }
 * ```
 */
export type ZodShape<T> = T extends { _def: { shape: () => infer S } } ? S : T extends { shape: infer S } ? S : never

/**
 * Extract the inner type from ZodOptional
 */
export type ZodUnwrapOptional<T> = T extends { _def: { innerType: infer I } } ? I : T

/**
 * Extract the inner type from ZodNullable
 */
export type ZodUnwrapNullable<T> = T extends { _def: { innerType: infer I } } ? I : T

/**
 * Check if Zod schema is optional
 */
export type IsZodOptional<T> = T extends { _def: { typeName: 'ZodOptional' } } ? true : false

/**
 * Check if Zod schema is nullable
 */
export type IsZodNullable<T> = T extends { _def: { typeName: 'ZodNullable' } } ? true : false

/**
 * Get the element type from ZodArray
 */
export type ZodArrayElement<T> = T extends { _def: { type: 'array', elementType: infer E } }
	? E
	: T extends { element: infer E }
		? E
		: never

/**
 * Get value type from ZodRecord
 */
export type ZodRecordValue<T> = T extends { _def: { valueType: infer V } } ? V : never

/**
 * Get key and value types from ZodMap
 */
export type ZodMapEntry<T> = T extends { _def: { keyType: infer K, valueType: infer V } }
	? { key: K, value: V }
	: never

/**
 * Convert Zod schema to TypeScript type (alias for ZodOutput)
 */
export type ZodToType<T> = ZodOutput<T>

/**
 * Deep partial input for Zod schemas
 */
export type ZodDeepPartialInput<T> = T extends { _def: { typeName: 'ZodObject', shape: () => infer S } }
	? {
			[K in keyof S]?: ZodDeepPartialInput<S[K]>
		}
	: T extends { _def: { typeName: 'ZodArray', elementType: infer E } }
		? ZodDeepPartialInput<E>[]
		: T extends { _def: { typeName: 'ZodOptional', innerType: infer I } }
			? ZodDeepPartialInput<I> | undefined
			: T extends { _def: { typeName: 'ZodNullable', innerType: infer I } }
				? ZodDeepPartialInput<I> | null
				: T

/**
 * Required keys from ZodObject schema
 */
export type ZodRequiredKeys<T> = T extends { _def: { shape: () => infer S } }
	? {
			[K in keyof S]: S[K] extends { _def: { typeName: 'ZodOptional' } }
				? never
				: S[K] extends { _def: { typeName: 'ZodDefault' } }
					? never
					: K
		}[keyof S]
	: never

/**
 * Optional keys from ZodObject schema
 */
export type ZodOptionalKeys<T> = T extends { _def: { shape: () => infer S } }
	? {
			[K in keyof S]: S[K] extends { _def: { typeName: 'ZodOptional' } }
				? K
				: S[K] extends { _def: { typeName: 'ZodDefault' } }
					? K
					: never
		}[keyof S]
	: never

/**
 * Pick properties from ZodObject schema
 */
export type ZodPick<T, K extends keyof ZodShape<T>> = T extends { _def: { shape: () => infer S } }
	? { _def: { shape: () => Pick<S, K & keyof S>, typeName: 'ZodObject' } }
	: never

/**
 * Omit properties from ZodObject schema
 */
export type ZodOmit<T, K extends keyof ZodShape<T>> = T extends { _def: { shape: () => infer S } }
	? { _def: { shape: () => Omit<S, K & keyof S>, typeName: 'ZodObject' } }
	: never

/**
 * Get the error type from ZodError
 */
export interface ZodErrorType {
	issues: Array<{
		code: string
		message: string
		path: (string | number)[]
		expected?: string
		received?: string
	}>
}

/**
 * Zod schema type name mapping
 */
export type ZodTypeNames
	= | 'ZodString'
		| 'ZodNumber'
		| 'ZodBoolean'
		| 'ZodNull'
		| 'ZodUndefined'
		| 'ZodAny'
		| 'ZodUnknown'
		| 'ZodNever'
		| 'ZodVoid'
		| 'ZodArray'
		| 'ZodObject'
		| 'ZodUnion'
		| 'ZodIntersection'
		| 'ZodTuple'
		| 'ZodRecord'
		| 'ZodMap'
		| 'ZodSet'
		| 'ZodDate'
		| 'ZodFunction'
		| 'ZodLazy'
		| 'ZodLiteral'
		| 'ZodEnum'
		| 'ZodNativeEnum'
		| 'ZodPromise'
		| 'ZodBranded'
		| 'ZodOptional'
		| 'ZodNullable'
		| 'ZodDefault'
		| 'ZodCatch'
