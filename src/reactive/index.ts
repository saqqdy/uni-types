/**
 * Type-Level Reactive Programming
 *
 * Reactive programming type utilities.
 */

// ============================================================================
// Observable Types
// ============================================================================

/**
 * Observable type
 */
export interface Observable<T> {
	subscribe: (observer: Observer<T>) => Subscription
	pipe: <R>(...operators: OperatorFunction<T, R>[]) => Observable<R>
}

/**
 * Observer type
 */
export interface Observer<T> {
	next: (value: T) => void
	error?: (error: Error) => void
	complete?: () => void
}

/**
 * Partial observer
 */
export type PartialObserver<T>
	= | ((value: T) => void)
	| Observer<T>

/**
 * Subscription type
 */
export interface Subscription {
	unsubscribe: () => void
	add: (subscription: Subscription) => Subscription
	remove: (subscription: Subscription) => void
	closed: boolean
}

/**
 * Subscription options
 */
export interface SubscriptionOptions {
	onUnsubscribe?: () => void
	synchronized?: boolean
}

/**
 * Subscription result
 */
export interface SubscriptionResult<T> {
	subscription: Subscription
	value?: T
}

// ============================================================================
// Subject Types
// ============================================================================

/**
 * Subject type (observable and observer)
 */
export interface Subject<T> extends Observable<T> {
	next: (value: T) => void
	error: (error: Error) => void
	complete: () => void
	value: T | undefined
	closed: boolean
	hasError: boolean
}

/**
 * Behavior subject (has current value)
 */
export interface BehaviorSubject<T> extends Subject<T> {
	value: T
	getValue: () => T
}

/**
 * Replay subject (replays values to new subscribers)
 */
export interface ReplaySubject<T> extends Subject<T> {
	bufferSize: number
	windowTime?: number
}

/**
 * Async subject (emits last value on complete)
 */
export interface AsyncSubject<T> extends Subject<T> {
	value: T | undefined
}

/**
 * Subject factory options
 */
export interface SubjectOptions<T> {
	initialValue?: T
	bufferSize?: number
	windowTime?: number
	pipe?: OperatorFunction<T, T>[]
}

// ============================================================================
// Operator Types
// ============================================================================

/**
 * Operator function type
 */
export type OperatorFunction<T, R> = (source: Observable<T>) => Observable<R>

/**
 * Unary function operator
 */
export type UnaryFunction<T, R> = (source: T) => R

/**
 * Map operator options
 */
export type MapOperator<T, R> = (value: T) => R

/**
 * Filter predicate
 */
export type FilterOperator<T> = (value: T, index: number) => boolean

/**
 * Reduce operator
 */
export type ReduceOperator<T, R> = (
	accumulator: R,
	value: T,
	index: number,
) => R

/**
 * Merge operator type
 */
export type MergeOperator<T> = (...sources: Observable<T>[]) => Observable<T>

/**
 * Take operator options
 */
export interface TakeOptions {
	count: number
}

/**
 * Take until operator
 */
export type TakeUntilOperator = (notifier: Observable<unknown>) => OperatorFunction<unknown, unknown>

/**
 * Debounce operator options
 */
export interface DebounceOptions {
	dueTime: number
}

/**
 * Throttle operator options
 */
export interface ThrottleOptions {
	duration: number
	leading?: boolean
	trailing?: boolean
}

/**
 * Sample operator options
 */
export interface SampleOptions {
	notifier: Observable<unknown>
}

/**
 * Buffer operator options
 */
export interface BufferOptions {
	bufferBoundaries: Observable<unknown>
}

/**
 * Catch error operator
 */
export type CatchErrorOperator<T> = (
	handler: (error: Error, caught: Observable<T>) => Observable<T>,
) => OperatorFunction<T, T>

/**
 * Retry operator options
 */
export interface RetryOptions {
	count: number
	delay?: number | ((error: Error, retryCount: number) => number)
	resetOnSuccess?: boolean
}

/**
 * Common operators
 */
export type OperatorName
	= | 'map'
	| 'filter'
	| 'reduce'
	| 'scan'
	| 'take'
	| 'takeUntil'
	| 'takeWhile'
	| 'skip'
	| 'skipUntil'
	| 'skipWhile'
	| 'debounce'
	| 'debounceTime'
	| 'throttle'
	| 'throttleTime'
	| 'sample'
	| 'sampleTime'
	| 'buffer'
	| 'bufferTime'
	| 'bufferCount'
	| 'mergeMap'
	| 'switchMap'
	| 'concatMap'
	| 'exhaustMap'
	| 'mergeAll'
	| 'switchAll'
	| 'concatAll'
	| 'combineLatest'
	| 'zip'
	| 'forkJoin'
	| 'race'
	| 'catchError'
	| 'retry'
	| 'retryWhen'
	| 'finalize'
	| 'tap'
	| 'delay'
	| 'delayWhen'
	| 'timeout'
	| 'timeoutWith'
	| 'distinctUntilChanged'
	| 'distinctUntilKeyChanged'
	| 'share'
	| 'shareReplay'
	| 'publish'
	| 'refCount'
	| 'startWith'
	| 'endWith'
	| 'defaultIfEmpty'
	| 'every'
	| 'find'
	| 'findIndex'
	| 'first'
	| 'last'
	| 'single'
	| 'elementAt'
	| 'min'
	| 'max'
	| 'count'
	| 'audit'
	| 'auditTime'
	| 'pairwise'
	| 'partition'
	| 'pluck'
	| 'repeat'
	| 'repeatWhen'
	| 'expand'
	| 'groupBy'
	| 'window'
	| 'windowTime'
	| 'windowCount'
	| 'toArray'

