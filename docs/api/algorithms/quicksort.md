# QuickSort

**Since 1.4.0**

QuickSort implementation at type level.

## Signature

```typescript
type QuickSort<T extends number[], Order extends 'asc' | 'desc' = 'asc'> = ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Tuple of numbers to sort |
| `Order` | Sort order: `'asc'` or `'desc'` |

## Description

Type-level implementation of the QuickSort algorithm. Uses partition-based sorting with pivot selection.

## Examples

### Ascending Order

```typescript
import type { QuickSort } from 'uni-types'

type Sorted = QuickSort<[3, 1, 4, 1, 5]>
// [1, 1, 3, 4, 5]
```

### Descending Order

```typescript
type Desc = QuickSort<[1, 2, 3], 'desc'>
// [3, 2, 1]
```

## Related

- [`Sort`](./sort) - General sort function
- [`MergeSort`](./mergesort) - MergeSort implementation