# Unbrand

Extract the underlying type from a branded type.

## Signature

```typescript
type Unbrand<T> = T extends Brand<infer U, infer _> ? U : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The branded type to unbrand |

## Description

Extracts the underlying type from a `Brand` type. If the type is not branded, returns it unchanged.

## Examples

### Basic Usage

```typescript
import type { Brand, Unbrand } from 'uni-types'

type UserId = Brand<string, 'UserId'>

type Raw = Unbrand<UserId>  // string
```

### With Non-Branded Types

```typescript
type A = Unbrand<string>   // string
type B = Unbrand<number>   // number
type C = Unbrand<User>     // User (unchanged)
```

### Extracting Values

```typescript
type UserId = Brand<string, 'UserId'>

function getRawId(id: UserId): string {
  return id as Unbrand<UserId>
}
```

## Related

- [`Brand`](./brand) - Create a branded type
