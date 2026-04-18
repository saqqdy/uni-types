/**
 * Type-level state machine utilities
 *
 * This module provides types for modeling state machines:
 * - StateMachine: Define state machine with states and transitions
 * - Transition: Define state transitions
 * - State guards and utilities
 */

// ============================================================================
// State Machine Core Types
// ============================================================================

/**
 * Define a state machine
 *
 * @example
 * ```ts
 * type TrafficLight = StateMachine<{
 *   states: { red: {}; yellow: {}; green: {} }
 *   initial: 'red'
 *   transitions: {
 *     next: { red: 'green'; green: 'yellow'; yellow: 'red' }
 *   }
 * }>
 * ```
 */
export type StateMachine<
	Config extends {
		states: Record<string, any>
		initial: keyof Config['states']
		transitions: Record<string, Record<keyof Config['states'], keyof Config['states']>>
	},
> = {
	states: Config['states']
	current: Config['initial']
	transitions: Config['transitions']
}

/**
 * Define a state with data
 *
 * @example
 * ```ts
 * type Loading = State<'loading', { progress: number }>
 * ```
 */
export type State<S extends string, Data = {}> = { state: S; data: Data }

/**
 * Define a transition
 *
 * @example
 * ```ts
 * type NextTransition = Transition<'next', 'red', 'green'>
 * ```
 */
export type Transition<Event extends string, From extends string, To extends string> = {
	event: Event
	from: From
	to: To
}

// ============================================================================
// State Utilities
// ============================================================================

/**
 * Get current state type
 *
 * @example
 * ```ts
 * CurrentState<TrafficLight>  // 'red'
 * ```
 */
export type CurrentState<SM extends { current: string }> = SM['current']

/**
 * Get next state after an event
 *
 * @example
 * ```ts
 * NextState<TrafficLight, 'next'>  // 'green'
 * ```
 */
export type NextState<
	SM extends {
		current: string
		transitions: Record<string, Record<string, string>>
	},
	E extends keyof SM['transitions'],
> = SM['transitions'][E] extends Record<string, string>
	? SM['transitions'][E][SM['current']]
	: never

/**
 * Get all valid transitions from current state
 *
 * @example
 * ```ts
 * ValidTransitions<TrafficLight>  // ['next']
 * ```
 */
export type ValidTransitions<
	SM extends {
		current: string
		transitions: Record<string, Record<string, string>>
	},
> = {
	[K in keyof SM['transitions']]: SM['transitions'][K] extends Record<string, string>
		? SM['current'] extends keyof SM['transitions'][K]
			? K
			: never
		: never
}[keyof SM['transitions']] extends infer T
	? T extends never
		? never
		: T
	: never

/**
 * Check if a transition is valid from current state
 *
 * @example
 * ```ts
 * CanTransition<TrafficLight, 'next'>  // true
 * ```
 */
export type CanTransition<
	SM extends {
		current: string
		transitions: Record<string, Record<string, string>>
	},
	E extends string,
> = E extends keyof SM['transitions']
	? SM['current'] extends keyof SM['transitions'][E]
		? true
		: false
	: false

/**
 * Check if current state is terminal (no outgoing transitions)
 *
 * @example
 * ```ts
 * IsTerminal<{ current: 'done'; transitions: {} }>  // true
 * ```
 */
export type IsTerminal<
	SM extends {
		current: string
		transitions: Record<string, Record<string, string>>
	},
> = {
	[K in keyof SM['transitions']]: SM['current'] extends keyof SM['transitions'][K] ? true : never
}[keyof SM['transitions']] extends never
	? true
	: false

// ============================================================================
// State Machine Builder Types
// ============================================================================

/**
 * Build state machine from config
 *
 * @example
 * ```ts
 * type SM = BuildStateMachine<{
 *   states: ['idle', 'running', 'stopped']
 *   initial: 'idle'
 *   transitions: {
 *     start: { idle: 'running' }
 *     stop: { running: 'stopped' }
 *   }
 * }>
 * ```
 */
export type BuildStateMachine<Config extends MachineConfig> = {
	states: { [K in Config['states'][number]]: {} }
	current: Config['initial']
	transitions: Config['transitions']
}

export interface MachineConfig {
	states: string[]
	initial: string
	transitions: Record<string, Record<string, string>>
}

/**
 * Send event to state machine and get new state
 *
 * @example
 * ```ts
 * SendEvent<TrafficLight, 'next'>
 * // { current: 'green'; ... }
 * ```
 */
export type SendEvent<
	SM extends {
		current: string
		transitions: Record<string, Record<string, string>>
	},
	E extends keyof SM['transitions'],
> = Omit<SM, 'current'> & {
	current: NextState<SM, E>
}

/**
 * Get state history type
 *
 * @example
 * ```ts
 * StateHistory<TrafficLight>  // ('red' | 'green' | 'yellow')[]
 * ```
 */
export type StateHistory<SM extends { states: Record<string, any> }> = (
	| (keyof SM['states'] & string)
)[]
