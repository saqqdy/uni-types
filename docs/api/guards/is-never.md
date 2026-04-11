# IsNever

Check if a type is `never`.

## Signature

```typescript
type IsNever<T> = [T] extends [never] ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Returns

Returns `true` if `T` is `never`, `false` otherwise.

## Examples

### Basic Usage

```typescript
import type { IsNever } from 'uni-types'

type Check1 = IsNever<never> // true
```

### Non-Never Types

```typescript
type Check2 = IsNever<string> // false
type Check3 = IsNever<undefined> // false
type Check4 = IsNever<null> // false
type Check5 = IsNever<void> // false
```

### Usage in Conditional Types

```typescript
import type { IsNever } from 'uni-types'

// Handle never type specially
type HandleNever<T> = IsNever<T> extends true 
  ? 'was never' 
  : T

type Test1 = HandleNever<string> // string
type Test2 = HandleNever<never> // 'was never'
```

## Related

- [`IsAny`](./is-any) - Check if type is any
- [`IsUnknown`](./is-unknown) - Check if type is unknown
- [`IsEqual`](./is-equal) - Check if types are equal