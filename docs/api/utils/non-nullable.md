# NonNullable

Exclude `null` and `undefined` from a type.

## Signature

```typescript
type NonNullable<T> = T & {}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to make non-nullable |

## Description

Removes `null` and `undefined` from a type. This is similar to TypeScript's built-in `NonNullable` but implemented differently for broader compatibility.

## Examples

### Basic Usage

```typescript
import type { NonNullable } from 'uni-types'

type Clean = NonNullable<string | null | undefined> // string
type Clean2 = NonNullable<number | null> // number
```

### With Object Types

```typescript
interface User {
  name: string | null
  email: string | undefined
}

type CleanUser = NonNullable<User>
// User (null/undefined remain in properties, use NoNullish for deep removal)
```

## Related

- [`NoNullish`](./no-nullish) - Remove null/undefined from all properties
- [`Nullable`](./nullable) - Add null to type
- [`Optional`](./optional) - Add undefined to type