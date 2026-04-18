# RequireNotNullish

**Since 1.3.0**

Ensure type is not `null` or `undefined`.

## Signature

```typescript
type RequireNotNullish<T> = null extends T ? never : undefined extends T ? never : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Examples

### Basic Usage

```typescript
import type { RequireNotNullish } from 'uni-types'

type Result = RequireNotNullish<string> // string
type FailedNull = RequireNotNullish<null> // never
type FailedUndefined = RequireNotNullish<undefined> // never
```

### With Union Types

```typescript
type MaybeString = string | null | undefined
type StrictString = RequireNotNullish<MaybeString> // never (contains null/undefined)
type OptionalString = string | undefined
type NoUndefined = RequireNotNullish<OptionalString> // never
```

### With Generic Types

```typescript
type NonNullish<T> = RequireNotNullish<T>
type SafeValue = NonNullish<number> // number
type UnsafeValue = NonNullish<number | null> // never
```

## Related

- [`AssertNotNil`](./assertnotnil) - Assert type is not never
- [`RequireArray`](./requirearray) - Ensure type is an array
