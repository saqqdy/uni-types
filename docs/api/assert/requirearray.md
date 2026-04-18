# RequireArray

**Since 1.3.0**

Ensure type is an array.

## Signature

```typescript
type RequireArray<T> = T extends unknown[] ? T : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Examples

### Basic Usage

```typescript
import type { RequireArray } from 'uni-types'

type Result = RequireArray<string[]> // string[]
type Failed = RequireArray<string> // never
```

### With Union Types

```typescript
type MaybeArray = string[] | number
type OnlyArray = RequireArray<MaybeArray> // string[]
```

### With Readonly Arrays

```typescript
type ReadonlyStrings = readonly string[]
type Result = RequireArray<ReadonlyStrings> // readonly string[]
```

## Related

- [`RequireFunction`](./requirefunction) - Ensure type is a function
- [`RequireNotNullish`](./requirenotnullish) - Ensure type is not null or undefined
