# Sort

**自 1.4.0 起**

按升序或降序对数字元组进行排序。

## 签名

```typescript
type Sort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = QuickSort<T, Order>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要排序的数字元组 |
| `Order` | 排序顺序：`'asc'`（升序）或 `'desc'`（降序） |

## 描述

使用快速排序算法对数字元组进行排序。默认为升序。

## 示例

### 基本用法

```typescript
import type { Sort } from 'uni-types'

type Ascending = Sort<[3, 1, 4, 1, 5]>
// [1, 1, 3, 4, 5]

type Descending = Sort<[3, 1, 4], 'desc'>
// [4, 3, 1]
```

## 相关

- [`QuickSort`](./quicksort) - 快速排序实现
- [`MergeSort`](./mergesort) - 归并排序实现
- [`Reverse`](/api/core/reverse) - 反转元组