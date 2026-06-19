# 最终性能优化

针对类型级计算、编译和 IDE 响应能力的终极性能优化。

## FinalOptimized

应用所有性能增强的完全优化类型。

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

类型编译性能特征的概要。

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

定义类型级操作的性能预算。

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

延迟类型推断直到实际需要结果时。

```typescript
import type { LazyInference } from 'uni-types'

type Lazy = LazyInference<{
	type: { a: string; b: number; c: boolean }
	trigger: 'access'
	cacheResult: true
	ttl: 'session'
}>

// 类型仅在访问属性时求值
type A = Lazy['a'] // string - 触发求值
```

## BatchEvaluation

在单次编译过程中评估多个类型。

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

优化类型定义以减少 IDE 内存消耗。

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

缓存类型求值结果的策略。

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

类型性能指标的综合报告。

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
