/**
 * Prisma ORM integration types
 *
 * These types help work with Prisma models and operations.
 * Note: Prisma is an optional peer dependency.
 */

/**
 * Prisma model type helper
 *
 * @example
 * ```ts
 * // Assuming you have a User model in Prisma
 * type UserModel = PrismaModel<User>
 * ```
 */
export type PrismaModel<T> = T

/**
 * Prisma create input type
 *
 * @example
 * ```ts
 * type CreateInput = PrismaCreateInput<User>
 * // { name: string; email: string; age?: number }
 * ```
 */
export type PrismaCreateInput<T> = {
	[K in keyof T as undefined extends T[K] ? never : K]: T[K]
} & {
	[K in keyof T as undefined extends T[K] ? K : never]?: T[K]
}

/**
 * Prisma update input type
 *
 * @example
 * ```ts
 * type UpdateInput = PrismaUpdateInput<User>
 * // { name?: string; email?: string; age?: number }
 * ```
 */
export type PrismaUpdateInput<T> = {
	[K in keyof T]?: T[K] | null
}

/**
 * Prisma where input type for unique lookup
 *
 * @example
 * ```ts
 * type UniqueWhere = PrismaUniqueWhere<User, 'id' | 'email'>
 * // { id: string } | { email: string }
 * ```
 */
export type PrismaUniqueWhere<T, UniqueFields extends keyof T> = {
	[K in UniqueFields]: { [P in K]: T[P] }
}[UniqueFields]

/**
 * Prisma where input type
 *
 * @example
 * ```ts
 * type WhereInput = PrismaWhereInput<User>
 * // { id?: string; name?: string; AND?: WhereInput[]; OR?: WhereInput[] }
 * ```
 */
export type PrismaWhereInput<T> = Partial<T> & {
	AND?: PrismaWhereInput<T>[]
	OR?: PrismaWhereInput<T>[]
	NOT?: PrismaWhereInput<T>[]
}

/**
 * Prisma order by input type
 *
 * @example
 * ```ts
 * type OrderBy = PrismaOrderByInput<User>
 * // { name?: 'asc' | 'desc'; createdAt?: 'asc' | 'desc' }
 * ```
 */
export type PrismaOrderByInput<T> = {
	[K in keyof T]?: 'asc' | 'desc'
}

/**
 * Prisma select type
 *
 * @example
 * ```ts
 * type Select = PrismaSelect<User, 'name' | 'email'>
 * // { name: true; email: true }
 * ```
 */
export type PrismaSelect<T, Keys extends keyof T = keyof T> = {
	[K in Keys]?: true
}

/**
 * Prisma include type (for relations)
 *
 * @example
 * ```ts
 * type Include = PrismaInclude<User, 'posts'>
 * // { posts: true }
 * ```
 */
export type PrismaInclude<T, Keys extends keyof T = keyof T> = {
	[K in Keys]?: true | { select?: Partial<T> }
}

/**
 * Extract scalar (non-relation) fields from a Prisma model
 *
 * @example
 * ```ts
 * type Scalars = PrismaScalarFields<User>
 * // 'id' | 'name' | 'email' | 'createdAt'
 * ```
 */
export type PrismaScalarFields<T> = {
	[K in keyof T]: T[K] extends Date | string | number | boolean | bigint | Buffer
		? K
		: T[K] extends Date | string | number | boolean | bigint | Buffer | null
			? K
			: never
}[keyof T]

/**
 * Extract relation fields from a Prisma model
 *
 * @example
 * ```ts
 * type Relations = PrismaRelationFields<User>
 * // 'posts' | 'comments'
 * ```
 */
export type PrismaRelationFields<T> = Exclude<keyof T, PrismaScalarFields<T>>

/**
 * Prisma pagination args
 */
export interface PrismaPagination {
	skip?: number
	take?: number
	cursor?: Record<string, unknown>
}

/**
 * Prisma find many args
 */
export interface PrismaFindManyArgs<T> {
	where?: PrismaWhereInput<T>
	orderBy?: PrismaOrderByInput<T> | PrismaOrderByInput<T>[]
	skip?: number
	take?: number
	cursor?: PrismaUniqueWhere<T, keyof T>
	select?: Partial<Record<keyof T, true>>
	include?: Partial<Record<keyof T, true | object>>
}

/**
 * Prisma find first args
 */
export interface PrismaFindFirstArgs<T> {
	where?: PrismaWhereInput<T>
	orderBy?: PrismaOrderByInput<T> | PrismaOrderByInput<T>[]
	cursor?: PrismaUniqueWhere<T, keyof T>
	select?: Partial<Record<keyof T, true>>
	include?: Partial<Record<keyof T, true | object>>
}

/**
 * Prisma find unique args
 */
export interface PrismaFindUniqueArgs<T, UniqueFields extends keyof T> {
	where: PrismaUniqueWhere<T, UniqueFields>
	select?: Partial<Record<keyof T, true>>
	include?: Partial<Record<keyof T, true | object>>
}

/**
 * Prisma create args
 */
export interface PrismaCreateArgs<T> {
	data: PrismaCreateInput<T>
	select?: Partial<Record<keyof T, true>>
	include?: Partial<Record<keyof T, true | object>>
}

/**
 * Prisma update args
 */
export interface PrismaUpdateArgs<T, UniqueFields extends keyof T> {
	where: PrismaUniqueWhere<T, UniqueFields>
	data: PrismaUpdateInput<T>
	select?: Partial<Record<keyof T, true>>
	include?: Partial<Record<keyof T, true | object>>
}

/**
 * Prisma delete args
 */
export interface PrismaDeleteArgs<T, UniqueFields extends keyof T> {
	where: PrismaUniqueWhere<T, UniqueFields>
	select?: Partial<Record<keyof T, true>>
	include?: Partial<Record<keyof T, true | object>>
}

/**
 * Prisma upsert args
 */
export interface PrismaUpsertArgs<T, UniqueFields extends keyof T> {
	where: PrismaUniqueWhere<T, UniqueFields>
	create: PrismaCreateInput<T>
	update: PrismaUpdateInput<T>
	select?: Partial<Record<keyof T, true>>
	include?: Partial<Record<keyof T, true | object>>
}

/**
 * Prisma count args
 */
export interface PrismaCountArgs<T> {
	where?: PrismaWhereInput<T>
	select?: Partial<Record<keyof T, true>>
}

/**
 * Prisma aggregate args
 */
export interface PrismaAggregateArgs<T> {
	where?: PrismaWhereInput<T>
	orderBy?: PrismaOrderByInput<T> | PrismaOrderByInput<T>[]
	skip?: number
	take?: number
	_count?: true | { _all?: true } | Partial<Record<keyof T, true>>
	_avg?: Partial<Record<keyof T, true>>
	_sum?: Partial<Record<keyof T, true>>
	_min?: Partial<Record<keyof T, true>>
	_max?: Partial<Record<keyof T, true>>
}

/**
 * Prisma group by args
 */
export interface PrismaGroupByArgs<T> {
	where?: PrismaWhereInput<T>
	orderBy?: PrismaOrderByInput<T> | PrismaOrderByInput<T>[]
	by: (keyof T)[]
	having?: PrismaWhereInput<T>
	take?: number
	skip?: number
	_count?: true | { _all?: true } | Partial<Record<keyof T, true>>
	_avg?: Partial<Record<keyof T, true>>
	_sum?: Partial<Record<keyof T, true>>
	_min?: Partial<Record<keyof T, true>>
	_max?: Partial<Record<keyof T, true>>
}
