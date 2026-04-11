# Not

Logical NOT operator for boolean types.

## Signature

```typescript
type Not<B extends boolean> = B extends true ? false : true
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `B` | The boolean type to negate |

## Examples

### Basic Usage

```typescript
import type { Not } from 'uni-types'

type A = Not<true>   // false
type B = Not<false>  // true
```

### With Conditionals

```typescript
import type { Not, IsAny } from 'uni-types'

type IsDefined<T> = Not<IsAny<T>>

type A = IsDefined<string>  // true
type B = IsDefined<any>     // false
```

## Related

- [`If`](./if) - Conditional types
- [`And`](./and) - Logical AND
- [`Or`](./or) - Logical OR
