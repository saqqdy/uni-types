# Final Polish Types

Type definitions for type optimization, simplification, and debugging.

## Type Optimization

Optimize types by removing unnecessary complexity.

```typescript
import type { Optimize, OptimizeDeep, OptimizeFor } from 'uni-types'

type Optimized = Optimize<{ a?: string | undefined }>  // { a?: string }
type DeepOptimized = OptimizeDeep<{ a?: { b?: string | null } }>
```

## Type Simplification

Simplify complex types.

```typescript
import type { SimplifyAll, FlattenAll, NormalizeAll, CleanAll } from 'uni-types'

type Simplified = SimplifyAll<{ a: string } & { b: number }>
// { a: string; b: number }

type Cleaned = CleanAll<{ a: null; b: undefined; c: string }>
// { c: string }
```

## Type Deduplication

Remove duplicate types.

```typescript
import type { Deduplicate, RemoveDuplicates, Unique } from 'uni-types'

type NoDupes = RemoveDuplicates<['a', 'b', 'a', 'c']>
// ['a', 'b', 'c']
```

## Type Minification

Minify type representations.

```typescript
import type { Minify, Compact, StripOptional, StripNullable } from 'uni-types'

type Stripped = StripOptional<{ a?: string; b: number }>
// { b: number }

type NonNullable = StripNullable<string | null | undefined>
// string
```

## Type Debugging

Debug and analyze types.

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

## Type Validation

Validate types against schemas.

```typescript
import type { ValidateAll, CheckAll, VerifyAll } from 'uni-types'

interface Schema {
  name: string
  age: number
}

type Valid = ValidateAll<{ name: 'John', age: 30 }, Schema>
// { name: 'John', age: 30 }
```

## Type Documentation

Add documentation to types.

```typescript
import type { Document, Describe, Example, Annotate } from 'uni-types'

type DocType = Document<{ value: string }, { description: 'A documented type' }>
type Described = Describe<string, 'A string value'>
type WithExample = Example<number, 42>
```

## Type Finalization

Finalize types with constraints.

```typescript
import type { Finalize, Freeze, Lock, Sealed, Immutable, Mutable } from 'uni-types'

type ReadonlyType = Freeze<{ a: string }>
// { readonly a: string }

type ImmutableType = Immutable<{ a: { b: string } }>
// { readonly a: { readonly b: string } }

type MutableType = Mutable<{ readonly a: string }>
// { a: string }
```

## Type Checks

Type guard utilities.

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

## Type Comparisons

Compare types.

```typescript
import type { Equals, Extends, HasKey, HasKeys } from 'uni-types'

type EqualStrings = Equals<string, string>  // true
type ExtendsCheck = Extends<'a', string>     // true
type HasName = HasKey<{ name: string }, 'name'>  // true
```