/**
 * Framework Integrations
 *
 * Additional framework-specific type utilities for various frameworks.
 */

// ============================================================================
// Remix Types
// ============================================================================

/**
 * Remix loader function type
 */
export type RemixLoader<T extends Record<string, unknown> = Record<string, unknown>> = (
	args: {
		request: Request
		params: Record<string, string>
		context: Record<string, unknown>
	},
) => Promise<T> | T

/**
 * Remix action function type
 */
export type RemixAction<T extends Record<string, unknown> = Record<string, unknown>> = (
	args: {
		request: Request
		params: Record<string, string>
		context: Record<string, unknown>
	},
) => Promise<T> | T

/**
 * Remix meta function type
 */
export type RemixMeta<T extends Record<string, unknown> = Record<string, unknown>> = (
	args: {
		data: T | undefined
		params: Record<string, string>
		location: { pathname: string, search: string, hash: string }
	},
) => { title?: string, description?: string, [key: string]: string | undefined }[]

/**
 * Remix route module type
 */
export interface RemixRoute<
	LoaderData extends Record<string, unknown> = Record<string, unknown>,
	ActionData extends Record<string, unknown> = Record<string, unknown>,
> {
	loader?: RemixLoader<LoaderData>
	action?: RemixAction<ActionData>
	meta?: RemixMeta<LoaderData>
	headers?: (args: { loaderHeaders: Headers, parentHeaders: Headers }) => Headers
	links?: () => unknown[]
	scripts?: () => unknown[]
}

/**
 * Remix useLoader return type
 */
export type RemixLoaderData<T extends RemixRoute> = T extends RemixRoute<infer D, Record<string, unknown>> ? D : never

/**
 * Remix useActionData return type
 */
export type RemixActionData<T extends RemixRoute> = T extends RemixRoute<Record<string, unknown>, infer D> ? D : never

// ============================================================================
// Astro Types
// ============================================================================

/**
 * Astro component props type
 */
export type AstroProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
	class?: string
}

/**
 * Astro frontmatter type
 */
export interface AstroFrontmatter<T extends Record<string, unknown> = Record<string, unknown>> {
	props: AstroProps<T>
	slots: Record<string, () => string>
	astro: AstroGlobal
}

/**
 * Astro global type
 */
export interface AstroGlobal {
	request: Request
	response: Response
	redirect: (path: string, status?: number) => Response
	url: URL
	params: Record<string, string | undefined>
	site: URL | undefined
	generator: string
}

/**
 * Astro layout type
 */
export interface AstroLayout<
	Props extends Record<string, unknown> = Record<string, unknown>,
	Slots extends Record<string, unknown> = Record<string, unknown>,
> {
	props: AstroProps<Props>
	slots: Slots
}

/**
 * Astro getStaticPaths type
 */
export type AstroStaticPaths<T extends Record<string, unknown> = Record<string, unknown>> = () => Promise<
	{
		params: T
		props?: Record<string, unknown>
	}[]
>

// ============================================================================
// SvelteKit Types
// ============================================================================

/**
 * SvelteKit load function type
 */
export type SvelteKitLoad<
	Params extends Record<string, string> = Record<string, string>,
	Data extends Record<string, unknown> = Record<string, unknown>,
> = (
	event: {
		url: URL
		params: Params
		request: Request
		route: { id: string }
		cookies: {
			get: (name: string) => string | undefined
			set: (name: string, value: string, options?: unknown) => void
			delete: (name: string, options?: unknown) => void
		}
		parent: () => Promise<Record<string, unknown>>
		fetch: typeof fetch
		data: Data
		depends: (key: string) => void
	},
) => Promise<Data> | Data

/**
 * SvelteKit action type
 */
export type SvelteKitAction<
	Params extends Record<string, string> = Record<string, string>,
	Data extends Record<string, unknown> = Record<string, unknown>,
> = (
	event: {
		request: Request
		url: URL
		params: Params
		route: { id: string }
		cookies: {
			get: (name: string) => string | undefined
			set: (name: string, value: string, options?: unknown) => void
			delete: (name: string, options?: unknown) => void
		}
		fetch: typeof fetch
	},
) => Promise<Data> | Data

/**
 * SvelteKit page type
 */
export interface SvelteKitPage<
	Params extends Record<string, string> = Record<string, string>,
	Data extends Record<string, unknown> = Record<string, unknown>,
