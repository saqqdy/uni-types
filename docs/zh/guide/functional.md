# 函数式编程模式

**始于 1.6.0**

类型级函数式编程工具。

## 概述

函数式编程模式提供了函数式编程范式的类型，包括 Functor、Monad、Applicative 和 Lens 操作。它支持构建可组合、类型安全的函数式管道。

此模块在类型级别实现了常见的函数式抽象，支持 Maybe、Either、IO、Reader、Writer 和 State 单子。

## 基本用法

```typescript
import type { Maybe, Either, Result, Lens, Functor, Monad } from 'uni-types'

// Maybe 单子用于可选值
type OptionalValue = Maybe<string> // Some<string> | None

// Either 单子用于错误处理
type ValidationResult = Either<Error, string> // Left<Error> | Right<string>

// Result 类型（Rust 风格）
type OperationResult = Result<Data, Error> // Ok<Data> | Err<Error>

// Lens 用于深层访问
type NameLens = Lens<{ user: { name: string } }, string>
```

## 核心类型

### Functor

具有 map 操作的 Functor 类型。

```typescript
type Functor<T> = {
  value: T
  map<U>(f: (value: T) => U): Functor<U>
}
```

### Monad

具有 bind 和 return 操作的 Monad 类型。

```typescript
type Monad<T> = {
  value: T
  bind<U>(f: (value: T) => Monad<U>): Monad<U>
  return<U>(value: U): Monad<U>
}
```

### Maybe

用于处理可选值的 Maybe 单子。

```typescript
type Maybe<T> = Some<T> | None

type Some<T> = { value: T }
type None = { value: null }
```

### Either

用于错误处理的 Either 单子。

```typescript
type Either<L, R> = Left<L> | Right<R>

type Left<L> = { error: L }
type Right<R> = { value: R }
```

### Result

用于成功/失败处理的 Result 类型。

```typescript
type Result<T, E = Error> = Ok<T> | Err<E>

type Ok<T> = { success: true; value: T }
type Err<E> = { success: false; error: E }
```

### IO

用于副作用的 IO 单子。

```typescript
type IO<T> = {
  run: () => T
  map<U>(f: (value: T) => U): IO<U>
  chain<U>(f: (value: T) => IO<U>): IO<U>
}
```

### Lens

用于深层属性访问的 Lens 类型。

```typescript
type Lens<S, A> = {
  get: (source: S) => A
  set: (value: A, source: S) => S
}
```

### Semigroup

用于组合值的 Semigroup 类型。

```typescript
type Semigroup<T> = {
  concat: (other: T) => T
}
```

### Monoid

具有空值的 Monoid 类型。

```typescript
type Monoid<T> = Semigroup<T> & {
  empty: () => T
}
```

## 组合子类型

### Compose

函数组合类型。

```typescript
type Compose<F, G> = (f: F, g: G) => (...args: Parameters<G>) => ReturnType<F>
```

### Pipe

管道组合类型。

```typescript
type Pipe<F, G> = (f: F, g: G) => (...args: Parameters<F>) => ReturnType<G>
```

### Curry

柯里化函数类型。

```typescript
type Curry<F> = F extends (a: infer A, b: infer B) => infer R
  ? (a: A) => (b: B) => R
  : F
```

## 相关

- [类型推断](./inference) - 类型推断工具
- [模式匹配](./pattern) - 模式匹配类型