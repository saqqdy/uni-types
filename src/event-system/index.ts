/**
 * Type-Level Event System
 *
 * Advanced event system type utilities.
 */

// ============================================================================
// Core Event Types
// ============================================================================

/**
 * Event type identifier
 */
export type EventType = string

/**
 * Event payload type
 */
export type EventPayload<T = unknown> = T

/**
 * Event timestamp
 */
export type EventTimestamp = number

/**
 * Event ID
 */
export type EventId = string | number

/**
 * Base event interface
 */
export interface Event<T = unknown, P extends EventType = EventType> {
	id?: EventId
	type: P
	payload: T
	timestamp: EventTimestamp
	source?: string
	target?: string
	correlationId?: string
	bubbles?: boolean
	cancelable?: boolean
	defaultPrevented?: boolean
	propagationStopped?: boolean
}

/**
 * Typed event
 */
export type TypedEvent<K extends string, V = unknown> = Event<V, K> & { type: K }

/**
 * Event map type
 */
export type EventMap = Record<EventType, unknown>

/**
 * Event constructor
 */
export interface EventConstructor<E extends Event = Event> {
	new (type: string, payload?: unknown): E
	readonly type: string
}

// ============================================================================
// Emitter Types
// ============================================================================

/**
 * Event emitter interface
 */
export interface EventEmitter<T extends EventMap = EventMap> {
	emit: <K extends keyof T>(type: K, payload: T[K]) => void
	emitAsync: <K extends keyof T>(type: K, payload: T[K]) => Promise<void>
	on: <K extends keyof T>(
		type: K,
		handler: EventHandler<T[K]>,
		options?: ListenerOptions,
	) => EventSubscription
	once: <K extends keyof T>(
		type: K,
		handler: EventHandler<T[K]>,
	) => EventSubscription
	off: <K extends keyof T>(
		type: K,
		handler: EventHandler<T[K]>,
	) => boolean
	removeAllListeners: (type?: keyof T) => void
	listenerCount: (type: keyof T) => number
}

/**
 * Event handler function
 */
export type EventHandler<T = unknown> = (
	event: Event<T>,
) => void | boolean | Promise<void | boolean>

/**
 * Event listener with metadata
 */
export interface EventListener<T = unknown> {
	handler: EventHandler<T>
	once: boolean
	priority: number
	context?: unknown
	ignoreErrors?: boolean
}

/**
 * Event subscription
 */
export interface EventSubscription {
	unsubscribe: () => void
	closed: boolean
	eventType: EventType
}

/**
 * Listener options
 */
export interface ListenerOptions {
	once?: boolean
	priority?: number
	context?: unknown
	signal?: AbortSignal
	ignoreErrors?: boolean
}

// ============================================================================
// Event Bus Types
// ============================================================================

/**
 * Event bus interface
 */
export interface EventBus<T extends EventMap = EventMap> extends EventEmitter<T> {
	publish: <K extends Extract<keyof T, string>>(event: TypedEvent<K, T[K]>) => void
	subscribe: <K extends keyof T>(
		type: K,
		handler: EventHandler<T[K]>,
	) => EventSubscription
	unsubscribe: (subscription: EventSubscription) => void
	getHistory: <K extends keyof T>(type: K, limit?: number) => Event<T[K]>[]
	clearHistory: (type?: keyof T) => void
}

/**
 * Bus event with routing info
 */
export interface BusEvent<T = unknown> extends Event<T> {
	routingKey?: string
	headers?: Record<string, unknown>
	replyTo?: string
	correlationId?: string
	acked?: boolean
	nacked?: boolean
}

/**
 * Bus subscription
 */
export interface BusSubscription<T = unknown> {
	id: string
	queue?: string
	pattern?: string | RegExp
	handler: EventHandler<T>
	active: boolean
}

/**
 * Bus configuration
 */
export interface EventBusConfig {
	enableHistory?: boolean
	historySize?: number
	middleware?: EventBusMiddleware[]
	errorHandler?: (error: Error, event: Event) => void
}

/**
 * Event bus middleware
 */
export type EventBusMiddleware = (
	event: Event,
	next: (event: Event) => void,
) => void | Promise<void>

// ============================================================================
// Dispatcher Types
// ============================================================================

/**
 * Event dispatcher interface
 */
export interface EventDispatcher<T extends EventMap = EventMap> {
	dispatch: <K extends Extract<keyof T, string>>(event: TypedEvent<K, T[K]>) => DispatchResult<T[K]>
	dispatchAsync: <K extends Extract<keyof T, string>>(event: TypedEvent<K, T[K]>) => Promise<DispatchResult<T[K]>>
	registerHandler: <K extends keyof T>(
		type: K,
		handler: EventHandler<T[K]>,
	) => void
	unregisterHandler: <K extends keyof T>(
		type: K,
		handler: EventHandler<T[K]>,
	) => void
	hasHandler: (type: keyof T) => boolean
}

/**
 * Dispatch result
 */
