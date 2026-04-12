# Roadmap

This document outlines the development roadmap for `uni-types`.

## Version History

- [x] [1.0.0](#100) - Initial stable release (2024-04-11)
- [x] [1.1.0](#110) - Enhanced type utilities (2026-04-11)
- [x] [1.2.0](#120) - Schema validation & ecosystem integration (2026-04-12)

---

## [1.0.0] - 2024-04-11

### Core Features
- [x] Core operations (PickRequired, PickPartial, OmitRequired, OmitPartial)
- [x] Tuple operations (Head, Last, Tail, Init, Reverse, Flatten, TupleLength, IsEmptyTuple)
- [x] Deep operations (DeepPartial, DeepRequired, DeepReadonly, DeepMutable)
- [x] Type guards (IsArray, IsTuple, IsEqual, IsAny, IsNever, IsUnknown)
- [x] Type inference (Awaited, ArrayElement, ValueOf, FunctionKeys, NonFunctionKeys, FirstParameter, FunctionOnly, DataOnly)
- [x] Utility types (Merge, NonNullable, Exclusive, NoNullish, Nullable, Optional, Maybe, LoosePartial)
- [x] Key types (RequiredKeys, OptionalKeys, WritableKeys, ReadonlyKeys)
- [x] Path types (Paths, PathValue, SplitPath)
- [x] Literal types (Literal, LiteralString, LiteralNumber, LiteralBoolean)
- [x] String case conversion (CamelCase, SnakeCase, CamelCaseKeys, SnakeCaseKeys)
- [x] Advanced types (AtLeastOne, StrictExtract, StrictExclude, UnionToIntersection, UnionToTuple)

### Improvements
- [x] Fixed DeepPartial/DeepRequired/DeepReadonly to properly handle arrays, Maps, Sets, and built-in types
- [x] Fixed SnakeCase to correctly handle consecutive uppercase letters (e.g., `XMLParser` → `xml_parser`)
- [x] All code comments converted to English

### Documentation
- [x] VitePress documentation site with bilingual support (English + Chinese)
- [x] 69 English documentation files
- [x] 69 Chinese documentation files (fully synchronized)
- [x] TypeScript blue theme styling
- [x] API reference for all 50+ types
- [x] Guide pages for all categories

### Testing
- [x] 91 type tests with vitest
- [x] Full type coverage validation
- [x] Edge case tests (never, null, undefined, primitive types, empty objects)

### Developer Experience
- [x] ESLint configuration with TypeScript support
- [x] Updated .gitignore for VitePress artifacts
- [x] Vite 8.x compatibility for vitest

---

## [1.1.0] - 2026-04-11

### New Features

#### 1. Deep Path Operations ✓

Deep operations based on path strings for precise nested property manipulation.

```ts
// Deep omit by path
export type DeepOmit<T, P extends string> = ...

// Deep pick by path
export type DeepPick<T, P extends string> = ...

// Deep pick/omit for union paths
export type DeepPickPaths<T, P extends string> = ...
export type DeepOmitPaths<T, P extends string> = ...
```

#### 2. Conditional Type Utilities ✓

Conditional type helpers for cleaner type logic.

```ts
export type If<C extends boolean, T, F> = C extends true ? T : F
export type Not<B extends boolean> = B extends true ? false : true
export type And<A extends boolean, B extends boolean> = A extends true ? B : false
export type Or<A extends boolean, B extends boolean> = A extends true ? true : B
export type Assert<T, U extends T> = T extends U ? T : never
```

#### 3. Enhanced Path Types ✓

More powerful path utilities with validation and array support.

```ts
export type ValidPath<T, P extends string> = ...
export type ArrayPaths<T> = ...
export type LeafPaths<T> = ...
export type PathLength<P extends string> = ...
export type ParentPath<P extends string> = ...
export type PathLeaf<P extends string> = ...
```

#### 4. Brand/Opaque Types ✓

Type-safe branded types for nominal typing.

```ts
export type Brand<T, B extends string> = T & { __brand: B }
export type Unbrand<T> = T extends Brand<infer U, infer _> ? U : T
export type BrandedString<B extends string> = Brand<string, B>
export type BrandedNumber<B extends string> = Brand<number, B>
```

#### 5. Object Key Utilities ✓

Additional key-related type utilities.

```ts
export type Keys<T> = keyof T
export type RenameKeys<T, M extends Record<string, string>> = ...
export type PrefixKeys<T, P extends string> = ...
export type SuffixKeys<T, S extends string> = ...
export type PascalCaseKeys<T> = ...
export type KeysByValueType<T, V> = ...
export type FilterKeys<T, P extends string> = ...
```

#### 6. Function Utilities ✓

Advanced function type utilities.

```ts
export type Parameters<T> = T extends (...args: infer P) => any ? P : never
export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any
export type NthParameter<T, N extends number> = ...
export type AsyncReturnType<T> = ...
export type ThisParameterType<T> = ...
export type OmitThisParameter<T> = ...
export type IsFunction<T> = ...
export type IsAsyncFunction<T> = ...
export type OptionalParameters<T> = ...
export type AppendParameter<T, P> = ...
export type PrependParameter<T, P> = ...
```

#### 7. Template Literal Utilities ✓

String manipulation types using template literals.

```ts
export type ReplaceAll<S, From, To> = ...
export type Replace<S, From, To> = ...
export type Trim<S> = ...
export type TrimLeft<S> = ...
export type TrimRight<S> = ...
export type StringToArray<S> = ...
export type CapitalizeAll<S> = ...
export type UncapitalizeAll<S> = ...
export type StartsWith<S, P> = ...
export type EndsWith<S, P> = ...
export type StringLength<S> = ...
export type Repeat<S, N> = ...
export type PadStart<S, N, P> = ...
export type PadEnd<S, N, P> = ...
```

#### 8. Record Utilities ✓

Object/Record manipulation types.

```ts
export type DeepNullable<T> = ...
export type DeepOptional<T> = ...
export type Immutable<T> = ...
export type Mutable<T> = ...
export type DeepNonNullable<T> = ...
export type Exact<T, Shape> = ...
export type Required<T> = ...
export type DeepRequiredProperties<T> = ...
export type HasKeys<T, K> = ...
export type HasExactKeys<T, K> = ...
```

#### 9. Numeric Utilities ✓

Numeric type operations.

```ts
export type Inc<N extends number> = ...
export type Dec<N extends number> = ...
export type Add<A extends number, B extends number> = ...
export type Subtract<A extends number, B extends number> = ...
export type GreaterThan<A, B> = ...
export type LessThan<A, B> = ...
export type Max<A, B> = ...
export type Min<A, B> = ...
```

### Documentation ✓

- [x] Updated VitePress config with new sidebar entries
- [x] 92 English API reference pages (was 69)
- [x] 92 Chinese API reference pages (fully synchronized)
- [x] 8 new guide pages (brand, conditional, functions, keys, numeric, path, record, template)
- [x] Updated API overview with all 128+ types
- [x] Updated introduction page with new features
- [x] Updated quick-start page with new modules
- [x] Updated deep operations guide with DeepOmit/DeepPick

### Testing ✓

- [x] 71 new type tests added
- [x] All tests passing (162 total)
- [x] Full type coverage validation

### Code Quality ✓

- [x] Fixed lint errors (ts/no-empty-object-type, ts/no-unsafe-function-type)
- [x] All lint checks passing

---

## [1.2.0] - 2026-04-12

### New Features

#### 1. Schema Validation Integration ✓

Types for working with schema validation libraries.

```ts
// Runtime type checking
export type RuntimeGuard<T> = (value: unknown) => value is T
export type GuardedType<G> = G extends (value: unknown) => value is infer T ? T : never
export type HasRuntimeCheck<T> = ...
export type AssertionFunction<T> = (value: unknown) => asserts value is T

// Zod integration
export type ZodOutput<T> = ...
export type ZodInput<T> = ...
export type IsZodSchema<T> = ...
export type ZodShape<T> = ...
export type ZodRequiredKeys<T> = ...
export type ZodOptionalKeys<T> = ...

// Yup integration
export type YupOutput<T> = ...
export type YupInput<T> = ...
export type IsYupSchema<T> = ...
export type YupRequiredKeys<T> = ...
export type YupOptionalKeys<T> = ...
```

#### 2. Ecosystem Integration ✓

Types for popular frameworks and libraries.

```ts
// React props utilities
export type ComponentProps<T> = ...
export type PropsWithChildren<P> = ...
export type PropsWithoutChildren<P> = ...
export type RequiredProps<P> = ...
export type OptionalProps<P> = ...
export type MergeDefaultProps<P, D> = ...

// Vue props utilities
export type VuePropType<T> = ...
export type VueEmitType<T> = ...
export type VueModelProps<K, T> = ...
export type VueSlots<T> = ...

// tRPC utilities
export type TRPCProcedureInput<T> = ...
export type TRPCProcedureOutput<T> = ...
export type TRPCRouterShape<T> = ...

// Prisma utilities
export type PrismaCreateInput<T> = ...
export type PrismaUpdateInput<T> = ...
export type PrismaWhereInput<T> = ...
export type PrismaScalarFields<T> = ...
export type PrismaRelationFields<T> = ...
```

#### 3. Performance Optimization ✓

Types for optimizing TypeScript compilation.

```ts
// Lazy type evaluation
export type Lazy<T> = () => T
export type ForceEvaluate<T> = ...
export type Deferred<T> = ...
export type Thunk<T> = ...

// Type caching
export type Cached<T> = ...
export type CachedValue<T> = ...
export type Memoized<T> = ...

// Type optimization
export type Simplify<T> = ...
export type DeepSimplify<T> = ...
export type Compact<T> = ...
export type StripNever<T> = ...
export type MergeAll<T> = ...
export type TypeEq<A, B> = ...
```

### Dependencies ✓

- Added optional peerDependencies for Zod, Yup, React, Vue, tRPC, and Prisma

### Testing ✓

- [x] 47 new type tests added
- [x] All tests passing (209 total)
- [x] Full type coverage validation

### Code Quality ✓

- [x] All lint checks passing
- [x] Build successful

### Documentation ✓

- [x] Schema Validation guide (English & Chinese)
- [x] Ecosystem Integration guide (English & Chinese)
- [x] Performance Optimization guide (English & Chinese)
- [x] API reference pages for Schema types (RuntimeGuard, GuardedType, ZodOutput, etc.)
- [x] API reference pages for Ecosystem types (ComponentProps, PropsWithChildren, PrismaCreateInput, etc.)
- [x] API reference pages for Performance types (Simplify, DeepSimplify, etc.)
- [x] Updated README.md with v1.2.0 features
- [x] Updated README_CN.md with v1.2.0 features
- [x] Updated CHANGELOG.md with v1.2.0 release notes
- [x] VitePress config already includes all new sections

---

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines on how to contribute to the roadmap.

## Feedback

Have suggestions for the roadmap? Please [open an issue](https://github.com/saqqdy/uni-types/issues) with the label `roadmap`.