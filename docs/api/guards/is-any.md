# IsAny

**Since 1.0.0**

Check if a type is `any`.

## Signature

```typescript
type IsAny<T> = 0 extends 1 & T ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Returns

Returns `true` if `T` is `any`, `false` otherwise.

## Examples

### Basic Usage

```typescript
import type { IsAny } from 'uni-types'

type Check1 = IsAny<any> // true
```

### Non-Any Types

```typescript
type Check2 = IsAny<string> // false
type Check3 = IsAny<unknown> // false
type Check4 = IsAny<never> // false
type Check5 = IsAny<{}> // false
```

### Usage in Conditional Types

```typescript
import type { IsAny } from 'uni-types'

// Prevent any from being passed
type Safe<T> = IsAny<T> extends true ? never : T

type Test1 = Safe<string> // string
type Test2 = Safe<any> // never
```

## Related

- [`IsUnknown`](./is-unknown) - Check if type is unknown
- [`IsNever`](./is-never) - Check if type is never
- [`IsEqual`](./is-equal) - Check if types are equal