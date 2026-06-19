# Final Performance Optimization

Ultimate performance optimizations for type-level computation, compilation, and IDE responsiveness.

## FinalOptimized

Fully optimized type with all performance enhancements applied.

```typescript
import type { FinalOptimized } from 'uni-types'

type Optimized = FinalOptimized<{
	original: { a: { b: { c: { d: { e: string } } } } }
	depth: 5
	maxInstantiationDepth: 10
	compilationTime: 'fast'
	ideResponsiveness: 'excellent'
}>
```

## CompilationProfile

Profile of type compilation performance characteristics.

```typescript
import type { CompilationProfile } from 'uni-types'

type Profile = CompilationProfile<{
	typeName: 'DeepPartial'
	instantiationDepth: 8
	instantiationCount: 150
	compilationTimeMs: 50
	complexity: 'medium'
	recommendation: 'acceptable'
}>
```

## PerformanceBudget

Defines performance budgets for type-level operations.

```typescript
import type { PerformanceBudget } from 'uni-types'

type Budget = PerformanceBudget<{
	maxInstantiationDepth: 50
	maxInstantiationCount: 5000
	maxCompilationTimeMs: 100
	maxTypeComplexity: 'medium'
	maxUnionSize: 100
	maxTupleLength: 50
	strictMode: true
}>
```

## LazyInference

Defers type inference until the result is actually needed.

```typescript
import type { LazyInference } from 'uni-types'

type Lazy = LazyInference<{
	type: { a: string; b: number; c: boolean }
	trigger: 'access'
	cacheResult: true
	ttl: 'session'
}>

// Type is only evaluated when a property is accessed
type A = Lazy['a'] // string - triggers evaluation
```

## BatchEvaluation

Evaluates multiple types in a single compilation pass.

```typescript
import type { BatchEvaluation } from 'uni-types'

type Batch = BatchEvaluation<{
	types: ['DeepPartial', 'DeepRequired', 'DeepReadonly']
	input: { a: { b: string }; c?: number }
	parallelEvaluation: true
	sharedContext: true
	optimized: true
}>
```

## MemoryOptimized

Optimizes type definitions to reduce IDE memory consumption.

```typescript
import type { MemoryOptimized } from 'uni-types'

type Optimized = MemoryOptimized<{
	original: { a: string; b: number; c: boolean; d: null; e: undefined }
	stripUnused: true
	compactNever: true
	flattenDepth: 3
	memoryReduction: 40
}>
```

## CacheStrategy

Strategy for caching type evaluation results.

```typescript
import type { CacheStrategy } from 'uni-types'

type Strategy = CacheStrategy<{
	enabled: true
	maxSize: 1000
	ttl: 'session'
	evictionPolicy: 'lru'
	invalidateOnConfigChange: true
	hitRate: 85
}>
```

## PerformanceReport

Comprehensive report of type performance metrics.

```typescript
import type { PerformanceReport } from 'uni-types'

type Report = PerformanceReport<{
	version: '1.13.0'
	totalTypes: 2500
	averageCompileTime: 25
	slowTypes: ['DeepPartial<ComplexType>']
	optimizationsApplied: 15
	budgetViolations: 0
	score: 95
}>
```
