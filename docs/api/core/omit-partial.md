# OmitPartial

Make all properties optional except specified ones.

## Signature

```typescript
type OmitPartial<T, K extends keyof T> = {
  [P in K]: T[P]
} & Omit<Partial<T>, K>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |
| `K` | The keys to keep required (must be keys of T) |

## Examples

### Basic Usage

```typescript
import type { OmitPartial } from 'uni-types'

interface User {
  name: string
  age: number
  email: string
}

type OptionalExceptEmail = OmitPartial<User, 'email'>
// { name?: number; age?: number; email: string }
```

### Multiple Properties

```typescript
type OptionalExceptSome = OmitPartial<User, 'name' | 'email'>
// { name: string; age?: number; email: string }
```

## Related

- [`PickPartial`](./pick-partial) - Make specified properties optional
- [`OmitRequired`](./omit-required) - Make properties required except specified