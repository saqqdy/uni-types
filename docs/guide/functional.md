# Functional Programming Patterns

**Since 1.6.0**

Type-level functional programming utilities.

## Overview

Functional Programming Patterns provides types for functional programming paradigms including Functors, Monads, Applicatives, and Lens operations. It enables building composable, type-safe functional pipelines.

This module implements common functional abstractions at the type level, supporting Maybe, Either, IO, Reader, Writer, and State monads.

## Basic Usage

```typescript
import type { Maybe, Either, Result, Lens, Functor, Monad } from 'uni-types'

// Maybe monad for optional values
type OptionalValue = Maybe<string> // Some<string> | None

// Either monad for error handling
type ValidationResult = Either<Error, string> // Left<Error> | Right<string>

// Result type (Rust-style)
type OperationResult = Result<Data, Error> // Ok<Data> | Err<Error>

// Lens for deep access
type NameLens = Lens<{ user: { name: string } }, string>
```

## Key Types

### Functor

Functor type with map operation.

```typescript
type Functor<T> = {
  value: T
  map<U>(f: (value: T) => U): Functor<U>
}
```

### Monad

Monad type with bind and return operations.

```typescript
type Monad<T> = {
  value: T
  bind<U>(f: (value: T) => Monad<U>): Monad<U>
  return<U>(value: U): Monad<U>
}
```

### Maybe

Maybe monad for handling optional values.

```typescript
type Maybe<T> = Some<T> | None

type Some<T> = { value: T }
type None = { value: null }
```

### Either

Either monad for error handling.

```typescript
type Either<L, R> = Left<L> | Right<R>

type Left<L> = { error: L }
type Right<R> = { value: R }
```

### Result

Result type for success/failure handling.

```typescript
type Result<T, E = Error> = Ok<T> | Err<E>

type Ok<T> = { success: true; value: T }
type Err<E> = { success: false; error: E }
```

### IO

IO monad for side effects.

```typescript
type IO<T> = {
  run: () => T
  map<U>(f: (value: T) => U): IO<U>
  chain<U>(f: (value: T) => IO<U>): IO<U>
}
```

### Lens

Lens type for deep property access.

```typescript
type Lens<S, A> = {
  get: (source: S) => A
  set: (value: A, source: S) => S
}
```

### Semigroup

Semigroup type for combining values.

```typescript
type Semigroup<T> = {
  concat: (other: T) => T
}
```

### Monoid

Monoid type with empty value.

```typescript
type Monoid<T> = Semigroup<T> & {
  empty: () => T
}
```

## Combinator Types

### Compose

Function composition type.

```typescript
type Compose<F, G> = (f: F, g: G) => (...args: Parameters<G>) => ReturnType<F>
```

### Pipe

Pipeline composition type.

```typescript
type Pipe<F, G> = (f: F, g: G) => (...args: Parameters<F>) => ReturnType<G>
```

### Curry

Curried function type.

```typescript
type Curry<F> = F extends (a: infer A, b: infer B) => infer R
  ? (a: A) => (b: B) => R
  : F
```

## Related

- [Type Inference](./inference) - Type inference utilities
- [Pattern Matching](./pattern) - Pattern matching types