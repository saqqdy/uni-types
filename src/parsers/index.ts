/**
 * Type-level parsing utilities
 *
 * This module provides type-level parsers for:
 * - JSON: ParseJSON, StringifyJSON, IsValidJSON
 * - URL: ParseURL, QueryParams, PathParams
 * - CSV: ParseCSV
 */

// ============================================================================
// JSON Parser
// ============================================================================

/**
 * Check if string is valid JSON
 *
 * @example
 * ```ts
 * IsValidJSON<'{"name": "test"}'>  // true
 * ```
 */
export type IsValidJSON<S extends string> = S extends `{}`
	? true
	: S extends `[]`
		? true
		: S extends `"${string}"`
			? true
			: S extends `${number}`
				? true
				: S extends 'true' | 'false' | 'null'
					? true
					: S extends `{${string}}`
						? true
						: S extends `[${string}]`
							? true
							: false

/**
 * Parse JSON string to type (limited support)
 *
 * @example
 * ```ts
 * ParseJSON<'"hello"'>  // 'hello'
 * ParseJSON<'123'>  // 123
 * ```
 */
export type ParseJSON<S extends string> = S extends `"${infer Content}"`
	? Content
	: S extends `${infer N extends number}`
		? N
		: S extends 'true'
			? true
			: S extends 'false'
				? false
				: S extends 'null'
					? null
					: S extends `{}`
						? Record<string, never>
						: S extends `[]`
							? []
							: S extends `{${string}}`
								? Record<string, unknown>
								: S extends `[${string}]`
									? unknown[]
									: never

/**
 * Stringify type to JSON string representation
 *
 * @example
 * ```ts
 * StringifyJSON<'hello'>  // '"hello"'
 * StringifyJSON<123>  // '123'
 * ```
 */
export type StringifyJSON<T> = T extends string
	? `"${T}"`
	: T extends number
		? `${T}`
		: T extends boolean
			? `${T}`
			: T extends null
				? 'null'
				: T extends undefined
					? 'null'
					: T extends unknown[]
						? StringifyArray<T>
						: T extends object
							? '{}'
							: never

type StringifyArray<T extends unknown[]> = T extends []
	? '[]'
	: T extends [infer First, ...infer Rest]
		? Rest extends []
			? `[${StringifyJSON<First>}]`
			: `[${StringifyJSON<First>}, ${StringifyArray<Rest>}]`
		: never

// ============================================================================
// URL Parser
// ============================================================================

/**
 * Parse URL string into components
 *
 * @example
 * ```ts
 * ParseURL<'https://example.com/path?q=1'>
 * // { protocol: 'https'; host: 'example.com'; pathname: '/path'; search: '?q=1' }
 * ```
 */
export type ParseURL<S extends string> = S extends `${infer Protocol}://${infer Rest}`
	? ParseURLRest<Protocol, Rest>
	: never

type ParseURLRest<Protocol extends string, Rest extends string> = Rest extends `${infer Host}/${infer Path}`
	? ParseURLPath<Protocol, Host, Path>
	: Rest extends `${infer Host}?${infer Search}`
		? { protocol: Protocol, host: Host, pathname: '/', search: `?${Search}`, hash: '' }
		: Rest extends `${infer Host}#${infer Hash}`
			? { protocol: Protocol, host: Host, pathname: '/', search: '', hash: `#${Hash}` }
			: { protocol: Protocol, host: Rest, pathname: '/', search: '', hash: '' }

type ParseURLPath<Protocol extends string, Host extends string, Path extends string>
	= Path extends `${infer Pathname}?${infer Search}`
		? { protocol: Protocol, host: Host, pathname: `/${Pathname}`, search: `?${Search}`, hash: '' }
		: Path extends `${infer Pathname}#${infer Hash}`
			? { protocol: Protocol, host: Host, pathname: `/${Pathname}`, search: '', hash: `#${Hash}` }
			: { protocol: Protocol, host: Host, pathname: `/${Path}`, search: '', hash: '' }

/**
 * Parse query string into object
 *
 * @example
 * ```ts
 * QueryParams<'?a=1&b=2'>  // { a: '1'; b: '2' }
 * ```
 */
export type QueryParams<S extends string> = S extends `?${infer Rest}` ? ParseQueryPairs<Rest> : Record<string, never>

type ParseQueryPairs<S extends string> = S extends `${infer K}=${infer V}&${infer Rest}`
	? { [P in K]: V } & ParseQueryPairs<Rest>
	: S extends `${infer K}=${infer V}`
		? { [P in K]: V }
		: Record<string, never>

