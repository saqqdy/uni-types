/**
 * WebSocket & Real-Time Types
 *
 * Types for real-time communication with WebSocket.
 */

// ============================================================================
// WebSocket Types
// ============================================================================

/**
 * WebSocket message type
 */
export interface WebSocketMessage<T = unknown> {
	type: string
	payload: T
	timestamp?: number
	id?: string
}

/**
 * WebSocket event type
 */
export interface WebSocketEvent<T = unknown> {
	event: string
	data: T
	timestamp: number
}

/**
 * WebSocket handler function type
 */
export type WebSocketHandler<T = unknown> = (
	message: WebSocketMessage<T>,
) => void | Promise<void>

/**
 * WebSocket connection state
 */
export type WebSocketState = 'connecting' | 'connected' | 'disconnecting' | 'disconnected'

/**
 * WebSocket options
 */
export interface WebSocketOptions {
	url: string
	protocols?: string | string[]
	reconnect?: boolean
	reconnectInterval?: number
	maxReconnectAttempts?: number
}

/**
 * WebSocket configuration
 */
export type WebSocketConfig<T = unknown> = WebSocketOptions & {
	onMessage?: WebSocketHandler<T>
	onOpen?: () => void
	onClose?: (event: { code: number, reason: string }) => void
	onError?: (error: Error) => void
}

// ============================================================================
// Event Types
// ============================================================================

/**
 * Event map type
 */
export type EventMap<T = Record<string, unknown>> = {
	[K in keyof T]: T[K]
}

/**
 * Event handler function type
 */
export type EventHandler<T, E extends keyof T = keyof T> = (
	event: T[E],
) => void | Promise<void>

/**
 * Event payload type
 */
export type EventPayload<T, E extends keyof T = keyof T> = T[E]

/**
 * Event listener options
 */
export interface EventListenerOptions {
	once?: boolean
	capture?: boolean
	passive?: boolean
}

/**
 * Event emitter type
 */
export interface EventEmitter<T extends EventMap> {
	on: <E extends keyof T>(event: E, handler: EventHandler<T, E>) => void
	off: <E extends keyof T>(event: E, handler: EventHandler<T, E>) => void
	emit: <E extends keyof T>(event: E, payload: T[E]) => void
	once: <E extends keyof T>(event: E, handler: EventHandler<T, E>) => void
}

/**
 * Typed event target
 */
export interface TypedEventTarget<T extends EventMap> {
	addEventListener: <E extends keyof T>(
		event: E,
		handler: EventHandler<T, E>,
		options?: EventListenerOptions,
	) => void
	removeEventListener: <E extends keyof T>(
		event: E,
		handler: EventHandler<T, E>,
	) => void
	dispatchEvent: <E extends keyof T>(event: E, payload: T[E]) => boolean
}

// ============================================================================
// Real-Time Types
// ============================================================================

/**
 * Real-time channel type
 */
export interface RealTimeChannel<T = unknown> {
	name: string
	subscribe: (handler: (message: T) => void) => () => void
	publish: (message: T) => void
	unsubscribe: (handler: (message: T) => void) => void
	close: () => void
}

/**
 * Real-time subscription type
 */
export interface RealTimeSubscription<T = unknown> {
	id: string
	channel: string
	handler: (message: T) => void
	unsubscribe: () => void
	active: boolean
}

/**
 * Real-time message type
 */
export interface RealTimeMessage<T = unknown> {
	channel: string
	data: T
	timestamp: number
	subscriptionId?: string
}

/**
 * Real-time client type
 */
export interface RealTimeClient<T extends EventMap = Record<string, unknown>> {
	connect: () => Promise<void>
	disconnect: () => Promise<void>
	subscribe: <E extends keyof T>(
		channel: E,
		handler: EventHandler<T, E>,
	) => RealTimeSubscription<T[E]>
	publish: <E extends keyof T>(channel: E, data: T[E]) => void
	isConnected: boolean
}

// ============================================================================
// Stream Types
// ============================================================================

/**
 * Stream type
 */
export interface Stream<T = unknown> {
	[Symbol.asyncIterator]: () => AsyncIterator<T>
	readable: boolean
	closed: boolean
}

/**
 * Stream chunk type
 */
export interface StreamChunk<T = unknown> {
	value: T
	done: boolean
}

/**
 * Stream reader type
 */
export interface StreamReader<T = unknown> {
	read: () => Promise<StreamChunk<T>>
	releaseLock: () => void
	closed: boolean
}

/**
 * Stream writer type
 */
export interface StreamWriter<T = unknown> {
	write: (chunk: T) => Promise<void>
	close: () => Promise<void>
	abort: (reason?: unknown) => Promise<void>
	closed: boolean
	desiredSize: number | null
}

/**
 * Readable stream type
 */
export interface ReadableStreamLike<T = unknown> {
	getReader: () => StreamReader<T>
	locked: boolean
	cancel: (reason?: unknown) => Promise<void>
	pipeThrough: <R>(transform: unknown) => ReadableStreamLike<R>
	pipeTo: (dest: WritableStreamLike<T>) => Promise<void>
	tee: () => [ReadableStreamLike<T>, ReadableStreamLike<T>]
}

/**
 * Writable stream type
 */
export interface WritableStreamLike<T = unknown> {
	getWriter: () => StreamWriter<T>
	locked: boolean
	abort: (reason?: unknown) => Promise<void>
	close: () => Promise<void>
}

/**
 * Transform stream type
 */
export interface TransformStreamLike<I = unknown, O = unknown> {
	readable: ReadableStreamLike<O>
	writable: WritableStreamLike<I>
}

// ============================================================================
// Pub/Sub Types
// ============================================================================

/**
 * Pub/Sub type
 */
export interface PubSub<T = unknown> {
	publish: (topic: string, message: T) => void
	subscribe: (topic: string, handler: (message: T) => void) => () => void
	unsubscribe: (topic: string, handler?: (message: T) => void) => void
	topics: string[]
}

/**
 * Publisher type
 */
export interface Publisher<T = unknown> {
	publish: (topic: string, message: T) => void
}

/**
 * Subscriber type
 */
export interface Subscriber<T = unknown> {
	subscribe: (topic: string, handler: (message: T) => void) => () => void
	unsubscribe: (topic: string, handler?: (message: T) => void) => void
}

/**
 * Subscription options type
 */
export interface SubscriptionOptions<T = unknown> {
	topic: string
	handler: (message: T) => void
	once?: boolean
	filter?: (message: T) => boolean
}
