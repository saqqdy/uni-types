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

// ============================================================================
// Angular Types
// ============================================================================

/**
 * Angular component type
 */
export interface AngularComponent<
	Props extends Record<string, unknown> = Record<string, unknown>,
	State extends Record<string, unknown> = Record<string, unknown>,
> {
	selector: string
	template?: string
	templateUrl?: string
	styles?: string[]
	styleUrls?: string[]
	inputs?: (keyof Props)[]
	outputs?: string[]
	input?: Props
	state?: State
}

/**
 * Angular service type
 */
export type AngularService<T extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>> = {
	providedIn?: 'root' | 'any' | 'platform'
} & T

/**
 * Angular pipe type
 */
export interface AngularPipe<Input = unknown, Output = unknown> {
	name: string
	pure?: boolean
	standalone?: boolean
	transform: (value: Input, ...args: unknown[]) => Output
}

/**
 * Angular directive type
 */
export interface AngularDirective<
	Inputs extends Record<string, unknown> = Record<string, unknown>,
> {
	selector: string
	inputs?: (keyof Inputs)[]
	outputs?: string[]
	host?: Record<string, string>
	hostListeners?: Record<string, string>
	hostProperties?: Record<string, string>
}

/**
 * Angular module type
 */
export interface AngularModule {
	declarations?: unknown[]
	imports?: unknown[]
	providers?: unknown[]
	exports?: unknown[]
	bootstrap?: unknown[]
}

/**
 * Angular input type
 */
export type AngularInput<T = unknown> = {
	required?: boolean
	alias?: string
	transform?: (value: unknown) => T
} & ({ required: true } | { required?: false, defaultValue?: T })

/**
 * Angular output type
 */
export interface AngularOutput<_T = unknown> {
	alias?: string
}

/**
 * Angular signal type
 */
export interface AngularSignal<T = unknown> {
	(): T
	set: (value: T) => void
	update: (fn: (value: T) => T) => void
}

/**
 * Angular computed type
 */
export type AngularComputed<T = unknown> = () => T

/**
 * Angular effect type
 */
export type AngularEffect = (fn: () => void | (() => void)) => void

// ============================================================================
// Svelte Extended Types
// ============================================================================

/**
 * Svelte component type
 */
export interface SvelteComponent<
	Props extends Record<string, unknown> = Record<string, unknown>,
	Events extends Record<string, unknown> = Record<string, unknown>,
	Slots extends Record<string, unknown> = Record<string, unknown>,
> {
	new (options: {
		target: Element
		props?: Props
		$$inline?: boolean
	}): {
		$$prop_def: Props
		$$events_def: Events
		$$slot_def: Slots
		$destroy: () => void
		$on: <K extends keyof Events>(event: K, callback: (e: Events[K]) => void) => () => void
		$set: (props: Partial<Props>) => void
	}
}

/**
 * Svelte store type
 */
export interface SvelteStore<T = unknown> {
	subscribe: (run: (value: T) => void) => () => void
	set?: (value: T) => void
	update?: (fn: (value: T) => T) => void
}

/**
 * Svelte readable store
 */
export type SvelteReadable<T = unknown> = Pick<SvelteStore<T>, 'subscribe'>

/**
 * Svelte writable store
 */
export type SvelteWritable<T = unknown> = SvelteStore<T>

/**
 * Svelte action type
 */
export type SvelteAction<
	Element = HTMLElement,
	Parameters = unknown,
> = (node: Element, parameters: Parameters) => {
	update?: (parameters: Parameters) => void
	destroy?: () => void
}

/**
 * Svelte transition type
 */
export type SvelteTransition = (node: Element, parameters?: unknown) => {
	delay?: number
	duration?: number
	easing?: (t: number) => number
	css?: (t: number, u: number) => string
	tick?: (t: number, u: number) => void
}

/**
 * Svelte animation type
 */
export type SvelteAnimation = (node: Element, options?: { from: { x: number, y: number, width: number, height: number }, to: { x: number, y: number, width: number, height: number } }) => {
	delay?: number
	duration?: number
	easing?: (t: number) => number
	css?: (t: number, u: number) => string
	tick?: (t: number, u: number) => void
}

// ============================================================================
// Ember Types
// ============================================================================

/**
 * Ember component type
 */
export interface EmberComponent<
	Args extends Record<string, unknown> = Record<string, unknown>,
> {
	Args: Args
	args: Args
	element: Element | null
	isDestroying: boolean
	isDestroyed: boolean
}

/**
 * Ember service type
 */
export type EmberService<T extends Record<string, unknown> = Record<string, unknown>> = T & {
	isDestroying: boolean
	isDestroyed: boolean
}

/**
 * Ember route type
 */
export interface EmberRoute<
	Model = unknown,
	Params extends Record<string, string> = Record<string, string>,
> {
	model: (params: Params, transition: unknown) => Model | Promise<Model>
	beforeModel: (transition: unknown) => void | Promise<void>
	afterModel: (resolvedModel: Model, transition: unknown) => void | Promise<void>
	redirect: (model: Model, transition: unknown) => void
	serialize: (model: Model, params: string[]) => Record<string, string>
}

