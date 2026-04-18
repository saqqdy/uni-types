# Async Utilities

**Since 1.3.0**

Promise and async type utilities.

## Promise Value Extraction

### PromiseValue

Extract the value type from a Promise (recursively).

```typescript
import type { PromiseValue } from 'uni-types'

type Value = PromiseValue<Promise<string>>  // string
type Nested = PromiseValue<Promise<Promise<number>>>  // number
```

### PromiseResult

Get the resolved value type from Promise (single level).

```typescript
import type { PromiseResult } from 'uni-types'

type Result = PromiseResult<Promise<string>>  // string
type Nested = PromiseResult<Promise<Promise<number>>>  // Promise<number>
```

### IsPromise

Check if type is a Promise.

```typescript
import type { IsPromise } from 'uni-types'

type Is = IsPromise<Promise<string>>  // true
type Not = IsPromise<string>  // false
```

### UnwrapPromise / WrapPromise

Promise wrapping utilities.

```typescript
import type { UnwrapPromise, WrapPromise } from 'uni-types'

type Value = UnwrapPromise<Promise<string>>  // string
type Wrapped = WrapPromise<string>  // Promise<string>
```

## Promise Settlement Types

### PromiseSettledResult

Result of a settled promise.

```typescript
import type { PromiseSettledResult, PromiseFulfilledResult, PromiseRejectedResult } from 'uni-types'

type Result = PromiseSettledResult<string>
// PromiseFulfilledResult<string> | PromiseRejectedResult
```

## Async Function Types

### AsyncReturnTypeFromPromise

Get return type of async function (unwrapped).

```typescript
import type { AsyncReturnTypeFromPromise } from 'uni-types'

type Value = AsyncReturnTypeFromPromise<() => Promise<string>>  // string
```

### AsyncParameters

Get parameters of async function.

```typescript
import type { AsyncParameters } from 'uni-types'

type Params = AsyncParameters<(a: string, b: number) => Promise<void>>  // [string, number]
```

### MakeAsync

Make function async.

```typescript
import type { MakeAsync } from 'uni-types'

type AsyncFn = MakeAsync<(x: string) => number>  // (x: string) => Promise<number>
```

## Async Result Types

### AsyncResult

Rust-style async result type.

```typescript
import type { AsyncResult, AsyncSuccess, AsyncFailure } from 'uni-types'

type Result = AsyncResult<string, Error>
// AsyncSuccess<string> | AsyncFailure<Error>
```

## Related

- [Functions](./functions) - Function type utilities
- [Concurrency](./concurrency) - Concurrency patterns