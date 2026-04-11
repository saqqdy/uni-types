# Awaited

Recursively unwrap Promise types.

## Signature

```typescript
type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The Promise type to unwrap |

## Description

`Awaited` is similar to TypeScript's built-in `Awaited` type, but documented here for completeness. It recursively unwraps nested Promises to get the final value type.

## Examples

### Basic Usage

```typescript
import type { Awaited } from 'uni-types'

type Result1 = Awaited<Promise<string>> // string
type Result2 = Awaited<Promise<number>> // number
```

### Nested Promises

```typescript
type Result3 = Awaited<Promise<Promise<string>>> // string
type Result4 = Awaited<Promise<Promise<Promise<boolean>>>> // boolean
```

### Non-Promise Types

```typescript
type Result5 = Awaited<string> // string
type Result6 = Awaited<number> // number
```

### With Async Functions

```typescript
async function fetchUser(): Promise<{ name: string; email: string }> {
  // ...
}

type User = Awaited<ReturnType<typeof fetchUser>>
// { name: string; email: string }
```

## Related

- [`ArrayElement`](./array-element) - Get array element type
- [`ValueOf`](./value-of) - Get object value types