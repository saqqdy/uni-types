# Performance Optimization

Types for optimizing TypeScript compilation and type checking.

## Performance Types (v1.11.0)

New performance optimization types for advanced use cases.

### Fast & Optimized

```typescript
import type { Fast, Optimized, CachedCompute, LazyCompute } from 'uni-types'

// Fast type - optimized for compilation speed
type FastType = Fast<{ a: string } & { b: number }>
// { a: string; b: number }

// Optimized type - balanced optimization
type OptType = Optimized<ComplexType>

// Cached computation
type Cached = CachedCompute<string>

// Lazy computation
type LazyComp = LazyCompute<string>  // () => string
```

### Compilation Optimization

```typescript
import type {
  ReduceComplexity,
  SimplifyForCompiler,
  OptimizeInference,
  ReduceRecursion,
  RecursionLimit
} from 'uni-types'

// Reduce type complexity
type Reduced = ReduceComplexity<NestedType>

// Simplify for compiler
type Simple = SimplifyForCompiler<{ a: string } & { b: number }>

// Optimize inference
type Inferred = OptimizeInference<T>

// Limit recursion depth
type Limited = RecursionLimit<DeepType, 10>
```

### Memory Optimization

```typescript
import type {
  LightWeight,
  Minimal,
  SharedStructure,
  Pooled,
  InternedString
} from 'uni-types'

// Lightweight representation
type Light = LightWeight<HeavyType>

// Minimal representation (excludes undefined)
type Min = Minimal<{ a: string; b?: undefined }>

// Shared structure
type Shared = SharedStructure<{ a: string }>

// Pooled type
type PooledType = Pooled<number>

// Interned string
type Interned = InternedString
```

### Build Performance

```typescript
import type {
  Precompute,
  PrecomputedValue,
  DeferredEvaluation,
  BuildHint,
  SkipCheck
} from 'uni-types'

// Precompute type
type Pre = Precompute<ComplexType>

// Precomputed value
type PreValue = PrecomputedValue<string, 'literal'>

// Deferred evaluation
type Deferred = DeferredEvaluation<string>

// Build hints
type Hinted = BuildHint<string>
```

### Performance Monitoring

```typescript
import type {
  TypeComplexityMetrics,
  CompilationTime,
  TypeSize,
  PerformanceHint,
  PerformanceOptimization
} from 'uni-types'

// Type complexity metrics
interface Metrics extends TypeComplexityMetrics<MyType> {}

// Compilation time estimation
interface Time extends CompilationTime<MyType> {}

// Type size estimation
interface Size extends TypeSize<MyType> {}

// Performance hint
type Hinted = PerformanceHint<string>
```

### Optimization Strategy

```typescript
import type {
  OptimizationStrategy,
  OptimizationLevel,
  OptimizationConfig,
  OptimizationResult
} from 'uni-types'

// Strategy: 'aggressive' | 'balanced' | 'conservative' | 'debug'
type Strategy = OptimizationStrategy

// Level: 0 | 1 | 2 | 3
type Level = OptimizationLevel

// Configuration
interface Config extends OptimizationConfig {}
```

## Lazy Type Evaluation

Defer type evaluation for better compilation performance.

```typescript
import type { Lazy, ForceEvaluate, Deferred, Thunk } from 'uni-types'

// Lazy type wrapper
type LazyString = Lazy<string>  // () => string

// Force evaluation
type Evaluated = ForceEvaluate<LazyString>  // string

// Deferred type (prevents immediate expansion)
type Complex = Deferred<{ a: string } & { b: number }>

// Thunk type
type StringThunk = Thunk<string>  // () => string
```

## Type Caching

Cache type computations to prevent re-evaluation.

```typescript
import type { Cached, CachedValue, Memoized } from 'uni-types'

// Cache a type
type CachedString = Cached<string>  // { __cached: string }

// Extract cached value
type Value = CachedValue<CachedString>  // string

// Memoize type computation
type Memo = Memoized<{ a: string } & { b: number }>
```

## Type Optimization

Simplify and optimize complex types.

### Simplify

Flatten intersection types.

```typescript
import type { Simplify } from 'uni-types'

type Complex = { a: string } & { b: number }
type Simple = Simplify<Complex>
// { a: string; b: number }
```

### DeepSimplify

Recursively simplify nested types.

```typescript
import type { DeepSimplify } from 'uni-types'

type Nested = { 
  a: { b: string } & { c: number } 
}
type Deep = DeepSimplify<Nested>
// { a: { b: string; c: number } }
```

### Compact

Remove `never` and `undefined` properties.

```typescript
import type { Compact } from 'uni-types'

type Compacted = Compact<{ a: string; b: never; c?: undefined }>
// { a: string }
```

### StripNever / StripUndefined / StripNull

Remove specific types from object properties.

```typescript
import type { StripNever, StripUndefined, StripNull } from 'uni-types'

type A = StripNever<{ a: string; b: never; c: number }>
// { a: string; c: number }

type B = StripUndefined<{ a: string; b?: undefined }>
// { a: string }

type C = StripNull<{ a: string; b: null }>
// { a: string }
```

### MergeAll

Merge multiple object types.

```typescript
import type { MergeAll } from 'uni-types'

type Merged = MergeAll<[{ a: string }, { b: number }, { c: boolean }]>
// { a: string; b: number; c: boolean }
```

### PickNonNullable / PickNullable

Filter properties by nullability.

```typescript
import type { PickNonNullable, PickNullable } from 'uni-types'

interface User {
  name: string
  email: string | null
  age?: number
}

type Required = PickNonNullable<User>   // { name: string }
type Nullable = PickNullable<User>      // { email: string | null }
```

### TypeEq

Check type equality at compile time.

```typescript
import type { TypeEq } from 'uni-types'

type A = TypeEq<string, string>   // true
type B = TypeEq<string, number>   // false
```

### ExactType

Ensure exact shape match.

```typescript
import type { ExactType } from 'uni-types'

type Exact = ExactType<{ a: string }, { a: string }>    // { a: string }
type NotExact = ExactType<{ a: string }, { a: string; b: number }>  // never
```

### Normalize / Optionalize

Control property modifiers.

```typescript
import type { Normalize, Optionalize } from 'uni-types'

type Normal = Normalize<{ a?: string }>    // { a: string | undefined }
type Optional = Optionalize<{ a: string }> // { a?: string }
```
