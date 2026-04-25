# Type-Level Sorting & Searching

Type-level sorting and searching algorithms.

## Overview

The `search` module provides type-level sorting and searching algorithms, including sort types, search operations, filtering, grouping, set operations, and more.

## Sorting Types

### Sort Algorithms

```ts
import type { SortOrder, Sort, QuickSort, MergeSort, BubbleSort } from 'uni-types'
import type { InsertionSort, SelectionSort, HeapSort } from 'uni-types'

type Sorted = Sort<[3, 1, 2], 'asc'> // [1, 2, 3]
type QuickSorted = QuickSort<[3, 1, 2]> // [1, 2, 3]
type MergeSorted = MergeSort<[3, 1, 2]> // [1, 2, 3]
```

### Numeric Sorts

```ts
import type { CountingSort, RadixSort, BucketSort } from 'uni-types'

type Counting = CountingSort<[3, 1, 2]> // [1, 2, 3]
type Radix = RadixSort<[100, 10, 1]> // [1, 10, 100]
```

## Searching Types

### BinarySearch / LinearSearch

```ts
import type {
  BinarySearch, LinearSearch,
  FindIndex, FindLastIndex, Includes
} from 'uni-types'

type Found = BinarySearch<[1, 2, 3, 4, 5], 3> // 2 (index) or -1
type Index = FindIndex<[1, 2, 3], 2> // 1
type Has = Includes<[1, 2, 3], 2> // boolean
```

### Find Operations

```ts
import type { IndexOf, LastIndexOf, Find, FindAll } from 'uni-types'

type Idx = IndexOf<[1, 2, 3, 2], 2> // 1
type LastIdx = LastIndexOf<[1, 2, 3, 2], 2> // 3
```

## Filtering Types

### Filter / Reject / Take / Drop

```ts
import type { Filter, Reject, Take, Drop, TakeWhile, DropWhile } from 'uni-types'

type Filtered = Filter<[1, 2, 3, 4, 5], number> // filtered by predicate
type FirstThree = Take<[1, 2, 3, 4, 5], 3> // [1, 2, 3]
type Remaining = Drop<[1, 2, 3, 4, 5], 2> // [3, 4, 5]
```

### TakeFirst / TakeLast

```ts
import type { TakeFirst, TakeLast, TakeLastN, DropLastN } from 'uni-types'

type First = TakeFirst<[1, 2, 3]> // 1
type Last = TakeLast<[1, 2, 3]> // 3
type LastTwo = TakeLastN<[1, 2, 3, 4, 5], 2> // [4, 5]
```

## Grouping Types

### GroupBy / Chunk / Partition

```ts
import type { GroupBy, Chunk, Partition, CountBy, CountOccurrences } from 'uni-types'

type Chunks = Chunk<[1, 2, 3, 4, 5], 2> // [[1, 2], [3, 4], [5]]
type Parts = Partition<[1, 2, 3, 4, 5], number> // [[1, 2, 3], [4, 5]]
type Count = CountOccurrences<[1, 2, 2, 3, 3, 3], 3> // 3
```

## Set Operations

### Union / Intersection / Difference

```ts
import type {
  Union, Intersection, Difference,
  SymmetricDifference, IsSubset, IsSuperset
} from 'uni-types'

type United = Union<[1, 2], [2, 3]> // [1, 2, 3]
type Intersect = Intersection<[1, 2, 3], [2, 3, 4]> // [2, 3]
type Diff = Difference<[1, 2, 3], [2, 3, 4]> // [1]
type SymDiff = SymmetricDifference<[1, 2], [2, 3]> // [1, 3]
type Subset = IsSubset<[1], [1, 2, 3]> // boolean
```

### AreDisjoint / HaveCommon

```ts
import type { AreDisjoint, HaveCommon } from 'uni-types'

type Disjoint = AreDisjoint<[1, 2], [3, 4]> // boolean
type Common = HaveCommon<[1, 2], [2, 3]> // boolean
```

## Unique Operations

### Unique / Duplicates

```ts
import type { Unique, UniqueBy, Duplicates, NonDuplicates } from 'uni-types'

type UniqueValues = Unique<[1, 2, 2, 3, 3, 3]> // [1, 2, 3]
type Dupes = Duplicates<[1, 2, 2, 3, 3]> // [2, 3]
```

