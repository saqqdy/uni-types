/**
 * Advanced string type operations
 *
 * This module provides advanced string manipulation types:
 * - String parsing: Split, Join, Chunk
 * - String validation: IsEmail, IsUUID, IsURL
 * - String transformation: KebabCase, PascalCase, ConstantCase
 */

// ============================================================================
// String Parsing
// ============================================================================

/**
 * Split string by delimiter
 */
export type Split<S extends string, D extends string> = S extends `${infer Head}${D}${infer Tail}`
	? [Head, ...Split<Tail, D>]
	: S extends ''
		? []
		: [S]

/**
 * Join string array with separator
 */
export type Join<T extends string[], S extends string> = T extends [infer First extends string]
	? First
	: T extends [infer First extends string, ...infer Rest extends string[]]
		? `${First}${S}${Join<Rest, S>}`
		: ''

// ============================================================================
// String Case Conversion
// ============================================================================

/**
 * Convert string to kebab-case
 */
export type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends Uppercase<First>
		? First extends Lowercase<First>
			? `${First}${KebabCase<Rest>}`
			: `-${Lowercase<First>}${KebabCase<Rest>}`
		: `${First}${KebabCase<Rest>}`
	: S

/**
 * Convert string to PascalCase
 */
export type PascalCase<S extends string> = S extends `${infer First}-${infer Rest}`
	? `${Capitalize<First>}${PascalCase<Rest>}`
	: S extends `${infer First}_${infer Rest}`
		? `${Capitalize<First>}${PascalCase<Rest>}`
		: S extends `${infer First} ${infer Rest}`
			? `${Capitalize<First>}${PascalCase<Rest>}`
			: Capitalize<S>

/**
 * Convert string to CONSTANT_CASE
 */
export type ConstantCase<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends Uppercase<First>
		? First extends Lowercase<First>
			? `${Uppercase<First>}${ConstantCase<Rest>}`
			: `_${Uppercase<First>}${ConstantCase<Rest>}`
		: `${Uppercase<First>}${ConstantCase<Rest>}`
	: S

/**
 * Convert string to dot.case
 */
export type DotCase<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends Uppercase<First>
		? First extends Lowercase<First>
			? `${Lowercase<First>}${DotCase<Rest>}`
			: `.${Lowercase<First>}${DotCase<Rest>}`
		: `${First}${DotCase<Rest>}`
	: S

// ============================================================================
// String Validation
// ============================================================================

/**
 * Check if string matches email pattern
 */
export type IsEmail<S extends string> = S extends `${string}@${string}.${string}` ? true : false

/**
 * Check if string is a valid UUID
 */
export type IsUUID<S extends string> = S extends `${string}-${string}-${string}-${string}-${string}`
	? true
	: false

/**
 * Check if string is a valid URL (basic check)
 */
export type IsURL<S extends string> = S extends `http${'s' | ''}://${string}` ? true : false

/**
 * Check if string is numeric
 */
export type IsNumeric<S extends string> = S extends `${number}` ? true : false

/**
 * Check if string is empty
 */
export type IsEmptyString<S extends string> = S extends '' ? true : false

// ============================================================================
// String Transformation
// ============================================================================

/**
 * Reverse a string
 */
export type ReverseString<S extends string, Acc extends string = ''> = S extends `${infer First}${infer Rest}`
	? ReverseString<Rest, `${First}${Acc}`>
	: Acc

/**
 * Remove all spaces from string
 */
export type RemoveSpaces<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends ' '
		? RemoveSpaces<Rest>
		: `${First}${RemoveSpaces<Rest>}`
	: S

/**
 * Uppercase all characters
 */
export type UpperCase<S extends string> = Uppercase<S>

/**
 * Lowercase all characters
 */
export type LowerCase<S extends string> = Lowercase<S>

/**
 * Get substring between two markers
 */
export type Between<S extends string, Start extends string, End extends string> = S extends `${string}${Start}${infer Middle}${End}${string}`
	? Middle
	: never
