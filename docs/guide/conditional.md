# Conditional Types

Type-level conditional logic for cleaner type definitions.

## If

If-then-else at the type level.

```typescript
import type { If } from 'uni-types'

type A = If<true, string, number>    // string
type B = If<false, string, number>   // number
```

## Not

Logical NOT operator for boolean types.

```typescript
import type { Not } from 'uni-types'

type A = Not<true>   // false
type B = Not<false>  // true
```

## And

Logical AND operator for boolean types.

```typescript
import type { And } from 'uni-types'

type A = And<true, true>   // true
type B = And<true, false>  // false
type C = And<false, true>  // false
```

## Or

Logical OR operator for boolean types.

```typescript
import type { Or } from 'uni-types'

type A = Or<true, false>   // true
type B = Or<false, false>  // false
```

## Assert

Type constraint assertion - ensures T extends U.

```typescript
import type { Assert } from 'uni-types'

type A = Assert<string | number, string>  // string
type B = Assert<string, number>           // never
```

## Combining Conditions

```typescript
import type { If, And, Not } from 'uni-types'

type IsValid<T> = If<And<Not<IsAny<T>>, Not<IsNever<T>>>, T, never>
```
