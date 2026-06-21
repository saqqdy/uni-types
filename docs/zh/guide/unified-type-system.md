# 统一类型系统

本指南介绍 v2.0.0 中引入的 **统一类型系统** 特性。

## 概述

统一类型系统为 v2.0.0 提供了一致、连贯的类型操作 API 表面。它引入了统一的命名约定、简化的类型操作以及从 v1.x 的迁移路径。

## 核心包装器

v2.0.0 引入四个核心命名空间来组织类型系统：

```typescript
import type { TypeV2, OpsV2, ExtV2, UtilV2 } from 'uni-types'

// TypeV2 - 核心类型包装器
type T = TypeV2<string>
// T._type: string, T._version: 'v2'

// OpsV2 - 类型操作命名空间
type O = OpsV2<{ a: string }>
// O._target: { a: string }, O._opsVersion: 'v2'
```

## 统一操作

### Pick 和 Omit

```typescript
import type { UnifiedPick, UnifiedOmit } from 'uni-types'

type Picked = UnifiedPick<{ a: string; b: number; c: boolean }, 'a' | 'b'>
// { a: string; b: number }

type Omitted = UnifiedOmit<{ a: string; b: number; c: boolean }, 'c'>
// { a: string; b: number }
```

### Partial 和 Required

```typescript
import type { UnifiedPartial, UnifiedRequired } from 'uni-types'

type Partial = UnifiedPartial<{ a: string; b: number }>
// { a?: string; b?: number }

type Required = UnifiedRequired<{ a?: string; b?: number }>
// { a: string; b: number }
```

### Merge

```typescript
import type { UnifiedMerge, UnifiedDeepMerge } from 'uni-types'

type Merged = UnifiedMerge<{ a: string }, { b: number }>
// { a: string; b: number }

type Deep = UnifiedDeepMerge<
  { a: { x: string; y: number } },
  { a: { y: boolean; z: string[] } }
>
// { a: { x: string; y: boolean; z: string[] } }
```

## V2 实现

### DeepPartialV2

改进的深度 Partial 实现，正确处理数组、Map、Set 和函数：

```typescript
import type { DeepPartialV2 } from 'uni-types'

type Result = DeepPartialV2<{
  nested: { deep: { value: string } }
  items: Array<{ id: number }>
  fn: (x: string) => number
}>
// { nested?: { deep?: { value?: string } }; items?: Array<{ id?: number }>; fn: (x: string) => number }
```

### 类型谓词

```typescript
import type { IsEqualV2, IsSubtypeV2, IsSupertypeV2 } from 'uni-types'

type Eq = IsEqualV2<string, string>     // true
type Neq = IsEqualV2<string, number>    // false
type Sub = IsSubtypeV2<'hello', string> // true
type Sup = IsSupertypeV2<string, 'hello'> // true
```

## 从 v1.x 迁移

统一类型系统引入了破坏性变更以实现更清晰的 API：

| v1.x API | v2.0.0 API | 迁移方式 |
|-----------|------------|----------|
| `PickRequired<T, K>` | `PickRequiredV2<T, K>` | 自动重命名 |
| `DeepPartial<T>` | `DeepPartialV2<T>` | 改进实现 |
| `IsArray<T>` | `IsArrayV2<T>` | 自动重命名 |
| `Merge<A, B>` | `UnifiedMerge<A, B>` | 手动更新 |
| `Brand<T, B>` | `Nominal<T, B>` | 自动重命名 |

使用 `V1Compat<T>` 包装器进行渐进式迁移：

```typescript
import type { V1Compat } from 'uni-types'

type Legacy = V1Compat<MyV1Type>  // 添加 __v1_compat__: true 标记
```

## API 参考

参阅 [统一类型系统 API 参考](/zh/api/unified) 获取完整文档。
