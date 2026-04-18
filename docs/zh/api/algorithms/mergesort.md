# MergeSort

**自 1.4.0 起**

类型级归并排序实现。

## 签名

```typescript
type MergeSort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = QuickSort<T, Order>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要排序的数字元组 |
| `Order` | 排序顺序：`'asc'` 或 `'desc'` |

## 描述

类型级归并排序实现，当前通过快速排序实现以提高效率。

## 示例

```typescript
import type { MergeSort } from 'uni-types'

type Sorted = MergeSort<[3, 1, 4, 1, 5]>
// [1, 1, 3, 4, 5]
```

## 相关

- [`Sort`](./sort) - 通用排序函数
- [`QuickSort`](./quicksort) - 快速排序实现