# RuntimeGuard

**Since 1.2.0**

Define a type guard function for runtime type checking.

## Signature

```typescript
type RuntimeGuard<T> = (value: unknown) => value is T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to guard |

## Examples

### Basic Usage

```typescript
import type { RuntimeGuard } from 'uni-types'

const isString: RuntimeGuard<string> = (value): value is string =>
  typeof value === 'string'

const isNumber: RuntimeGuard<number> = (value): value is number =>
  typeof value === 'number'
```

### Object Type Guard

```typescript
interface User {
  name: string
  age: number
}

const isUser: RuntimeGuard<User> = (value): value is User => {
  return typeof value === 'object' && value !== null &&
    'name' in value && 'age' in value &&
    typeof (value as User).name === 'string' &&
    typeof (value as User).age === 'number'
}
```

### Usage in Functions

```typescript
function processValue(value: unknown, guard: RuntimeGuard<string>) {
  if (guard(value)) {
    // value is now typed as string
    console.log(value.toUpperCase())
  }
}
```

## Related

- [`GuardedType`](./guarded-type) - Extract type from guard
- [`AssertionFunction`](./assertion-function) - Assertion function type