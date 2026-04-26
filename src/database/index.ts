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
export interface SQLColumn<T, Options extends ColumnOptions = object> {
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
export interface CreateTable<T extends Record<string, any>> {
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
export interface SelectQuery<T extends Record<string, any>, Fields extends (keyof T)[] = (keyof T)[]> {
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
export interface InsertQuery<
	T extends Record<string, any>,
	Data extends Partial<T>,
> {
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
export interface UpdateQuery<
	T extends Record<string, any>,
	Data extends Partial<T>,
	Where extends WhereClause<T>,
> {
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
export interface DeleteQuery<T extends Record<string, any>, Where extends WhereClause<T>> {
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
export interface JoinQuery<
	T extends Record<string, any>,
	U extends Record<string, any>,
	TKey extends keyof T,
	UKey extends keyof U,
	Type extends 'INNER' | 'LEFT' | 'RIGHT' | 'FULL' = 'INNER',
> {
	table: T
	join: {
		table: U
		type: Type
		on: { left: TKey, right: UKey }
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
export interface QueryBuilder<
	T extends Record<string, any>,
	State extends QueryState = { type: 'select', fields: keyof T },
> {
	select: <F extends (keyof T)[]>() => QueryBuilder<T, { type: 'select', fields: F[number] }>
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
export interface WhereBuilder<
	T extends Record<string, any>,
	Conditions extends WhereClause<T> = object,
> {
	eq: <K extends keyof T>(key: K, value: T[K]) => WhereBuilder<T, Conditions & { [P in K]: { operator: '=', value: T[K] } }>
	lt: <K extends keyof T>(key: K, value: T[K]) => WhereBuilder<T, Conditions & { [P in K]: { operator: '<', value: T[K] } }>
	gt: <K extends keyof T>(key: K, value: T[K]) => WhereBuilder<T, Conditions & { [P in K]: { operator: '>', value: T[K] } }>
	like: <K extends keyof T>(key: K, value: T[K]) => WhereBuilder<T, Conditions & { [P in K]: { operator: 'LIKE', value: T[K] } }>
	in: <K extends keyof T>(key: K, values: T[K][]) => WhereBuilder<T, Conditions & { [P in K]: { operator: 'IN', value: T[K][] } }>
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
export interface Migration<
	T extends {
		name: string
		up: any
		down: any
	},
> {
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
	? { action: 'CREATE', table: T }
	: T extends string
		? { action: 'RAW', sql: T }
		: T

/**
 * Migration DOWN action
 *
 * @example
 * ```ts
 * type Action = MigrationDown<'DROP TABLE users'>
 * ```
 */
export type MigrationDown<T> = T extends string ? { action: 'RAW', sql: T } : T

/**
 * Migration history type
 *
 * @example
 * ```ts
 * type History = MigrationHistory<['create_users', 'add_email_column']>
 * ```
 */
export interface MigrationHistory<Applied extends string[] = []> {
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
export interface Index<
	T extends Record<string, any>,
	K extends keyof T,
> {
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
export interface CompositeIndex<
	T extends Record<string, any>,
	Keys extends (keyof T)[],
> {
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
export interface Transaction<R> {
	isolationLevel?: 'READ UNCOMMITTED' | 'READ COMMITTED' | 'REPEATABLE READ' | 'SERIALIZABLE'
	callback: () => Promise<R>
}

// ============================================================================
// v1.8.0 - Advanced Database Types
// ============================================================================

/**
 * Schema types
 */
export interface TableSchema<T extends Record<string, unknown> = Record<string, unknown>> {
	name: string
	columns: { [K in keyof T]: ColumnSchema<T[K]> }
	indexes?: IndexSchema<T>[]
	relations?: RelationSchema<T>[]
}

/**
 * Column schema definition
 */
export interface ColumnSchema<T = unknown> {
	name: string
	type: SQLType<T>
	nullable: boolean
	defaultValue?: T
	autoIncrement?: boolean
	comment?: string
	collation?: string
}

/**
 * Index schema definition
 */
export interface IndexSchema<T extends Record<string, unknown> = Record<string, unknown>> {
	name: string
	table: string
	columns: (keyof T)[]
	unique: boolean
	type: 'btree' | 'hash' | 'gin' | 'gist' | 'fulltext'
}

/**
 * Relation schema definition
 */
export interface RelationSchema<T extends Record<string, unknown> = Record<string, unknown>> {
	name: string
	type: 'hasOne' | 'hasMany' | 'belongsTo' | 'belongsToMany'
	foreignKey: keyof T
	references: {
		table: string
		column: string
	}
	onDelete?: 'CASCADE' | 'SET NULL' | 'RESTRICT' | 'NO ACTION'
	onUpdate?: 'CASCADE' | 'SET NULL' | 'RESTRICT' | 'NO ACTION'
}

// ============================================================================
// SQL Expression Types
// ============================================================================

/**
 * SQL query type
 */
export interface SQLQuery<T = unknown> {
	sql: string
	params: unknown[]
	result: T
}

/**
 * SQL expression type
 */
export type SQLExpression<T = unknown>
	= | { type: 'literal', value: T }
		| { type: 'column', name: string, table?: string }
		| { type: 'function', name: string, args: SQLExpression[] }
		| { type: 'binary', operator: string, left: SQLExpression, right: SQLExpression }
		| { type: 'unary', operator: string, operand: SQLExpression }
		| { type: 'case', cases: Array<{ when: SQLExpression, then: SQLExpression }>, else?: SQLExpression }
		| { type: 'subquery', query: SQLQuery<T> }

/**
 * SQL condition type
 */
export type SQLCondition<T extends Record<string, unknown> = Record<string, unknown>>
	= | { type: 'comparison', left: SQLExpression, operator: '=' | '<' | '>' | '<=' | '>=' | '<>' | 'LIKE' | 'ILIKE' | 'IS', right: SQLExpression }
		| { type: 'null', operand: SQLExpression, isNull: boolean }
		| { type: 'between', operand: SQLExpression, low: SQLExpression, high: SQLExpression }
		| { type: 'in', operand: SQLExpression, values: SQLExpression[] }
		| { type: 'exists', subquery: SQLQuery<T> }
		| { type: 'and', conditions: SQLCondition<T>[] }
		| { type: 'or', conditions: SQLCondition<T>[] }
		| { type: 'not', condition: SQLCondition<T> }

/**
 * SQL join type
 */
export interface SQLJoin<T extends Record<string, unknown>, U extends Record<string, unknown>> {
	type: 'INNER' | 'LEFT' | 'RIGHT' | 'FULL' | 'CROSS'
	table: string
	alias?: string
	on: SQLCondition<T & U>
}

// ============================================================================
// Query Builder Extensions
// ============================================================================

/**
 * Select builder type
 */
export interface SelectBuilder<T extends Record<string, unknown>> {
	from: (table: string, alias?: string) => SelectBuilder<T>
	join: <U extends Record<string, unknown>>(join: SQLJoin<T, U>) => SelectBuilder<T & U>
	where: (condition: SQLCondition<T>) => SelectBuilder<T>
	groupBy: (columns: (keyof T)[]) => SelectBuilder<T>
	having: (condition: SQLCondition<T>) => SelectBuilder<T>
	orderBy: (columns: Array<{ column: keyof T, direction: 'ASC' | 'DESC' }>) => SelectBuilder<T>
	limit: (count: number) => SelectBuilder<T>
	offset: (count: number) => SelectBuilder<T>
	build: () => SQLQuery<T[]>
}

/**
 * Insert builder type
 */
export interface InsertBuilder<T extends Record<string, unknown>> {
	into: (table: string) => InsertBuilder<T>
	values: (data: Partial<T> | Partial<T>[]) => InsertBuilder<T>
	returning: (columns: (keyof T)[]) => InsertBuilder<T>
	onConflict: (action: 'doNothing' | 'doUpdate', columns?: (keyof T)[]) => InsertBuilder<T>
	build: () => SQLQuery<T>
}

/**
 * Update builder type
 */
export interface UpdateBuilder<T extends Record<string, unknown>> {
	table: (name: string) => UpdateBuilder<T>
	set: (data: Partial<T>) => UpdateBuilder<T>
	where: (condition: SQLCondition<T>) => UpdateBuilder<T>
	returning: (columns: (keyof T)[]) => UpdateBuilder<T>
	build: () => SQLQuery<T>
}

/**
 * Delete builder type
 */
export interface DeleteBuilder<T extends Record<string, unknown>> {
	from: (table: string) => DeleteBuilder<T>
	where: (condition: SQLCondition<T>) => DeleteBuilder<T>
	returning: (columns: (keyof T)[]) => DeleteBuilder<T>
	build: () => SQLQuery<T>
}

// ============================================================================
// Transaction Extensions
// ============================================================================

/**
 * Transaction result type
 */
export type TransactionResult<T>
	= | { success: true, result: T }
		| { success: false, error: DatabaseError }

/**
 * Database error type
 */
export interface DatabaseError {
	code: string
	message: string
	detail?: string
	hint?: string
	table?: string
	column?: string
}

/**
 * Isolation level type
 */
export type IsolationLevel = 'read-uncommitted' | 'read-committed' | 'repeatable-read' | 'serializable'

/**
 * Transaction options
 */
export interface TransactionOptions {
	isolationLevel?: IsolationLevel
	readOnly?: boolean
	deferrable?: boolean
	timeout?: number
}

// ============================================================================
// Migration Extensions
// ============================================================================

/**
 * Migration type (v1.8.0)
 */
export interface MigrationRecord<T = unknown> {
	name: string
	version: string
	description?: string
	up: MigrationActionUp<T>
	down: MigrationActionDown<T>
	dependencies?: string[]
}

/**
 * Migration up action (v1.8.0)
 */
export type MigrationActionUp<T = unknown>
	= | { action: 'createTable', schema: TableSchema }
		| { action: 'dropTable', table: string }
		| { action: 'addColumn', table: string, column: ColumnSchema<T> }
		| { action: 'dropColumn', table: string, column: string }
		| { action: 'createIndex', index: IndexSchema }
		| { action: 'dropIndex', name: string }
		| { action: 'raw', sql: string }

/**
 * Migration down action (v1.8.0)
 */
export type MigrationActionDown<T = unknown>
	= | { action: 'dropTable', table: string }
		| { action: 'createTable', schema: TableSchema }
		| { action: 'dropColumn', table: string, column: string }
		| { action: 'addColumn', table: string, column: ColumnSchema<T> }
		| { action: 'dropIndex', name: string }
		| { action: 'createIndex', index: IndexSchema }
		| { action: 'raw', sql: string }

/**
 * Migration history entry
 */
export interface MigrationHistoryEntry {
	name: string
	version: string
	executedAt: Date
	duration: number
	success: boolean
}

// ============================================================================
// ORM-like Types
// ============================================================================

/**
 * Model type
 */
export interface Model<T extends Record<string, unknown>> {
	tableName: string
	schema: TableSchema<T>
	attributes: { [K in keyof T]: ModelAttribute<T[K]> }
	relations: ModelRelation<T>[]
	scopes: ModelScope<T>[]
	hooks: ModelHook<T>[]
}

/**
 * Model attribute
 */
export interface ModelAttribute<T = unknown> {
	fieldName: string
	type: SQLType<T>
	primaryKey: boolean
	autoIncrement: boolean
	allowNull: boolean
	defaultValue?: T
	validate?: ValidationRule<T>[]
}

/**
 * Validation rule
 */
export type ValidationRule<T = unknown>
	= | { type: 'required' }
		| { type: 'min', value: number }
		| { type: 'max', value: number }
		| { type: 'pattern', regex: string }
		| { type: 'enum', values: T[] }
		| { type: 'custom', validator: (value: T) => boolean }

/**
 * Model relation
 */
export interface ModelRelation<T extends Record<string, unknown>> {
	name: string
	type: 'hasOne' | 'hasMany' | 'belongsTo' | 'belongsToMany'
	model: string
	foreignKey: keyof T
	otherKey?: string
	through?: string
}

/**
 * Model scope
 */
export interface ModelScope<T extends Record<string, unknown>> {
	name: string
	definition: SQLCondition<T> | ((...args: unknown[]) => SQLCondition<T>)
}

/**
 * Model hook
 */
export type ModelHook<T extends Record<string, unknown>>
	= | { type: 'beforeCreate', handler: (record: Partial<T>) => Partial<T> | Promise<Partial<T>> }
		| { type: 'afterCreate', handler: (record: T) => void | Promise<void> }
		| { type: 'beforeUpdate', handler: (record: Partial<T>) => Partial<T> | Promise<Partial<T>> }
		| { type: 'afterUpdate', handler: (record: T) => void | Promise<void> }
		| { type: 'beforeDestroy', handler: (record: T) => void | Promise<void> }
		| { type: 'afterDestroy', handler: (record: T) => void | Promise<void> }
		| { type: 'beforeSave', handler: (record: Partial<T>) => Partial<T> | Promise<Partial<T>> }
		| { type: 'afterSave', handler: (record: T) => void | Promise<void> }
		| { type: 'beforeValidate', handler: (record: Partial<T>) => void | Promise<void> }
		| { type: 'afterValidate', handler: (record: Partial<T>) => void | Promise<void> }

// ============================================================================
// Database Connection Pool
// ============================================================================

/**
 * Connection pool config
 */
export interface ConnectionPoolConfig {
	min: number
	max: number
	acquireTimeoutMillis: number
	idleTimeoutMillis: number
	propagateCreateError: boolean
}

/**
 * Database connection options
 */
export interface DatabaseConnectionOptions {
	host: string
	port: number
	database: string
	user: string
	password: string
	ssl?: boolean | SSLConfig
	pool?: ConnectionPoolConfig
}

/**
 * SSL configuration
 */
export interface SSLConfig {
	rejectUnauthorized: boolean
	ca?: string
	cert?: string
	key?: string
}
