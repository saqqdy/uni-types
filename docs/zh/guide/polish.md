# 最终优化类型

用于类型优化、简化和调试的类型定义。

## 类型优化

通过移除不必要的复杂性来优化类型。

```typescript
import type { Optimize, OptimizeDeep, OptimizeFor } from 'uni-types'

type Optimized = Optimize<{ a?: string | undefined }>  // { a?: string }
type DeepOptimized = OptimizeDeep<{ a?: { b?: string | null } }>
```

## 类型简化

简化复杂类型。

```typescript
import type { SimplifyAll, FlattenAll, NormalizeAll, CleanAll } from 'uni-types'

type Simplified = SimplifyAll<{ a: string } & { b: number }>
// { a: string; b: number }

type Cleaned = CleanAll<{ a: null; b: undefined; c: string }>
// { c: string }
```

## 类型去重

移除重复类型。

```typescript
import type { Deduplicate, RemoveDuplicates, Unique } from 'uni-types'

type NoDupes = RemoveDuplicates<['a', 'b', 'a', 'c']>
// ['a', 'b', 'c']
```

## 类型最小化

最小化类型表示。

```typescript
import type { Minify, Compact, StripOptional, StripNullable } from 'uni-types'

type Stripped = StripOptional<{ a?: string; b: number }>
// { b: number }

type NonNullable = StripNullable<string | null | undefined>
// string
```

## 类型调试

调试和分析类型。

```typescript
import type { DebugType, ExplainType, PrettyType, TypeInfo } from 'uni-types'

type Info = TypeInfo<{ a: string; b?: number }>
// {
//   type: { a: string; b?: number }
//   isObject: true
//   properties: 'a' | 'b'
//   ...
// }
```

## 类型验证

根据 schema 验证类型。

```typescript
import type { ValidateAll, CheckAll, VerifyAll } from 'uni-types'

interface Schema {
  name: string
  age: number
}

type Valid = ValidateAll<{ name: 'John', age: 30 }, Schema>
// { name: 'John', age: 30 }
```

## 类型文档

为类型添加文档。

```typescript
import type { Document, Describe, Example, Annotate } from 'uni-types'

type DocType = Document<{ value: string }, { description: '一个有文档的类型' }>
type Described = Describe<string, '一个字符串值'>
type WithExample = Example<number, 42>
```

## 类型终结化

以约束终结化类型。

```typescript
import type { Finalize, Freeze, Lock, Sealed, Immutable, Mutable } from 'uni-types'

type ReadonlyType = Freeze<{ a: string }>
// { readonly a: string }

type ImmutableType = Immutable<{ a: { b: string } }>
// { readonly a: { readonly b: string } }

type MutableType = Mutable<{ readonly a: string }>
// { a: string }
```

## 类型检查

类型守卫工具。

```typescript
import type {
  IsAny, IsNever, IsUnknown, IsNullable,
  IsArray, IsObject, IsFunction, IsPrimitive,
  IsUnion, IsIntersection, IsOptional, IsReadonly
} from 'uni-types'

type CheckAny = IsAny<any>        // true
type CheckNever = IsNever<never>  // true
type CheckArray = IsArray<string[]>  // true
type CheckFunction = IsFunction<() => void>  // true
```

## 类型比较

比较类型。

```typescript
import type { Equals, Extends, HasKey, HasKeys } from 'uni-types'

type EqualStrings = Equals<string, string>  // true
type ExtendsCheck = Extends<'a', string>     // true
type HasName = HasKey<{ name: string }, 'name'>  // true
```