# Type Assertions

**Since 1.3.0**

Type assertions and constraints for compile-time type validation.

## Basic Assertions

### AssertEqual

Assert that type T equals Expected at compile time.

```typescript
import type { AssertEqual } from 'uni-types'

type A = AssertEqual<string, string>  // string
type B = AssertEqual<string, number>  // never (compile-time error)
```

### AssertExtends

Assert that type T extends U at compile time.

```typescript
import type { AssertExtends } from 'uni-types'

type A = AssertExtends<'a', string>  // 'a'
type B = AssertExtends<number, string>  // never
```

### AssertKeyof

Assert that K is a key of T.

```typescript
import type { AssertKeyof } from 'uni-types'

type A = AssertKeyof<{ a: 1; b: 2 }, 'a'>  // 'a'
type B = AssertKeyof<{ a: 1 }, 'b'>  // never
```

### AssertNotNil

Assert that type T is not never.

```typescript
import type { AssertNotNil } from 'uni-types'

type A = AssertNotNil<string>  // string
type B = AssertNotNil<never>  // never
```

## Key Requirements

### RequireKeys

Require specific keys to be present (non-optional).

```typescript
import type { RequireKeys } from 'uni-types'

type Required = RequireKeys<{ a?: string; b?: number }, 'a'>  // { a: string; b?: number }
```

### MakeOptional

Make specific keys optional.

```typescript
import type { MakeOptional } from 'uni-types'

type Optional = MakeOptional<{ a: string; b: number }, 'b'>  // { a: string; b?: number }
```

### RequireAtLeastOne

Require at least one of the specified keys.

```typescript
import type { RequireAtLeastOne } from 'uni-types'

type Config = RequireAtLeastOne<{ a?: string; b?: number }, 'a' | 'b'>
// Must have either 'a' or 'b' (or both)
```

### RequireExactlyOne

Require exactly one of the specified keys.

```typescript
import type { RequireExactlyOne } from 'uni-types'

type Config = RequireExactlyOne<{ a?: string; b?: number }, 'a' | 'b'>
// Must have exactly one of 'a' or 'b'
```

## Property Assertions

### AssertHasProperty

Ensure object has a specific property.

```typescript
import type { AssertHasProperty } from 'uni-types'

type A = AssertHasProperty<{ a: 1 }, 'a'>  // { a: 1 }
type B = AssertHasProperty<{ a: 1 }, 'b'>  // never
```

## Type Requirements

### RequireNotNullish

Ensure type is not null or undefined.

```typescript
import type { RequireNotNullish } from 'uni-types'

type A = RequireNotNullish<string>  // string
type B = RequireNotNullish<string | null>  // never
```

### RequireArray

Ensure type is an array.

```typescript
import type { RequireArray } from 'uni-types'

type A = RequireArray<string[]>  // string[]
type B = RequireArray<string>  // never
```

### RequireFunction

Ensure type is a function.

```typescript
import type { RequireFunction } from 'uni-types'

type A = RequireFunction<() => void>  // () => void
type B = RequireFunction<string>  // never
```

## Related

- [Testing](./testing) - Type-level testing utilities
- [Guards](./guards) - Type guard utilities