/**
 * Type-Level Macros
 *
 * A macro system for type transformations at compile time.
 * Provides rule-based type expansion and template generation.
 */

// ============== Macro Core ==============

/**
 * Macro - Core macro type
 */
export interface Macro<T = unknown> {
	readonly _input: T
	readonly _name: string
	readonly _version: string
}

/**
 * MacroRule - A single rewrite rule
 */
export interface MacroRule<Input = unknown, Output = unknown> {
	readonly pattern: Input
	readonly replacement: Output
	readonly priority?: number
}

/**
 * MacroExpand - Expand a macro one step
 */
export type MacroExpand<T, Rules extends MacroRule[]> = T extends Rules[number]['pattern']
	? Extract<Rules[number], { pattern: T }>['replacement']
	: T

/**
 * MacroExpandAll - Fully expand a macro until fixed point
 */
export type MacroExpandAll<T, Rules extends MacroRule[], Seen extends unknown[] = []>
	= T extends Seen[number]
		? T
		: MacroExpand<T, Rules> extends infer U
			? TypeEq<U, T> extends true
				? T
				: MacroExpandAll<U, Rules, [...Seen, T]>
			: never

// ============== Built-in Macros ==============

/**
 * Inline - Inline a type (remove indirection)
 */
export type Inline<T> = T extends infer U ? { [K in keyof U]: U[K] } : never

/**
 * Specialize - Specialize a generic type
 */
export type Specialize<T, Args extends unknown[]> = T extends (...args: Args) => infer R
	? R
	: T extends { _generic: (...args: Args) => infer R }
		? R
		: T

/**
 * Generic - Mark a type as generic
 */
export interface Generic<T = unknown, Params extends unknown[] = unknown[]> {
	readonly _body: T
	readonly _params: Params
}

/**
 * Template - Type-level template
 */
export interface Template<T = unknown> {
	readonly _name: string
	readonly _params: Record<string, unknown>
	readonly _body: T
}

// ============== Macro Definition ==============

/**
 * DefineMacro - Define a new macro
 */
export interface DefineMacro<T = unknown> {
	readonly name: string
	readonly parameters: string[]
	readonly body: T
	readonly rules: MacroRule[]
}

/**
 * LoadMacro - Load a macro definition
 */
export type LoadMacro<D extends DefineMacro> = Macro<D['body']> & {
	readonly _name: D['name']
	readonly _rules: D['rules']
}

/**
 * CombineMacro - Combine two macros
 */
export type CombineMacro<A extends Macro, B extends Macro> = Macro<
	A['_input'] & B['_input']
> & { readonly _names: [A['_name'], B['_name']] }

// ============== Rewrite Utilities ==============

/**
 * RewriteRule - Type-level rewrite rule
 */
export type RewriteRule<From, To> = MacroRule<From, To>

/**
 * ApplyRule - Apply a single rewrite rule
 */
export type ApplyRule<T, R extends RewriteRule<unknown, unknown>>
	= T extends R['pattern'] ? R['replacement'] : T

/**
 * ApplyRules - Apply multiple rules in order
 */
export type ApplyRules<T, Rules extends RewriteRule<unknown, unknown>[]>
	= Rules extends [infer First, ...infer Rest]
		? First extends RewriteRule<unknown, unknown>
			? Rest extends RewriteRule<unknown, unknown>[]
				? ApplyRules<ApplyRule<T, First>, Rest>
				: ApplyRule<T, First>
			: T
		: T

// ============== Combinators ==============

/**
 * MacroCompose - Compose two macros
 */
export type MacroCompose<A extends Macro, B extends Macro> = Macro<
	B['_input'] extends A['_input'] ? B['_input'] : never
>

/**
 * MacroPipe - Pipe through macros
 */
export type MacroPipe<T, Ms extends Macro[]> = Ms extends [infer First, ...infer Rest]
	? First extends Macro
		? Rest extends Macro[]
			? MacroPipe<First['_input'], Rest>
			: First['_input']
		: T
	: T

/**
 * MacroFlip - Flip macro arguments
 */
export type MacroFlip<A, B> = [B, A]

/**
 * MacroPartial - Partially apply a macro
 */
export type MacroPartial<M extends Macro, First> = M extends Macro<infer T>
	? Macro<Omit<T, keyof First> & First>
	: never

// ============== Debugging ==============

/**
 * MacroDebug - Debug info
 */
export interface MacroDebug<T> {
	readonly _original: T
	readonly _expanded: T
	readonly _steps: number
	readonly _rulesApplied: string[]
}

/**
 * MacroTrace - Trace macro expansion
 */
export type MacroTrace<T, Rules extends MacroRule[]> = MacroDebug<T> & {
	readonly _finalResult: MacroExpandAll<T, Rules>
}

/**
 * TypeEq - Internal equality helper
 */
type TypeEq<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
	? true
	: false
