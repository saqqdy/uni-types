# WrapPromise

**Since 1.3.0**

Wrap a type in a Promise. If the type is already a Promise, it recursively extracts the value first to avoid double-wrapping.

## Signature

```typescript
type WrapPromise<T> = Promise<PromiseValue<T>>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to wrap in Promise |

## Examples

### Basic Usage

```typescript
import type { WrapPromise } from 'uni-types'

type Wrapped = WrapPromise<string> // Promise<string>
```

### Already a Promise

```typescript
import type { WrapPromise } from 'uni-types'

// Avoids double-wrapping by extracting value first
type StillSingle = WrapPromise<Promise<number>> // Promise<number>
```

### With Union Types

```typescript
import type { WrapPromise } from 'uni-types'

type MaybeAsync = string | Promise<string>
type AlwaysAsync = WrapPromise<MaybeAsync> // Promise<string>
```

## Related

- [`PromiseValue`](./promisevalue) - Extract value from Promise
- [`IsPromise`](./ispromise) - Check if type is a Promise
