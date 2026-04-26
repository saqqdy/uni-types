/**
 * Type-Level Optimizer (v1.8.0)
 *
 * Type-level optimization utilities including:
 * - Optimization types
 * - Optimization rules
 * - Tree shaking
 * - Dead code elimination
 * - Inlining
 * - Constant folding
 * - Type minification
 * - Performance hints
 */

// ============================================================================
// Optimization Core Types
// ============================================================================

/**
 * Optimization type
 */
export interface Optimization<T = unknown> {
	name: string
	description?: string
	enabled: boolean
	priority: number
	apply: (input: T) => OptimizationResult<T>
}

/**
 * Optimization pass type
 */
export interface OptimizationPass<T = unknown> {
	name: string
	description?: string
	enabled: boolean
	runOnce?: boolean
	optimize: (input: T) => T
	stats?: OptimizationStats
}

/**
 * Optimization result type
 */
export interface OptimizationResult<T = unknown> {
	output: T
	changed: boolean
	stats: OptimizationStats
	suggestions?: PerformanceHint[]
}

/**
 | Optimization statistics
 */
export interface OptimizationStats {
	nodesProcessed: number
	nodesOptimized: number
	bytesSaved?: number
	timeMs: number
	cacheHits?: number
	cacheMisses?: number
}

/**
 | Optimization level
 */
export type OptimizationLevel = 0 | 1 | 2 | 3 | 'none' | 'basic' | 'standard' | 'aggressive' | 'size' | 'speed' | 'balanced'

/**
 * Optimization options
 */
export interface OptimizationOptions {
	level: OptimizationLevel
	debug?: boolean
	timeout?: number
	maxPasses?: number
	abortOnError?: boolean
	profile?: boolean
}

// ============================================================================
// Optimization Rules
// ============================================================================

/**
 * Optimization rule type
 */
export interface OptimizationRule<T = unknown> {
	name: string
	description?: string
	enabled: boolean
	pattern: RulePattern<T>
	replacement: RuleReplacement<T>
	condition?: RuleCondition<T>
	priority?: number
}

/**
 | Rule pattern
 */
export type RulePattern<T = unknown>
	= | { type: 'exact', value: T }
		| { type: 'wildcard', test: (value: T) => boolean }
		| { type: 'structural', match: (value: T) => Partial<T> | null }

/**
 * Rule replacement
 */
export type RuleReplacement<T = unknown>
	= | T
		| ((matched: T, context: RuleContext) => T)

/**
 * Rule condition
 */
export type RuleCondition<T = unknown> = (matched: T, context: RuleContext) => boolean

/**
 * Rule context
 */
export interface RuleContext {
	scope: Map<string, unknown>
	definitions: Map<string, unknown>
	cost: number
	benefits: number
}

/**
 | Rule application result
 */
export type RuleResult<T = unknown>
	= | { type: 'matched', result: T, changed: true }
		| { type: 'no-match', changed: false }
		| { type: 'blocked', reason: string }

// ============================================================================
// Tree Shaking
// ============================================================================

/**
 * Tree shake type
 */
export interface TreeShake<T = unknown> {
	options: TreeShakeOptions
	analyze: (input: T, entryPoints: string[]) => ShallowResult<T>
	remove: (input: T, unused: Set<string>) => T
}

/**
 * Tree shake options
 */
export interface TreeShakeOptions {
	entryPoints: string[]
	sideEffects?: boolean | string[]
	external?: string[]
	modules?: boolean
	propertyReadSideEffects?: boolean
	tryCatchSideEffects?: boolean
	unknownGlobalSideEffects?: boolean
}

/**
 | Shake result
 */
export interface ShallowResult<_T = unknown> {
	used: Set<string>
	unused: Set<string>
	ambiguous: Set<string>
	messages: ShakeMessage[]
}

/**
 | Shake message
 */
export interface ShakeMessage {
	type: 'warning' | 'info'
	message: string
	location?: { file?: string, line: number, column: number }
	suggestion?: string
}

/**
 | Used exports type
 */
export type UsedExports = Set<string>

/**
 | Unused exports type
 */
export type UnusedExports = Set<string>

/**
 * Side effect
 */
export type SideEffect
	= | { type: 'global', name: string }
		| { type: 'property', object: string, property: string }
		| { type: 'call', function: string }
		| { type: 'unknown', source: string }

/**
 | Side effects analysis
 */
export interface SideEffectsAnalysis {
	pure: boolean
	effects: SideEffect[]
	dependencies: string[]
}

// ============================================================================
// Dead Code Elimination
// ============================================================================

/**
 | Dead code type
 */
export interface DeadCode {
	type: DeadCodeType
	location: DeadCodeLocation
	reason: string
	suggestion?: string
}

/**
 | Dead code type
 */
export type DeadCodeType
	= | 'unreachable'
		| 'unused-variable'
		| 'unused-function'
		| 'unused-class'
		| 'unused-import'
		| 'unused-export'
		| 'unused-parameter'
		| 'redundant'
		| 'unreachable-branch'
		| 'never-executed'

