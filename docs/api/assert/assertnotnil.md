# AssertNotNil

**Since 1.3.0**

Assert that type `T` is not `never`.

## Signature

```typescript
type AssertNotNil<T> = [T] extends [never] ? never : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Examples

### Basic Usage

```typescript
import type { AssertNotNil } from 'uni-types'

type Result = AssertNotNil<string> // string
type Failed = AssertNotNil<never> // never
```

### With Conditional Types

```typescript
type MaybeString = string | undefined
type Validated = AssertNotNil<Exclude<MaybeString, undefined>> // string
```

### With Inferred Types

```typescript
type ExtractArray<T> = T extends (infer E)[] ? E : never
type Result = AssertNotNil<ExtractArray<string[]>> // string
```

## Related

- [`RequireNotNullish`](./requirenotnullish) - Ensure type is not null or undefined
- [`AssertExtends`](./assertextends) - Assert type extends another
