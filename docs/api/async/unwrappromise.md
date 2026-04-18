# UnwrapPromise

**Since 1.3.0**

Unwrap a Promise type to its inner value type. Returns the inner type if wrapped in Promise, otherwise returns the original type.

## Signature

```typescript
type UnwrapPromise<T> = T extends Promise<infer V> ? V : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to unwrap |

## Examples

### Basic Usage

```typescript
import type { UnwrapPromise } from 'uni-types'

type Value = UnwrapPromise<Promise<string>> // string
```

### Non-Promise Type

```typescript
import type { UnwrapPromise } from 'uni-types'

type Direct = UnwrapPromise<number> // number
```

### With Async Functions

```typescript
import type { UnwrapPromise } from 'uni-types'

async function fetchUser() {
  return { id: 1, name: 'John' }
}

type User = UnwrapPromise<ReturnType<typeof fetchUser>> // { id: number; name: string }
```

## Related

- [`PromiseValue`](./promisevalue) - Extract value recursively
- [`PromiseResult`](./promiseresult) - Get resolved value (single level)
