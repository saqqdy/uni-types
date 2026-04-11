# Maybe

Add null/undefined to a type.

## Signature

```typescript
type Maybe<T> = T | null | undefined
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The base type |

## Description

Creates a type that can be `null` or `undefined`. This is a combination of `Nullable` and `Optional`.

## Examples

### Basic Usage

```typescript
import type { Maybe } from 'uni-types'

type Name = Maybe<string> // string | null | undefined

function greet(name: Maybe<string>) {
  if (!name) {
    return 'Hello, stranger!'
  }
  return `Hello, ${name}!`
}
```

### With API Responses

```typescript
interface ApiResponse<T> {
  data: Maybe<T>
  error: Maybe<string>
  loading: boolean
}

type UserResponse = ApiResponse<{
  id: number
  name: string
}>
```

## Related

- [`Nullable`](./nullable) - Add null to a type
- [`Optional`](./optional) - Add undefined to a type
- [`NonNullable`](./non-nullable) - Exclude null/undefined
