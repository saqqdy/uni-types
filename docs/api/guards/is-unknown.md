# IsUnknown

**Since 1.0.0**

Check if a type is `unknown`.

## Signature

```typescript
type IsUnknown<T> = IsEqual<T, unknown> extends true
  ? IsAny<T> extends true
    ? false
    : true
  : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Returns

Returns `true` if `T` is `unknown`, `false` otherwise.

## Examples

### Basic Usage

```typescript
import type { IsUnknown } from 'uni-types'

type Check1 = IsUnknown<unknown> // true
```

### Non-Unknown Types

```typescript
type Check2 = IsUnknown<string> // false
type Check3 = IsUnknown<any> // false (any is not unknown)
type Check4 = IsUnknown<never> // false
type Check5 = IsUnknown<{}> // false
```

### Usage in Conditional Types

```typescript
import type { IsUnknown } from 'uni-types'

// Handle unknown type specially
type HandleUnknown<T> = IsUnknown<T> extends true 
  ? 'was unknown' 
  : T

type Test1 = HandleUnknown<string> // string
type Test2 = HandleUnknown<unknown> // 'was unknown'
```

## Related

- [`IsAny`](./is-any) - Check if type is any
- [`IsNever`](./is-never) - Check if type is never
- [`IsEqual`](./is-equal) - Check if types are equal