# 异步工具

**自 1.3.0 起**

Promise 和异步类型工具。

## Promise 值提取

### PromiseValue

从 Promise 中提取值类型（递归）。

```typescript
import type { PromiseValue } from 'uni-types'

type Value = PromiseValue<Promise<string>>  // string
type Nested = PromiseValue<Promise<Promise<number>>>  // number
```

### PromiseResult

从 Promise 中获取解析值类型（单层）。

```typescript
import type { PromiseResult } from 'uni-types'

type Result = PromiseResult<Promise<string>>  // string
type Nested = PromiseResult<Promise<Promise<number>>>  // Promise<number>
```

### IsPromise

检查类型是否为 Promise。

```typescript
import type { IsPromise } from 'uni-types'

type Is = IsPromise<Promise<string>>  // true
type Not = IsPromise<string>  // false
```

### UnwrapPromise / WrapPromise

Promise 包装工具。

```typescript
import type { UnwrapPromise, WrapPromise } from 'uni-types'

type Value = UnwrapPromise<Promise<string>>  // string
type Wrapped = WrapPromise<string>  // Promise<string>
```

## Promise 结算类型

### PromiseSettledResult

Promise 结算结果。

```typescript
import type { PromiseSettledResult, PromiseFulfilledResult, PromiseRejectedResult } from 'uni-types'

type Result = PromiseSettledResult<string>
// PromiseFulfilledResult<string> | PromiseRejectedResult
```

## 异步函数类型

### AsyncReturnTypeFromPromise

获取异步函数的返回类型（解包）。

```typescript
import type { AsyncReturnTypeFromPromise } from 'uni-types'

type Value = AsyncReturnTypeFromPromise<() => Promise<string>>  // string
```

### AsyncParameters

获取异步函数的参数。

```typescript
import type { AsyncParameters } from 'uni-types'

type Params = AsyncParameters<(a: string, b: number) => Promise<void>>  // [string, number]
```

### MakeAsync

将函数变为异步。

```typescript
import type { MakeAsync } from 'uni-types'

type AsyncFn = MakeAsync<(x: string) => number>  // (x: string) => Promise<number>
```

## 异步结果类型

### AsyncResult

Rust 风格的异步结果类型。

```typescript
import type { AsyncResult, AsyncSuccess, AsyncFailure } from 'uni-types'

type Result = AsyncResult<string, Error>
// AsyncSuccess<string> | AsyncFailure<Error>
```

## 相关

- [函数类型](./functions) - 函数类型工具
- [并发模式](./concurrency) - 并发模式类型