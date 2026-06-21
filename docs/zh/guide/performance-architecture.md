# 性能架构

本指南介绍 v2.0.0 中引入的 **性能架构** 特性。

## 概述

性能架构模块提供了类型级性能提示和优化工具，为最大化编译性能而重写。它包含编译优化标记、性能监控和延迟求值等核心能力。

## 性能原语

### FastV2、CachedV2、LazyV2、MemoizedV2

```typescript
import type { FastV2, CachedV2, LazyV2, MemoizedV2 } from 'uni-types'

type F = FastV2<{ a: string; b: number }>   // 优化表示
type C = CachedV2<number>                    // 缓存计算结果
type L = LazyV2<string>                      // () => string（延迟求值）
type M = MemoizedV2<string>                  // { _memoized: string }（记忆化）
```

## 优化标记

```typescript
import type { OptimizedV2, NoInferV2, InlineHintV2, PreserveV2 } from 'uni-types'

type O = OptimizedV2<string>   // string & { __optimized__: true }
type N = NoInferV2<string>     // 阻止类型推断
type I = InlineHintV2<string>  // string & { __inline__: true }
type P = PreserveV2<string>    // 保持原始类型不做简化
```

## 编译优化

### ReduceComplexity

简化嵌套类型结构，降低编译复杂度：

```typescript
import type { ReduceComplexity } from 'uni-types'

type Simplified = ReduceComplexity<{
  a: { b: { c: { d: string } } }
}>
```

### SimplifyForCompiler

创建编译器友好的类型表示：

```typescript
import type { SimplifyForCompiler } from 'uni-types'

type CompilerFriendly = SimplifyForCompiler<ComplexNestedType>
```

### 预计算与延迟求值

```typescript
import type { PrecomputeV2, DeferredEvaluationV2, IncrementalTypeV2 } from 'uni-types'

type Pre = PrecomputeV2<{ a: string; b: number }>       // 声明时预计算
type Deferred = DeferredEvaluationV2<HeavyComputation>  // 延迟求值
type Inc = IncrementalTypeV2<{ step: 1 }>               // 增量类型
```

## 轻量化与紧凑表示

```typescript
import type { LightWeightV2, MinimalV2, CompactRepresentationV2, SharedStructureV2 } from 'uni-types'

type Light = LightWeightV2<string>       // string & { __lightweight__: true }
type Min = MinimalV2<string>            // string & { __minimal__: true }
type Compact = CompactRepresentationV2<T>  // 紧凑类型表示
type Shared = SharedStructureV2<T>         // 共享结构优化
```

## 性能监控

### 类型复杂度

```typescript
import type { TypeComplexityV2 } from 'uni-types'

type C1 = TypeComplexityV2<string>     // 1（快速）
type C2 = TypeComplexityV2<string[]>   // 2（中等）
type C3 = TypeComplexityV2<Record<string, unknown>>  // 3（较慢）
```

### 编译时间

```typescript
import type { CompilationTimeV2 } from 'uni-types'

type T1 = CompilationTimeV2<string>     // 'fast'
type T2 = CompilationTimeV2<string[]>  // 'moderate'
```

### 类型大小

```typescript
import type { TypeSizeV2 } from 'uni-types'

type S1 = TypeSizeV2<string>     // 'small'
type S2 = TypeSizeV2<string[]>  // 'medium'
```

## 编译器提示

```typescript
import type { CompilerHint, HintKind, TypeHint, PerformanceHint as PerformanceHintV2 } from 'uni-types'

type Hint = CompilerHint<'optimize'>
type Kind = HintKind  // 'performance' | 'readability' | 'compatibility'
type THint = TypeHint<{ optimize: true }>
type PHint = PerformanceHintV2<'cache'>
```

## API 参考

参阅 [性能架构 API 参考](/zh/api/perf-arch) 获取完整文档。
