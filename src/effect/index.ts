/**
 * Effect System Preview
 *
 * Preview of the v2.0.0 effect system for tracking
 * side effects at the type level.
 */

// ============== Core Effect Types ==============

/**
 * EffectV2 - Core effect type (v2 preview)
 * Represents a computation that may produce side effects
 */
export interface EffectV2<T, E extends unknown[] = []> {
	/** The result type */
	readonly _output: T
	/** The effects produced */
	readonly _effects: E
}

/**
 * PureV2 - A computation with no side effects
 */
export type PureV2<T> = EffectV2<T, []>

/**
 * IOV2 - A computation that may perform IO
 */
export type IOV2<T> = EffectV2<T, ['io']>

// ============== Effect Tracking ==============

/**
 * TrackEffect - Track an effect on a computation
 */
export type TrackEffect<T, E> = T extends EffectV2<infer R, infer Es>
	? EffectV2<R, [...Es, E]>
	: EffectV2<T, [E]>

/**
 * EffectList - Get the list of effects from a computation
 */
export type EffectList<T> = T extends EffectV2<infer _R, infer Es>
	? Es
	: []

/**
 * EffectSafe - Check if a computation is effect-safe (no side effects)
 */
export type EffectSafe<T> = T extends PureV2<infer _R> ? true : false

/**
 * EffectfulV2 - Mark a type as having effects
 */
export type EffectfulV2<T, E extends unknown[] = ['unknown']> = EffectV2<T, E>

// ============== Effect Handlers ==============

/**
 * HandlerV2 - Effect handler type (v2 preview)
 */
export interface HandlerV2<E, T = unknown> {
	/** The effect being handled */
	readonly _effect: E
	/** The result type */
	readonly _result: T
	/** Handle the effect */
	handle: (effect: E) => T
}

/**
 * HandleV2 - Handle an effect in a computation
 */
export type HandleV2<T, E> = T extends EffectV2<infer R, infer Es>
	? EffectV2<R, Exclude<Es, E>>
	: never

/**
 * HandleAllV2 - Handle all effects in a computation
 */
export type HandleAllV2<T> = T extends EffectV2<infer R, infer _Es>
	? R
	: never

// ============== Effect Composition ==============

/**
 * EffectMap - Map over the result of an effectful computation
 */
export type EffectMap<T, F extends (value: unknown) => unknown>
	= T extends EffectV2<infer _R, infer Es>
		? EffectV2<ReturnType<F> extends infer U ? U : never, Es>
		: never

/**
 * EffectFlatMap - FlatMap over an effectful computation
 */
export type EffectFlatMap<T, F extends (value: unknown) => unknown>
	= T extends EffectV2<infer _R, infer Es1>
		? ReturnType<F> extends EffectV2<infer R2, infer Es2>
			? EffectV2<R2, [...Es1, ...Es2]>
			: never
		: never

/**
 * EffectSequence - Sequence multiple effectful computations
 */
export type EffectSequence<T extends unknown[]> = T extends [
	EffectV2<infer R, infer Es>,
	...infer Rest,
]
	? [R, ...EffectSequenceResult<Rest, Es>]
	: []

/**
 * Helper type for EffectSequence
 */
type EffectSequenceResult<T extends unknown[], Es extends unknown[]>
	= T extends [EffectV2<infer R, infer Es2>, ...infer Rest]
		? [R, ...EffectSequenceResult<Rest, [...Es, ...Es2]>]
		: []

// ============== Effect Types ==============

/**
 * Common effect types
 */
export type EffectTypeV2
	= | 'io'
	| 'async'
	| 'state'
	| 'error'
	| 'resource'
	| 'time'
	| 'network'
	| 'console'
	| 'random'
	| 'dom'

/**
 * IOEffect - IO side effect marker
 */
export type IOEffect = 'io'

/**
 * AsyncEffect - Async side effect marker
 */
export type AsyncEffect = 'async'

/**
 * StateEffect - State side effect marker
 */
export interface StateEffect<S = unknown> { state: S }

/**
 * ErrorEffect - Error side effect marker
 */
export interface ErrorEffect<E = unknown> { error: E }

// ============== Effect Runtime ==============

/**
 * EffectRuntime - Runtime configuration for effects
 */
export interface EffectRuntime {
	/** Enabled effect types */
	enabledEffects: EffectTypeV2[]
	/** Effect handlers */
	handlers: Map<string, HandlerV2<unknown>>
	/** Whether to track effects */
	trackEffects: boolean
}

/**
 * EffectConfig - Configuration for effect system
 */
export interface EffectConfig {
	/** Strict mode - all effects must be handled */
	strict: boolean
	/** Log unhandled effects */
	logUnhandled: boolean
	/** Maximum effect chain depth */
	maxDepth: number
}
