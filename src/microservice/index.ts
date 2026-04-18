/**
 * Microservices Architecture Types
 *
 * Types for microservices patterns and communication.
 */

// ============================================================================
// Service Types
// ============================================================================

/**
 * Microservice type
 */
export type Microservice<T = unknown> = {
	name: string
	version: string
	config: ServiceConfig<T>
	start: () => Promise<void>
	stop: () => Promise<void>
	health: () => Promise<HealthReport>
}

/**
 * Service configuration
 */
export type ServiceConfig<T = unknown> = {
	name: string
	version: string
	port: number
	host: string
	env: Environment
	options?: T
	dependencies?: string[]
	timeouts?: {
		start?: number
		stop?: number
		request?: number
	}
}

/**
 * Service registry type
 */
export type ServiceRegistry<S = unknown> = {
	register: (service: S) => Promise<void>
	deregister: (serviceName: string) => Promise<void>
	getService: (serviceName: string) => Promise<ServiceInstance | undefined>
	getAllServices: () => Promise<ServiceInstance[]>
	heartbeat: (serviceName: string, instanceId: string) => Promise<void>
}

/**
 * Service discovery type
 */
export type ServiceDiscovery = {
	discover: (serviceName: string) => Promise<ServiceInstance[]>
	watch: (serviceName: string, callback: (instances: ServiceInstance[]) => void) => () => void
	getInstance: (serviceName: string, strategy?: LoadBalancerStrategy) => Promise<ServiceInstance | undefined>
}

// ============================================================================
// Communication Types
// ============================================================================

/**
 * Service client type
 */
export type ServiceClient<T = unknown> = {
	call: <R>(method: string, params: T) => Promise<ServiceResponse<R>>
	callStream: <R>(method: string, params: T) => AsyncIterable<R>
	close: () => Promise<void>
}

/**
 * Service request type
 */
export type ServiceRequest<T = unknown> = {
	id: string
	service: string
	method: string
	params: T
	timestamp: number
	timeout?: number
	headers?: Record<string, string>
	traceId?: string
}

/**
 * Service response type
 */
export type ServiceResponse<T = unknown> =
	| {
			success: true
			data: T
			timestamp: number
			duration: number
	  }
	| ServiceError

/**
 * Service error type
 */
export type ServiceError = {
	success: false
	error: {
		code: string
		message: string
		details?: unknown
		stack?: string
	}
	timestamp: number
	duration: number
}

// ============================================================================
// API Gateway Types
// ============================================================================

/**
 * API Gateway type
 */
export type APIGateway = {
	routes: GatewayRoute[]
	start: () => Promise<void>
	stop: () => Promise<void>
	addRoute: (route: GatewayRoute) => void
	removeRoute: (path: string) => void
}

/**
 * Gateway route type
 */
export type GatewayRoute = {
	path: string
	method: HTTPMethod | HTTPMethod[]
	service: string
	servicePath?: string
	timeout?: number
	retryPolicy?: RetryPolicy
	rateLimit?: RateLimit
	auth?: AuthConfig
	cors?: CORSConfig
}

/**
 * Gateway configuration
 */
export type GatewayConfig = {
	port: number
	host: string
	routes: GatewayRoute[]
	middleware?: GatewayMiddleware[]
	errorHandler?: (error: Error) => ServiceResponse
}

/**
 * Gateway middleware
 */
export type GatewayMiddleware = (
	request: ServiceRequest,
	next: () => Promise<ServiceResponse>
) => Promise<ServiceResponse>

/**
 * Retry policy
 */
export type RetryPolicy = {
	maxRetries: number
	backoff: 'fixed' | 'exponential' | 'linear'
	initialDelay: number
	maxDelay: number
	retryableErrors?: string[]
}

/**
 * Rate limit configuration
 */
export type RateLimit = {
	windowMs: number
	max: number
	keyGenerator?: (request: ServiceRequest) => string
	skip?: (request: ServiceRequest) => boolean
}

/**
 * Auth configuration
 */
export type AuthConfig = {
	type: 'jwt' | 'apikey' | 'oauth2' | 'basic'
	required: boolean
	validate: (token: string) => Promise<boolean>
}

/**
 * CORS configuration
 */
export type CORSConfig = {
	origin: string | string[] | boolean
	methods?: HTTPMethod[]
	allowedHeaders?: string[]
	exposedHeaders?: string[]
	credentials?: boolean
	maxAge?: number
}

// ============================================================================
// Circuit Breaker Types
// ============================================================================

/**
 * Circuit breaker type
 */
export type CircuitBreaker<T = unknown> = {
	execute: (fn: () => Promise<T>) => Promise<T>
	getState: () => CircuitBreakerState
	getStats: () => CircuitBreakerStats
	reset: () => void
	open: () => void
	close: () => void
}

/**
 * Circuit breaker state
 */
export type CircuitBreakerState = 'closed' | 'open' | 'half-open'

/**
 * Circuit breaker configuration
 */
export type CircuitBreakerConfig = {
	failureThreshold: number
	successThreshold: number
	timeout: number
	resetTimeout: number
	volumeThreshold?: number
	onStateChange?: (oldState: CircuitBreakerState, newState: CircuitBreakerState) => void
	onFailure?: (error: Error) => void
	onSuccess?: () => void
}

/**
 * Circuit breaker stats
 */
export type CircuitBreakerStats = {
	state: CircuitBreakerState
	failures: number
	successes: number
	rejects: number
	timeouts: number
	lastFailure?: Date
	lastSuccess?: Date
}

// ============================================================================
// Load Balancer Types
// ============================================================================

/**
 * Load balancer type
 */
export type LoadBalancer = {
	select: (instances: ServiceInstance[]) => ServiceInstance | undefined
	getStrategy: () => LoadBalancerStrategy
	setStrategy: (strategy: LoadBalancerStrategy) => void
}

/**
 * Load balancer strategy
 */
export type LoadBalancerStrategy = 'round-robin' | 'least-connections' | 'random' | 'weighted' | 'ip-hash'

/**
 * Service instance type
 */
export type ServiceInstance = {
	id: string
	name: string
	host: string
	port: number
	version: string
	status: InstanceStatus
	metadata?: Record<string, unknown>
	weight?: number
	connections?: number
	lastHeartbeat?: Date
}

/**
 * Instance status
 */
export type InstanceStatus = 'healthy' | 'unhealthy' | 'draining' | 'starting' | 'stopping'

// ============================================================================
// Health Check Types
// ============================================================================

/**
 * Health check type
 */
export type HealthCheck = {
	name: string
	check: () => Promise<HealthCheckResult>
	interval?: number
	timeout?: number
	critical?: boolean
}

/**
 * Health status
 */
export type HealthStatus = 'healthy' | 'unhealthy' | 'degraded'

/**
 * Health report type
 */
export type HealthReport<T = unknown> = {
	status: HealthStatus
	timestamp: Date
	service: string
	version: string
	uptime: number
	checks: Record<string, HealthCheckResult>
	details?: T
}

/**
 * Health check result
 */
export type HealthCheckResult = {
	status: HealthStatus
	message?: string
	timestamp: Date
	duration?: number
	details?: unknown
}

// ============================================================================
// Common Types
// ============================================================================

/**
 * Environment type
 */
export type Environment = 'development' | 'staging' | 'production' | 'test'

/**
 * HTTP method
 */
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'
