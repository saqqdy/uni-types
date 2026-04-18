# MergeSort

**Since 1.4.0**

MergeSort implementation at type level.

## Signature

```typescript
type MergeSort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = QuickSort<T, Order>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Tuple of numbers to sort |
| `Order` | Sort order: `'asc'` or `'desc'` |

## Description

Type-level MergeSort implementation. Currently implemented via QuickSort for efficiency.

## Examples

```typescript
import type { MergeSort } from 'uni-types'

type Sorted = MergeSort<[3, 1, 4, 1, 5]>
// [1, 1, 3, 4, 5]
```

## Related

- [`Sort`](./sort) - General sort function
- [`QuickSort`](./quicksort) - QuickSort implementation