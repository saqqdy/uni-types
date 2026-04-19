# Type Inference Enhancements

**Since 1.6.0**

Advanced type inference utilities.

## Overview

Type Inference Enhancements provides advanced type inference utilities including type extraction, reconstruction, narrowing, widening, and type predicates. It enables sophisticated type-level programming with proper type analysis.

This module extends TypeScript's built-in inference capabilities with more powerful type manipulation utilities.

## Basic Usage

```typescript
import type { Infer, InferReturn, InferArgs, IsAny, IsNever, Equals, TypeName } from 'uni-types'

// Infer promise value
type PromiseValue = Infer<Promise<string>> // string

// Infer function return type
type ReturnValue = InferReturn<() => number> // number

// Infer function arguments
type Args = InferArgs<(a: string, b: number) => void> // [string, number]

// Type predicates
type CheckAny = IsAny<any> // true
type CheckNever = IsNever<never> // true

// Type equality
type AreEqual = Equals<string, string> // true

// Type name
type Name = TypeName<number> // 'number'
```

## Key Types

### Infer

Extract type from wrapper types.

```typescript
type Infer<T> = T extends Promise<infer U> ? U : T
```

### InferReturn

Extract return type from function.

```typescript
type InferReturn<T extends (...args: unknown[]) => unknown> = T extends (...args: unknown[]) => infer R ? R : never
```

### InferArgs

Extract arguments from function.

```typescript
type InferArgs<T extends (...args: unknown[]) => unknown> = T extends (...args: infer A) => unknown ? A : never
```

### ExtractFunction

Extract function type from union.

```typescript
type ExtractFunction<T> = T extends (...args: unknown[]) => unknown ? T : never
```

### ExtractClass

Extract class type from union.

```typescript
type ExtractClass<T> = T extends abstract new (...args: unknown[]) => unknown ? T : never
```

### Reconstruct

Reconstruct type with inferred properties.

```typescript
type Reconstruct<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
```

### Narrow

Narrow type with predicate.

```typescript
type Narrow<T> = T extends unknown ? (x: T) => T : never
```

### Widen

Widen literal types to primitives.

```typescript
type Widen<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : T extends bigint ? bigint : T
```

### IsAny

Check if type is `any`.

```typescript
type IsAny<T> = 0 extends (1 & T) ? true : false
```

### IsNever

Check if type is `never`.

```typescript
type IsNever<T> = [T] extends [never] ? true : false
```

### IsUnknown

Check if type is `unknown`.

```typescript
type IsUnknown<T> = unknown extends T ? (T extends Record<string, never> ? false : true) : false
```

### IsFunction

Check if type is function.

```typescript
type IsFunction<T> = T extends (...args: unknown[]) => unknown ? true : false
```

### IsArray

Check if type is array.

```typescript
type IsArray<T> = T extends unknown[] ? true : false
```

### IsUnion

Check if type is union.

```typescript
type IsUnion<T, U = T> = (T extends U ? (U extends T ? true : false) : false) extends true ? false : true
```

### Equals

Check type equality.

```typescript
type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
```

### TypeName

Get name of type.

```typescript
type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : T extends boolean ? 'boolean' : T extends undefined ? 'undefined' : T extends null ? 'null' : 'unknown'
```

### TypeCategory

Get category of type.

```typescript
type TypeCategory = 'primitive' | 'object' | 'array' | 'function' | 'union' | 'intersection' | 'tuple' | 'literal' | 'unknown'
```

## Related

- [Infer](./infer) - Basic inference types
- [Guards](./guards) - Type guards
- [Functional](./functional) - Functional programming