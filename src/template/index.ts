/**
 * Template literal type utilities for string manipulation
 */

/**
 * Replace all occurrences of a substring
 *
 * @example
 * ```ts
 * ReplaceAll<'hello world world', 'world', 'there'>  // 'hello there there'
 * ReplaceAll<'aaa', 'a', 'b'>  // 'bbb'
 * ```
 */
export type ReplaceAll<
	S extends string,
	From extends string,
	To extends string,
> = From extends ''
	? S
	: S extends `${infer Before}${From}${infer After}`
		? `${Before}${To}${ReplaceAll<After, From, To>}`
		: S

/**
 * Replace first occurrence of a substring
 *
 * @example
 * ```ts
 * Replace<'hello world world', 'world', 'there'>  // 'hello there world'
 * ```
 */
export type Replace<
	S extends string,
	From extends string,
	To extends string,
> = From extends ''
	? S
	: S extends `${infer Before}${From}${infer After}`
		? `${Before}${To}${After}`
		: S

/**
 * Trim whitespace from both ends
 *
 * @example
 * ```ts
 * Trim<'  hello  '>  // 'hello'
 * Trim<'\n\ttext\n'>  // 'text'
 * ```
 */
export type Trim<S extends string> = TrimLeft<TrimRight<S>>

/**
 * Trim whitespace from left
 *
 * @example
 * ```ts
 * TrimLeft<'  hello'>  // 'hello'
 * ```
 */
export type TrimLeft<S extends string> = S extends ` ${infer Rest}`
	? TrimLeft<Rest>
	: S extends `\n${infer Rest}`
		? TrimLeft<Rest>
		: S extends `\t${infer Rest}`
			? TrimLeft<Rest>
			: S extends `\r${infer Rest}`
				? TrimLeft<Rest>
				: S

/**
 * Trim whitespace from right
 *
 * @example
 * ```ts
 * TrimRight<'hello  '>  // 'hello'
 * ```
 */
export type TrimRight<S extends string> = S extends `${infer Rest} `
	? TrimRight<Rest>
	: S extends `${infer Rest}\n`
		? TrimRight<Rest>
		: S extends `${infer Rest}\t`
			? TrimRight<Rest>
			: S extends `${infer Rest}\r`
				? TrimRight<Rest>
				: S

/**
 * Convert string to array of characters
 *
 * @example
 * ```ts
 * StringToArray<'abc'>  // ['a', 'b', 'c']
 * ```
 */
export type StringToArray<S extends string, Acc extends string[] = []> = S extends `${infer First}${infer Rest}`
	? StringToArray<Rest, [...Acc, First]>
	: Acc

/**
 * Capitalize all words in a string
 *
 * @example
 * ```ts
 * CapitalizeAll<'hello world'>  // 'Hello World'
 * ```
 */
export type CapitalizeAll<S extends string> = S extends `${infer First} ${infer Rest}`
	? `${Capitalize<First>} ${CapitalizeAll<Rest>}`
	: S extends `${infer First}`
		? Capitalize<First>
		: S

/**
 * Uncapitalize all words in a string
 *
 * @example
 * ```ts
 * UncapitalizeAll<'Hello World'>  // 'hello world'
 * ```
 */
export type UncapitalizeAll<S extends string> = S extends `${infer First} ${infer Rest}`
	? `${Uncapitalize<First>} ${UncapitalizeAll<Rest>}`
	: S extends `${infer First}`
		? Uncapitalize<First>
		: S

/**
 * Check if string starts with a prefix
 *
 * @example
 * ```ts
 * StartsWith<'hello world', 'hello'>  // true
 * StartsWith<'hello world', 'world'>  // false
 * ```
 */
export type StartsWith<S extends string, P extends string> = S extends `${P}${any}` ? true : false

/**
 * Check if string ends with a suffix
 *
 * @example
 * ```ts
 * EndsWith<'hello world', 'world'>  // true
 * EndsWith<'hello world', 'hello'>  // false
 * ```
 */
export type EndsWith<S extends string, P extends string> = S extends `${any}${P}` ? true : false

/**
 * Get string length at type level
 *
 * @example
 * ```ts
 * StringLength<'hello'>  // 5
 * ```
 */
export type StringLength<S extends string, Acc extends 0[] = []> = S extends `${string}${infer Rest}`
	? StringLength<Rest, [...Acc, 0]>
	: Acc['length']

/**
 * Repeat a string N times
 *
 * @example
 * ```ts
 * Repeat<'ab', 3>  // 'ababab'
 * ```
 */
export type Repeat<
	S extends string,
	N extends number,
	Acc extends string = '',
	Count extends 0[] = [],
> = Count['length'] extends N ? Acc : Repeat<S, N, `${Acc}${S}`, [...Count, 0]>

/**
 * Pad string on the left
 *
 * @example
 * ```ts
 * PadStart<'5', 3, '0'>  // '005'
 * ```
 */
export type PadStart<
	S extends string,
	N extends number,
	P extends string = ' ',
> = StringLength<S> extends N
	? S
	: N extends number
		? `${P}${PadStart<S, Decrement<N>, P>}`
		: S

/**
 * Pad string on the right
 *
 * @example
 * ```ts
 * PadEnd<'5', 3, '0'>  // '500'
 * ```
 */
export type PadEnd<
	S extends string,
	N extends number,
	P extends string = ' ',
> = StringLength<S> extends N
	? S
	: N extends number
		? `${PadEnd<S, Decrement<N>, P>}${P}`
		: S

type Decrement<N extends number, Acc extends 0[] = []> = N extends 0
	? 0
	: [...Acc, 0]['length'] extends N
			? Acc['length']
			: Decrement<N, [...Acc, 0]>
