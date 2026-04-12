# ReturnType

**Since 1.1.0**

Get function return type.

## Signature

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The function type |

## Examples

### Basic Usage

```typescript
import type { ReturnType } from 'uni-types'

type Fn = (a: string) => number
type Result = ReturnType<Fn>  // number
```

### With Functions

```typescript
function createUser(name: string) {
  return { id: 1, name }
}

type User = ReturnType<typeof createUser>
// { id: number; name: string }
```

### Complex Return Types

```typescript
type AsyncFn = () => Promise<string>
type Result = ReturnType<AsyncFn>  // Promise<string>

// For unwrapped async return types, use AsyncReturnType
```

## Related

- [`Parameters`](./parameters) - Get function parameters
- [`AsyncReturnType`](./async-return-type) - Unwrap Promise return type