> {
	url: URL
	params: Params
	route: { id: string }
	status: number
	error: Error | null
	data: Data
	state: Record<string, unknown>
}

/**
 * SvelteKit layout type
 */
export interface SvelteKitLayout<
	Params extends Record<string, string> = Record<string, string>,
	Data extends Record<string, unknown> = Record<string, unknown>,
> extends SvelteKitPage<Params, Data> {}

/**
 * SvelteKit server type
 */
export interface SvelteKitServer<
	Params extends Record<string, string> = Record<string, string>,
	LoadData extends Record<string, unknown> = Record<string, unknown>,
	ActionData extends Record<string, unknown> = Record<string, unknown>,
> {
	load?: SvelteKitLoad<Params, LoadData>
	actions?: Record<string, SvelteKitAction<Params, ActionData>>
}

// ============================================================================
// Qwik Types
// ============================================================================

/**
 * Qwik component type
 */
export type QwikComponent<Props extends Record<string, unknown> = Record<string, never>> = (
	props: Props,
) => unknown

/**
 * Qwik signal type
 */
export interface QwikSignal<T = unknown> {
	value: T
}

/**
 * Qwik store type
 */
export type QwikStore<T extends Record<string, unknown> = Record<string, unknown>> = T

/**
 * Qwik event handler type
 */
export type QwikEvent<T = Event> = (event: T, element: Element) => void

/**
 * Qwik useSignal type
 */
export type QwikUseSignal<T = unknown> = () => QwikSignal<T>

/**
 * Qwik useStore type
 */
export type QwikUseStore<T extends Record<string, unknown> = Record<string, unknown>> = (
	initial: T,
) => QwikStore<T>

/**
 * Qwik useContext type
 */
export type QwikUseContext<T = unknown> = () => T

/**
 * Qwik server function type
 */
export type QwikServerFunction<T extends (...args: unknown[]) => unknown> = T

// ============================================================================
// Fresh (Deno) Types
// ============================================================================

/**
 * Fresh handler type
 */
export type FreshHandler<
	Params extends Record<string, string> = Record<string, string>,
	Data extends Record<string, unknown> = Record<string, unknown>,
> = (
	req: Request,
	ctx: FreshContext<Params, Data>,
) => Promise<Response> | Response

/**
 * Fresh context type
 */
export interface FreshContext<
	Params extends Record<string, string> = Record<string, string>,
	Data extends Record<string, unknown> = Record<string, unknown>,
> {
	params: Params
	url: URL
	route: string
	state: Data
	remoteAddr: { hostname: string, port: number }
	localAddr: { hostname: string, port: number }
	render: () => Promise<Response>
	renderNotFound: () => Promise<Response>
	next: () => Promise<Response>
}

/**
 * Fresh route type
 */
export interface FreshRoute<
	Params extends Record<string, string> = Record<string, string>,
	Data extends Record<string, unknown> = Record<string, unknown>,
> {
	handler?: FreshHandler<Params, Data> | Record<string, FreshHandler<Params, Data>>
	component?: (props: { data: Data, params: Params }) => unknown
}

/**
 * Fresh middleware type
 */
export type FreshMiddleware = (
	req: Request,
	ctx: FreshContext,
) => Promise<Response> | Response

/**
 * Fresh plugin type
 */
export interface FreshPlugin {
	name: string
	middlewares?: FreshMiddleware[]
	routes?: Record<string, FreshRoute>
	handlers?: Record<string, FreshHandler>
}

// ============================================================================
// Express Types
// ============================================================================

/**
 * Express handler type
 */
export type ExpressHandler<
	Params extends Record<string, string> = Record<string, string>,
	ResponseBody = unknown,
	RequestBody = unknown,
	RequestQuery = Record<string, string>,
> = (
	req: ExpressRequest<Params, RequestBody, RequestQuery>,
	res: ExpressResponse<ResponseBody>,
	next: ExpressNextFunction,
) => void | Promise<void>

/**
 * Express request type
 */
export interface ExpressRequest<
	Params extends Record<string, string> = Record<string, string>,
	Body = unknown,
	Query = Record<string, string>,
> {
	params: Params
	query: Query
	body: Body
	headers: Record<string, string>
	method: string
	url: string
	path: string
	cookies: Record<string, string>
	session: Record<string, unknown>
	user: unknown
}

/**
 * Express response type
 */
