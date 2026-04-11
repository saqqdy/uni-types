# Or

Logical OR operator for boolean types.

## Signature

```typescript
type Or<A extends boolean, B extends boolean> = A extends true ? true : B
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | First boolean type |
| `B` | Second boolean type |

## Examples

### Basic Usage

```typescript
import type { Or } from 'uni-types'

type A = Or<true, true>     // true
type B = Or<true, false>    // true
type C = Or<false, true>    // true
type D = Or<false, false>   // false
```

### Either Condition

```typescript
import type { Or, IsString, IsNumber } from 'uni-types'

type IsPrimitive<T> = Or<IsString<T>, IsNumber<T>>

type A = IsPrimitive<string>  // true
type B = IsPrimitive<number>  // true
type C = IsPrimitive<object>  // false
```

## Related

- [`If`](./if) - Conditional types
- [`Not`](./not) - Logical NOT
- [`And`](./and) - Logical AND
