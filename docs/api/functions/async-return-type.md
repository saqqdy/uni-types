# AsyncReturnType

Extract async function return type (unwraps Promise).

## Signature

```typescript
type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : T extends (...args: any[]) => infer R
    ? R
    : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The async function type |

## Description

Unlike `ReturnType`, `AsyncReturnType` unwraps the Promise to get the resolved type.

## Examples

### Basic Usage

```typescript
import type { AsyncReturnType } from 'uni-types'

type AsyncFn = () => Promise<string>
type Result = AsyncReturnType<AsyncFn>  // string

// Compare with ReturnType:
type Wrapped = ReturnType<AsyncFn>  // Promise<string>
```

### With Real APIs

```typescript
async function fetchUser(id: string) {
  const res = await fetch(`/api/users/${id}`)
  return res.json() as Promise<{ id: string; name: string }>
}

type User = AsyncReturnType<typeof fetchUser>
// { id: string; name: string }
```

### Sync Fallback

```typescript
type SyncFn = () => string
type Result = AsyncReturnType<SyncFn>  // string
```

## Related

- [`ReturnType`](./return-type) - Get function return type