export type DispatchResult<T = unknown>
	= | { dispatched: true, event: Event<T> }
	| { dispatched: false, reason: string }

/**
 * Dispatch error
 */
export interface DispatchError extends Error {
	event: Event
	phase: 'dispatch' | 'propagation' | 'handler'
	originalError?: Error
}

// ============================================================================
// Event Queue Types
// ============================================================================

/**
 * Event queue interface
 */
export interface EventQueue<T = unknown> {
	enqueue: (event: Event<T>) => void
	dequeue: () => Event<T> | undefined
	peek: () => Event<T> | undefined
	clear: () => void
	size: number
	empty: boolean
}

/**
 * Priority queue event
 */
export interface QueuedEvent<T = unknown> extends Event<T> {
	priority: QueuePriority
	enqueuedAt: number
	retryCount?: number
	maxRetries?: number
}

/**
 * Queue priority
 */
export type QueuePriority = 'high' | 'normal' | 'low' | number

/**
 * Queue configuration
 */
export interface QueueConfig {
	maxSize?: number
	priorityLevels?: number
	dropOldestWhenFull?: boolean
	onDrop?: <T>(event: Event<T>) => void
}

/**
 * Queue processor
 */
export interface QueueProcessor<T = unknown> {
	process: (event: Event<T>) => void | Promise<void>
	batchProcess: (events: Event<T>[]) => void | Promise<void>
	concurrency?: number
}

// ============================================================================
// Subscription Types
// ============================================================================

/**
 * Subscription interface
 */
export interface Subscription {
	id: string
	active: boolean
	unsubscribe: () => void
	pause: () => void
	resume: () => void
}

/**
 * Subscription options
 */
export interface SubscriptionOptions<T = unknown> {
	filter?: SubscriptionFilter<T>
	transform?: (event: Event<T>) => unknown
	bufferSize?: number
	bufferTime?: number
}

/**
 * Subscription filter
 */
export type SubscriptionFilter<T = unknown> = (
	event: Event<T>,
) => boolean

/**
 * Subscription group
 */
export interface SubscriptionGroup {
	subscriptions: Subscription[]
	unsubscribeAll: () => void
	pauseAll: () => void
	resumeAll: () => void
}

/**
 * Subscription manager
 */
export interface SubscriptionManager {
	create: <T>(options: SubscriptionOptions<T>) => Subscription
	get: (id: string) => Subscription | undefined
	remove: (id: string) => void
	removeAll: () => void
	getActive: () => Subscription[]
}

// ============================================================================
// Pattern Types
// ============================================================================

/**
 * Event pattern (string or regex)
 */
export type EventPattern = string | RegExp

/**
 * Pattern match result
 */
export interface PatternMatch<T = unknown> {
	pattern: EventPattern
	event: Event<T>
	matches: boolean
	captures?: Record<string, string>
}

/**
 * Pattern result
 */
export interface PatternResult<T = unknown> {
	pattern: EventPattern
	events: Event<T>[]
	count: number
}

/**
 * Pattern matcher
 */
export type PatternMatcher = (
	pattern: EventPattern,
	type: EventType,
) => boolean

/**
 * Pattern subscription
 */
export interface PatternSubscription<T = unknown> {
	pattern: EventPattern
	handler: EventHandler<T>
	matcher?: PatternMatcher
}

// ============================================================================
// Aggregation Types
// ============================================================================

/**
 * Event aggregator interface
 */
export interface EventAggregator<T extends EventMap = EventMap> {
	aggregate: <K extends keyof T>(
		type: K,
		window: AggregationWindow,
	) => AggregatedEvent<T[K]>[]
	getAggregates: <K extends keyof T>(type: K) => AggregatedEvent<T[K]>[]
	clearAggregates: (type?: keyof T) => void
}

/**
 * Aggregated event
 */
export interface AggregatedEvent<T = unknown> {
	type: EventType
	events: Event<T>[]
	count: number
	windowStart: number
	windowEnd: number
	aggregation: AggregationType
	value?: unknown
}

/**
 * Aggregation window
 */
export type AggregationWindow = number // milliseconds

/**
 * Aggregation type
 */
export type AggregationType
	= | 'count'
	| 'sum'
	| 'average'
	| 'min'
	| 'max'
	| 'first'
	| 'last'
	| 'collect'

/**
 * Aggregation configuration
 */
export interface AggregationConfig<T = unknown> {
	type: AggregationType
	window: AggregationWindow
	property?: keyof T | ((event: Event<T>) => number)
	emitOn: 'interval' | 'threshold' | 'both'
	threshold?: number
}

// ============================================================================
// History Types
// ============================================================================

/**
 * Event history interface
 */
export interface EventHistory<T = unknown> {
	push: (event: Event<T>) => void
	get: (index: number) => Event<T> | undefined
	getRange: (start: number, end: number) => Event<T>[]
	find: (predicate: (event: Event<T>) => boolean) => Event<T> | undefined
	findAll: (predicate: (event: Event<T>) => boolean) => Event<T>[]
	clear: () => void
	size: number
	maxSize: number
}

