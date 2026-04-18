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
