# IsEqual

**Since 1.0.0**

Check if two types are exactly equal.

## Signature

```typescript
type IsEqual<X, Y> = 
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `X` | First type to compare |
| `Y` | Second type to compare |

## Returns

Returns `true` if `X` and `Y` are exactly the same type, `false` otherwise.

## Examples

### Basic Usage

```typescript
import type { IsEqual } from 'uni-types'

type Check1 = IsEqual<string, string> // true
type Check2 = IsEqual<number, number> // true
type Check3 = IsEqual<'hello', 'hello'> // true
```

### Object Types

```typescript
type Check4 = IsEqual<{ a: string }, { a: string }> // true
type Check5 = IsEqual<{ a: string }, { a: number }> // false
type Check6 = IsEqual<{ a: string }, { b: string }> // false
```

### Different Types

```typescript
type Check7 = IsEqual<string, number> // false
type Check8 = IsEqual<string | number, number | string> // true
```

### Special Types

```typescript
type Check9 = IsEqual<any, unknown> // false
type Check10 = IsEqual<any, any> // true
type Check11 = IsEqual<never, never> // true
```

## Usage in Conditional Types

```typescript
import type { IsEqual } from 'uni-types'

type Expect<T extends true> = T

// Type-level assertions
type Test1 = Expect<IsEqual<string, string>>
type Test2 = Expect<IsEqual<1, 1>>

// This would cause a type error:
// type Test3 = Expect<IsEqual<string, number>>
```

## Related

- [`IsAny`](./is-any) - Check if type is any
- [`IsNever`](./is-never) - Check if type is never
- [`IsUnknown`](./is-unknown) - Check if type is unknown