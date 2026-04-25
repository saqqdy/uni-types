# 类型级排序与搜索

类型级别的排序和搜索算法。

## 概述

`search` 模块提供类型级别的排序和搜索算法，包括排序类型、搜索操作、过滤、分组、集合操作等。

## 排序类型

### 排序算法

```ts
import type { Sort, QuickSort, MergeSort, BubbleSort } from 'uni-types'

type Sorted = Sort<[3, 1, 2], 'asc'> // [1, 2, 3]
type QuickSorted = QuickSort<[3, 1, 2]> // [1, 2, 3]
```

## 搜索类型

### BinarySearch / LinearSearch

```ts
import type { BinarySearch, FindIndex, Includes } from 'uni-types'

type Found = BinarySearch<[1, 2, 3, 4, 5], 3> // 2 (索引) 或 -1
type Has = Includes<[1, 2, 3], 2> // boolean
```

## 过滤类型

### Filter / Take / Drop

```ts
import type { Filter, Take, Drop, TakeFirst, TakeLast } from 'uni-types'

type FirstThree = Take<[1, 2, 3, 4, 5], 3> // [1, 2, 3]
type First = TakeFirst<[1, 2, 3]> // 1
type Last = TakeLast<[1, 2, 3]> // 3
```

## 分组类型

### GroupBy / Chunk / Partition

```ts
import type { Chunk, Partition, CountOccurrences } from 'uni-types'

type Chunks = Chunk<[1, 2, 3, 4, 5], 2> // [[1, 2], [3, 4], [5]]
```

## 集合操作

### Union / Intersection / Difference

```ts
import type { Union, Intersection, Difference, SymmetricDifference } from 'uni-types'

type United = Union<[1, 2], [2, 3]> // [1, 2, 3]
type Intersect = Intersection<[1, 2, 3], [2, 3, 4]> // [2, 3]
type Diff = Difference<[1, 2, 3], [2, 3, 4]> // [1]
```

## 唯一操作

```ts
import type { Unique, Duplicates, RemoveAt } from 'uni-types'

type UniqueValues = Unique<[1, 2, 2, 3]> // [1, 2, 3]
```

## 切片操作

### Slice / Reverse

```ts
import type { Slice, Reverse, RotateLeft } from 'uni-types'

type Reversed = Reverse<[1, 2, 3]> // [3, 2, 1]
```

## Zip 操作

```ts
import type { Zip, Unzip } from 'uni-types'

type Zipped = Zip<[1, 2], ['a', 'b']> // [[1, 'a'], [2, 'b']]
```

## 谓词类型

### Every / Some

```ts
import type { Every, Some, None } from 'uni-types'

type AllMatch = Every<[1, 2, 3], number> // boolean
```

## API 参考

| 类型 | 描述 |
|------|------|
| `Sort<T, Order>` | 排序元组 |
| `BinarySearch<T, V>` | 二分搜索 |
| `Includes<T, V>` | 检查包含 |
| `Filter<T, P>` | 按谓词过滤 |
| `Take<T, N>` | 取前 N 个 |
| `Chunk<T, N>` | 分块 |
| `Union<A, B>` | 集合并集 |
| `Intersection<A, B>` | 集合交集 |
| `Unique<T>` | 唯一元素 |
| `Reverse<T>` | 反转元组 |
| `Zip<A, B>` | 拼接元组 |
| `Every<T, P>` | 全部匹配 |
| `MinElement<T>` | 最小元素 |