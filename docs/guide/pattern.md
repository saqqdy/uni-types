# Pattern Types

**Since 1.3.0**

Advanced type patterns for type-level programming.

## Pattern Matching

### Match

Type-level pattern matching.

```typescript
import type { Match } from 'uni-types'

type Result = Match<'a', { a: 1; b: 2 }>  // 1
type WithDefault = Match<'c', { a: 1; _: 0 }>  // 0 (default)
```

### Case / Default

Helper types for pattern matching.

```typescript
import type { Case, Default } from 'uni-types'

type A = Case<'a'>  // 'a'
type Fallback = Default<0>  // { _: 0 }
```

## Type-Level Predicates

### TypeFilter

Filter tuple elements by predicate.

```typescript
import type { TypeFilter } from 'uni-types'

type Filtered = TypeFilter<[1, 'a', 2, 'b'], string>  // ['a', 'b']
```

### TypeFind

Find first element matching predicate.

```typescript
import type { TypeFind } from 'uni-types'

type Found = TypeFind<[1, 'a', 2, 'b'], string>  // 'a'
type NotFound = TypeFind<[1, 2, 3], string>  // never
```

### TypeIncludes

Check if type exists in tuple.

```typescript
import type { TypeIncludes } from 'uni-types'

type Has = TypeIncludes<[1, 2, 3], 2>  // true
type NotHas = TypeIncludes<[1, 2, 3], 4>  // false
```

### TypeEvery / TypeSome

Check all or any elements match.

```typescript
import type { TypeEvery, TypeSome } from 'uni-types'

type AllMatch = TypeEvery<[1, 2, 3], number>  // true
type AnyMatch = TypeSome<[1, 'a', 2], string>  // true
```

## Type-Level Iteration

### Iterate

Apply transformation N times.

```typescript
import type { Iterate } from 'uni-types'

type Doubled = Iterate<1, (x: number) => x * 2, 3>  // 8
```

### Reduce

Accumulate values from tuple.

```typescript
import type { Reduce } from 'uni-types'

type Sum = Reduce<[1, 2, 3], (acc: number, val: number) => number, 0>  // 6
```

### ForEach

Apply function to each element.

```typescript
import type { ForEach } from 'uni-types'

type Doubled = ForEach<[1, 2, 3], (x: number) => number>  // [2, 4, 6]
```

## Related

- [Algorithms](./algorithms) - Search and utility algorithms
- [Collections](./collection) - Set, Map, List operations
