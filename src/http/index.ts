/**
 * Type-level HTTP and API utilities
 *
 * This module provides types for:
 * - HTTP methods and status codes
 * - Route types
 * - API endpoint types
 * - Middleware types
 */

// ============================================================================
// HTTP Types
// ============================================================================

/**
 * HTTP methods
 *
 * @example
 * ```ts
 * type Method = HTTPMethod  // 'GET' | 'POST' | ...
 * ```
 */
export type HTTPMethod
	= | 'GET'
		| 'POST'
		| 'PUT'
		| 'DELETE'
		| 'PATCH'
		| 'HEAD'
		| 'OPTIONS'
		| 'CONNECT'
		| 'TRACE'

/**
 * HTTP status codes
 *
 * @example
 * ```ts
 * type Status = HTTPStatus  // 200 | 201 | 400 | ...
 * ```
 */
export type HTTPStatus
	// Success
	= | 200
		| 201
		| 202
		| 204
		| 206
	// Redirect
		| 301
		| 302
		| 303
		| 304
		| 307
		| 308
	// Client Error
		| 400
		| 401
		| 403
		| 404
		| 405
		| 406
		| 408
		| 409
		| 410
		| 412
		| 413
		| 414
		| 415
		| 416
		| 417
		| 418
		| 422
		| 425
		| 426
		| 428
		| 429
		| 431
		| 451
	// Server Error
		| 500
		| 501
		| 502
		| 503
		| 504
		| 505
		| 506
		| 507
		| 511

/**
 * HTTP status categories
 *
 * @example
 * ```ts
 * type Category = HTTPStatusCategory<404>  // 'client_error'
 * ```
 */
export type HTTPStatusCategory<S extends HTTPStatus> = S extends 200 | 201 | 202 | 204 | 206
	? 'success'
	: S extends 301 | 302 | 303 | 304 | 307 | 308
		? 'redirect'
		: S extends 400 | 401 | 403 | 404 | 405 | 406 | 408 | 409 | 410 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 422 | 425 | 426 | 428 | 429 | 431 | 451
			? 'client_error'
			: 'server_error'

/**
 * HTTP headers type
 *
 * @example
 * ```ts
 * type Headers = HTTPHeaders<{ 'Content-Type': 'application/json' }>
 * ```
 */
export type HTTPHeaders<T extends Record<string, string> = Record<string, never>> = T & {
	/**
	 * Content-Type header
	 */
	'Content-Type'?: string
	/**
	 * Authorization header
	 */
	Authorization?: string
	/**
	 * Accept header
	 */
	Accept?: string
	/**
	 * User-Agent header
	 */
	'User-Agent'?: string
}

/**
 * Content-Type values
 *
 * @example
 * ```ts
 * type JsonContentType = ContentType  // 'application/json'
 * ```
 */
export type ContentType
	= | 'application/json'
		| 'application/xml'
		| 'application/x-www-form-urlencoded'
		| 'multipart/form-data'
		| 'text/html'
		| 'text/plain'
		| 'text/css'
		| 'text/javascript'
		| 'image/jpeg'
		| 'image/png'
		| 'image/gif'
		| 'image/svg+xml'

// ============================================================================
// Route Types
// ============================================================================

/**
 * Define a route
 *
 * @example
 * ```ts
 * type UserRoute = Route<'/users/:id', 'GET', User>
 * ```
 */
export interface Route<
	Path extends string,
	Method extends HTTPMethod,
	Response,
	Request = never,
> {
	path: Path
	method: Method
	response: Response
	request: Request
}

/**
 * Extract path params from route path
 *
 * @example
 * ```ts
 * RouteParams<'/users/:id/posts/:postId'>  // { id: string; postId: string }
 * ```
 */
export type RouteParams<Path extends string> = ExtractParams<Path>

type ExtractParams<
	Path extends string,
	Acc extends Record<string, string> = Record<string, never>,
> = Path extends `/:${infer Param}/${infer Rest}`
	? ExtractParams<Rest, Acc & { [K in Param]: string }>
	: Path extends `/:${infer Param}`
		? Acc & { [K in Param]: string }
		: Acc

/**
 * Extract query params type
 *
 * @example
 * ```ts
 * RouteQuery<{ page: number; limit: number }>  // { page?: string; limit?: string }
 * ```
 */
export type RouteQuery<Q extends Record<string, any>> = {
	[K in keyof Q]?: string
}

/**
 * Router type
 *
 * @example
 * ```ts
 * type MyRouter = Router<{
 *   '/users': { GET: User[]; POST: User }
 *   '/users/:id': { GET: User; DELETE: void }
 * }>
 * ```
 */
export type Router<
	Routes extends Record<string, Record<HTTPMethod, { response: any, request?: any }>>,
