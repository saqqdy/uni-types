# PickPartial

Make specified properties optional.

## Signature

```typescript
type PickPartial<T, K extends keyof T> = {
  [P in K]?: T[P]
} & Omit<T, K>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |
| `K` | The keys to make optional (must be keys of T) |

## Examples

### Basic Usage

```typescript
import type { PickPartial } from 'uni-types'

interface User {
  name: string
  age: number
  email: string
}

type OptionalEmail = PickPartial<User, 'email'>
// { name: string; age: number; email?: string }
```

### Multiple Properties

```typescript
type OptionalMultiple = PickPartial<User, 'age' | 'email'>
// { name: string; age?: number; email?: string }
```

## Related

- [`PickRequired`](./pick-required) - Make specified properties required
- [`OmitPartial`](./omit-partial) - Make properties optional except specified