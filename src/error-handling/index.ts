/**
 * Type-Level Error Handling
 *
 * Advanced error handling type utilities.
 */

// ============================================================================
// Error Types
// ============================================================================

/**
 * Error type classification
 */
export type ErrorType = string

/**
 * Error message
 */
export type ErrorMessage = string

/**
 * Error stack trace
 */
export type ErrorStack = string

/**
 * Error code
 */
export type ErrorCode = string | number

/**
 * Base error structure
 */
export interface ErrorBase<T extends ErrorType = ErrorType> {
	type: T
	message: ErrorMessage
	code?: ErrorCode
	stack?: ErrorStack
	cause?: unknown
	timestamp?: number
	context?: Record<string, unknown>
}

/**
 * Error type with data
 */
export interface ErrorWithData<T extends ErrorType, D = unknown> extends ErrorBase<T> {
	data?: D
}

/**
 * Custom error type
 */
export interface CustomError<T = unknown> extends ErrorBase<string> {
	name: string
	data?: T
	retryable?: boolean
	severity?: ErrorSeverity
}

/**
 * Error severity
 */
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'

// ============================================================================
// Result Types
// ============================================================================

/**
 * Result type (Success or Failure)
 */
export type Result<T, E = Error> = Success<T> | Failure<E>

/**
 * Success result
 */
export interface Success<T> {
	ok: true
	value: T
}

/**
 * Failure result
 */
export interface Failure<E> {
	ok: false
	error: E
}

/**
 * Create success result helper type
 */
export interface Ok<T> { ok: true, value: T }

/**
 * Create failure result helper type
 */
export interface Err<E> { ok: false, error: E }

/**
 * Result match pattern
 */
export interface ResultMatcher<T, E, R> {
	ok: (value: T) => R
	err: (error: E) => R
}

/**
 * Async result
 */
export type AsyncResult<T, E = Error> = Promise<Result<T, E>>

// ============================================================================
// Try Types
// ============================================================================

/**
 * Try type (nullable error handling)
 */
export type Try<T, E = Error>
	= | { success: true, value: T }
	| { success: false, error: E }

/**
 * Try result type
 */
export type TryResult<T> = T | Error

/**
 * Try catch result
 */
export type TryCatchResult<T, E extends Error = Error> = T | E

/**
 * Catch handler type
 */
export type CatchHandler<T, E extends Error = Error> = (error: E) => T

/**
 * Finally handler type
 */
export type FinallyHandler = () => void

// ============================================================================
// Either Types
// ============================================================================

/**
 * Either type (Left or Right)
 */
export type Either<L, R> = Left<L> | Right<R>

/**
 * Left value
 */
export interface Left<L> {
	type: 'left'
	value: L
}

/**
 * Right value
 */
export interface Right<R> {
	type: 'right'
	value: R
}

/**
 * Create left helper
 */
export interface LeftOf<L> { type: 'left', value: L }

/**
 * Create right helper
 */
export interface RightOf<R> { type: 'right', value: R }

/**
 * Either match pattern
 */
export interface EitherMatcher<L, R, T> {
	left: (value: L) => T
	right: (value: R) => T
}

// ============================================================================
// Option Types
// ============================================================================

/**
 * Option type (Some or None)
 */
export type Option<T> = Some<T> | None

/**
 * Some value
 */
export interface Some<T> {
	type: 'some'
	value: T
}

/**
 * None value
 */
export interface None {
	type: 'none'
}

/**
 * Create some helper
 */
export interface SomeOf<T> { type: 'some', value: T }

/**
 * Option match pattern
 */
export interface OptionMatcher<T, R> {
	some: (value: T) => R
	none: () => R
}

/**
 * Nullable option
 */
export type NullableOption<T> = T | null | undefined

/**
 * OptionalWithDefault
 */
export type OptionDefault<T, D> = Some<T> | { type: 'none', default: D }

// ============================================================================
// Error Chain Types
// ============================================================================

