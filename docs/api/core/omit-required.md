# OmitRequired

**Since 1.0.0**

Make all properties required except specified ones.

## Signature

```typescript
type OmitRequired<T, K extends keyof T> = {
  [P in K]: T[P]
} & Omit<Required<T>, K>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |
| `K` | The keys to keep as-is (must be keys of T) |

## Examples

### Basic Usage

```typescript
import type { OmitRequired } from 'uni-types'

interface User {
  name?: string
  age?: number
  email?: string
}

type RequiredExceptName = OmitRequired<User, 'name'>
// { name?: string; age: number; email: string }
```

### Multiple Properties

```typescript
type RequiredExceptSome = OmitRequired<User, 'name' | 'age'>
// { name?: string; age?: number; email: string }
```

## Related

- [`PickRequired`](./pick-required) - Make specified properties required
- [`OmitPartial`](./omit-partial) - Make properties optional except specified