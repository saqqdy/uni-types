# 错误处理类型

**始于 1.9.0**

用于高级错误处理模式的类型。

## 概述

错误处理类型提供了类型级错误处理工具。它支持 Result 类型、Either 类型、Option 类型、错误链、恢复策略和领域特定错误。

此模块支持构建具有错误类型、恢复机制和验证错误正确约束的类型安全错误处理应用。

## 基本用法

```typescript
import type { Result, Either, Option, ValidationError, RecoveryStrategy } from 'uni-types'

// 定义 Result 类型
type ApiResult = Result<Data, NetworkError>

// 定义 Either 类型
type ConfigValue = Either<ValidationError, Config>

// 定义 Option 类型
type MaybeValue = Option<string>
```

## 核心类型

### Result

Result 类型（成功或失败）。

```typescript
type Result<T, E = Error> = Success<T> | Failure<E>
```

### Success

成功结果。

```typescript
interface Success<T> {
  ok: true
  value: T
}
```

### Failure

失败结果。

```typescript
interface Failure<E> {
  ok: false
  error: E
}
```

### Either

Either 类型（左或右）。

```typescript
type Either<L, R> = Left<L> | Right<R>
```

### Left / Right

左值和右值。

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

Option 类型（有或无）。

```typescript
type Option<T> = Some<T> | None
```

### Some / None

有值和无值。

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

基础错误结构。

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

自定义错误类型。

```typescript
interface CustomError<T = unknown> extends ErrorBase<string> {
  name: string
  data?: T
  retryable?: boolean
  severity?: ErrorSeverity
}
```

### ErrorSeverity

错误严重级别。

```typescript
type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'
```

### RecoveryStrategy

恢复策略类型。

```typescript
type RecoveryStrategy =
  | 'retry' // 重试操作
  | 'fallback' // 使用备用值
  | 'default' // 使用默认值
  | 'skip' // 跳过并继续
  | 'abort' // 终止操作
  | 'escalate' // 上报给更高层处理器
```

### RetryConfig

重试配置。

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

验证错误类型。

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

网络错误类型。

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

认证错误类型。

```typescript
interface AuthenticationError extends CustomError<'authentication'> {
  type: 'authentication'
  code?: 'unauthorized' | 'forbidden' | 'token_expired' | 'invalid_token'
}
```

### TimeoutError

超时错误类型。

```typescript
interface TimeoutError extends CustomError<'timeout'> {
  type: 'timeout'
  operation?: string
  timeoutMs?: number
}
```

### Panic

恐慌类型（不可恢复错误）。

```typescript
interface Panic extends CustomError<'panic'> {
  type: 'panic'
  fatal: true
  exitCode?: number
}
```

## 相关

- [事件系统](./event-system) - 事件处理类型
- [函数式编程](./functional) - 函数式模式
- [验证](./validation) - 验证类型