# 性能架构 API 参考

## 性能原语

### `FastV2<T>`

性能优化的类型表示，直接返回原始类型。

```typescript
import type { FastV2 } from 'uni-types'

type F = FastV2<{ a: string; b: number }>
// { a: string; b: number }
```

### `CachedV2<T>`

缓存的类型计算结果，直接返回原始类型。

```typescript
import type { CachedV2 } from 'uni-types'

type C = CachedV2<number>  // number
```

### `LazyV2<T>`

延迟类型估值 — `() => T`。

```typescript
import type { LazyV2 } from 'uni-types'

type L = LazyV2<string>  // () => string
```

### `MemoizedV2<T>`

备忘录计算结果，包含 `_memoized` 字段。

```typescript
import type { MemoizedV2 } from 'uni-types'

type M = MemoizedV2<string>
// M._memoized: string
```

## 优化标记

### `OptimizedV2<T>`

标记类型已优化，添加 `__optimized__: true`。

### `NoInferV2<T>`

阻止 TypeScript 推断类型参数，直接返回原始类型。

### `PreserveV2<T>`

保留精确类型，不拓宽，直接返回原始类型。

### `InlineHintV2<T>`

提示类型应内联，添加 `__inline__: true`。

## 编译器提示

### `CompilerHintV2<T>`

编译器提示接口，包含 `_type`、`_hint` 和 `_message` 字段。

### `HintKind`

提示类型：`'performance' | 'readability' | 'compatibility'`

### `TypeHintV2<T>`

通用类型提示，包含种类信息。

### `PerformanceHintV2<T>`

性能提示，包含 `_type`、`_kind` 和 `_message` 字段。

## 编译优化

### `ReduceComplexityV2<T>`

降低类型复杂度，简化嵌套结构。

### `SimplifyForCompilerV2<T>`

创建编译器友好的简化表示。

### `OptimizeInferenceV2<T, _Depth>`

推断优化占位符，直接返回原始类型。

### `ReduceRecursionV2<T, _Depth>`

递归深度缩减占位符，直接返回原始类型。

## 内存优化

### `LightWeightV2<T>`

轻量标记，添加 `__lightweight__: true`。

### `MinimalV2<T>`

最小化表示，添加 `__minimal__: true`。

### `CompactRepresentationV2<T>`

紧凑对象表示，保留原始类型。

### `SharedStructureV2<A, B>`

两类型间的共享结构，保留原始类型。

## 构建性能

### `PrecomputeV2<T>`

在声明时预计算，直接返回原始类型。

### `PrecomputedValueV2<T, V>`

预计算值，包含 `_value` 字段。

### `DeferredEvaluationV2<T>`

延迟估值直到首次使用 — `() => T`。

### `IncrementalTypeV2<T>`

支持增量类型检查，携带步骤信息。

## 性能监控

### `TypeComplexityV2<T>`

返回复杂度评分：1（原始/函数）、2（数组）、3（对象）。

```typescript
import type { TypeComplexityV2 } from 'uni-types'

type T1 = TypeComplexityV2<string>    // 1
type T2 = TypeComplexityV2<string[]>  // 2
```

### `CompilationTimeV2<T>`

编译时间分类：`'fast'`、`'moderate'` 或 `'slow'`。

### `TypeSizeV2<T>`

类型大小分类：`'small'`、`'medium'` 或 `'large'`。

```typescript
import type { TypeSizeV2 } from 'uni-types'

type T1 = TypeSizeV2<string>  // 'small'
```

### `PerformanceWarningV2<T>`

性能警告接口，包含 `_type`、`_severity`、`_message` 和 `_suggestion` 字段。

```typescript
import type { PerformanceWarning } from 'uni-types'

type PW = PerformanceWarning
// PW.level: string, PW.message: string
```
