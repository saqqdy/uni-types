/**
 * Performance Architecture
 *
 * Rewritten for maximum compilation performance.
 * Provides type-level performance hints and optimization utilities.
 */

// ============== Performance Primitives ==============

/**
 * Fast - Mark a type as performance-optimized
 */
export type Fast<T> = T extends object
	? T extends (...args: unknown[]) => unknown
		? T
		: T extends readonly unknown[]
			? readonly [...T]
			: { [K in keyof T]: T[K] }
	: T

/**
 * Cached - Cache a type computation result
 */
export type Cached<T> = T extends infer U ? U : never

/**
 * Lazy - Defer type evaluation until needed
 */
export type Lazy<T> = () => T

/**
 * Memoized - Memoize a type computation
 */
export type Memoized<T> = T extends infer U ? { readonly _memoized: U } : never

// ============== Optimization Flags ==============

/**
 * Optimized - Mark a type as already optimized
 */
export type Optimized<T> = T & { readonly __optimized__: true }

/**
 * NoInfer - Prevent TypeScript from inferring a type parameter
 */
export type NoInfer<T> = [T][T extends any ? 0 : never]

/**
 * Preserve - Preserve the exact type without widening
 */
export type Preserve<T> = T extends infer U ? U : never

/**
 * InlineHint - Hint that a type should be inlined
 */
export type InlineHint<T> = T & { readonly __inline__: true }

// ============== Compiler Hints ==============

/**
 * CompilerHint - Type-level compiler hint
 */
export interface CompilerHint<T = unknown> {
	readonly _type: T
	readonly _hint: HintKind
	readonly _message: string
}

/**
 * HintKind - Types of compiler hints
 */
export type HintKind = 'optimize' | 'inline' | 'cache' | 'defer' | 'noinfer'

/**
 * TypeHint - Attach a hint to a type
 */
export type TypeHint<T, Kind extends HintKind> = T & { readonly __hint__: Kind }

/**
 * PerformanceHint - Performance-specific hint
 */
export type PerformanceHint<T> = TypeHint<T, 'optimize'>

// ============== Compilation Optimization ==============

/**
 * ReduceComplexity - Reduce type complexity
 */
export type ReduceComplexity<T> = T extends object
	? T extends (...args: unknown[]) => unknown
		? T
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<ReduceComplexity<U>>
			: T extends Map<infer K, infer V>
				? Map<K, ReduceComplexity<V>>
				: T extends Set<infer U>
					? Set<ReduceComplexity<U>>
					: T extends Promise<infer U>
						? Promise<ReduceComplexity<U>>
						: { [K in keyof T]: T[K] }
	: T

/**
 * SimplifyForCompiler - Simplify for faster compiler processing
 */
export type SimplifyForCompiler<T> = T extends object ? { [K in keyof T]: T[K] } : T

/**
 * OptimizeInference - Optimize type inference
 */
export type OptimizeInference<T, _Depth extends number = 10> = T

/**
 * ReduceRecursion - Reduce recursion depth
 */
export type ReduceRecursion<T, _Depth extends number = 7> = T

// ============== Memory Optimization ==============

/**
 * LightWeight - Lightweight type marker
 */
export type LightWeight<T> = T & { readonly __lightweight__: true }

/**
 * Minimal - Minimal type representation
 */
export type Minimal<T> = T extends object
	? { [K in keyof T as T[K] extends (...args: unknown[]) => unknown ? K : never]: T[K] }
	: T

/**
 * CompactRepresentation - Compact representation
 */
export type CompactRepresentation<T> = T extends object ? { [K in keyof T]: T[K] } : T

/**
 * SharedStructure - Shared structure between types
 */
export type SharedStructure<A, B> = {
	[K in keyof A & keyof B]: A[K] extends B[K] ? A[K] : never
}

// ============== Build Performance ==============

/**
 * Precompute - Precompute at declaration time
 */
export type Precompute<T> = T extends infer U ? { [K in keyof U]: U[K] } : never

/**
 * PrecomputedValue - A precomputed type value
 */
export type PrecomputedValue<T, V extends T> = V

/**
 * DeferredEvaluation - Defer until first use
 */
export type DeferredEvaluation<T> = T extends infer U ? U : never

/**
 * IncrementalType - Support incremental type checking
 */
export type IncrementalType<T> = T & {
	readonly __incremental__: true
	readonly __version__: number
}

// ============== Performance Monitoring ==============

/**
 * TypeComplexity - Measure type complexity
 */
export type TypeComplexity<T> = T extends object
	? T extends (...args: unknown[]) => unknown
		? 1
		: T extends readonly unknown[]
			? 2
			: 3
	: 1

/**
 * CompilationTime - Estimated compilation time category
 */
export type CompilationTime<T> = TypeComplexity<T> extends 1
	? 'fast'
	: TypeComplexity<T> extends 2
		? 'moderate'
		: 'slow'

/**
 * TypeSize - Type size category
 */
export type TypeSize<T> = TypeComplexity<T> extends 1
	? 'small'
	: TypeComplexity<T> extends 2
		? 'medium'
		: 'large'

/**
 * PerformanceWarning - Performance warning
 */
export interface PerformanceWarning<T> {
	readonly _type: T
	readonly _severity: 'info' | 'warning' | 'error'
	readonly _message: string
	readonly _suggestion: string
}
