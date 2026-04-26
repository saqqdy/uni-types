# Error Handling Types

**Since 1.9.0**

Types for advanced error handling patterns.

## Overview

Error Handling Types provides type-level error handling utilities. It supports Result types, Either types, Option types, error chains, recovery strategies, and domain-specific errors.

This module enables building type-safe error handling applications with proper constraints for error types, recovery mechanisms, and validation errors.

## Basic Usage

```typescript
import type { Result, Either, Option, ValidationError, RecoveryStrategy } from 'uni-types'

// Define result type
type ApiResult = Result<Data, NetworkError>

// Define either type
type ConfigValue = Either<ValidationError, Config>

// Define option type
type MaybeValue = Option<string>
```

## Key Types

### Result

Result type (Success or Failure).

```typescript
type Result<T, E = Error> = Success<T> | Failure<E>
```

### Success

Success result.

```typescript
interface Success<T> {
  ok: true
  value: T
}
```

### Failure

Failure result.

```typescript
interface Failure<E> {
  ok: false
  error: E
}
```

### Either

Either type (Left or Right).

```typescript
type Either<L, R> = Left<L> | Right<R>
```

### Left / Right

Left and Right values.

```typescript
interface Left<L> {
  type: 'left'
  value: L
}

interface Right<R> {
  type: 'right'
  value: R
}
```

### Option

Option type (Some or None).

```typescript
type Option<T> = Some<T> | None
```

### Some / None

Some and None values.

```typescript
interface Some<T> {
  type: 'some'
  value: T
}

interface None {
  type: 'none'
}
```

### ErrorBase

Base error structure.

```typescript
interface ErrorBase<T extends ErrorType = ErrorType> {
  type: T
  message: ErrorMessage
  code?: ErrorCode
  stack?: ErrorStack
  cause?: unknown
  timestamp?: number
  context?: Record<string, unknown>
}
```

### CustomError

Custom error type.

```typescript
interface CustomError<T = unknown> extends ErrorBase<string> {
  name: string
  data?: T
  retryable?: boolean
  severity?: ErrorSeverity
}
```

### ErrorSeverity

Error severity levels.

```typescript
type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'
```

### RecoveryStrategy

Recovery strategy types.

```typescript
type RecoveryStrategy =
  | 'retry' // Retry the operation
  | 'fallback' // Use fallback value
  | 'default' // Use default value
  | 'skip' // Skip and continue
  | 'abort' // Abort operation
  | 'escalate' // Escalate to higher handler
```

### RetryConfig

Retry configuration.

```typescript
interface RetryConfig {
  maxAttempts: number
  delay: number
  backoff?: 'linear' | 'exponential' | 'fixed'
  maxDelay?: number
  retryOn?: (error: Error) => boolean
  onRetry?: (error: Error, attempt: number) => void
}
```

### ValidationError

Validation error type.

```typescript
interface ValidationError<T = unknown> extends CustomError<'validation'> {
  type: 'validation'
  field?: string
  path?: string
  value?: T
  constraint?: string
}
```

### NetworkError

Network error type.

```typescript
interface NetworkError extends CustomError<'network'> {
  type: 'network'
  status?: number
  statusText?: string
  url?: string
  retryable?: boolean
  timeout?: boolean
}
```

### AuthenticationError

Authentication error type.

```typescript
interface AuthenticationError extends CustomError<'authentication'> {
  type: 'authentication'
  code?: 'unauthorized' | 'forbidden' | 'token_expired' | 'invalid_token'
}
```

### TimeoutError

Timeout error type.

```typescript
interface TimeoutError extends CustomError<'timeout'> {
  type: 'timeout'
  operation?: string
  timeoutMs?: number
}
```

### Panic

Panic type (unrecoverable error).

```typescript
interface Panic extends CustomError<'panic'> {
  type: 'panic'
  fatal: true
  exitCode?: number
}
```

## Related

- [Event System](./event-system) - Event handling types
- [Functional Programming](./functional) - Functional patterns
- [Validation](./validation) - Validation types