export interface ExpressResponse<T = unknown> {
	status: (code: number) => ExpressResponse<T>
	json: (body: T) => void
	send: (body: T | string) => void
	redirect: (url: string, status?: number) => void
	cookie: (name: string, value: string, options?: unknown) => ExpressResponse<T>
	clearCookie: (name: string, options?: unknown) => ExpressResponse<T>
	set: (field: string, value: string) => ExpressResponse<T>
	setHeader: (field: string, value: string) => ExpressResponse<T>
	getHeader: (field: string) => string | undefined
	locals: Record<string, unknown>
}

/**
 * Express next function type
 */
export type ExpressNextFunction = (err?: unknown) => void

/**
 * Express middleware type
 */
export type ExpressMiddleware<
	Params extends Record<string, string> = Record<string, string>,
	ResponseBody = unknown,
	RequestBody = unknown,
	RequestQuery = Record<string, string>,
> = ExpressHandler<Params, ResponseBody, RequestBody, RequestQuery>

/**
 * Express route definition type
 */
export interface ExpressRoute<
	Params extends Record<string, string> = Record<string, string>,
	ResponseBody = unknown,
	RequestBody = unknown,
	RequestQuery = Record<string, string>,
> {
	method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'
	path: string
	handler: ExpressHandler<Params, ResponseBody, RequestBody, RequestQuery>
	middleware?: ExpressMiddleware<Params, ResponseBody, RequestBody, RequestQuery>[]
}

// ============================================================================
// Fastify Types
// ============================================================================

/**
 * Fastify handler type
 */
export type FastifyHandler<
	Params extends Record<string, string> = Record<string, string>,
	ResponseBody = unknown,
	RequestBody = unknown,
	RequestQuery = Record<string, string>,
> = (
	request: FastifyRequest<Params, RequestBody, RequestQuery>,
	reply: FastifyReply<ResponseBody>,
) => Promise<ResponseBody> | ResponseBody

/**
 * Fastify request type
 */
export interface FastifyRequest<
	Params extends Record<string, string> = Record<string, string>,
	Body = unknown,
	Query = Record<string, string>,
> {
	params: Params
	query: Query
	body: Body
	headers: Record<string, string | string[] | undefined>
	method: string
	url: string
	routeOptions: {
		method: string
		url: string
		schema: unknown
	}
}

/**
 * Fastify reply type
 */
export interface FastifyReply<T = unknown> {
	status: (code: number) => FastifyReply<T>
	send: (body: T) => FastifyReply<T>
	code: (code: number) => FastifyReply<T>
	header: (field: string, value: string) => FastifyReply<T>
	redirect: (code: number, url: string) => FastifyReply<T>
	serializer: (fn: (body: T) => string) => FastifyReply<T>
}

/**
 * Fastify plugin type
 */
export type FastifyPlugin<T extends Record<string, unknown> = Record<string, never>> = (
	instance: unknown,
	options: T,
) => Promise<void> | void

/**
 * Fastify route type
 */
export interface FastifyRoute<
	Params extends Record<string, string> = Record<string, string>,
	ResponseBody = unknown,
	RequestBody = unknown,
	RequestQuery = Record<string, string>,
> {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD'
	url: string
	handler: FastifyHandler<Params, ResponseBody, RequestBody, RequestQuery>
	schema?: FastifySchema<RequestBody, ResponseBody, RequestQuery>
}

/**
 * Fastify schema type
 */
export interface FastifySchema<
	_Body = unknown,
	Response = unknown,
	Query = Record<string, string>,
> {
	body?: unknown
	querystring?: Query
	response?: { [code: number]: Response }
	headers?: unknown
	params?: unknown
}

// ============================================================================
// Hono Types
// ============================================================================

/**
 * Hono handler type
 */
export type HonoHandler<
	_Params extends Record<string, string> = Record<string, string>,
	Env extends Record<string, unknown> = Record<string, never>,
> = (c: HonoContext<_Params, Env>) => Promise<Response> | Response

/**
 * Hono context type
 */
export interface HonoContext<
	_Params extends Record<string, string> = Record<string, string>,
	Env extends Record<string, unknown> = Record<string, never>,
