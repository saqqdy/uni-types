/**
 * Type-level database utilities
 *
 * This module provides types for:
 * - SQL type generation
 * - Migration types
 * - Query builder types
 * - Index types
 */

// ============================================================================
// SQL Type Mapping
// ============================================================================

/**
 * Map TypeScript types to SQL types
 *
 * @example
 * ```ts
 * SQLType<string>  // 'VARCHAR'
 * SQLType<number>  // 'INTEGER'
 * ```
 */
export type SQLType<T> = T extends string
	? 'VARCHAR'
	: T extends number
		? 'INTEGER'
		: T extends boolean
			? 'BOOLEAN'
			: T extends Date
				? 'TIMESTAMP'
				: T extends unknown[]
					? 'ARRAY'
					: T extends object
						? 'JSON'
						: 'UNKNOWN'

/**
 * SQL column definition
 *
 * @example
 * ```ts
 * type Col = SQLColumn<string, { nullable: false; unique: true }>
 * ```
 */
export type SQLColumn<T, Options extends ColumnOptions = {}> = {
	type: SQLType<T>
	nullable: Options extends { nullable: infer N } ? N : true
	primaryKey: Options extends { primaryKey: true } ? true : false
	unique: Options extends { unique: true } ? true : false
	default?: Options extends { default: infer D } ? D : never
}

export interface ColumnOptions {
	nullable?: boolean
	primaryKey?: boolean
	unique?: boolean
	default?: unknown
}

/**
 * Generate CREATE TABLE statement type
 *
 * @example
 * ```ts
 * type UserTable = CreateTable<{ id: number; name: string }>
 * ```
 */
export type CreateTable<T extends Record<string, any>> = {
	table: string
	columns: { [K in keyof T]: SQLColumn<T[K]> }
}

// ============================================================================
// Query Types
// ============================================================================

/**
 * SELECT query type
 *
 * @example
 * ```ts
 * type Query = SelectQuery<User, ['id', 'name']>
 * ```
 */
export type SelectQuery<T extends Record<string, any>, Fields extends (keyof T)[] = (keyof T)[]> = {
	table: string
	fields: Fields extends [] ? '*' : Fields[number]
	where?: WhereClause<T>
	orderBy?: OrderClause<T>
	limit?: number
	offset?: number
}

/**
 * WHERE clause type
 *
 * @example
 * ```ts
 * type Clause = WhereClause<{ id: number; status: string }>
 * ```
 */
export type WhereClause<T extends Record<string, any>> = {
	[K in keyof T]?: {
		operator: '=' | '<' | '>' | '<=' | '>=' | 'LIKE' | 'IN' | 'IS'
		value: T[K] | T[K][] | null
	}
} & {
	AND?: WhereClause<T>[]
	OR?: WhereClause<T>[]
	NOT?: WhereClause<T>
}

/**
 * ORDER BY clause type
 *
 * @example
 * ```ts
 * type Order = OrderClause<{ created_at: Date }>
 * ```
 */
export type OrderClause<T extends Record<string, any>> = {
	[K in keyof T]?: 'ASC' | 'DESC'
}

/**
 * INSERT query type
 *
 * @example
 * ```ts
 * type Query = InsertQuery<User, { name: string }>
 * ```
 */
export type InsertQuery<
	T extends Record<string, any>,
	Data extends Partial<T>,
> = {
	table: string
	values: Data
	returning?: (keyof T)[]
}

/**
 * UPDATE query type
 *
 * @example
 * ```ts
 * type Query = UpdateQuery<User, { name: string }, { id: number }>
 * ```
 */
export type UpdateQuery<
	T extends Record<string, any>,
	Data extends Partial<T>,
	Where extends WhereClause<T>,
> = {
	table: string
	values: Data
	where: Where
	returning?: (keyof T)[]
}

/**
 * DELETE query type
 *
 * @example
 * ```ts
 * type Query = DeleteQuery<User, { id: number }>
 * ```
 */
export type DeleteQuery<T extends Record<string, any>, Where extends WhereClause<T>> = {
	table: string
	where: Where
	returning?: (keyof T)[]
}

/**
 * JOIN query type
 *
 * @example
 * ```ts
 * type Query = JoinQuery<User, Post, 'id', 'userId'>
 * ```
 */
export type JoinQuery<
	T extends Record<string, any>,
	U extends Record<string, any>,
	TKey extends keyof T,
	UKey extends keyof U,
	Type extends 'INNER' | 'LEFT' | 'RIGHT' | 'FULL' = 'INNER',
> = {
	table: T
	join: {
		table: U
		type: Type
		on: { left: TKey; right: UKey }
	}
	fields?: (keyof T | keyof U)[]
}

// ============================================================================
// Query Builder Types
// ============================================================================

/**
 * Query builder type
 *
 * @example
 * ```ts
 * type Builder = QueryBuilder<User>
 * ```
 */
export type QueryBuilder<
	T extends Record<string, any>,
	State extends QueryState = { type: 'select'; fields: keyof T },
> = {
	select: <F extends (keyof T)[]>() => QueryBuilder<T, { type: 'select'; fields: F[number] }>
	where: <W extends WhereClause<T>>() => QueryBuilder<T, State & { where: W }>
	orderBy: <O extends OrderClause<T>>() => QueryBuilder<T, State & { orderBy: O }>
	limit: (n: number) => QueryBuilder<T, State & { limit: number }>
	offset: (n: number) => QueryBuilder<T, State & { offset: number }>
	build: BuildQuery<T, State>
}