/**
 * Extract path params from route pattern
 *
 * @example
 * ```ts
 * PathParams<'/users/:id', '/users/123'>  // { id: '123' }
 * ```
 */
export type PathParams<Pattern extends string, Path extends string> = ExtractPathParams<Pattern, Path>

type ExtractPathParams<Pattern extends string, Path extends string> = Pattern extends `/:${infer Param}/${infer RestPattern}`
	? Path extends `/${infer Value}/${infer RestPath}`
		? { [P in Param]: Value } & ExtractPathParams<RestPattern, RestPath>
		: Record<string, never>
	: Pattern extends `/:${infer Param}`
		? Path extends `/${infer Value}`
			? { [P in Param]: Value }
			: Record<string, never>
		: Pattern extends `/${infer Literal}/${infer RestPattern}`
			? Path extends `/${Literal}/${infer RestPath}`
				? ExtractPathParams<RestPattern, RestPath>
				: Record<string, never>
			: Record<string, never>

// ============================================================================
// CSV Parser
// ============================================================================

/**
 * Split string by delimiter
 *
 * @example
 * ```ts
 * SplitByComma<'a,b,c'>  // ['a', 'b', 'c']
 * ```
 */
export type SplitByComma<S extends string, Acc extends string[] = []> = S extends `${infer First},${infer Rest}`
	? SplitByComma<Rest, [...Acc, First]>
	: S extends ''
		? Acc
		: [...Acc, S]

/**
 * Parse CSV string to tuple of records
 *
 * @example
 * ```ts
 * ParseCSV<'name,age\nJohn,30\nJane,25'>
 * // [{ name: 'John'; age: '30' }, { name: 'Jane'; age: '25' }]
 * ```
 */
export type ParseCSV<S extends string> = S extends `${infer Header}\n${infer Rows}`
	? ParseCSVRows<Rows, SplitByComma<Header>>
	: []

type ParseCSVRows<S extends string, Headers extends string[]> = S extends `${infer Row}\n${infer Rest}`
	? [CSVRecord<SplitByComma<Row>, Headers>, ...ParseCSVRows<Rest, Headers>]
	: S extends `${infer Row}`
		? [CSVRecord<SplitByComma<Row>, Headers>]
		: []

type CSVRecord<Values extends string[], Headers extends string[]> = Values['length'] extends Headers['length']
	? RecordFromTuples<Headers, Values>
	: Record<string, never>

type RecordFromTuples<Keys extends string[], Values extends string[]> = Keys extends [
	infer K extends string,
	...infer KR extends string[],
]
	? Values extends [infer V extends string, ...infer VR extends string[]]
		? { [P in K]: V } & RecordFromTuples<KR, VR>
		: Record<string, never>
	: Record<string, never>

/**
 * Stringify records to CSV format
 *
 * @example
 * ```ts
 * StringifyCSV<[{ name: 'John'; age: '30' }, { name: 'Jane'; age: '25' }]>
 * // 'name,age\nJohn,30\nJane,25'
 * ```
 */
export type StringifyCSV<Records extends Record<string, string>[]> = Records extends [
	infer First extends Record<string, string>,
	...infer Rest extends Record<string, string>[],
]
	? Rest extends []
		? `${StringifyCSVHeader<First>}\n${StringifyCSVRow<First>}`
		: `${StringifyCSVHeader<First>}\n${StringifyCSVRows<Records>}`
	: ''

type StringifyCSVHeader<R extends Record<string, string>> = JoinKeys<keyof R>

type JoinKeys<K, Acc extends string = ''> = K extends [infer First, ...infer Rest]
	? First extends string
		? Acc extends ''
			? JoinKeys<Rest, First>
			: JoinKeys<Rest, `${Acc},${First}`>
		: JoinKeys<Rest, Acc>
	: K extends string
		? K
		: Acc

type StringifyCSVRows<Records extends Record<string, string>[]> = Records extends [
	infer First extends Record<string, string>,
	...infer Rest extends Record<string, string>[],
]
	? Rest extends []
		? StringifyCSVRow<First>
		: `${StringifyCSVRow<First>}\n${StringifyCSVRows<Rest>}`
	: ''

type StringifyCSVRow<R extends Record<string, string>, Keys extends string = Extract<keyof R, string>> = Keys extends `${infer K},${infer Rest}`
	? K extends keyof R
		? Rest extends keyof R
			? `${R[K]},${StringifyCSVRow<R, Rest>}`
			: `${R[K]},${Rest}`
		: StringifyCSVRow<R, Rest>
	: Keys extends keyof R
		? R[Keys]
		: ''

