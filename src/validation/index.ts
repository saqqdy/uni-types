/**
 * Validation Rules Types
 *
 * Types for validation and sanitization.
 */

// ============================================================================
// Validator Types
// ============================================================================

/**
 * Validator type
 */
export interface Validator<T = unknown> {
	validate: (value: unknown) => ValidatorResult<T>
	optional: () => Validator<T | undefined>
	nullable: () => Validator<T | null>
}

/**
 * Validator result
 */
export type ValidatorResult<T = unknown>
	= | { success: true, value: T }
		| { success: false, errors: ValidationError[] }

/**
 * Validation error
 */
export interface ValidationError {
	path: string
	message: string
	code: string
	value?: unknown
	constraints?: Record<string, unknown>
}

/**
 * Validation rule
 */
export interface ValidationRule<T = unknown> {
	name: string
	validate: (value: T) => boolean
	message: string | ((value: T) => string)
}

// ============================================================================
// Field Validators
// ============================================================================

/**
 * String field validator
 */
export type StringFieldValidator<T = string> = Validator<T> & {
	minLength: (length: number) => StringFieldValidator<T>
	maxLength: (length: number) => StringFieldValidator<T>
	length: (min: number, max?: number) => StringFieldValidator<T>
	pattern: (regex: RegExp) => StringFieldValidator<T>
	email: () => StringFieldValidator<T>
	url: () => StringFieldValidator<T>
	uuid: () => StringFieldValidator<T>
	alpha: () => StringFieldValidator<T>
	alphanumeric: () => StringFieldValidator<T>
	numeric: () => StringFieldValidator<T>
	trim: () => StringFieldValidator<T>
	lowercase: () => StringFieldValidator<T>
	uppercase: () => StringFieldValidator<T>
	oneOf: (values: T[]) => StringFieldValidator<T>
	notOneOf: (values: T[]) => StringFieldValidator<T>
}

/**
 * Number field validator
 */
export type NumberFieldValidator<T = number> = Validator<T> & {
	min: (value: number) => NumberFieldValidator<T>
	max: (value: number) => NumberFieldValidator<T>
	range: (min: number, max: number) => NumberFieldValidator<T>
	integer: () => NumberFieldValidator<T>
	float: () => NumberFieldValidator<T>
	positive: () => NumberFieldValidator<T>
	negative: () => NumberFieldValidator<T>
	nonNegative: () => NumberFieldValidator<T>
	nonPositive: () => NumberFieldValidator<T>
	multipleOf: (value: number) => NumberFieldValidator<T>
	finite: () => NumberFieldValidator<T>
	safe: () => NumberFieldValidator<T>
}

/**
 * Boolean field validator
 */
export type BooleanFieldValidator<T = boolean> = Validator<T> & {
	true: () => BooleanFieldValidator<T>
	false: () => BooleanFieldValidator<T>
}

/**
 * Date field validator
 */
export type DateFieldValidator<T = Date> = Validator<T> & {
	min: (date: Date | string) => DateFieldValidator<T>
	max: (date: Date | string) => DateFieldValidator<T>
	range: (min: Date | string, max: Date | string) => DateFieldValidator<T>
	before: (date: Date | string) => DateFieldValidator<T>
	after: (date: Date | string) => DateFieldValidator<T>
	past: () => DateFieldValidator<T>
	future: () => DateFieldValidator<T>
}

/**
 * Array field validator
 */
export type ArrayFieldValidator<T = unknown[]> = Validator<T> & {
	minLength: (length: number) => ArrayFieldValidator<T>
	maxLength: (length: number) => ArrayFieldValidator<T>
	length: (min: number, max?: number) => ArrayFieldValidator<T>
	nonEmpty: () => ArrayFieldValidator<T>
	unique: () => ArrayFieldValidator<T>
	of: <U>(validator: Validator<U>) => ArrayFieldValidator<U[]>
}

/**
 * Object field validator
 */
export type ObjectFieldValidator<T = Record<string, unknown>> = Validator<T> & {
	shape: <S extends Record<string, Validator>>(schema: S) => ObjectFieldValidator<{ [K in keyof S]: S[K] extends Validator<infer U> ? U : never }>
	partial: () => ObjectFieldValidator<Partial<T>>
	strict: () => ObjectFieldValidator<T>
	stripUnknown: () => ObjectFieldValidator<T>
	nonEmpty: () => ObjectFieldValidator<T>
}

// ============================================================================
// Composite Validators
// ============================================================================

/**
 * And validator
 */
export interface AndValidator<T = unknown> {
	validators: Validator<T>[]
	validate: (value: unknown) => ValidatorResult<T>
}

