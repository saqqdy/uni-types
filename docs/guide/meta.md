# Metaprogramming Utilities

Type-level metaprogramming utilities for advanced type manipulation.

## Overview

The `meta` module provides powerful type-level metaprogramming capabilities, allowing you to inspect, transform, and manipulate types at compile time.

## Type Reflection

### TypeName

Get the name of a type as a string literal:

```ts
import type { TypeName } from 'uni-types'

type T1 = TypeName<string> // 'string'
type T2 = TypeName<number> // 'number'
type T3 = TypeName<boolean> // 'boolean'
type T4 = TypeName<object> // 'object'
type T5 = TypeName<unknown[]> // 'array'
```

### TypeCategory

Type category enumeration for classifying types:

```ts
import type { TypeCategory, GetTypeCategory } from 'uni-types'

type C1 = GetTypeCategory<string> // 'primitive' or 'literal'
type C2 = GetTypeCategory<{ a: number }> // 'object'
type C3 = GetTypeCategory<[1, 2, 3]> // 'tuple'
type C4 = GetTypeCategory<number[]> // 'array'
```

### TypeInfo

Complete type information structure:

```ts
import type { TypeInfo, Reflect } from 'uni-types'

type Info = TypeInfo<{ name: string, age: number }>
// { name: 'object', category: 'object', nullable: false, ... }
```

## Type Manipulation

### Transform

Transform type properties using rules:

```ts
import type { Transform } from 'uni-types'

type Original = { foo: number, bar: string }
type Transformed = Transform<Original, { foo: 'newFoo' }>
// { newFoo: number, bar: string }
```

### MergeTypes

Deep merge two types:

```ts
import type { MergeTypes } from 'uni-types'

type A = { a: number, b: { c: string } }
type B = { b: { d: number }, e: boolean }
type Merged = MergeTypes<A, B>
// { a: number, b: { c: string, d: number }, e: boolean }
```

## Type Predicates

### Satisfies

Check if a type satisfies a constraint:

```ts
import type { Satisfies } from 'uni-types'

type Check = Satisfies<string, string | number> // true
```

### Exactly

Check for exact type match:

```ts
import type { Exactly } from 'uni-types'

type E1 = Exactly<string, string> // true
type E2 = Exactly<string, string | number> // false
```

### IsNullable / IsOptionalType

Check type characteristics:

```ts
import type { IsNullable, IsOptionalType } from 'uni-types'

type N1 = IsNullable<string | null> // true
type N2 = IsNullable<string> // false
type O1 = IsOptionalType<{ a?: number }> // true
```

## Type Analysis

### Depth / Width

Analyze type structure:

```ts
import type { Depth, Width } from 'uni-types'

type Deep = { a: { b: { c: { d: number } } } }
type D = Depth<Deep> // 4

type Wide = { a: number, b: string, c: boolean }
type W = Width<Wide> // 3
```

## Path Utilities

### TypeAtPath

Get type at a nested path:

```ts
import type { TypeAtPath } from 'uni-types'

type Obj = { user: { profile: { name: string } } }
type Name = TypeAtPath<Obj, 'user.profile.name'> // string
```

### SetTypeAtPath

Set type at a nested path:

```ts
import type { SetTypeAtPath } from 'uni-types'

type Obj = { user: { name: string } }
type Modified = SetTypeAtPath<Obj, 'user.name', number>
// { user: { name: number } }
```

## Type Wrappers

### Lazy / Thunk

Lazy type evaluation:

```ts
import type { Lazy, Thunk } from 'uni-types'

type LazyString = Lazy<string> // () => string
type ThunkNumber = Thunk<number> // () => number
```

### Identity / Constant

Utility wrappers:

```ts
import type { Identity, Constant } from 'uni-types'

type I = Identity<string> // string
type C = Constant<42> // 42
```

## API Reference

| Type | Description |
|------|-------------|
| `Reflect<T>` | Runtime-like type reflection |
| `TypeName<T>` | Get type name as string literal |
| `TypeCategory` | Type category enumeration |
| `GetTypeCategory<T>` | Get the category of a type |
| `Transform<T, Rules>` | Transform type using rules |
| `Apply<T, F>` | Apply function to type |
| `ComposeTypes<T, U>` | Compose two types |
| `MergeTypes<T, U>` | Deep merge two types |
| `Satisfies<T, U>` | Check if type satisfies constraint |
| `ExtendsType<T, U>` | Check if type extends another |
| `Exactly<T, U>` | Check for exact type match |
| `IsNullable<T>` | Check if type is nullable |
| `IsOptionalType<T>` | Check if type is optional |
| `Depth<T>` | Get type nesting depth |
| `Width<T>` | Get type property count |
| `TypeAtPath<T, P>` | Get type at path |
| `SetTypeAtPath<T, P, V>` | Set type at path |
| `Lazy<T>` | Lazy type wrapper |
| `Identity<T>` | Identity type |