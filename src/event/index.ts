/**
 * Event-Driven Architecture Types
 *
 * Types for event-driven patterns and architectures.
 */

// ============================================================================
// Event Bus Types
// ============================================================================

/**
 * Event bus type
 */
export type EventBus<T extends Record<string, unknown> = Record<string, unknown>> = {
	publish<E extends keyof T>(event: E, data: T[E]): void
	subscribe<E extends keyof T>(
		event: E,
		handler: (data: T[E]) => void | Promise<void>
	): () => void
	unsubscribe<E extends keyof T>(
		event: E,
		handler: (data: T[E]) => void | Promise<void>
	): void
	emit: <E extends keyof T>(event: E, data: T[E]) => Promise<void>
}

/**
 * Event bus configuration
 */
export type EventBusConfig<T extends Record<string, unknown> = Record<string, unknown>> = {
	handlers?: {
		[E in keyof T]?: ((data: T[E]) => void | Promise<void>)[]
	}
	middleware?: EventBusMiddleware<T>
	errorHandler?: (error: Error, event: keyof T, data: unknown) => void
}

/**
 * Event bus handler
 */
export type EventBusHandler<T, E extends keyof T = keyof T> = (
	data: T[E]
) => void | Promise<void>

/**
 * Event bus middleware
 */
export type EventBusMiddleware<T extends Record<string, unknown>> = (
	event: keyof T,
	data: T[keyof T],
	next: () => Promise<void>
) => Promise<void>

// ============================================================================
// Event Sourcing Types
// ============================================================================

/**
 * Event store type
 */
export type EventStore<E = unknown> = {
	append: (event: E) => Promise<void>
	getEvents: (aggregateId: string) => Promise<E[]>
	getAllEvents: () => Promise<E[]>
	subscribe: (handler: (event: E) => void) => () => void
}

/**
 * Event stream type
 */
export type EventStream<E = unknown> = AsyncIterable<E> & {
	subscribe: (handler: (event: E) => void) => () => void
	pipe: <R>(transform: (event: E) => R) => EventStream<R>
}

/**
 * Event version
 */
export type EventVersion = number

/**
 * Event timestamp
 */
export type EventTimestamp = number | string | Date

/**
 * Base event type
 */
export type BaseEvent<T = string, P = unknown> = {
	type: T
	payload: P
	timestamp: EventTimestamp
	version: EventVersion
	aggregateId?: string
	correlationId?: string
 causationId?: string
}

/**
 * Aggregate events
 */
export type AggregateEvents<T extends Record<string, unknown>> = {
	[K in keyof T]: BaseEvent<K, T[K]>
}[keyof T]

// ============================================================================
// CQRS Types
// ============================================================================

/**
 * Command type
 */
export type Command<T = string, P = unknown> = {
	type: T
	payload: P
	timestamp: EventTimestamp
	commandId: string
	aggregateId?: string
}

/**
 * Command handler type
 */
export type CommandHandler<C extends Command, R = void> = (
	command: C
) => R | Promise<R>

/**
 * Query type
 */
export type Query<T = string, R = unknown> = {
	type: T
	params: R
	timestamp: EventTimestamp
	queryId: string
}

/**
 * Query handler type
 */
export type QueryHandler<Q extends Query, R> = (query: Q) => R | Promise<R>

/**
 * Command result type
 */
export type CommandResult<T = unknown> =
	| { success: true; data: T }
	| { success: false; error: Error }

/**
 * Query result type
 */
export type QueryResult<T = unknown> =
	| { success: true; data: T }
	| { success: false; error: Error }

/**
 * Command bus type
 */
export type CommandBus = {
	dispatch: <C extends Command>(command: C) => Promise<CommandResult>
	register: <C extends Command>(
		commandType: C['type'],
		handler: CommandHandler<C>
	) => void
}

/**
 * Query bus type
 */
export type QueryBus = {
	execute: <Q extends Query, R>(query: Q) => Promise<QueryResult<R>>
	register: <Q extends Query, R>(
		queryType: Q['type'],
		handler: QueryHandler<Q, R>
	) => void
}

// ============================================================================
// Saga Types
// ============================================================================

/**
 * Saga type
 */
export type Saga<T = unknown> = {
	sagaId: string
	steps: SagaStep[]
	currentStep: number
	status: SagaStatus
	context: T
	compensations: SagaCompensation[]
}

/**
 * Saga step type
 */
export type SagaStep<T = unknown> = {
	stepId: string
	name: string
	execute: (context: T) => Promise<T>
	compensate?: (context: T) => Promise<void>
	status: StepStatus
	error?: Error
}

/**
 * Saga compensation type
 */
export type SagaCompensation<T = unknown> = {
	stepId: string
	compensate: (context: T) => Promise<void>
	executed: boolean
}

/**
 * Saga result type
 */
export type SagaResult<T = unknown> =
	| { success: true; data: T }
	| { success: false; error: Error; compensatedSteps: string[] }

/**
 * Saga status
 */
export type SagaStatus = 'pending' | 'running' | 'completed' | 'failed' | 'compensating' | 'compensated'

/**
 * Step status
 */
export type StepStatus = 'pending' | 'running' | 'completed' | 'failed' | 'compensated'

// ============================================================================
// Message Queue Types
// ============================================================================

/**
 * Message queue type
 */
export type MessageQueue<M = unknown> = {
	publish: (message: M) => Promise<void>
	consume: (handler: (message: M) => Promise<void>) => void
	ack: (messageId: string) => Promise<void>
	nack: (messageId: string, reason?: string) => Promise<void>
	close: () => Promise<void>
}

/**
 * Queue message type
 */
export type QueueMessage<T = unknown> = {
	id: string
	payload: T
	timestamp: EventTimestamp
	retryCount: number
	maxRetries: number
	delay?: number
	priority?: number
}

/**
 * Queue consumer type
 */
export type QueueConsumer<T = unknown> = {
	id: string
	handler: (message: QueueMessage<T>) => Promise<void>
	concurrency: number
	prefetch: number
}

/**
 * Queue producer type
 */
export type QueueProducer<T = unknown> = {
	publish: (payload: T, options?: PublishOptions) => Promise<string>
	publishBatch: (payloads: T[], options?: PublishOptions) => Promise<string[]>
}

/**
 * Publish options
 */
export type PublishOptions = {
	delay?: number
	priority?: number
	expiresAt?: Date | number
	retryCount?: number
	maxRetries?: number
}

/**
 * Dead letter queue type
 */
export type DeadLetterQueue<T = unknown> = {
	publish: (message: QueueMessage<T>, reason: string) => Promise<void>
	getMessages: () => Promise<QueueMessage<T>[]>
	retry: (messageId: string) => Promise<void>
}
