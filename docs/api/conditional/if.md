# If

**Since 1.1.0**

If-then-else at the type level.

## Signature

```typescript
type If<C extends boolean, T, F> = C extends true ? T : F
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `C` | The condition (boolean type) |
| `T` | Type returned when condition is true |
| `F` | Type returned when condition is false |

## Examples

### Basic Usage

```typescript
import type { If } from 'uni-types'

type A = If<true, string, number>    // string
type B = If<false, string, number>   // number
```

### With Type Predicates

```typescript
import type { If, IsAny } from 'uni-types'

type SafeResult<T> = If<IsAny<T>, never, T>

type A = SafeResult<string>  // string
type B = SafeResult<any>     // never
```

### Conditional Logic

```typescript
import type { If, And, Or } from 'uni-types'

type Result<A extends boolean, B extends boolean> = If<
  Or<A, B>,
  'at least one is true',
  'both are false'
>
```

## Related

- [`Not`](./not) - Logical NOT
- [`And`](./and) - Logical AND
- [`Or`](./or) - Logical OR
