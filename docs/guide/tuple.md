# Tuple Operations

Utilities for manipulating tuple types.

## Head

Get the first element of a tuple.

```typescript
import type { Head } from 'uni-types'

type First = Head<[1, 2, 3]> // 1
type FromArray = Head<string[]> // string
type Empty = Head<[]> // never
```

## Last

Get the last element of a tuple.

```typescript
import type { Last } from 'uni-types'

type LastElement = Last<[1, 2, 3]> // 3
type FromArray = Last<string[]> // string
```

## Tail

Get all elements except the first.

```typescript
import type { Tail } from 'uni-types'

type Rest = Tail<[1, 2, 3]> // [2, 3]
type Single = Tail<[1]> // []
type Empty = Tail<[]> // []
```

## Init

Get all elements except the last.

```typescript
import type { Init } from 'uni-types'

type AllButLast = Init<[1, 2, 3]> // [1, 2]
type Single = Init<[1]> // []
```

## Reverse

Reverse a tuple.

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<[1, 2, 3]> // [3, 2, 1]
type Empty = Reverse<[]> // []
```

## Flatten

Flatten nested tuples.

```typescript
import type { Flatten } from 'uni-types'

type Flat = Flatten<[1, [2, [3]]]> // [1, 2, 3]
type Nested = Flatten<[[1, 2], [3, 4]]> // [1, 2, 3, 4]
```

## TupleLength

Get the length of a tuple.

```typescript
import type { TupleLength } from 'uni-types'

type Len = TupleLength<[1, 2, 3]> // 3
type Empty = TupleLength<[]> // 0
```

## IsEmptyTuple

Check if a tuple is empty.

```typescript
import type { IsEmptyTuple } from 'uni-types'

type Empty = IsEmptyTuple<[]> // true
type NotEmpty = IsEmptyTuple<[1]> // false
```