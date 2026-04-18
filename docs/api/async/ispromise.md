# IsPromise

**Since 1.3.0**

Check if a type is a Promise. Returns `true` if the type is a Promise, otherwise `false`.

## Signature

```typescript
type IsPromise<T> = T extends Promise<any> ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Examples

### Basic Usage

```typescript
import type { IsPromise } from 'uni-types'

type Check1 = IsPromise<Promise<string>> // true
type Check2 = IsPromise<string> // false
```

### With Generic Types

```typescript
import type { IsPromise } from 'uni-types'

type MaybePromise<T> = IsPromise<T> extends true ? T : Promise<T>
```

### Conditional Logic

```typescript
import type { IsPromise } from 'uni-types'

type UnwrapIfPromise<T> = IsPromise<T> extends true ? PromiseResult<T> : T
```

## Related

- [`PromiseResult`](./promiseresult) - Get resolved value from Promise
- [`WrapPromise`](./wrappromise) - Wrap type in Promise