> = Routes

// ============================================================================
// API Types
// ============================================================================

/**
 * API endpoint type
 *
 * @example
 * ```ts
 * type Endpoint = APIEndpoint<{
 *   method: 'GET'
 *   path: '/users'
 *   response: User[]
 * }>
 * ```
 */
export type APIEndpoint<
	Config extends {
		method: HTTPMethod
		path: string
		response: any
		request?: any
		headers?: HTTPHeaders
	},
> = Config

/**
 * API request type
 *
 * @example
 * ```ts
 * type Request = APIRequest<{ body: CreateUserInput }>
 * ```
 */
export type APIRequest<T extends { body?: any, headers?: HTTPHeaders, params?: Record<string, string>, query?: Record<string, string> }> = T

/**
 * API response type
 *
 * @example
 * ```ts
 * type Response = APIResponse<{ data: User; status: 200 }>
 * ```
 */
export type APIResponse<T extends { data: any, status?: HTTPStatus, headers?: HTTPHeaders }> = T

/**
 * API error type
 *
 * @example
 * ```ts
 * type Error = APIError<{ message: string; code: 'INVALID_INPUT' }>
 * ```
 */
export type APIError<
	T extends {
		message: string
		code?: string
		status?: HTTPStatus
	},
> = T

// ============================================================================
// Middleware Types
// ============================================================================

/**
 * Middleware function type
 *
 * @example
 * ```ts
 * type AuthMiddleware = Middleware<{ user: User }>
 * ```
 */
export type Middleware<C extends Record<string, any> = object> = (
	ctx: Context<C>,
	next: () => Promise<void>,
) => Promise<void>

/**
 * Context type for middleware
 *
 * @example
 * ```ts
 * type Ctx = Context<{ user: User }>
 * ```
 */
export interface Context<C extends Record<string, any> = object> {
	request: {
		method: HTTPMethod
		path: string
		headers: HTTPHeaders
		body?: unknown
		params?: Record<string, string>
		query?: Record<string, string>
	}
	response: {
		status: HTTPStatus
		headers: HTTPHeaders
		body?: unknown
	}
	state: C
}

/**
 * Middleware chain type
 *
 * @example
 * ```ts
 * type Chain = MiddlewareChain<[AuthMiddleware, LoggingMiddleware]>
 * ```
 */
export type MiddlewareChain<M extends Middleware<any>[] = []> = M

/**
 * Compose middleware chain
 *
 * @example
 * ```ts
 * type Composed = ComposeMiddleware<[AuthMiddleware]>
 * ```
 */
export type ComposeMiddleware<M extends Middleware<any>[] = []> = (
	ctx: Context<ExtractContextFromMiddleware<M>>,
) => Promise<void>

type ExtractContextFromMiddleware<M extends Middleware<any>[] = []> = M extends [
	infer _First extends Middleware<infer C>,
	...infer Rest extends Middleware<any>[],
]
	? C & ExtractContextFromMiddleware<Rest>
	: Record<string, never>

// ============================================================================
// Request/Response Utilities
// ============================================================================

/**
 * Build request options type
 *
 * @example
 * ```ts
 * type Options = RequestOptions<{ timeout: 5000 }>
 * ```
 */
export type RequestOptions<
	T extends {
		timeout?: number
		retries?: number
		headers?: HTTPHeaders
	},
> = T

/**
 * Parse response type
 *
 * @example
 * ```ts
 * type Data = ParseResponse<{ data: User }>
 * ```
 */
export type ParseResponse<R extends { data?: any }> = R['data']

// ============================================================================
// REST API Helpers
// ============================================================================

/**
 * REST collection endpoints
 *
 * @example
 * ```ts
 * type UserEndpoints = RESTCollection<User, CreateUserInput>
 * ```
 */
export interface RESTCollection<Resource, CreateInput = Partial<Resource>, UpdateInput = Partial<Resource>> {
	list: Route<'/', 'GET', Resource[]>
	create: Route<'/', 'POST', Resource, CreateInput>
	show: Route<'/:id', 'GET', Resource>
	update: Route<'/:id', 'PUT', Resource, UpdateInput>
	delete: Route<'/:id', 'DELETE', void>
}

/**
 * REST resource endpoints
 *
 * @example
 * ```ts
 * type UserResource = RESTResource<User>
 * ```
 */
export interface RESTResource<Resource> {
	show: Route<'/:id', 'GET', Resource>
	update: Route<'/:id', 'PUT', Resource>
	delete: Route<'/:id', 'DELETE', void>
}

/**
 * CRUD operation types
 *
 * @example
 * ```ts
 * type Op = CRUDOperation  // 'create' | 'read' | ...
 * ```
 */
export type CRUDOperation = 'create' | 'read' | 'update' | 'delete'
