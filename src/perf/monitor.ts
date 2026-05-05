/**
 * Performance Monitoring & Advanced Optimization (v1.11.0)
 *
 * Advanced performance optimization utilities for TypeScript types.
 */

// ============================================================================
// Performance Types
// ============================================================================

/**
 * Fast type - optimized for compilation speed
 */
export type Fast<T> = T extends infer U
	? { [K in keyof U]: U[K] }
	: never

/**
 * Optimized type - balanced optimization
 */
export type Optimized<T> = T

/**
 * Cached computation result
 */
export type CachedCompute<T> = T & {
	__cached__: true
	__cache_key__: string
}

/**
 * Lazy computation type
 */
export type LazyCompute<T> = () => T

// ============================================================================
// Compilation Optimization
// ============================================================================

/**
 * Reduce type complexity
 */
export type ReduceComplexity<T> = T extends infer U
	? U extends object
		? { [K in keyof U]: ReduceComplexity<U[K]> }
		: U
	: never

/**
 * Simplify for compiler
 */
export type SimplifyForCompiler<T> = T extends infer U
	? { [K in keyof U]: U[K] }
	: never

/**
 * Optimize type inference
 */
export type OptimizeInference<T> = T extends infer U ? U : never

/**
 * Reduce recursion depth
 */
export type ReduceRecursion<T, _Depth extends number = 10> = T

/**
 * Recursion depth limit
 */
export type RecursionLimit<
	T,
	Depth extends number,
	Current extends number = 0,
> = Current extends Depth
	? T
	: T extends object
		? { [K in keyof T]: RecursionLimit<T[K], Depth, Current> }
		: T

/**
 * Tail-recursive type optimization
 */
export type TailRecursive<T> = T

// ============================================================================
// Memory Optimization
// ============================================================================

/**
 * Lightweight type representation
 */
export type LightWeight<T> = T extends infer U
	? Pick<U, keyof U>
	: never

/**
 * Minimal type representation
 */
export type Minimal<T> = T extends infer U
	? { [K in keyof U as U[K] extends undefined ? never : K]: U[K] }
	: never

/**
 * Compact representation
 */
export type CompactRepresentation<T> = T

/**
 * Shared structure optimization
 */
export type SharedStructure<T> = T & {
	__shared__: true
}

/**
 * Pooled type
 */
export type Pooled<T> = T & {
	__pooled__: true
	__pool_id__: string
}

/**
 * Interned string type
 */
export type InternedString = string & {
	__interned__: true
}

// ============================================================================
// Build Performance
// ============================================================================

/**
 * Precompute type result
 */
export type Precompute<T> = T

/**
 * Precomputed value
 */
export type PrecomputedValue<T, V> = T & {
	__precomputed__: V
	__computed_at__: number
}

/**
 * Deferred evaluation
 */
export type DeferredEvaluation<T> = () => T

/**
 * Incremental type
 */
export type IncrementalType<T> = T & {
	__incremental__: true
	__base__: Partial<T>
	__delta__: Partial<T>
}

/**
 * Build hint for type
 */
export type BuildHint<T> = T & {
	__build_hint__: BuildHintType
}

/**
 * Build hint types
 */
export type BuildHintType
	= | 'inline'
	| 'cache'
	| 'defer'
	| 'optimize'
	| 'lazy'
	| 'eager'

/**
 * Skip type checking hint
 */
export type SkipCheck<T> = T & {
	__skip_check__: true
}

// ============================================================================
// Performance Monitoring Types
// ============================================================================

/**
 * Type complexity measurement (v1.11.0)
 */
export interface TypeComplexityMetrics<T> {
	/** Type being measured */
	type: T
	/** Number of properties */
	propertyCount: number
	/** Maximum nesting depth */
	nestingDepth: number
	/** Number of union branches */
	unionBranches: number
	/** Number of generic parameters */
	genericParams: number
	/** Estimated complexity score */
	complexityScore: number
}

/**
 * Compilation time estimate
 */
export interface CompilationTime<T> {
	/** Type being measured */
	type: T
	/** Estimated compilation time in ms */
	estimatedMs: number
	/** Factors affecting compilation */
	factors: CompilationFactor[]
}

/**
 * Compilation factor
 */
export interface CompilationFactor {
	/** Factor name */
	name: string
	/** Impact weight */
	weight: number
	/** Description */
	description: string
}

/**
 * Type size estimation
 */
export interface TypeSize<T> {
	/** Type being measured */
	type: T
	/** Estimated type string length */
	typeStringLength: number
	/** Number of unique types referenced */
	referencedTypes: number
	/** Estimated memory usage */
	estimatedMemory: number
}

/**
 * Performance hint
 */
export type PerformanceHint<T> = T & {
	__performance_hint__: PerformanceHintInfo
}

/**
 * Performance hint info
 */
export interface PerformanceHintInfo {
	/** Suggested optimization */
	optimization: PerformanceOptimization
	/** Reason for the hint */
	reason: string
	/** Expected improvement */
	expectedImprovement: string
}

/**
 * Performance optimization types
 */
export type PerformanceOptimization
	= | 'reduce_depth'
	| 'split_union'
	| 'simplify_conditional'
	| 'cache_result'
	| 'defer_evaluation'
	| 'reduce_generic'
	| 'inline_type'
	| 'remove_unused'

// ============================================================================
// Performance Analysis Types
// ============================================================================

/**
 * Type analyzer result
 */
