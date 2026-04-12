/**
 * Yup schema integration types
 *
 * These types work with Yup schemas to provide type extraction and manipulation.
 * Note: Yup is an optional peer dependency.
 */

// Stub types for when Yup is not installed
declare const YupTypeSymbol: unique symbol

/**
 * Base Yup schema type stub
 */
export interface YupSchemaStub<T = unknown> {
	[YupTypeSymbol]?: T
}

/**
 * Extract the output type from a Yup schema
 *
 * @example
 * ```ts
 * import * as yup from 'yup'
 *
 * const UserSchema = yup.object({
 *   name: yup.string().required(),
 *   age: yup.number()
 * })
 *
 * type User = YupOutput<typeof UserSchema>
 * // { name: string; age?: number | undefined }
 * ```
 */
export type YupOutput<T> = T extends { __outputType: infer O } ? O : T extends { spec: object } ? T : never

/**
 * Extract the input type from a Yup schema
 *
 * @example
 * ```ts
 * import * as yup from 'yup'
 *
 * const UserSchema = yup.object({
 *   name: yup.string().required(),
 *   age: yup.number()
 * })
 *
 * type UserInput = YupInput<typeof UserSchema>
 * // { name: string; age?: number | undefined }
 * ```
 */
export type YupInput<T> = T extends { __inputType: infer I } ? I : T extends { spec: object } ? T : never

/**
 * Check if a type is a Yup schema
 *
 * @example
 * ```ts
 * import * as yup from 'yup'
 *
 * type A = IsYupSchema<yup.StringSchema>  // true
 * type B = IsYupSchema<string>            // false
 * ```
 */
export type IsYupSchema<T> = T extends { spec: object } ? true : T extends { __isYupSchema: true } ? true : false

/**
 * Extract the inner type from Yup optional schema
 */
export type YupUnwrapOptional<T> = T extends { _innerType: infer I } ? I : T

/**
 * Check if Yup schema is optional
 */
export type IsYupOptional<T> = T extends { spec: { optional: true } } ? true : T extends { _nullable: true } ? true : false

/**
 * Check if Yup schema is nullable
 */
export type IsYupNullable<T> = T extends { spec: { nullable: true } } ? true : T extends { _nullable: true } ? true : false

/**
 * Get the element type from Yup array schema
 */
export type YupArrayElement<T> = T extends { _subType: infer E } ? E : T extends { innerType: infer E } ? E : never

/**
 * Convert Yup schema to TypeScript type (alias for YupOutput)
 */
export type YupToType<T> = YupOutput<T>

/**
 * Get Yup schema fields from object schema
 */
export type YupFields<T> = T extends { fields: infer F } ? F : T extends { _subFields: infer F } ? F : never

/**
 * Required keys from Yup object schema
 */
export type YupRequiredKeys<T> = T extends { fields: infer F }
	? {
			[K in keyof F]: F[K] extends { spec: { optional: true } }
				? never
				: F[K] extends { _optional: true }
					? never
					: K
		}[keyof F]
	: never

/**
 * Optional keys from Yup object schema
 */
export type YupOptionalKeys<T> = T extends { fields: infer F }
	? {
			[K in keyof F]: F[K] extends { spec: { optional: true } }
				? K
				: F[K] extends { _optional: true }
					? K
					: never
		}[keyof F]
	: never

/**
 * Yup schema type names
 */
export type YupTypeNames
	= | 'StringSchema'
		| 'NumberSchema'
		| 'BooleanSchema'
		| 'DateSchema'
		| 'ArraySchema'
		| 'ObjectSchema'
		| 'MixedSchema'
		| 'TupleSchema'
		| 'Lazy'

/**
 * Yup validation error type
 */
export interface YupErrorType {
	name: 'ValidationError'
	value: unknown
	path: string
	type: string | undefined
	errors: string[]
	inner: Array<{
		name: 'ValidationError'
		path: string
		message: string
		type: string | undefined
	}>
}

/**
 * Yup test config type
 */
export interface YupTestConfig<T = unknown> {
	name: string
	message: string | ((params: { value: unknown, path: string }) => string)
	test: (value: T) => boolean | Promise<boolean>
}

/**
 * Yup transform function type
 */
export type YupTransform<T = unknown, R = unknown> = (value: T, originalValue: T) => R
