/**
 * GraphQL Integration Types
 *
 * Type utilities for GraphQL schemas and operations.
 */

// ============================================================================
// Schema Types
// ============================================================================

/**
 * GraphQL schema type representation
 */
export interface GraphQLSchema<T> {
	query: T
	mutation?: T
	subscription?: T
	types: Record<string, GraphQLType<any>>
}

/**
 * GraphQL scalar and object types
 */
export type GraphQLType<T>
	= | GraphQLScalarType
		| GraphQLObjectType<T>
		| GraphQLEnumType
		| GraphQLInputObjectType<T>
		| GraphQLUnionType
		| GraphQLInterfaceType<T>

/**
 * GraphQL scalar types
 */
export type GraphQLScalarType
	= | 'String'
		| 'Int'
		| 'Float'
		| 'Boolean'
		| 'ID'
		| 'DateTime'
		| 'JSON'

/**
 * GraphQL object type
 */
export type GraphQLObjectType<T> = {
	__typename?: string
} & T

/**
 * GraphQL enum type
 */
export type GraphQLEnumType = string

/**
 * GraphQL input object type
 */
export type GraphQLInputObjectType<T> = T

/**
 * GraphQL union type
 */
export type GraphQLUnionType = string

/**
 * GraphQL interface type
 */
export type GraphQLInterfaceType<T> = T

/**
 * GraphQL input type
 */
export type GraphQLInputType<T> = T extends GraphQLScalarType
	? T
	: T extends object
		? GraphQLInputObjectType<T>
		: never

/**
 * GraphQL output type
 */
export type GraphQLOutputType<T> = T extends GraphQLScalarType
	? T
	: T extends object
		? GraphQLObjectType<T>
		: never

// ============================================================================
// Query Types
// ============================================================================

/**
 * GraphQL query type
 */
export interface GraphQLQuery<T, V = Record<string, never>> {
	__query?: string
	variables: V
	return: T
}

/**
 * GraphQL mutation type
 */
export interface GraphQLMutation<T, V = Record<string, never>> {
	__mutation?: string
	variables: V
	return: T
}

/**
 * GraphQL subscription type
 */
export interface GraphQLSubscription<T, V = Record<string, never>> {
	__subscription?: string
	variables: V
	return: T
}

/**
 * GraphQL fragment type
 */
export type GraphQLFragment<T, N extends string> = {
	__fragment: N
	__typename?: string
} & T

// ============================================================================
// Resolver Types
// ============================================================================

/**
 * GraphQL resolver function type
 */
export type GraphQLResolver<T, C = unknown, A = Record<string, unknown>> = (
	parent: unknown,
	args: A,
	context: C,
	info: GraphQLResolveInfo,
) => T | Promise<T>

/**
 * GraphQL field resolver type
 */
export type GraphQLFieldResolver<T, Args = Record<string, unknown>, C = unknown> = (
	source: unknown,
	args: Args,
	context: C,
	info: GraphQLResolveInfo,
) => T | Promise<T>

/**
 * GraphQL context type
 */
export type GraphQLContext<T = Record<string, unknown>> = T & {
	__graphqlContext?: true
}

/**
 * GraphQL resolve info
 */
export interface GraphQLResolveInfo {
	fieldName: string
	fieldNodes: unknown[]
	returnType: unknown
	parentType: unknown
	path: { key: string | number, prev: unknown }
	schema: unknown
	fragments: Record<string, unknown>
	rootValue: unknown
	operation: unknown
	variableValues: Record<string, unknown>
}

// ============================================================================
// Selection Types
// ============================================================================

/**
 * GraphQL selection
 */
export type GraphQLSelection<T> = {
	[K in keyof T]: T[K] extends object ? GraphQLSelection<T[K]> : boolean
}

/**
 * GraphQL selection set
 */
export type GraphQLSelectionSet<T> = GraphQLSelection<T>

/**
 * GraphQL flat selection (flattened field names)
 */
export type GraphQLFlatSelection<T, Prefix extends string = ''> = T extends object
	? {
			[K in keyof T]: T[K] extends object
				? GraphQLFlatSelection<T[K], `${Prefix}${K & string}.`>
				: `${Prefix}${K & string}`
		}[keyof T]
	: never

// ============================================================================
// Code Generation Types
// ============================================================================

/**
 * Convert GraphQL type to TypeScript type
 */
export type GraphQLToType<T> = T extends 'String'
	? string
	: T extends 'Int' | 'Float'
		? number
		: T extends 'Boolean'
			? boolean
			: T extends 'ID'
				? string
				: T extends 'DateTime'
					? Date
					: T extends 'JSON'
						? unknown
						: T

/**
 * Convert TypeScript type to GraphQL type
 */
export type TypeToGraphQL<T> = T extends string
	? 'String'
	: T extends number
		? 'Int'
		: T extends boolean
			? 'Boolean'
			: T extends Date
				? 'DateTime'
				: 'JSON'

/**
 * Extract field types from GraphQL object
 */
export type GraphQLFieldTypes<T> = {
	[K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : T[K]
}

/**
 * GraphQL argument types
 */
export type GraphQLArgs<T> = T extends (...args: infer A) => any ? A[0] : never

/**
 * GraphQL return type
 */
export type GraphQLReturn<T> = T extends (...args: any[]) => infer R ? R : never