/**
 * Or validator
 */
export interface OrValidator<T = unknown> {
	validators: Validator<T>[]
	validate: (value: unknown) => ValidatorResult<T>
}

/**
 * Not validator
 */
export interface NotValidator<T = unknown> {
	validator: Validator<T>
	validate: (value: unknown) => ValidatorResult<T>
}

/**
 * Custom validator
 */
export interface CustomValidator<T = unknown> {
	validate: (value: unknown, context?: ValidationContext) => ValidatorResult<T>
}

/**
 * Validation context
 */
export interface ValidationContext<T = unknown> {
	path: string
	parent?: T
	root: unknown
	options: ValidationOptions
}

/**
 * Validation options
 */
export interface ValidationOptions {
	abortEarly: boolean
	stripUnknown: boolean
	allowUnknown: boolean
	cast: boolean
	context?: Record<string, unknown>
}

// ============================================================================
// Validation Constraints
// ============================================================================

/**
 * Min length constraint
 */
export type MinLength<N extends number> = N

/**
 * Max length constraint
 */
export type MaxLength<N extends number> = N

/**
 * Min value constraint
 */
export type MinValue<N extends number> = N

/**
 * Max value constraint
 */
export type MaxValue<N extends number> = N

/**
 * Pattern constraint
 */
export type Pattern<S extends string> = S

/**
 * Email constraint
 */
export interface EmailConstraint {
	allowDisplayName: boolean
	allowTld: boolean
	requireTld: boolean
	domainSpecificValidation: boolean
}

/**
 * URL constraint
 */
export interface URLConstraint {
	protocols: string[]
	requireProtocol: boolean
	requireHost: boolean
	allowRelative: boolean
	allowProtocolRelativeUrls: boolean
}

/**
 * UUID constraint
 */
export interface UUIDConstraint {
	version: 1 | 3 | 4 | 5 | 'all'
}

// ============================================================================
// Sanitization Types
// ============================================================================

/**
 * Sanitizer type
 */
export interface Sanitizer<T = unknown> {
	sanitize: (value: unknown) => SanitizeResult<T>
}

/**
 * Sanitize result
 */
export type SanitizeResult<T = unknown>
	= | { success: true, value: T, changed: boolean }
		| { success: false, error: string }

/**
 * Sanitization rule
 */
export interface SanitizationRule<T = unknown> {
	name: string
	sanitize: (value: T) => T
	description?: string
}

/**
 * String sanitizer
 */
export type StringSanitizer = Sanitizer<string> & {
	trim: () => StringSanitizer
	lowercase: () => StringSanitizer
	uppercase: () => StringSanitizer
	escape: () => StringSanitizer
	unescape: () => StringSanitizer
	stripTags: () => StringSanitizer
	stripLow: () => StringSanitizer
	normalizeEmail: () => StringSanitizer
	whitelist: (chars: string) => StringSanitizer
	blacklist: (chars: string) => StringSanitizer
}

/**
 * Number sanitizer
 */
export type NumberSanitizer = Sanitizer<number> & {
	toInt: () => NumberSanitizer
	toFloat: () => NumberSanitizer
	round: (precision?: number) => NumberSanitizer
	floor: () => NumberSanitizer
	ceil: () => NumberSanitizer
	clamp: (min: number, max: number) => NumberSanitizer
}

// ============================================================================
// Schema Builder
// ============================================================================

/**
 * Schema builder
 */
export interface SchemaBuilder {
	string: () => StringFieldValidator
	number: () => NumberFieldValidator
	boolean: () => BooleanFieldValidator
	date: () => DateFieldValidator
	array: <U>(validator?: Validator<U>) => ArrayFieldValidator<U[]>
	object: <S extends Record<string, Validator>>(schema?: S) => ObjectFieldValidator
	any: () => Validator<unknown>
	unknown: () => Validator<unknown>
	never: () => Validator<never>
	undefined: () => Validator<undefined>
	null: () => Validator<null>
	void: () => Validator<void>
	literal: <V extends string | number | boolean>(value: V) => Validator<V>
	enum: <V extends string>(values: V[]) => Validator<V>
	union: <U extends Validator[]>(...validators: U) => Validator<U[number] extends Validator<infer V> ? V : never>
	intersection: <U extends Validator[]>(...validators: U) => Validator<U[number] extends Validator<infer V> ? V : never>
	record: <K extends string, V>(keyValidator?: Validator<K>, valueValidator?: Validator<V>) => Validator<Record<K, V>>
	tuple: <T extends Validator[]>(...validators: T) => Validator<{ [I in keyof T]: T[I] extends Validator<infer V> ? V : never }>
}
