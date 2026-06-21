# Unified Type System

This guide covers the **Unified Type System** features introduced in v2.0.0.

## Overview

The Unified Type System provides a coherent, consistent API surface for type operations in v2.0.0. It introduces consistent naming conventions, simplified type operations, and a migration path from v1.x.

## Core Wrappers

v2.0.0 introduces four core namespaces that organize the type system:

```typescript
import type { TypeV2, OpsV2, ExtV2, UtilV2 } from 'uni-types'

// TypeV2 - Core type wrapper
type T = TypeV2<string>
// T._type: string, T._version: 'v2'

// OpsV2 - Type operations namespace
type O = OpsV2<{ a: string }>
// O._target: { a: string }, O._opsVersion: 'v2'
```

## Unified Operations

### Pick & Omit

```typescript
import type { UnifiedPick, UnifiedOmit } from 'uni-types'

type Picked = UnifiedPick<{ a: string; b: number; c: boolean }, 'a' | 'b'>
// { a: string; b: number }

type Omitted = UnifiedOmit<{ a: string; b: number; c: boolean }, 'c'>
// { a: string; b: number }
```

### Partial & Required

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

## V2 Implementations

### DeepPartialV2

Improved deep partial implementation that correctly handles arrays, Maps, Sets, and functions:

```typescript
import type { DeepPartialV2 } from 'uni-types'

type Result = DeepPartialV2<{
  nested: { deep: { value: string } }
  items: Array<{ id: number }>
  fn: (x: string) => number
}>
// { nested?: { deep?: { value?: string } }; items?: Array<{ id?: number }>; fn: (x: string) => number }
```

### Type Predicates

```typescript
import type { IsEqualV2, IsSubtypeV2, IsSupertypeV2 } from 'uni-types'

type Eq = IsEqualV2<string, string>     // true
type Neq = IsEqualV2<string, number>    // false
type Sub = IsSubtypeV2<'hello', string> // true
type Sup = IsSupertypeV2<string, 'hello'> // true
```

## Migration from v1.x

The unified type system introduces breaking changes for a cleaner API:

| v1.x API | v2.0.0 API | Migration |
|-----------|------------|-----------|
| `PickRequired<T, K>` | `PickRequiredV2<T, K>` | Automatic rename |
| `DeepPartial<T>` | `DeepPartialV2<T>` | Improved implementation |
| `IsArray<T>` | `IsArrayV2<T>` | Automatic rename |
| `Merge<A, B>` | `UnifiedMerge<A, B>` | Manual update |
| `Brand<T, B>` | `Nominal<T, B>` | Automatic rename |

Use the `V1Compat<T>` wrapper for gradual migration:

```typescript
import type { V1Compat } from 'uni-types'

type Legacy = V1Compat<MyV1Type>  // Adds __v1_compat__: true marker
```

## API Reference

See the [Unified Type System API Reference](/api/unified) for complete documentation.
