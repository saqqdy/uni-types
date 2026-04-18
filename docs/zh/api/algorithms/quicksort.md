# QuickSort

**自 1.4.0 起**

类型级快速排序实现。

## 签名

```typescript
type QuickSort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要排序的数字元组 |
| `Order` | 排序顺序：`'asc'` 或 `'desc'` |

## 描述

类型级快速排序算法实现，使用基于分区的排序方法。

## 示例

### 升序排序

```typescript
import type { QuickSort } from 'uni-types'

type Sorted = QuickSort<[3, 1, 4, 1, 5]>
// [1, 1, 3, 4, 5]
```

### 降序排序

```typescript
type Desc = QuickSort<[1, 2, 3], 'desc'>
// [3, 2, 1]
```

## 相关

- [`Sort`](./sort) - 通用排序函数
- [`MergeSort`](./mergesort) - 归并排序实现