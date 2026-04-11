# Roadmap

This document outlines the development roadmap for `uni-types`.

## Version History

- [x] [1.0.0](#100) - Initial stable release
- [ ] [1.1.0](#110) - Enhanced type utilities (Planned)

---

## [1.0.0] - 2024-04-11

### Core Features
- [x] Core operations (PickRequired, PickPartial, OmitRequired, OmitPartial)
- [x] Tuple operations (Head, Last, Tail, Init, Reverse, Flatten, TupleLength, IsEmptyTuple)
- [x] Deep operations (DeepPartial, DeepRequired, DeepReadonly, DeepMutable)
- [x] Type guards (IsArray, IsTuple, IsEqual, IsAny, IsNever, IsUnknown)
- [x] Type inference (Awaited, ArrayElement, ValueOf, FunctionKeys, NonFunctionKeys, FirstParameter)
- [x] Utility types (Merge, NonNullable, Exclusive, NoNullish, Nullable, Optional, Maybe, LoosePartial)
- [x] Key types (RequiredKeys, OptionalKeys, WritableKeys, ReadonlyKeys)
- [x] Path types (Paths, PathValue, SplitPath)
- [x] Literal types (Literal, LiteralString, LiteralNumber, LiteralBoolean)
- [x] String case conversion (CamelCase, SnakeCase, CamelCaseKeys, SnakeCaseKeys)
- [x] Advanced types (AtLeastOne, StrictExtract, StrictExclude, UnionToIntersection, UnionToTuple)

---

## [1.1.0] - Planned

### 1. Deep Path Operations

Deep operations based on path strings for precise nested property manipulation.

```ts
// Deep omit by path
export type DeepOmit<T, P extends string> = ...

// Deep pick by path
export type DeepPick<T, P extends string> = ...

// Examples
interface User {
  profile: {
    name: string
    email: string
    settings: {
      theme: string
      lang: string
    }
  }
}

DeepOmit<User, 'profile.settings'> 
// { profile: { name: string; email: string } }

DeepPick<User, 'profile.name' | 'profile.settings.theme'>
// { profile: { name: string; settings: { theme: string } } }
```

**Priority**: High  
**Effort**: Medium

---

### 2. Object Key Utilities

Additional key-related type utilities.

```ts
// Get all keys as literal union
export type Keys<T> = keyof T

// Rename object keys
export type RenameKeys<T, M extends Record<string, string>> = ...

// Example
RenameKeys<{ oldName: string }, { oldName: 'newName' }>
// { newName: string }
```

**Priority**: Medium  
**Effort**: Low

---

### 3. Conditional Type Utilities

Conditional type helpers for cleaner type logic.

```ts
// If-then-else at type level
export type If<C extends boolean, T, F> = C extends true ? T : F

// Type constraint assertion
export type Assert<T, U extends T> = T extends U ? T : never

// Not operator for boolean types
export type Not<B extends boolean> = B extends true ? false : true

// And/Or operators
export type And<A extends boolean, B extends boolean> = A extends true ? B : false
export type Or<A extends boolean, B extends boolean> = A extends true ? true : B

// Examples
If<true, string, number>    // string
If<false, string, number>   // number
Assert<string | number, string>  // string
```

**Priority**: Medium  
**Effort**: Low

---

### 4. Enhanced Path Types

More powerful path utilities with validation and array support.

```ts
// Validate if path exists in type
export type ValidPath<T, P extends string> = ...

// Get paths including array indices
export type ArrayPaths<T> = ...

// Get leaf node paths only (paths to primitive values)
export type LeafPaths<T> = ...

// Examples
ValidPath<{ a: { b: string } }, 'a.b'>  // true
ValidPath<{ a: { b: string } }, 'a.c'>  // false

interface Users {
  users: { name: string }[]
}
ArrayPaths<Users>  // 'users' | `users.${number}` | `users.${number}.name`
LeafPaths<Users>   // `users.${number}.name`
```

**Priority**: High  
**Effort**: Medium

---

### 5. Brand/Opaque Types

Type-safe branded types for nominal typing.

```ts
// Brand a type for nominal typing
export type Brand<T, B> = T & { __brand: B }

// Unbrand a branded type
export type Unbrand<T> = T extends Brand<infer U, infer _> ? U : T

// Common branded types
export type UserId = Brand<string, 'UserId'>
export type OrderId = Brand<string, 'OrderId'>
export type Email = Brand<string, 'Email'>

// Example
type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>

const userId: UserId = 'user-123' as UserId
const orderId: OrderId = 'order-456' as OrderId

// These won't mix - type safety!
// const wrong: OrderId = userId  // Error!
```

**Priority**: Medium  
**Effort**: Low

---

### 6. Function Utilities

Advanced function type utilities.

```ts
// Curry a function type
export type Curry<F> = ...

// Get function parameters as tuple
export type Parameters<T> = T extends (...args: infer P) => any ? P : never

// Get function return type
export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

// Get all parameter types
export type AllParameters<T> = ...

// Get Nth parameter type
export type NthParameter<T, N extends number> = ...

// Extract async function return type
export type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R> ? R : never

// Example
type Fn = (a: string, b: number) => boolean
Parameters<Fn>    // [string, number]
ReturnType<Fn>    // boolean
NthParameter<Fn, 1>  // number
```

**Priority**: Medium  
**Effort**: Low

---

### 7. Template Literal Utilities

String manipulation types using template literals.

```ts
// Replace all occurrences
export type ReplaceAll<S extends string, From extends string, To extends string> = ...

// Trim whitespace
export type Trim<S extends string> = ...
export type TrimLeft<S extends string> = ...
export type TrimRight<S extends string> = ...

// String to array
export type StringToArray<S extends string> = ...

// Capitalize all words
export type CapitalizeAll<S extends string> = ...

// Examples
ReplaceAll<'hello world world', 'world', 'there'>  // 'hello there there'
Trim<'  hello  '>    // 'hello'
StringToArray<'abc'> // ['a', 'b', 'c']
CapitalizeAll<'hello world'>  // 'Hello World'
```

**Priority**: Low  
**Effort**: Low

---

### 8. Record Utilities

Object/Record manipulation types.

```ts
// Make all properties nullable
export type DeepNullable<T> = ...

// Make all properties optional
export type DeepOptional<T> = ...

// Immutable object (deep readonly alternative)
export type Immutable<T> = ...

// Mutable object (deep mutable alternative)
export type Mutable<T> = ...

// Required deeply
export type DeepNonNullable<T> = ...

// Object with exactly these keys
export type Exact<T, Shape> = ...

// Examples
DeepNullable<{ a: { b: string } }>  // { a: { b: string | null } }
Immutable<{ a: { b: string[] } }>   // { readonly a: { readonly b: readonly string[] } }
```

**Priority**: Medium  
**Effort**: Medium

---

### 9. Numeric Utilities

Numeric type operations.

```ts
// Increment number type
export type Inc<N extends number> = ...

// Decrement number type
export type Dec<N extends number> = ...

// Add two number types
export type Add<A extends number, B extends number> = ...

// Subtract two number types
export type Subtract<A extends number, B extends number> = ...

// Range of numbers
export type Range<From extends number, To extends number> = ...

// Examples
Inc<5>       // 6
Add<3, 4>    // 7
Range<1, 5>  // 1 | 2 | 3 | 4 | 5
```

**Priority**: Low  
**Effort**: Medium

---

### 10. Testing Improvements

- [ ] Add edge case tests for deeply nested types
- [ ] Add combination tests (e.g., `DeepPartial<DeepReadonly<T>>`)
- [ ] Add performance benchmarks for complex types
- [ ] Add visual regression tests for type errors

**Priority**: Medium  
**Effort**: Medium

---

### 11. Documentation Enhancements

- [ ] Add "When to Use" guide for each category
- [ ] Add comparison with similar libraries (utility-types, type-fest)
- [ ] Add TypeScript playground links for examples
- [ ] Add troubleshooting guide for common type errors
- [ ] Add video tutorials

**Priority**: Medium  
**Effort**: Medium

---

### 12. Developer Experience

- [ ] Export internal helper types for advanced users
- [ ] Add ESLint plugin for type-related best practices
- [ ] Add VS Code snippets extension
- [ ] Add runtime type guards (optional, as separate package)

**Priority**: Low  
**Effort**: High

---

## Future Considerations (1.2.0+)

### Schema Validation Integration
- Integration with Zod/Yup for runtime validation
- Type guards with runtime checks
- Schema-to-type conversion

### Performance Optimization
- Lazy type evaluation for complex types
- Type caching strategies
- Compilation time optimization

### Ecosystem Integration
- React prop types utilities
- Vue component prop utilities
- tRPC integration helpers
- Prisma type utilities

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to the roadmap.

## Feedback

Have suggestions for the roadmap? Please [open an issue](https://github.com/saqqdy/uni-types/issues) with the label `roadmap`.