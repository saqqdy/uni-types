# Type Guards

Check types at compile time with type-level boolean results.

## IsArray

Check if a type is an array.

```typescript
import type { IsArray } from 'uni-types'

type Check1 = IsArray<string[]> // true
type Check2 = IsArray<number[]> // true
type Check3 = IsArray<readonly string[]> // true
type Check4 = IsArray<string> // false
type Check5 = IsArray<{ length: number }> // false
```

## IsTuple

Check if a type is a tuple.

```typescript
import type { IsTuple } from 'uni-types'

type Check1 = IsTuple<[string, number]> // true
type Check2 = IsTuple<[string]> // true
type Check3 = IsTuple<readonly [number, string]> // true
type Check4 = IsTuple<string[]> // false
type Check5 = IsTuple<number[]> // false
```

## IsEqual

Check if two types are exactly equal.

```typescript
import type { IsEqual } from 'uni-types'

type Check1 = IsEqual<string, string> // true
type Check2 = IsEqual<number, number> // true
type Check3 = IsEqual<{ a: string }, { a: string }> // true
type Check4 = IsEqual<string, number> // false
type Check5 = IsEqual<{ a: string }, { a: number }> // false
type Check6 = IsEqual<any, unknown> // false
```

### Usage in Conditional Types

```typescript
import type { IsEqual } from 'uni-types'

type Conditional<T, U> = IsEqual<T, U> extends true ? 'same' : 'different'

type Result1 = Conditional<string, string> // 'same'
type Result2 = Conditional<string, number> // 'different'
```

## IsAny

Check if a type is `any`.

```typescript
import type { IsAny } from 'uni-types'

type Check1 = IsAny<any> // true
type Check2 = IsAny<string> // false
type Check3 = IsAny<unknown> // false
type Check4 = IsAny<never> // false
```

## IsNever

Check if a type is `never`.

```typescript
import type { IsNever } from 'uni-types'

type Check1 = IsNever<never> // true
type Check2 = IsNever<string> // false
type Check3 = IsNever<undefined> // false
type Check4 = IsNever<null> // false
```

## IsUnknown

Check if a type is `unknown`.

```typescript
import type { IsUnknown } from 'uni-types'

type Check1 = IsUnknown<unknown> // true
type Check2 = IsUnknown<string> // false
type Check3 = IsUnknown<any> // false
type Check4 = IsUnknown<never> // false
```