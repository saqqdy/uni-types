# Collection Types

**Since 1.3.0**

Type-level data structures and operations.

## Set Operations

### TypeSet

Type-level set representation.

```typescript
import type { TypeSet } from 'uni-types'

type MySet = TypeSet<'a' | 'b' | 'c'>  // 'a' | 'b' | 'c'
```

### SetAdd / SetRemove

Add or remove elements from a set.

```typescript
import type { SetAdd, SetRemove } from 'uni-types'

type Added = SetAdd<'a' | 'b', 'c'>  // 'a' | 'b' | 'c'
type Removed = SetRemove<'a' | 'b' | 'c', 'b'>  // 'a' | 'c'
```

### SetHas

Check if element exists in set.

```typescript
import type { SetHas } from 'uni-types'

type Has = SetHas<'a' | 'b', 'a'>  // true
type NotHas = SetHas<'a' | 'b', 'c'>  // false
```

### SetUnion / SetIntersection / SetDifference

Set operations.

```typescript
import type { SetUnion, SetIntersection, SetDifference } from 'uni-types'

type Union = SetUnion<'a' | 'b', 'b' | 'c'>  // 'a' | 'b' | 'c'
type Intersect = SetIntersection<'a' | 'b', 'b' | 'c'>  // 'b'
type Diff = SetDifference<'a' | 'b', 'b' | 'c'>  // 'a'
```

### SetIsEmpty / SetIsSubset

Set validation.

```typescript
import type { SetIsEmpty, SetIsSubset } from 'uni-types'

type Empty = SetIsEmpty<never>  // true
type Subset = SetIsSubset<'a', 'a' | 'b'>  // true
```

## Map Operations

### TypeMap

Type-level map representation.

```typescript
import type { TypeMap } from 'uni-types'

type MyMap = TypeMap<'a' | 'b', number>  // { a: number; b: number }
```

### MapGet / MapSet / MapDelete

Map operations.

```typescript
import type { MapGet, MapSet, MapDelete } from 'uni-types'

type Value = MapGet<{ a: 1; b: 2 }, 'a'>  // 1
type Updated = MapSet<{ a: 1 }, 'b', 2>  // { a: 1; b: 2 }
type Removed = MapDelete<{ a: 1; b: 2 }, 'b'>  // { a: 1 }
```

### MapHas / MapKeys / MapValues

Map utilities.

```typescript
import type { MapHas, MapKeys, MapValues } from 'uni-types'

type Has = MapHas<{ a: 1 }, 'a'>  // true
type Keys = MapKeys<{ a: 1; b: 2 }>  // 'a' | 'b'
type Values = MapValues<{ a: 1; b: 2 }>  // 1 | 2
```

## List Operations

### ListFilter

Filter list elements by predicate.

```typescript
import type { ListFilter } from 'uni-types'

type Filtered = ListFilter<[1, 'a', 2, 'b'], number>  // [1, 2]
```

### ListFind / ListIncludes

List search operations.

```typescript
import type { ListFind, ListIncludes } from 'uni-types'

type Found = ListFind<[1, 2, 3], 2>  // 2
type Has = ListIncludes<[1, 2, 3], 2>  // true
```

### ListReverse / ListConcat

List transformations.

```typescript
import type { ListReverse, ListConcat } from 'uni-types'

type Reversed = ListReverse<[1, 2, 3]>  // [3, 2, 1]
type Concatenated = ListConcat<[1, 2], [3, 4]>  // [1, 2, 3, 4]
```

### ListLength

Get list length.

```typescript
import type { ListLength } from 'uni-types'

type Len = ListLength<[1, 2, 3]>  // 3
```

## Related

- [Pattern Types](./pattern) - Pattern matching utilities
- [Algorithms](./algorithms) - Search and utility algorithms