/**
 * Error chain (for tracking error propagation)
 */
export interface ErrorChain<T = unknown> {
	error: CustomError<T>
	chain: ChainLink[]
	source?: string
}

/**
 * Chain link (single link in error chain)
 */
export interface ChainLink<T = unknown> {
	location: string
	message?: string
	timestamp: number
	context?: T
	cause?: ChainLink<T>
}

/**
 * Chain context
 */
export interface ChainContext {
	component?: string
	operation?: string
	input?: unknown
	environment?: Record<string, unknown>
}

// ============================================================================
// Recovery Types
// ============================================================================

/**
 * Recovery strategy
 */
export type RecoveryStrategy
	= | 'retry' // Retry the operation
	| 'fallback' // Use fallback value
	| 'default' // Use default value
	| 'skip' // Skip and continue
	| 'abort' // Abort operation
	| 'escalate' // Escalate to higher handler

/**
 * Recovery options
 */
export interface RecoveryOptions<T = unknown> {
	strategy: RecoveryStrategy
	maxRetries?: number
	retryDelay?: number
	backoffMultiplier?: number
	fallbackValue?: T
	defaultValue?: T
	onRecovery?: (error: Error, attempt: number) => void
}

/**
 * Recovery result
 */
export interface RecoveryResult<T> {
	recovered: boolean
	value?: T
	strategy?: RecoveryStrategy
	attempts?: number
}

/**
 * Retry configuration
 */
export interface RetryConfig {
	maxAttempts: number
	delay: number
	backoff?: 'linear' | 'exponential' | 'fixed'
	maxDelay?: number
	retryOn?: (error: Error) => boolean
	onRetry?: (error: Error, attempt: number) => void
}

/**
 * Fallback configuration
 */
export interface FallbackConfig<T> {
	value: T
	when?: (error: Error) => boolean
}

// ============================================================================
// Validation Error Types
// ============================================================================

/**
 * Validation error
 */
export interface ValidationError<T = unknown> extends CustomError<'validation'> {
	type: 'validation'
	field?: string
	path?: string
	value?: T
	constraint?: string
}

/**
 * Validation errors collection
 */
export type ValidationErrors<T = unknown> = ValidationError<T>[]

/**
 * Field error
 */
export interface FieldError<T = unknown> {
	field: string
	message: string
	code?: string
	value?: T
	attempts?: unknown[]
}

/**
 * Schema validation error
 */
export interface SchemaValidationError {
	path: string
	expected: string
	received: string
	message: string
}

/**
 * Validation result
 */
export type ValidationResult<T, E extends FieldError = FieldError>
	= | { valid: true, value: T }
	| { valid: false, errors: E[] }

// ============================================================================
// Domain-Specific Error Types
// ============================================================================

/**
 * Network error
 */
export interface NetworkError extends CustomError<'network'> {
	type: 'network'
	status?: number
	statusText?: string
	url?: string
	retryable?: boolean
	timeout?: boolean
}

/**
 * Authentication error
 */
export interface AuthenticationError extends CustomError<'authentication'> {
	type: 'authentication'
	code?: 'unauthorized' | 'forbidden' | 'token_expired' | 'invalid_token'
}

/**
 * Authorization error
 */
export interface AuthorizationError extends CustomError<'authorization'> {
	type: 'authorization'
	requiredPermissions?: string[]
	insufficientPermissions?: string[]
}

/**
 * Not found error
 */
export interface NotFoundError extends CustomError<'not_found'> {
	type: 'not_found'
	resource?: string
	identifier?: string | number
}

/**
 * Conflict error
 */
export interface ConflictError extends CustomError<'conflict'> {
	type: 'conflict'
	resource?: string
	conflictingValue?: unknown
}

/**
 * Timeout error
 */
export interface TimeoutError extends CustomError<'timeout'> {
	type: 'timeout'
	operation?: string
	timeoutMs?: number
}

/**
 * Rate limit error
 */
