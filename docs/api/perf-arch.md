# Performance Architecture API Reference

## Performance Primitives

### `FastV2<T>`

Performance-optimized type representation.

### `CachedV2<T>`

Cached type computation result.

### `LazyV2<T>`

Deferred type evaluation — `() => T`.

### `MemoizedV2<T>`

Memoized computation result with `_memoized` field.

## Optimization Flags

### `OptimizedV2<T>`

Marks a type as already optimized. Adds `__optimized__: true`.

### `NoInferV2<T>`

Prevents TypeScript from inferring a type parameter.

### `PreserveV2<T>`

Preserves the exact type without widening.

### `InlineHintV2<T>`

Hints that a type should be inlined.

## Compiler Hints

### `CompilerHintV2<T>`

Interface with `_type`, `_hint`, `_message`.

### `HintKind`

`'optimize' | 'inline' | 'cache' | 'defer' | 'noinfer'`

### `TypeHintV2<T, Kind>`
### `PerformanceHintV2<T>`

## Compilation Optimization

### `ReduceComplexityV2<T>`

Reduces type complexity by simplifying nested structures.

### `SimplifyForCompilerV2<T>`

Creates compiler-friendly simplified representation.

### `OptimizeInferenceV2<T, _Depth>`

Placeholder for inference optimization.

### `ReduceRecursionV2<T, _Depth>`

Placeholder for recursion depth reduction.

## Memory Optimization

### `LightWeightV2<T>`

Lightweight type marker with `__lightweight__: true`.

### `MinimalV2<T>`

Minimal type representation preserving only function keys.

### `CompactRepresentationV2<T>`

Compact object representation.

### `SharedStructureV2<A, B>`

Shared structure between two types.

## Build Performance

### `PrecomputeV2<T>`

Precomputes at declaration time.

### `PrecomputedValueV2<T, V>`

A precomputed type value.

### `DeferredEvaluationV2<T>`

Defers evaluation until first use.

### `IncrementalTypeV2<T>`

Supports incremental type checking with version tracking.

## Performance Monitoring

### `TypeComplexityV2<T>`

Returns complexity score: 1 (primitive/function), 2 (array), 3 (object).

### `CompilationTimeV2<T>`

Categorizes as `'fast'`, `'moderate'`, or `'slow'`.

### `TypeSizeV2<T>`

Categorizes as `'small'`, `'medium'`, or `'large'`.

### `PerformanceWarningV2<T>`

Interface with `_type`, `_severity`, `_message`, `_suggestion`.