/**
 | Dead code location
 */
export interface DeadCodeLocation {
	file?: string
	start: { line: number, column: number }
	end: { line: number, column: number }
	code?: string
}

/**
 * Eliminate dead code
 */
export type EliminateDeadCode<T = unknown> = (input: T, dead: DeadCode[]) => T

/**
 * Live code type
 */
export interface LiveCode {
	type: 'live'
	confidence: 1 | 0.5 | 0.25 | 0
	reason: string
}

/**
 | Dead code analysis result
 */
export interface DeadCodeAnalysis<_T = unknown> {
	dead: DeadCode[]
	live: Map<string, LiveCode>
	ambiguous: DeadCode[]
	stats: {
		totalNodes: number
		deadNodes: number
		savings: number
	}
}

/**
 | Dead code options
 */
export interface DeadCodeOptions {
	removeUnreachable?: boolean
	removeUnusedVariables?: boolean
	removeUnusedFunctions?: boolean
	removeUnusedClasses?: boolean
	removeUnusedImports?: boolean
	removeUnusedExports?: boolean
	dropConsole?: boolean
	dropDebugger?: boolean
}

// ============================================================================
// Inlining
// ============================================================================

/**
 | Inline type
 */
export interface Inline<T = unknown> {
	threshold: InlineThreshold
	shouldInline: (candidate: InlineCandidate<T>) => boolean
	inline: (caller: T, callee: InlineCandidate<T>) => T
}

/**
 | Inline candidate
 */
export interface InlineCandidate<T = unknown> {
	name: string
	node: T
	complexity: number
	callCount: number
	calls: InlineCall[]
	benefits: number
	costs: number
}

/**
 | Inline call
 */
export interface InlineCall {
	location: { file?: string, line: number, column: number }
	args: unknown[]
	context: unknown
}

/**
 | Inline result
 */
export interface InlineResult<_T = unknown> {
	inlined: Set<string>
	skipped: Set<string>
	failed: Map<string, string> // name -> error
	stats: {
		originalSize: number
		finalSize: number
		callsInlined: number
	}
}

/**
 | Inline threshold type
 */
export type InlineThreshold = number | {
	functionSize: number
	callsiteCost: number
}

/**
 | Inline options
 */
export interface InlineOptions {
	threshold?: InlineThreshold
	include?: string[]
	exclude?: string[]
	ignoreFunctionLength?: boolean
	expandMinified?: boolean
}

// ============================================================================
// Constant Folding
// ============================================================================

/**
 * Constant fold type
 */
export type ConstantFold<T = unknown> = (input: T) => FoldResult<T>

/**
 | Fold result
 */
export interface FoldResult<T = unknown> {
	output: T
	constants: Map<string, ConstantValue>
	changed: boolean
	stats: {
		constantCount: number
		foldedCount: number
	}
}

/**
 | Constant value
 */
export interface ConstantValue<T = unknown> {
	value: T
	type: string
	location: { file?: string, line: number, column: number }
	folded: boolean
}

/**
 | Foldable expression
 */
export type FoldableExpression<T = unknown>
	= | { type: 'literal', value: T }
		| { type: 'binary', operator: BinaryOperator, left: FoldableExpression<T>, right: FoldableExpression<T> }
		| { type: 'unary', operator: UnaryOperator, operand: FoldableExpression<T> }
		| { type: 'call', function: string, args: FoldableExpression[] }
		| { type: 'member', object: FoldableExpression, property: string }

/**
 | Binary operator
 */
export type BinaryOperator
	= | '+' | '-' | '*' | '/' | '%' | '**'
		| '==' | '===' | '!=' | '!=='
		| '<' | '>' | '<=' | '>='
		| '&&' | '||' | '??'
		| '&' | '|' | '^' | '<<' | '>>' | '>>>'

/**
 | Unary operator
 */
export type UnaryOperator
	= | '!' | '+' | '-' | '~' | 'typeof' | 'void'

/**
 | Constant analysis
 */
export interface ConstantAnalysis {
	deterministic: boolean
	sideEffects: boolean
	value?: unknown
	dependencies: string[]
}

/**
 | Constant fold options
 */
export interface ConstantFoldOptions {
	includeGlobal?: boolean
	includeProperty?: boolean
	includeMethodCall?: boolean
	includeString?: boolean
	includeMath?: boolean
	includeRegExp?: boolean
}

// ============================================================================
// Type Minification
// ============================================================================

/**
 | Minify type
 */
export type MinifyType<T = unknown> = (type: T) => MinifiedType<T>

/**
 | Minification options
 */
export interface MinificationOptions<_T = unknown> {
	removeWhitespace?: boolean
	removeComments?: boolean
	removeUnnecessaryParens?: boolean
	removeUnusedTypeParams?: boolean
	shortenNames?: boolean
	inlineTypes?: boolean
	flatten?: boolean
	maxDepth?: number
}

