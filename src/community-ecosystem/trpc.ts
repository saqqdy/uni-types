/**
 * tRPC integration types
 *
 * These types help work with tRPC routers and procedures.
 * Note: tRPC is an optional peer dependency.
 */

/**
 * tRPC router shape
 *
 * @example
 * ```ts
 * import { initTRPC } from '@trpc/server'
 *
 * const t = initTRPC.create()
 *
 * const router = t.router({
 *   user: t.procedure.query(() => ({ name: 'John' })),
 *   post: t.procedure.query(() => ({ title: 'Hello' }))
 * })
 *
 * type RouterShape = TRPCRouterShape<typeof router>
 * ```
 */
export type TRPCRouterShape<T> = T extends { _def: { router: infer R } } ? R : T

/**
 * Extract input type from tRPC procedure
 *
 * @example
 * ```ts
 * const procedure = t.procedure.input(z.object({ name: z.string() }))
 *
 * type Input = TRPCProcedureInput<typeof procedure>
 * // { name: string }
 * ```
 */
export type TRPCProcedureInput<T> = T extends { _def: { inputs: infer I } }
	? I extends [infer First, ...unknown[]]
		? First
		: I
	: T extends { _def: { input: infer I } }
		? I
		: never

/**
 * Extract output type from tRPC procedure
 *
 * @example
 * ```ts
 * const procedure = t.procedure.output(z.object({ name: z.string() }))
 *
 * type Output = TRPCProcedureOutput<typeof procedure>
 * // { name: string }
 * ```
 */
export type TRPCProcedureOutput<T> = T extends { _def: { output: infer O } } ? O : never

/**
 * tRPC procedure type
 */
export type TRPCProcedureType = 'query' | 'mutation' | 'subscription'

/**
 * Extract procedure type from tRPC procedure
 */
export type TRPCExtractProcedureType<T> = T extends { _def: { type: infer P } }
	? P extends TRPCProcedureType
		? P
		: never
	: never

/**
 * tRPC error shape
 *
 * @example
 * ```ts
 * type Error = TRPCErrorShape<{ message: string }>
 * ```
 */
export interface TRPCErrorShape<T = unknown> {
	message: string
	code: string
	data?: T
}

/**
 * tRPC context type
 *
 * @example
 * ```ts
 * interface Context {
 *   user?: { id: string }
 *   session: Session
 * }
 *
 * type AppContext = TRPCContext<Context>
 * ```
 */
export type TRPCContext<T> = T

/**
 * tRPC middleware type
 *
 * @example
 * ```ts
 * type Middleware = TRPCMiddleware<{ user: User }>
 * ```
 */
export type TRPCMiddleware<T = unknown> = (opts: { ctx: T, next: () => Promise<void> }) => Promise<void>

/**
 * tRPC router record
 */
export type TRPCRouterRecord = Record<string, unknown>

/**
 * Merge multiple tRPC routers
 */
export type TRPCMergeRouters<T extends TRPCRouterRecord[]> = T extends [
	infer First extends TRPCRouterRecord,
	...infer Rest extends TRPCRouterRecord[],
]
	? Rest extends []
		? First
		: First & TRPCMergeRouters<Rest>
	: Record<string, never>

/**
 * tRPC procedure builder
 */
export interface TRPCProcedureBuilder<T = unknown> {
	_def: {
		input: T
		output: unknown
		type: TRPCProcedureType
	}
}

/**
 * Get all query procedures from router
 */
export type TRPCQueries<T> = T extends object
	? {
			[K in keyof T]: T[K] extends { _def: { type: 'query' } } ? K : never
		}[keyof T]
	: never

/**
 * Get all mutation procedures from router
 */
export type TRPCMutations<T> = T extends object
	? {
			[K in keyof T]: T[K] extends { _def: { type: 'mutation' } } ? K : never
		}[keyof T]
	: never

/**
 * Get all subscription procedures from router
 */
export type TRPCSubscriptions<T> = T extends object
	? {
			[K in keyof T]: T[K] extends { _def: { type: 'subscription' } } ? K : never
		}[keyof T]
	: never

/**
 * tRPC client type
 */
export interface TRPCClient<T> {
	query: <K extends keyof T>(
		procedure: K,
		input?: unknown,
	) => Promise<TRPCProcedureOutput<T[K]>>
	mutate: <K extends keyof T>(
		procedure: K,
		input?: unknown,
	) => Promise<TRPCProcedureOutput<T[K]>>
	subscribe: <K extends keyof T>(
		procedure: K,
		input?: unknown,
	) => Promise<void>
}

/**
 * tRPC caller type
 */
export type TRPSCaller<T, Context = unknown> = (
	ctx: Context,
) => TRPCCallerRouter<T>

/**
 * tRPC caller router type
 */
export type TRPCCallerRouter<T> = {
	[K in keyof T]: TRPCProcedureCaller<T[K]>
}

/**
 * tRPC procedure caller type
 */
export type TRPCProcedureCaller<T> = (input: TRPCProcedureInput<T>) => Promise<TRPCProcedureOutput<T>>