/**
 * Ember controller type
 */
export interface EmberController<
	Model = unknown,
	QueryParams extends Record<string, unknown> = Record<string, unknown>,
> {
	model: Model
	queryParams: QueryParams
	replaceRoute: (name: string, models?: unknown) => void
	transitionToRoute: (name: string, models?: unknown) => void
}

// ============================================================================
// Backbone Types
// ============================================================================

/**
 * Backbone model type
 */
export interface BackboneModel<
	Attributes extends Record<string, unknown> = Record<string, unknown>,
> {
	id: string | number
	cid: string
	attributes: Attributes
	get: <K extends keyof Attributes>(key: K) => Attributes[K]
	set: <K extends keyof Attributes>(key: K, value: Attributes[K], options?: unknown) => this
	unset: <K extends keyof Attributes>(key: K, options?: unknown) => this
	clear: (options?: unknown) => this
	toJSON: () => Attributes
	save: (attrs?: Partial<Attributes>, options?: unknown) => Promise<this>
	fetch: (options?: unknown) => Promise<this>
	destroy: (options?: unknown) => Promise<this>
	url: string | (() => string)
}

/**
 * Backbone collection type
 */
export interface BackboneCollection<
	Model extends BackboneModel = BackboneModel,
> {
	model: Model
	models: Model[]
	length: number
	add: (models: Model | Model[], options?: unknown) => Model[]
	remove: (models: Model | Model[], options?: unknown) => Model[]
	reset: (models?: Model[], options?: unknown) => Model[]
	at: (index: number) => Model | undefined
	get: (id: string | number) => Model | undefined
	findWhere: (attrs: Partial<Model['attributes']>) => Model | undefined
	where: (attrs: Partial<Model['attributes']>) => Model[]
	url: string | (() => string)
	fetch: (options?: unknown) => Promise<this>
	create: (attrs: unknown, options?: unknown) => Model
}

/**
 * Backbone view type
 */
export interface BackboneView<
	Model extends BackboneModel = BackboneModel,
	Element extends HTMLElement = HTMLElement,
> {
	el: Element
	$el: unknown
	model: Model
	collection: BackboneCollection<Model>
	template: (data: unknown) => string
	render: () => this
	remove: () => this
	events: Record<string, string>
	delegateEvents: (events?: Record<string, string>) => this
	undelegateEvents: () => this
}

/**
 * Backbone router type
 */
export interface BackboneRouter {
	routes: Record<string, string>
	navigate: (fragment: string, options?: { trigger?: boolean, replace?: boolean }) => BackboneRouter
	route: (route: string, name: string, callback?: () => void) => BackboneRouter
	execute: (callback: (() => void) | undefined, args: string[], name: string) => void
}

// ============================================================================
// Preact Types
// ============================================================================

/**
 * Preact component type
 */
export type PreactComponent<
	Props extends Record<string, unknown> = Record<string, unknown>,
	_State extends Record<string, unknown> = Record<string, unknown>,
> = (props: Props) => unknown

/**
 * Preact functional component
 */
export type PreactFC<Props extends Record<string, unknown> = Record<string, unknown>> = (
	props: Props & { children?: unknown },
) => unknown

/**
 * Preact hooks type
 */
export interface PreactHooks {
	useState: <T>(initial: T | (() => T)) => [T, (value: T | ((prev: T) => T)) => void]
	useReducer: <S, A>(reducer: (state: S, action: A) => S, initial: S) => [S, (action: A) => void]
	useEffect: (effect: () => void | (() => void), deps?: unknown[]) => void
	useLayoutEffect: (effect: () => void | (() => void), deps?: unknown[]) => void
	useMemo: <T>(factory: () => T, deps: unknown[]) => T
	useCallback: <T extends (...args: unknown[]) => unknown>(callback: T, deps: unknown[]) => T
	useRef: <T>(initial: T) => { current: T }
	useContext: <T>(context: PreactContext<T>) => T
}

/**
 * Preact context type
 */
export interface PreactContext<T = unknown> {
	Provider: (props: { value: T, children?: unknown }) => unknown
	Consumer: (props: { children: (value: T) => unknown }) => unknown
	defaultValue: T
}

/**
 * Preact ref type
 */
export type PreactRef<T = unknown> = { current: T | null } | ((instance: T | null) => void)

// ============================================================================
// Solid Extended Types
// ============================================================================

/**
 * Solid component type
 */
export type SolidComponent<
	Props extends Record<string, unknown> = Record<string, unknown>,
> = (props: Props) => unknown

/**
 * Solid signal type
 */
export type SolidSignal<T = unknown> = [
	get: () => T,
	set: (value: T | ((prev: T) => T)) => T,
]

/**
 * Solid resource type
 */
export interface SolidResource<T = unknown> {
	(): T | undefined
	loading: boolean
	error: unknown
	latest: T | undefined
}

/**
 * Solid memo type
 */
export type SolidMemo<T = unknown> = () => T

/**
 * Solid effect type
 */
export type SolidEffect = (fn: () => void | (() => void)) => void

/**
 * Solid computed type
 */
export type SolidComputed = (fn: () => void) => void

