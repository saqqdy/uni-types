# Sort

**Since 1.4.0**

Sort a tuple of numbers in ascending or descending order.

## Signature

```typescript
type Sort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = QuickSort<T, Order>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Tuple of numbers to sort |
| `Order` | Sort order: `'asc'` (ascending) or `'desc'` (descending) |

## Description

Sorts a tuple of numbers using the QuickSort algorithm. Default order is ascending.

## Examples

### Basic Usage

```typescript
import type { Sort } from 'uni-types'

type Ascending = Sort<[3, 1, 4, 1, 5]>
// [1, 1, 3, 4, 5]

type Descending = Sort<[3, 1, 4], 'desc'>
// [4, 3, 1]
```

### Empty Tuple

```typescript
type Empty = Sort<[]>
// []
```

## Related

- [`QuickSort`](./quicksort) - QuickSort implementation
- [`MergeSort`](./mergesort) - MergeSort implementation
- [`Reverse`](/api/core/reverse) - Reverse a tuple