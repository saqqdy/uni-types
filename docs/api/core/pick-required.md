# PickRequired

Make specified properties required.

## Signature

```typescript
type PickRequired<T, K extends keyof T> = {
  [P in K]-?: T[P]
} & Omit<T, K>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |
| `K` | The keys to make required (must be keys of T) |

## Examples

### Basic Usage

```typescript
import type { PickRequired } from 'uni-types'

interface User {
  name?: string
  age?: number
  email: string
}

type RequiredName = PickRequired<User, 'name'>
// { name: string; age?: number; email: string }
```

### Multiple Properties

```typescript
type RequiredMultiple = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string }
```

### With Nested Objects

```typescript
interface Config {
  host?: string
  port?: number
  ssl?: boolean
}

type RequiredHost = PickRequired<Config, 'host'>
// { host: string; port?: number; ssl?: boolean }
```

## Related

- [`PickPartial`](./pick-partial) - Make specified properties optional
- [`OmitRequired`](./omit-required) - Make properties required except specified
- [`OmitPartial`](./omit-partial) - Make properties optional except specified