> {
	req: {
		method: string
		url: URL
		path: string
		query: (key: string) => string | undefined
		queries: (key: string) => string[] | undefined
		param: (key: string) => string | undefined
		header: (key: string) => string | undefined
		json: <T = unknown>() => Promise<T>
		text: () => Promise<string>
		arrayBuffer: () => Promise<ArrayBuffer>
		blob: () => Promise<Blob>
		parseBody: <T = Record<string, unknown>>() => Promise<T>
		raw: Request
	}
	res: Response
	env: Env
	var: Record<string, unknown>
	status: (code: number) => void
	header: (name: string, value: string) => void
	json: <T = unknown>(data: T, status?: number) => Response
	text: (data: string, status?: number) => Response
	html: (data: string, status?: number) => Response
	redirect: (url: string, status?: number) => Response
	newResponse: (body: unknown, status?: number, headers?: unknown) => Response
}

/**
 * Hono middleware type
 */
export type HonoMiddleware<
	_Params extends Record<string, string> = Record<string, string>,
	_Env extends Record<string, unknown> = Record<string, never>,
> = (c: HonoContext<_Params, _Env>, next: () => Promise<void>) => Promise<void> | void

/**
 * Hono route type
 */
export interface HonoRoute<
	_Params extends Record<string, string> = Record<string, string>,
	_Env extends Record<string, unknown> = Record<string, never>,
> {
	path: string
	method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head' | 'all'
	handler: HonoHandler<_Params, _Env>
	middleware?: HonoMiddleware<_Params, _Env>[]
}

// ============================================================================
// NestJS Types
// ============================================================================

/**
 * NestJS controller type
 */
export type NestController<T extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>> = {
	[K in keyof T]: T[K]
}

/**
 * NestJS service type
 */
export type NestService<T extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>> = {
	[K in keyof T]: T[K]
}

/**
 * NestJS module type
 */
export interface NestModule {
	controllers?: unknown[]
	providers?: unknown[]
	imports?: unknown[]
	exports?: unknown[]
}

/**
 * NestJS pipe type
 */
export interface NestPipe<T = unknown, R = T> {
	transform: (value: T, metadata: { metatype: unknown, type: string, data: string }) => R | Promise<R>
}

/**
 * NestJS guard type
 */
export interface NestGuard {
	canActivate: (context: {
		getClass: () => unknown
		getHandler: () => unknown
		getArgs: () => unknown[]
		getArgByIndex: <T>(index: number) => T
		switchToHttp: () => {
			getRequest: () => unknown
			getResponse: () => unknown
			getNext: () => unknown
		}
		switchToRpc: () => {
			getContext: () => unknown
			getData: () => unknown
		}
		switchToWs: () => {
			getClient: () => unknown
			getData: () => unknown
			getPattern: () => unknown
		}
	}) => boolean | Promise<boolean>
}

/**
 * NestJS interceptor type
 */
export interface NestInterceptor<T = unknown, R = T> {
	intercept: (context: unknown, next: { handle: () => Promise<R> }) => Promise<R>
}

/**
 * NestJS filter type
 */
export interface NestFilter<T extends Error = Error> {
	catch: (exception: T, host: unknown) => unknown
}

/**
 * NestJS decorator metadata type
 */
export interface NestDecoratorMetadata {
	[key: string]: unknown
}

// ============================================================================
// tRPC Extended Types
// ============================================================================

/**
 * tRPC router with middleware support
 */
export type TRPCRouterWithMiddleware<T extends Record<string, unknown>> = T & {
	middleware?: unknown
}

/**
 * tRPC procedure options
 */
export interface TRPCProcedureOptions<
	Input = unknown,
	Output = unknown,
> {
	input?: Input
	output?: Output
	meta?: Record<string, unknown>
}

/**
 * tRPC error formatter
 */
export type TRPCErrorFormatter<T extends Error = Error> = (error: T) => {
	message: string
	code: string
	data?: unknown
}

// ============================================================================
// Universal Types
// ============================================================================

/**
 * Universal API handler type
 */
export interface UniversalAPIHandler<
	Params extends Record<string, string> = Record<string, string>,
	Response = unknown,
	Body = unknown,
	Query = Record<string, string>,
> {
	req: {
		method: string
		url: string
		path: string
		params: Params
		query: Query
		body: Body
		headers: Record<string, string>
		cookies: Record<string, string>
	}
	res: {
		status: (code: number) => UniversalAPIHandler<Params, Response, Body, Query>
		json: (data: Response) => void
		send: (data: Response | string) => void
		redirect: (url: string, status?: number) => void
		setHeader: (key: string, value: string) => void
	}
}

/**
 * Universal middleware type
 */
export type UniversalMiddleware = (
	req: unknown,
	res: unknown,
	next: () => void | Promise<void>,
) => void | Promise<void>