export interface QueryState {
	type: 'select' | 'insert' | 'update' | 'delete'
	fields?: any
	where?: any
	orderBy?: any
	limit?: number
	offset?: number
}

type BuildQuery<T extends Record<string, any>, S extends QueryState> = S extends {
	type: 'select'
	fields: infer F
}
	? SelectQuery<T, F extends (keyof T)[] ? F : (keyof T)[]>
	: S extends { type: 'insert' }
		? InsertQuery<T, any>
		: S extends { type: 'update' }
			? UpdateQuery<T, any, any>
			: S extends { type: 'delete' }
				? DeleteQuery<T, any>
				: never

/**
 * WHERE builder type
 *
 * @example
 * ```ts
 * type Builder = WhereBuilder<User>
 * ```
 */
export type WhereBuilder<
	T extends Record<string, any>,
	Conditions extends WhereClause<T> = {},
> = {
	eq: <K extends keyof T>(key: K, value: T[K]) => WhereBuilder<T, Conditions & { [P in K]: { operator: '='; value: T[K] } }>
	lt: <K extends keyof T>(key: K, value: T[K]) => WhereBuilder<T, Conditions & { [P in K]: { operator: '<'; value: T[K] } }>
	gt: <K extends keyof T>(key: K, value: T[K]) => WhereBuilder<T, Conditions & { [P in K]: { operator: '>'; value: T[K] } }>
	like: <K extends keyof T>(key: K, value: T[K]) => WhereBuilder<T, Conditions & { [P in K]: { operator: 'LIKE'; value: T[K] } }>
	in: <K extends keyof T>(key: K, values: T[K][]) => WhereBuilder<T, Conditions & { [P in K]: { operator: 'IN'; value: T[K][] } }>
	and: <C extends WhereClause<T>[]>() => WhereBuilder<T, Conditions & { AND: C }>
	or: <C extends WhereClause<T>[]>() => WhereBuilder<T, Conditions & { OR: C }>
	build: Conditions
}

// ============================================================================
// Migration Types
// ============================================================================

/**
 * Migration definition
 *
 * @example
 * ```ts
 * type CreateUsersMigration = Migration<{
 *   up: CreateTable<{ id: number; name: string }>
 *   down: 'DROP TABLE users'
 * }>
 * ```
 */
export type Migration<
	T extends {
		name: string
		up: any
		down: any
	},
> = {
	name: T['name']
	up: MigrationUp<T['up']>
	down: MigrationDown<T['down']>
}

/**
 * Migration UP action
 *
 * @example
 * ```ts
 * type Action = MigrationUp<CreateTable<User>>
 * ```
 */
export type MigrationUp<T> = T extends CreateTable<any>
	? { action: 'CREATE'; table: T }
	: T extends string
		? { action: 'RAW'; sql: T }
		: T

/**
 * Migration DOWN action
 *
 * @example
 * ```ts
 * type Action = MigrationDown<'DROP TABLE users'>
 * ```
 */
export type MigrationDown<T> = T extends string ? { action: 'RAW'; sql: T } : T

/**
 * Migration history type
 *
 * @example
 * ```ts
 * type History = MigrationHistory<['create_users', 'add_email_column']>
 * ```
 */
export type MigrationHistory<Applied extends string[] = []> = {
	applied: Applied
	pending: string[]
}

// ============================================================================
// Index Types
// ============================================================================

/**
 * Index definition
 *
 * @example
 * ```ts
 * type UserEmailIndex = Index<User, 'email'>
 * ```
 */
export type Index<
	T extends Record<string, any>,
	K extends keyof T,
> = {
	table: string
	name: `${string}_${K & string}_idx`
	column: K
}

/**
 * Unique index definition
 *
 * @example
 * ```ts
 * type UniqueEmailIndex = UniqueIndex<User, 'email'>
 * ```
 */
export type UniqueIndex<
	T extends Record<string, any>,
	K extends keyof T,
> = Index<T, K> & { unique: true }

/**
 * Composite index definition
 *
 * @example
 * ```ts
 * type UserCompositeIndex = CompositeIndex<User, ['email', 'status']>
 * ```
 */
export type CompositeIndex<
	T extends Record<string, any>,
	Keys extends (keyof T)[],
> = {
	table: string
	name: string
	columns: Keys
	unique?: boolean
}

// ============================================================================
// Database Connection Types
// ============================================================================

/**
 * Database connection config
 *
 * @example
 * ```ts
 * type Config = DatabaseConfig<{ host: 'localhost'; port: 5432 }>
 * ```
 */
export type DatabaseConfig<
	T extends {
		host: string
		port: number
		database: string
		user?: string
		password?: string
	},
> = T

/**
 * Transaction type
 *
 * @example
 * ```ts
 * type Tx = Transaction<User[]>
 * ```
 */
export type Transaction<R> = {
	isolationLevel?: 'READ UNCOMMITTED' | 'READ COMMITTED' | 'REPEATABLE READ' | 'SERIALIZABLE'
	callback: () => Promise<R>
}