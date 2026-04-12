# And

**Since 1.1.0**

Logical AND operator for boolean types.

## Signature

```typescript
type And<A extends boolean, B extends boolean> = A extends true ? B : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | First boolean type |
| `B` | Second boolean type |

## Examples

### Basic Usage

```typescript
import type { And } from 'uni-types'

type A = And<true, true>    // true
type B = And<true, false>   // false
type C = And<false, true>   // false
type D = And<false, false>  // false
```

### Multiple Conditions

```typescript
import type { And, IsAny, IsNever } from 'uni-types'

type IsValid<T> = And<Not<IsAny<T>>, Not<IsNever<T>>>

type A = IsValid<string>  // true
type B = IsValid<any>     // false
type C = IsValid<never>   // false
```

## Related

- [`If`](./if) - Conditional types
- [`Not`](./not) - Logical NOT
- [`Or`](./or) - Logical OR
