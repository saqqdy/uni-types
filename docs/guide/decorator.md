# Type Decorators

Type decorator pattern utilities for TypeScript.

## Overview

The `decorator` module provides comprehensive type utilities for implementing the decorator pattern in TypeScript, including decorator contexts, metadata management, and common decorator patterns.

## Decorator Types

### Basic Decorators

```ts
import type { Decorator, ClassDecorator, MethodDecorator, PropertyDecorator } from 'uni-types'

// Generic decorator
type MyDecorator = Decorator<MyClass>

// Class decorator
type MyClassDecorator = ClassDecorator<typeof MyClass>

// Method decorator
type MyMethodDecorator = MethodDecorator<(arg: string) => number>

// Property decorator
type MyPropertyDecorator = PropertyDecorator<string>
```

### Decorator Contexts

TypeScript 5.0+ decorator contexts:

```ts
import type {
  ClassDecoratorContext,
  ClassMethodDecoratorContext,
  ClassFieldDecoratorContext,
} from 'uni-types'

interface MyContext extends ClassDecoratorContext {
  kind: 'class'
  name: string | symbol
  addInitializer: (initializer: () => void) => void
}
```

## Decorator Composition

### ComposeDecorators

Compose multiple decorators:

```ts
import type { ComposeDecorators } from 'uni-types'

type Composed = ComposeDecorators<MyDecorator>
// (...decorators: Decorator<MyClass>[]) => Decorator<MyClass>
```

### ChainDecorators

Chain decorators sequentially:

```ts
import type { ChainDecorators } from 'uni-types'

type Chained = ChainDecorators<MyClass>
// (first, second, ...rest) => Decorator<MyClass>
```

## Metadata Types

### Metadata Management

```ts
import type { MetadataKey, MetadataValue, MetadataMap } from 'uni-types'

const key: MetadataKey = 'myMetadata'
const value: MetadataValue<string> = 'metadata value'
const map: MetadataMap = new Map<MetadataKey, MetadataValue>()
```

### Reflect Metadata

```ts
import type { ReflectMetadata, DefineMetadata, GetMetadata } from 'uni-types'

interface MetadataOps extends ReflectMetadata {
  define: <K extends MetadataKey>(key: K, value: unknown, target: unknown) => void
  get: <K extends MetadataKey>(key: K, target: unknown) => MetadataValue | undefined
  has: <K extends MetadataKey>(key: K, target: unknown) => boolean
}
```

## Common Decorators

### Frozen / Sealed

```ts
import type { Frozen, Sealed } from 'uni-types'

type FrozenObj = Frozen<{ a: number }> // { readonly a: number }
type SealedObj = Sealed<{ a: number }> // Sealed object
```

### ReadOnly / WriteOnly

```ts
import type { ReadOnly, WriteOnly } from 'uni-types'

type RO = ReadOnly<{ a: number, b: string }> // { readonly a: number, readonly b: string }
type WO = WriteOnly<{ a: number }> // { a: number }
```

### Required / Optional

```ts
import type { Required, Optional } from 'uni-types'

type Req = Required<{ a?: number, b?: string }> // { a: number, b: string }
type Opt = Optional<{ a: number, b: string }> // { a?: number, b?: string }
```

## Lifecycle Decorators

### Before / After / Around

```ts
import type { BeforeOptions, AfterOptions, AroundOptions } from 'uni-types'

interface BeforeHook extends BeforeOptions<MyFunction> {
  hook: (...args: Parameters<MyFunction>) => void | boolean
}

interface AfterHook extends AfterOptions<MyFunction> {
  hook: (result: ReturnType<MyFunction>, ...args: Parameters<MyFunction>) => ReturnType<MyFunction> | void
}
```

## Cache Decorators

### Cached / Memoized

```ts
import type { CacheOptions, Cached, MemoizeOptions, Memoized } from 'uni-types'

interface CacheConfig extends CacheOptions {
  ttl?: number
  key?: (...args: unknown[]) => string
  maxSize?: number
}
```

## Error Handling Decorators

### Catch / Retry / Timeout

```ts
import type { CatchOptions, RetryOptions, TimeoutOptions } from 'uni-types'

interface RetryConfig extends RetryOptions {
  times?: number
  delay?: number
  backoff?: 'linear' | 'exponential'
}
```

## API Reference

| Type | Description |
|------|-------------|
| `Decorator<T>` | Generic decorator type |
| `ClassDecorator<T>` | Class decorator type |
| `MethodDecorator<T>` | Method decorator type |
| `PropertyDecorator<T>` | Property decorator type |
| `ClassDecoratorContext` | Class decorator context |
| `ClassMethodDecoratorContext` | Method decorator context |
| `ComposeDecorators<T>` | Compose decorators |
| `MetadataKey` | Metadata key type |
| `MetadataValue<T>` | Metadata value type |
| `ReflectMetadata<T>` | Reflect metadata interface |
| `Frozen<T>` | Frozen type |
| `Sealed<T>` | Sealed type |
| `ReadOnly<T>` | Read-only type |
| `Required<T>` | Required properties |
| `Optional<T>` | Optional properties |
| `CacheOptions` | Cache decorator options |
| `RetryOptions` | Retry decorator options |
| `TimeoutOptions` | Timeout decorator options |