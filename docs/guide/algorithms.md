# Type-Level Algorithms

**Since 1.4.0**

Type-level implementations of common algorithms for compile-time computations.

## Search Algorithms

### Find

Find first element matching predicate in tuple.

```typescript
import type { Find } from 'uni-types'

type Result = Find<[1, 2, 3], 2>  // 2
type NotFound = Find<[1, 2, 3], 4>  // never
```

### FindIndex

Find index of first element matching predicate.

```typescript
import type { FindIndex } from 'uni-types'

type Index = FindIndex<[1, 2, 3], 2>  // 1
type NotFound = FindIndex<[1, 2, 3], 4>  // -1
```

### Includes

Check if tuple includes element.

```typescript
import type { Includes } from 'uni-types'

type Has = Includes<[1, 2, 3], 2>  // true
type NotHas = Includes<[1, 2, 3], 4>  // false
```

## String Algorithms

### LongestCommonPrefix

Find longest common prefix of strings in tuple.

```typescript
import type { LongestCommonPrefix } from 'uni-types'

type Prefix = LongestCommonPrefix<['flower', 'flow', 'flight']>  // 'fl'
type Empty = LongestCommonPrefix<['dog', 'cat']>  // ''
```

## Utility Algorithms

### Reverse

Reverse a tuple.

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<[1, 2, 3]>  // [3, 2, 1]
```

### Unique

Remove duplicates from tuple.

```typescript
import type { Unique } from 'uni-types'

type Uniq = Unique<[1, 2, 1, 3, 2]>  // [1, 2, 3]
```

### Flatten

Flatten nested tuple (one level).

```typescript
import type { Flatten } from 'uni-types'

type Flat = Flatten<[[1, 2], [3, 4]]>  // [1, 2, 3, 4]
```

### FlattenDeep

Flatten nested tuple recursively.

```typescript
import type { FlattenDeep } from 'uni-types'

type Deep = FlattenDeep<[[1, [2, 3]], [4]]>  // [1, 2, 3, 4]
```

## Related

- [Collection Types](./collection) - Set, Map, List operations
- [Pattern Types](./pattern) - Pattern matching utilities