// ============================================================================
// Stream Types
// ============================================================================

/**
 * Stream type
 */
export interface Stream<T> extends Observable<T> {
	readonly closed: boolean
	abort: () => void
	[Symbol.asyncIterator]: () => AsyncIterator<T>
}

/**
 * Stream value with metadata
 */
export interface StreamValue<T> {
	value: T
	index: number
	timestamp: number
}

/**
 * Stream error type
 */
export interface StreamError {
	error: Error
	index: number
}

/**
 * Stream completion
 */
export type StreamComplete = void

// ============================================================================
// Signal Types
// ============================================================================

/**
 * Signal type (reactive primitive)
 */
export interface Signal<T> {
	value: T
	subscribe: (callback: (value: T) => void) => () => void
	readonly: () => ReadonlySignal<T>
}

/**
 * Readonly signal
 */
export interface ReadonlySignal<T> {
	readonly value: T
	subscribe: (callback: (value: T) => void) => () => void
}

/**
 * Writable signal
 */
export interface WritableSignal<T> extends Signal<T> {
	set: (value: T) => void
	update: (updater: (value: T) => T) => void
}

/**
 * Signal value type
 */
export type SignalValue<T> = T extends Signal<infer V> ? V : T

/**
 * Computed signal
 */
export interface Computed<T> extends ReadonlySignal<T> {
	effect: () => void
	dependencies: Set<Signal<unknown>>
}

/**
 * Effect type
 */
export interface Effect {
	execute: () => void | (() => void)
	cleanup?: () => void
	dependencies?: Set<Signal<unknown>>
	dispose: () => void
}

/**
 * Effect options
 */
export interface EffectOptions {
	scheduler?: (execute: () => void) => void
	lazy?: boolean
}

/**
 * Signal options
 */
export interface SignalOptions<T> {
	equal?: (a: T, b: T) => boolean
}

/**
 * Signal effect callback
 */
export type EffectCallback = () => void | (() => void)

// ============================================================================
// Scheduler Types
// ============================================================================

/**
 * Scheduler type
 */
export interface Scheduler {
	schedule: <T>(work: () => T) => void
	now: () => number
}

/**
 * Scheduler action
 */
export interface SchedulerAction<T = unknown> {
	work: () => T
	delay?: number
	period?: number
	state?: T
}

/**
 * Scheduler period (milliseconds)
 */
export type SchedulerPeriod = number

/**
 * Scheduler like RxJS
 */
export interface SchedulerLike {
	schedule: <T>(work: () => T, delay?: number) => Subscription
	now: () => number
}

/**
 * Animation frame scheduler
 */
export interface AnimationFrameScheduler extends SchedulerLike {
	schedule: (work: () => void) => Subscription
}

/**
 * Queue scheduler type
 */
export interface QueueScheduler extends SchedulerLike {
	schedule: <T>(work: () => T, delay?: number, state?: T) => Subscription
}

// ============================================================================
// Backpressure Types
// ============================================================================

/**
 * Backpressure strategy
 */
export type BackpressureStrategy
	= | 'drop' // Drop new items when buffer is full
	| 'buffer' // Buffer items until processed
	| 'error' // Throw error when buffer is full
	| 'latest' // Only keep latest item
	| 'block' // Block producer until space available

/**
 * Backpressure configuration
 */
export interface BackpressureConfig {
	strategy: BackpressureStrategy
	bufferSize?: number
	onDrop?: <T>(item: T) => void
	onOverflow?: (size: number) => void
}

/**
 * Backpressure state
 */
export interface BackpressureState {
	bufferSize: number
	currentSize: number
	droppedItems: number
	blocked: boolean
}

// ============================================================================
// Flow Types
// ============================================================================

/**
 * Flow type
 */
export interface Flow<T> {
	state: FlowState
	emit: (value: T) => void
	collect: () => T[]
	take: (n: number) => Flow<T>
	filter: (predicate: (value: T) => boolean) => Flow<T>
	map: <R>(mapper: (value: T) => R) => Flow<R>
}

/**
 * Flow state
 */
