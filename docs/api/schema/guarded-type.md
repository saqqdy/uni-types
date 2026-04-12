# GuardedType

Extract the guarded type from a type guard function.

## Signature

```typescript
type GuardedType<G> = G extends (value: unknown) => value is infer T ? T : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `G` | The type guard function |

## Examples

### Basic Usage

```typescript
import type { GuardedType } from 'uni-types'

const isNumber = (value: unknown): value is number => typeof value === 'number'

type Num = GuardedType<typeof isNumber>  // number
```

### With Complex Guards

```typescript
interface User {
  id: string
  name: string
}

const isUser = (value: unknown): value is User => {
  // guard implementation
}

type UserType = GuardedType<typeof isUser>  // User
```

### Extracting from Array

```typescript
const guards = [isString, isNumber, isBoolean]
type Types = GuardedType<typeof guards[number]>  // string | number | boolean
```

## Related

- [`RuntimeGuard`](./runtime-guard) - Define type guard function