// ============================================================================
// Expression Parser
// ============================================================================

/**
 * Parse simple arithmetic expression string to type
 * Supports: +, -, *, /, parentheses, numbers
 *
 * @example
 * ```ts
 * ParseExpression<'1 + 2'>  // { left: 1; op: '+'; right: 2 }
 * ParseExpression<'3 * 4 + 2'>  // { left: { left: 3; op: '*'; right: 4 }; op: '+'; right: 2 }
 * ```
 */
export type ParseExpression<S extends string> = ParseAddSub<Trim<S>>

type Trim<S extends string> = S extends ` ${infer Rest}`
	? Trim<Rest>
	: S extends `${infer Rest} `
		? Trim<Rest>
		: S

type ParseAddSub<S extends string> = ParseAddSubImpl<S, '', ''>

type ParseAddSubImpl<
	S extends string,
	Buffer extends string,
	LeftBuffer extends string,
> = S extends `${infer C}${infer Rest}`
	? C extends '+' | '-'
		? LeftBuffer extends ''
			? ParseAddSubImpl<Rest, '', Buffer>
			: {
					left: ParseMulDiv<LeftBuffer>
					op: C
					right: ParseAddSub<Rest>
				}
		: ParseAddSubImpl<Rest, Buffer, `${LeftBuffer}${C}`>
	: ParseMulDiv<LeftBuffer>

type ParseMulDiv<S extends string> = ParseMulDivImpl<S, '', ''>

type ParseMulDivImpl<
	S extends string,
	Buffer extends string,
	LeftBuffer extends string,
> = S extends `${infer C}${infer Rest}`
	? C extends '*' | '/'
		? LeftBuffer extends ''
			? ParseMulDivImpl<Rest, '', Buffer>
			: {
					left: ParseAtom<LeftBuffer>
					op: C
					right: ParseMulDiv<Rest>
				}
		: ParseMulDivImpl<Rest, Buffer, `${LeftBuffer}${C}`>
	: ParseAtom<LeftBuffer>

type ParseAtom<S extends string> = S extends `(${infer Inner})`
	? ParseExpression<Inner>
	: S extends `${infer N extends number}`
		? N
		: S

/**
 * Evaluate parsed expression to result
 *
 * @example
 * ```ts
 * EvaluateExpression<{ left: 1; op: '+'; right: 2 }>  // 3
 * EvaluateExpression<{ left: { left: 3; op: '*'; right: 4 }; op: '+'; right: 2 }>  // 14
 * ```
 */
export type EvaluateExpression<E> = E extends { left: infer L, op: infer Op, right: infer R }
	? Op extends '+'
		? Add<EvaluateExpression<L>, EvaluateExpression<R>>
		: Op extends '-'
			? Subtract<EvaluateExpression<L>, EvaluateExpression<R>>
			: Op extends '*'
				? Multiply<EvaluateExpression<L>, EvaluateExpression<R>>
				: Op extends '/'
					? Divide<EvaluateExpression<L>, EvaluateExpression<R>>
					: never
	: E extends number
		? E
		: never

// Numeric helpers for expression evaluation
type BuildTuple<N extends number, Acc extends 0[] = []> = Acc['length'] extends N ? Acc : BuildTuple<N, [...Acc, 0]>
type Increment<N extends number> = [...BuildTuple<N>, 0]['length'] & number
type Decrement<N extends number> = BuildTuple<N> extends [0, ...infer Rest] ? Rest['length'] : 0
type Add<A extends number, B extends number> = B extends 0 ? A : Add<Increment<A>, Decrement<B>>
type Subtract<A extends number, B extends number> = B extends 0
	? A
	: A extends 0
		? never
		: Subtract<Decrement<A>, Decrement<B>>
type Multiply<A extends number, B extends number> = B extends 0 ? 0 : MultiplyImpl<A, B, 0>
type MultiplyImpl<A extends number, B extends number, Acc extends number> = B extends 0
	? Acc
	: MultiplyImpl<A, Decrement<B>, Add<Acc, A>>
type Divide<A extends number, B extends number> = B extends 0 ? never : DivideImpl<A, B, 0>
type DivideImpl<A extends number, B extends number, Acc extends number> = A extends 0
	? Acc
	: Subtract<A, B> extends infer R extends number
		? R extends never
			? Acc
			: R extends 0
				? Increment<Acc>
				: DivideImpl<R, B, Increment<Acc>>
		: never