/**
 | Minified type
 */
export interface MinifiedType<T = unknown> {
	minified: T
	original: T
	mapping: Map<string, string>
	stats: {
		originalSize: number
		minifiedSize: number
		saved: number
		savedPercent: number
	}
}

/**
 * Type alias for renaming
 */
export interface TypeAlias {
	original: string
	minified: string
	usageCount: number
	scope: string[]
}

// ============================================================================
// Performance Hints
// ============================================================================

/**
 | Performance hint
 */
export interface PerformanceHint<T = unknown> {
	id: string
	level: HintLevel
	category: HintCategory
	message: string
	location: { file?: string, line: number, column: number }
	suggestion?: HintSuggestion<T>
	impact?: 'low' | 'medium' | 'high'
	confidence: number
}

/**
 | Hint level
 */
export type HintLevel
	= | 'info'
		| 'warning'
		| 'error'

/**
 | Hint category
 */
export type HintCategory
	= | 'performance'
		| 'memory'
		| 'bundle-size'
		| 'runtime'
		| 'load-time'
		| 'type-complexity'
		| 'type-inference'
		| 'computation'
		| 'io'
		| 'concurrency'

/**
 | Hint suggestion
 */
export type HintSuggestion<T = unknown>
	= | { type: 'replace', before: T, after: T }
		| { type: 'remove', target: T }
		| { type: 'add', target: T }
		| { type: 'refactor', description: string, example?: T }
		| { type: 'optimize', description: string, options?: unknown }

// ============================================================================
// Optimization Context
// ============================================================================

/**
 | Optimization context
 */
export interface OptimizationContext<_T = unknown> {
	options: OptimizationOptions
	scope: Map<string, unknown>
	globalScope: Map<string, unknown>
	constants: Map<string, ConstantValue>
	stats: OptimizationStats
	hints: PerformanceHint[]
}

/**
 * Optimization pipeline
 */
export interface OptimizationPipeline<T = unknown> {
	passes: OptimizationPass<T>[]
	add: (pass: OptimizationPass<T>) => void
	remove: (name: string) => void
	run: (input: T) => OptimizationResult<T>
}

// ============================================================================
// Loop Optimizations
// ============================================================================

/**
 | Loop optimization
 */
export type LoopOptimization
	= | { type: 'unroll', factor: number }
		| { type: 'vectorize', width: number }
		| { type: 'fuse', loops: string[] }
		| { type: 'distribute', factor: number }
		| { type: 'interchange', order: number[] }
		| { type: 'tile', sizes: number[] }
		| { type: 'hoist', invariant: string }
		| { type: 'strength-reduce', variable: string, method: string }

/**
 | Loop analysis
 */
export interface LoopAnalysis {
	type: 'for' | 'while' | 'do-while' | 'for-of' | 'for-in'
	bound: { min: number, max: number } | 'unknown'
	iterations: number | 'unknown'
	invariants: string[]
	optimizable: boolean
}

// ============================================================================
// Code Motion
// ============================================================================

/**
 | Code motion optimization
 */
export type CodeMotion<T = unknown>
	= | { type: 'hoist', expression: T, to: 'pre-header' | 'outer-loop' }
		| { type: 'sink', expression: T, to: 'use' | 'exit' }
		| { type: 'reorder', statements: T[], order: number[] }
		| { type: 'merge', expressions: T[], merged: T }

/**
 | Common subexpression
 */
export interface CommonSubexpression<T = unknown> {
	expression: T
	occurrences: number
	locations: { file?: string, line: number, column: number }[]
	canEliminate: boolean
	replacement?: string
}

// ============================================================================
// Function Optimizations
// ============================================================================

/**
 | Function optimization
 */
export type FunctionOptimization
	= | { type: 'tail-call', safe: boolean }
		| { type: 'memoize', maxSize?: number }
		| { type: 'specialize', args: unknown[] }
		| { type: 'partial-evaluate', knownArgs: Map<number, unknown> }
		| { type: 'flatten', depth: number }
		| { type: 'extract', code: string }

/**
 | Function analysis
 */
export interface FunctionAnalysis {
	pure: boolean
	sideEffects: boolean
	complexity: number
	branches: number
	loops: number
	calls: string[]
	callees: string[]
	cyclomaticComplexity: number
	cognitiveComplexity: number
}

// ============================================================================
// Module Optimizations
// ============================================================================

/**
 | Module optimization
 */
export type ModuleOptimization
	= | { type: 'hoist', imports: string[] }
		| { type: 'merge', modules: string[] }
		| { type: 'split', module: string, splits: string[][] }
		| { type: 'reorder', order: string[] }
		| { type: 'lazy', imports: string[] }
		| { type: 'prefetch', modules: string[] }

/**
 | Module analysis
 */
export interface ModuleAnalysis {
	exports: Set<string>
	imports: Set<string>
	sideEffects: boolean
	dependencies: string[]
	bundleSize: number
	parseSize: number
}