/**
 * Solid render effect type
 */
export type SolidRenderEffect = (fn: () => void) => void

// ============================================================================
// Lit Types
// ============================================================================

/**
 * Lit element type
 */
export interface LitElement<
	_Props extends Record<string, unknown> = Record<string, unknown>,
> {
	render: () => unknown
	updated: (changedProperties: Map<string, unknown>) => void
	firstUpdated: (changedProperties: Map<string, unknown>) => void
	connectedCallback: () => void
	disconnectedCallback: () => void
}

/**
 * Lit element constructor type (for static properties)
 */
export interface LitElementConstructor<
	Props extends Record<string, unknown> = Record<string, unknown>,
> {
	new (): LitElement<Props>
	properties: Record<keyof Props, LitPropertyConfig>
	styles: unknown
}

/**
 * Lit property config type
 */
export interface LitPropertyConfig<T = unknown> {
	type?: StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor | ArrayConstructor
	attribute?: string | boolean
	reflect?: boolean
	converter?: {
		fromAttribute?: (value: string | null, type?: unknown) => T
		toAttribute?: (value: T, type?: unknown) => string | null
	}
	hasChanged?: (value: T, oldValue: T) => boolean
	state?: boolean
}

/**
 * Lit property type
 */
export type LitProperty<T = unknown> = T

/**
 * Lit decorator type
 */
export type LitDecorator = (
	proto: unknown,
	name: string,
	descriptor?: PropertyDescriptor,
) => PropertyDescriptor | void

/**
 * Lit custom element type
 */
export interface LitCustomElement<T extends HTMLElement = HTMLElement> {
	new (): T
}

// ============================================================================
// Stencil Types
// ============================================================================

/**
 * Stencil component type
 */
export interface StencilComponent<
	Props extends Record<string, unknown> = Record<string, unknown>,
	State extends Record<string, unknown> = Record<string, unknown>,
> {
	props: Props
	state: State
	hostElement: HTMLElement
	render: () => unknown
	componentWillLoad: () => Promise<void> | void
	componentDidLoad: () => void
	componentWillUpdate: () => Promise<void> | void
	componentDidUpdate: () => void
	componentWillRender: () => Promise<void> | void
	componentDidRender: () => void
	componentDidUnload: () => void
}

/**
 * Stencil prop type
 */
export interface StencilProp<T = unknown> {
	type?: 'String' | 'Number' | 'Boolean' | 'Object' | 'Array' | 'Any'
	attribute?: string
	reflect?: boolean
	mutable?: boolean
	required?: boolean
	defaultValue?: T
}

/**
 * Stencil state type
 */
export type StencilState<T = unknown> = T

/**
 * Stencil event type
 */
export interface StencilEvent<T = unknown> {
	bubbles?: boolean
	cancelable?: boolean
	composed?: boolean
	detail: T
}

/**
 * Stencil event emitter type
 */
export interface StencilEventEmitter<T = unknown> {
	emit: (detail: T) => void
}

/**
 * Stencil method type
 */
export type StencilMethod = () => void | Promise<void>

/**
 * Stencil watch decorator type
 */
export type StencilWatch = (propName: string, callback: (newValue: unknown, oldValue: unknown) => void) => void

// ============================================================================
// Alpine.js Types
// ============================================================================

/**
 * Alpine component type
 */
export interface AlpineComponent<
	Data extends Record<string, unknown> = Record<string, unknown>,
	Methods extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>,
> {
	data: Data
	methods: Methods
	init?: () => void
	destroy?: () => void
}

/**
 * Alpine store type
 */
export type AlpineStore<
	State extends Record<string, unknown> = Record<string, unknown>,
> = State & {
	get: <K extends keyof State>(key: K) => State[K]
	set: <K extends keyof State>(key: K, value: State[K]) => void
	toggle: (key: keyof State) => void
}

/**
 * Alpine magic type
 */
export type AlpineMagic<T = unknown> = (el: Element, options?: unknown) => T

/**
 * Alpine directive type
 */
export interface AlpineDirective {
	name: string
	callback: (el: Element, value: unknown, modifiers: string[], expression: string, effect: (fn: () => void) => void) => void
}

/**
 * Alpine reactive type
 */
export type AlpineReactive<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K]
} & {
	$watch: (key: string, callback: (value: unknown, oldValue: unknown) => void) => void
}

/**
 * Alpine x-data type
 */
export type AlpineData<T extends Record<string, unknown> = Record<string, unknown>> = T | (() => T)

/**
 * Alpine x-bind type
 */
export type AlpineBind<T = unknown> = T | (() => T)

/**
 * Alpine x-on type
 */
export type AlpineOn<E = unknown> = (event: E) => void

/**
 * Alpine x-show type
 */
export type AlpineShow = boolean | (() => boolean)

/**
 * Alpine x-if type
 */
export type AlpineIf = boolean | (() => boolean)

/**
 * Alpine x-for type
 */
export interface AlpineFor<T = unknown> {
	items: T[]
	key?: string | ((item: T, index: number) => string)
}

/**
 * Alpine x-model type
 */
export interface AlpineModel<T = unknown> {
	value: T
	$: string
}