### Remove Operations

```ts
import type { RemoveAt, RemoveFirst, RemoveAll } from 'uni-types'

type Removed = RemoveAt<[1, 2, 3], 1> // [1, 3]
type NoFirst = RemoveFirst<[1, 2, 1, 3], 1> // [2, 1, 3]
```

## Slice Operations

### Slice / Splice / Reverse

```ts
import type { Slice, Splice, Reverse, RotateLeft, RotateRight } from 'uni-types'

type Sliced = Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
type Reversed = Reverse<[1, 2, 3]> // [3, 2, 1]
type Rotated = RotateLeft<[1, 2, 3, 4], 1> // [2, 3, 4, 1]
```

## Zip Operations

### Zip / Unzip

```ts
import type { Zip, Zip3, ZipWith, Unzip, Unzip3 } from 'uni-types'

type Zipped = Zip<[1, 2, 3], ['a', 'b', 'c']> // [[1, 'a'], [2, 'b'], [3, 'c']]
type Unzipped = Unzip<[[1, 'a'], [2, 'b']]> // [[1, 2], ['a', 'b']]
```

## Flatten Operations

```ts
import type { Flatten, FlattenDeep, FlattenDepth, Interleave, Intersperse } from 'uni-types'

type Flat = Flatten<[[1, 2], [3, 4]]> // [1, 2, 3, 4]
type Interleaved = Interleave<[1, 3], [2, 4]> // [1, 2, 3, 4]
type Interspersed = Intersperse<[1, 2, 3], 0> // [1, 0, 2, 0, 3]
```

## Predicate Types

### Every / Some / None

```ts
import type { Every, Some, None, Count } from 'uni-types'

type AllMatch = Every<[1, 2, 3], number> // boolean
type SomeMatch = Some<[1, 2, 3], number> // boolean
type MatchCount = Count<[1, 2, 3], number> // number
```

## Comparison Types

### ArrayEquals / Compare

```ts
import type { ArrayEquals, Compare, StartsWith, EndsWith } from 'uni-types'

type Equal = ArrayEquals<[1, 2], [1, 2]> // boolean
type Cmp = Compare<[1, 2], [1, 3]> // -1 | 0 | 1
type HasPrefix = StartsWith<[1, 2, 3], [1, 2]> // boolean
```

## Position Types

```ts
import type { AllIndicesOf, AllIndices, At, AtOr } from 'uni-types'

type Indices = AllIndicesOf<[1, 2, 1, 3], 1> // [0, 2]
type Element = At<[1, 2, 3], 1> // 2
type SafeElement = AtOr<[1, 2, 3], 5, 'default'> // 'default'
```

## Utility Types

```ts
import type { MinElement, MaxElement, SumElements, Average, MedianElement } from 'uni-types'

type Min = MinElement<[3, 1, 2]> // number
type Max = MaxElement<[3, 1, 2]> // number
type Sum = SumElements<[1, 2, 3, 4, 5]> // number
type Avg = Average<[1, 2, 3, 4, 5]> // number
```

## API Reference

| Type | Description |
|------|-------------|
| `Sort<T, Order>` | Sort tuple |
| `QuickSort<T>` | Quick sort |
| `BinarySearch<T, V>` | Binary search |
| `Includes<T, V>` | Check inclusion |
| `Filter<T, P>` | Filter by predicate |
| `Take<T, N>` | Take first N |
| `Drop<T, N>` | Drop first N |
| `GroupBy<T, K>` | Group by key |
| `Chunk<T, N>` | Chunk into sublists |
| `Union<A, B>` | Set union |
| `Intersection<A, B>` | Set intersection |
| `Difference<A, B>` | Set difference |
| `Unique<T>` | Unique elements |
| `Reverse<T>` | Reverse tuple |
| `Zip<A, B>` | Zip tuples |
| `Flatten<T>` | Flatten one level |
| `Every<T, P>` | All match predicate |
| `Some<T, P>` | Some match predicate |
| `MinElement<T>`, `MaxElement<T>` | Min/Max element |
| `SumElements<T>`, `Average<T>` | Sum/Average |