export type FlowState
	= | 'idle'
	| 'running'
	| 'paused'
	| 'completed'
	| 'error'

/**
 * Flow controller
 */
export interface FlowController<T> {
	start: () => void
	pause: () => void
	resume: () => void
	cancel: () => void
	state: FlowState
	result?: T
	error?: Error
}

/**
 * Cold flow (lazy, starts on subscribe)
 */
export type ColdFlow<T> = Flow<T> & { hot: false }

/**
 * Hot flow (eager, runs regardless of subscription)
 */
export type HotFlow<T> = Flow<T> & { hot: true }

// ============================================================================
// Channel Types
// ============================================================================

/**
 * Channel type
 */
export interface Channel<T> {
	send: (value: T) => Promise<void> | void
	receive: () => Promise<T>
	close: () => void
	closed: boolean
}

/**
 * Channel buffer
 */
export type ChannelBuffer<T> = T[]

/**
 * Buffered channel
 */
export interface BufferedChannel<T> extends Channel<T> {
	capacity: number
	size: number
	full: boolean
	empty: boolean
}

/**
 * Channel configuration
 */
export interface ChannelConfig<T> {
	capacity?: number
	buffer?: ChannelBuffer<T>
	backpressure?: BackpressureStrategy
	onClose?: () => void
}

/**
 * Selectable channel
 */
export interface SelectableChannel<T> extends Channel<T> {
	select: () => Promise<{ value: T, channel: Channel<T> }>
	ready: () => boolean
}

// ============================================================================
// Combinator Types
// ============================================================================

/**
 * Combine latest result
 */
export type CombineLatest<T extends readonly Observable<unknown>[]> = {
	[K in keyof T]: T[K] extends Observable<infer V> ? V : never
}

/**
 * Zip result
 */
export type Zip<T extends readonly Observable<unknown>[]> = {
	[K in keyof T]: T[K] extends Observable<infer V> ? V : never
}[]

/**
 * Fork join result
 */
export type ForkJoinResult<T extends readonly Observable<unknown>[]> = {
	[K in keyof T]: T[K] extends Observable<infer V> ? V : never
}

/**
 * Merge options
 */
export interface MergeConfig {
	concurrent?: number
}

/**
 * Combine options
 */
export interface CombineConfig {
	waitForAll?: boolean
}

// ============================================================================
// Reactive Value Types
// ============================================================================

/**
 * Reactive primitive
 */
export type ReactivePrimitive<T>
	= | Signal<T>
	| Observable<T>
	| Promise<T>
	| T

/**
 * Extract value from reactive
 */
export type ReactiveValue<T> = T extends Signal<infer V>
	? V
	: T extends Observable<infer V>
		? V
		: T extends Promise<infer V>
			? V
			: T

/**
 * Reactive array
 */
export type ReactiveArray<T> = T extends ReadonlyArray<infer U> ? ReactivePrimitive<U>[] : never

/**
 * Reactive object
 */
export type ReactiveObject<T extends Record<string, unknown>> = {
	[K in keyof T]: ReactivePrimitive<T[K]>
}

// ============================================================================
// Store Types
// ============================================================================

/**
 * Reactive store
 */
export interface ReactiveStore<T> {
	state: T
	subscribe: (listener: (state: T) => void) => () => void
	update: (updater: (state: T) => T) => void
	setState: (newState: T) => void
	reset: () => void
}

/**
 * Store action
 */
export interface StoreAction<S, P = unknown> {
	type: string
	payload?: P
	state: S
}

/**
 * Store reducer
 */
export type StoreReducer<S, A extends StoreAction<S>> = (state: S, action: A) => S

/**
 * Store middleware
 */
export type StoreMiddleware<S, A extends StoreAction<S>> = (
	state: S,
	action: A,
	next: (state: S, action: A) => S,
) => S

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Observable from event
 */
export type FromEvent<E extends Event> = (target: EventTarget, type: string) => Observable<E>

/**
 * Observable from promise
 */
export type FromPromise<T> = (promise: Promise<T>) => Observable<T>

/**
 * Interval observable
 */
export type IntervalObservable = (period: number) => Observable<number>

/**
 * Timer observable
 */
export type TimerObservable = (dueTime: number, period?: number) => Observable<number>

/**
 * Empty observable
 */
export type EmptyObservable = () => Observable<never>

/**
 * Never observable
 */
export type NeverObservable = () => Observable<never>

/**
 * Throw observable
 */
export type ThrowObservable = (error: Error) => Observable<never>

/**
 * Of observable (from value)
 */
export type OfObservable<T> = (...values: T[]) => Observable<T>

/**
 * Range observable
 */
export type RangeObservable = (start: number, count: number) => Observable<number>

/**
 * Generate observable
 */
export type GenerateObservable<T> = (
	initialState: T,
	condition: (state: T) => boolean,
	iterate: (state: T) => T,
	scheduler?: SchedulerLike,
) => Observable<T>
