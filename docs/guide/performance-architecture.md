# Performance Architecture

This guide covers the **Performance Architecture** features introduced in v2.0.0.

## Overview

The Performance Architecture module provides type-level performance hints and optimization utilities, rewritten for maximum compilation performance.

## Performance Primitives

### Fast, Cached, Lazy, Memoized

```typescript
import type { FastV2, CachedV2, LazyV2, MemoizedV2 } from 'uni-types'

type F = FastV2<{ a: string; b: number }>     // Optimized representation
type C = CachedV2<number>                       // Cached computation
type L = LazyV2<string>                         // () => string (deferred)
type M = MemoizedV2<string>                     // { _memoized: string }
```

## Optimization Flags

```typescript
import type { OptimizedV2, NoInferV2, InlineHintV2 } from 'uni-types'

type O = OptimizedV2<string>   // string & { __optimized__: true }
type N = NoInferV2<string>     // Prevents inference
type I = InlineHintV2<string>  // string & { __inline__: true }
```

## Compilation Optimization

- `ReduceComplexity<T>` — Simplifies nested structures
- `SimplifyForCompiler<T>` — Creates compiler-friendly representation
- `PrecomputeV2<T>` — Precomputes at declaration time

## Performance Monitoring

```typescript
import type { TypeComplexityV2, CompilationTimeV2, TypeSizeV2 } from 'uni-types'

type C1 = TypeComplexityV2<string>     // 1 (fast)
type C2 = TypeComplexityV2<string[]>   // 2 (moderate)

type T1 = CompilationTimeV2<string>    // 'fast'
type T2 = CompilationTimeV2<string[]>  // 'moderate'
```

## API Reference

See the [Performance Architecture API Reference](/api/perf-arch) for complete documentation.