export interface TypeAnalysis {
	/** Type name */
	typeName: string
	/** Complexity analysis */
	complexity: number
	/** Performance issues detected */
	issues: PerformanceIssue[]
	/** Optimization suggestions */
	suggestions: PerformanceOptimizationSuggestion[]
	/** Comparison to baseline */
	baselineComparison?: BaselineComparison
}

/**
 * Performance issue
 */
export interface PerformanceIssue {
	/** Issue code */
	code: string
	/** Issue severity */
	severity: 'low' | 'medium' | 'high' | 'critical'
	/** Issue message */
	message: string
	/** Location of issue */
	location?: string
	/** Suggested fix */
	fix?: string
}

/**
 * Performance suggestion (v1.11.0)
 */
export interface PerformanceOptimizationSuggestion {
	/** Suggestion ID */
	id: string
	/** Suggestion priority */
	priority: number
	/** Suggestion description */
	description: string
	/** Expected improvement */
	expectedImprovement: string
	/** Implementation complexity */
	implementationComplexity: 'trivial' | 'simple' | 'moderate' | 'complex'
}

/**
 * Baseline comparison
 */
export interface BaselineComparison {
	/** Baseline value */
	baseline: number
	/** Current value */
	current: number
	/** Difference */
	difference: number
	/** Percentage change */
	percentageChange: number
	/** Is improvement */
	isImprovement: boolean
}

// ============================================================================
// Type Profiler Types
// ============================================================================

/**
 * Type profiler configuration
 */
export interface TypeProfilerConfig {
	/** Enable profiling */
	enabled: boolean
	/** Sample rate (0-1) */
	sampleRate: number
	/** Profile threshold in ms */
	threshold: number
	/** Types to profile (glob patterns) */
	include?: string[]
	/** Types to exclude (glob patterns) */
	exclude?: string[]
	/** Output format */
	outputFormat: 'json' | 'table' | 'chart'
}

/**
 * Type profiler result
 */
export interface TypeProfilerResult {
	/** Profiling duration */
	duration: number
	/** Types profiled */
	typesProfiled: number
	/** Total compilation time */
	totalCompileTime: number
	/** Slow types */
	slowTypes: TypeProfileEntry[]
	/** Memory usage */
	memoryUsage: number
	/** Hot paths */
	hotPaths: HotPath[]
}

/**
 * Type profile entry
 */
export interface TypeProfileEntry {
	/** Type name */
	name: string
	/** Compilation time in ms */
	compileTime: number
	/** Number of instantiations */
	instantiations: number
	/** Average time per instantiation */
	averageTime: number
	/** Location */
	location?: string
}

/**
 * Hot path
 */
export interface HotPath {
	/** Path name */
	name: string
	/** Time spent in path */
	timeMs: number
	/** Percentage of total time */
	percentage: number
	/** Call count */
	callCount: number
}

// ============================================================================
// Benchmark Types
// ============================================================================

/**
 * Benchmark configuration
 */
export interface TypeBenchmarkConfig {
	/** Number of iterations */
	iterations: number
	/** Warmup iterations */
	warmup: number
	/** Timeout in ms */
	timeout: number
	/** Compare against baseline */
	baseline?: string
}

/**
 * Benchmark result
 */
export interface TypeBenchmarkResult {
	/** Benchmark name */
	name: string
	/** Average time in ms */
	averageTime: number
	/** Minimum time */
	minTime: number
	/** Maximum time */
	maxTime: number
	/** Standard deviation */
	stdDev: number
	/** Operations per second */
	opsPerSecond: number
	/** Comparison to baseline */
	baselineComparison?: BaselineComparison
	/** Samples */
	samples: number[]
}

// ============================================================================
// Optimization Strategy Types
// ============================================================================

/**
 * Optimization strategy
 */
export type OptimizationStrategy
	= | 'aggressive'
	| 'balanced'
	| 'conservative'
	| 'debug'

/**
 * Optimization level
 */
export type OptimizationLevel = 0 | 1 | 2 | 3

/**
 * Optimization configuration
 */
export interface OptimizationConfig {
	/** Strategy to use */
	strategy: OptimizationStrategy
	/** Optimization level */
	level: OptimizationLevel
	/** Enable specific optimizations */
	enabledOptimizations: OptimizationType[]
	/** Disable specific optimizations */
	disabledOptimizations: OptimizationType[]
	/** Maximum recursion depth */
	maxRecursionDepth: number
	/** Maximum union branches */
	maxUnionBranches: number
}

/**
 * Optimization types
 */
export type OptimizationType
	= | 'constant_folding'
	| 'dead_code_elimination'
	| 'inline_expansion'
	| 'loop_unrolling'
	| 'common_subexpression_elimination'
	| 'tail_call_optimization'
	| 'type_narrowing'
	| 'branch_prediction'

/**
 * Optimization result
 */
export interface OptimizationResult<T> {
	/** Original type */
	original: T
	/** Optimized type */
	optimized: T
	/** Optimizations applied */
	appliedOptimizations: AppliedOptimization[]
	/** Performance improvement */
	improvement: OptimizationImprovement
}

/**
 * Applied optimization
 */
export interface AppliedOptimization {
	/** Optimization type */
	type: OptimizationType
	/** Location */
	location: string
	/** Before */
	before?: string
	/** After */
	after?: string
	/** Improvement */
	improvement: number
}

/**
 * Optimization improvement metrics
 */
export interface OptimizationImprovement {
	/** Compile time reduction percentage */
	compileTimeReduction: number
	/** Type size reduction percentage */
	typeSizeReduction: number
	/** Complexity reduction percentage */
	complexityReduction: number
}