export interface RateLimitError extends CustomError<'rate_limit'> {
	type: 'rate_limit'
	retryAfter?: number
	limit?: number
	remaining?: number
}

/**
 * Invalid input error
 */
export interface InvalidInputError extends CustomError<'invalid_input'> {
	type: 'invalid_input'
	field?: string
	value?: unknown
	constraints?: Record<string, unknown>
}

/**
 * State error
 */
export interface StateError extends CustomError<'state'> {
	type: 'state'
	currentState?: string
	expectedStates?: string[]
}

// ============================================================================
// Error Handler Types
// ============================================================================

/**
 * Error handler function
 */
export type ErrorHandler<E = Error, R = void> = (error: E) => R

/**
 * Error handler with context
 */
export type ContextualErrorHandler<C, E = Error, R = void> = (
	error: E,
	context: C,
) => R

/**
 * Global error handler
 */
export interface GlobalErrorHandler {
	handle: <E extends Error>(error: E) => void
	register: <E extends Error>(
		type: string,
		handler: ErrorHandler<E>,
	) => void
	unregister: (type: string) => void
}

/**
 * Error boundary props
 */
export interface ErrorBoundaryProps<T = unknown> {
	fallback?: T | ((error: Error, reset: () => void) => T)
	onError?: (error: Error) => void
	children?: unknown
}

// ============================================================================
// Error Constructor Types
// ============================================================================

/**
 * Error factory
 */
export interface ErrorFactory<T extends CustomError<string>, D = unknown> {
	type: T['type']
	create: (message: string, data?: D) => T
	from: (error: Error) => T
}

/**
 * Typed error constructor
 */
export interface ErrorConstructor<T extends CustomError<string>> {
	new (message: string, data?: unknown): T
	readonly type: T['type']
}

// ============================================================================
// Error Instance Types
// ============================================================================

/**
 * Error instance with metadata
 */
export interface ErrorInstance<T extends CustomError<string> = CustomError<string>> {
	id: string
	error: T
	occurredAt: Date
	handled: boolean
	handledBy?: string
	threshold?: number
}

/**
 * Error log entry
 */
export interface ErrorLog<T extends CustomError<string> = CustomError<string>> {
	id: string
	error: T
	timestamp: number
	environment?: string
	component?: string
	action?: string
	userId?: string
	sessionId?: string
	correlationId?: string
	metadata?: Record<string, unknown>
}

// ============================================================================
// Assertion Types
// ============================================================================

/**
 * Assertion result
 */
export type AssertionResult
	= | { pass: true }
	| { pass: false, message: string }

/**
 * Assertion function
 */
export type AssertionFunction<T = unknown> = (value: unknown) => asserts value is T

/**
 * Assertion error
 */
export interface AssertionError<T = unknown> extends CustomError<'assertion'> {
	type: 'assertion'
	expected?: unknown
	received?: unknown
	expression?: T
}

// ============================================================================
// Panic / Fatal Types
// ============================================================================

/**
 * Panic type (unrecoverable error)
 */
export interface Panic extends CustomError<'panic'> {
	type: 'panic'
	fatal: true
	exitCode?: number
}

/**
 * Fatal error
 */
export interface FatalError extends CustomError<'fatal'> {
	type: 'fatal'
	unrecoverable: true
	reportImmediately?: boolean
}

// ============================================================================
// Expected Error Types
// ============================================================================

/**
 * Known error types for type-safe error handling
 */
export type ExpectedErrors
	= | NetworkError
	| AuthenticationError
	| AuthorizationError
	| NotFoundError
	| ConflictError
	| TimeoutError
	| RateLimitError
	| InvalidInputError
	| ValidationError
	| StateError

/**
 * Business logic error
 */
export type BusinessError
	= | NotFoundError
	| ConflictError
	| InvalidInputError
	| StateError

/**
 * System error
 */
export type SystemError
	= | NetworkError
	| TimeoutError
	| RateLimitError