/**
 * History entry
 */
export interface HistoryEntry<T = unknown> {
	event: Event<T>
	index: number
	recordedAt: number
	metadata?: Record<string, unknown>
}

/**
 * Replay options
 */
export interface ReplayOptions<T = unknown> {
	from?: number // timestamp or index
	to?: number // timestamp or index
	filter?: (event: Event<T>) => boolean
	speed?: number
	target?: EventEmitter
}

/**
 * Replay result
 */
export interface ReplayResult {
	eventsReplayed: number
	duration: number
	errors: Error[]
}

// ============================================================================
// Propagation Types
// ============================================================================

/**
 * Propagation phase
 */
export type PropagationPhase
	= | 'capturing'
	| 'at-target'
	| 'bubbling'

/**
 * Propagation path
 */
export interface PropagationPath {
	target: string
	ancestors: string[]
	phase: PropagationPhase
	currentTarget: string
}

/**
 * Propagation controller
 */
export interface PropagationController {
	stopPropagation: () => void
	stopImmediatePropagation: () => void
	preventDefault: () => void
	isPropagationStopped: () => boolean
	isImmediatePropagationStopped: () => boolean
	isDefaultPrevented: () => boolean
}

// ============================================================================
// Handler Types
// ============================================================================

/**
 * Sync event handler
 */
export type SyncEventHandler<T = unknown> = (event: Event<T>) => void

/**
 * Async event handler
 */
export type AsyncEventHandler<T = unknown> = (event: Event<T>) => Promise<void>

/**
 * Conditional handler
 */
export interface ConditionalHandler<T = unknown> {
	condition: (event: Event<T>) => boolean
	handler: EventHandler<T>
}

/**
 * Chained handler
 */
export interface ChainedHandler<T = unknown> {
	handlers: EventHandler<T>[]
	execute: 'parallel' | 'sequential' | 'race'
}

/**
 * Handler with error handling
 */
export interface SafeHandler<T = unknown> {
	handler: EventHandler<T>
	onError: (error: Error, event: Event<T>) => void
	retryCount?: number
}

// ============================================================================
// Event Target Types
// ============================================================================

/**
 * Event target interface
 */
export interface EventTarget<T extends EventMap = EventMap> {
	addEventListener: <K extends keyof T>(
		type: K,
		listener: EventHandler<T[K]>,
		options?: AddEventListenerOptions,
	) => void
	removeEventListener: <K extends keyof T>(
		type: K,
		listener: EventHandler<T[K]>,
	) => void
	dispatchEvent: <K extends Extract<keyof T, string>>(event: TypedEvent<K, T[K]>) => boolean
}

/**
 * Add event listener options
 */
export interface AddEventListenerOptions extends ListenerOptions {
	capture?: boolean
	passive?: boolean
}

// ============================================================================
// Domain Events
// ============================================================================

/**
 * Domain event interface (event system)
 */
export interface EventSystemDomainEvent<A = string, T = unknown> extends Event<T> {
	aggregateId: A
	aggregateType: string
	version: number
}

/**
 * Domain event handler
 */
export type EventSystemDomainEventHandler<A, T = unknown> = (
	event: EventSystemDomainEvent<A, T>,
) => void | Promise<void>

/**
 * Event sourced aggregate
 */
export interface EventSourcedAggregate<I = string> {
	id: I
	version: number
	uncommittedEvents: EventSystemDomainEvent<I>[]
	applyEvent: <T>(event: EventSystemDomainEvent<I, T>) => void
}

// ============================================================================
// Event Decorators
// ============================================================================

/**
 * Event handler decorator options
 */
export interface HandlerDecoratorOptions {
	debounce?: number
	throttle?: number
	once?: boolean
	priority?: number
	filter?: (event: Event) => boolean
	transform?: (event: Event) => Event
	catch?: (error: Error, event: Event) => void
}

/**
 * Event metadata
 */
export interface EventMetadata {
	type: EventType
	description?: string
	schema?: unknown
	version?: string
	deprecated?: boolean
	deprecationMessage?: string
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Event name from handler
 */
export type EventNameFromHandler<H> = H extends EventHandler<infer T>
	? T extends Event<unknown, infer K>
		? K
		: never
	: never

/**
 * Payload type from event
 */
export type PayloadFromEvent<E> = E extends Event<infer P> ? P : never

/**
 * Event types from map
 */
export type EventTypes<T extends EventMap> = keyof T

/**
 * Extract event payload
 */
export type ExtractPayload<M extends EventMap, K extends keyof M> = M[K]

/**
 * Create typed event
 */
export type CreateEvent<K extends string, V> = TypedEvent<K, V>

/**
 * Event handler map
 */
export type EventHandlerMap<T extends EventMap> = {
	[K in keyof T]?: EventHandler<T[K]>[]
}

/**
 * Wildcard handler
 */
export type WildcardHandler<T extends EventMap> = (
	type: keyof T,
	event: Event<T[keyof T]>,
) => void | Promise<void>
