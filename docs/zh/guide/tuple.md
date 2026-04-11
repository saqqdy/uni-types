# 元组操作

用于操作元组类型的工具类型。

## Head

获取元组的第一个元素。

```typescript
import type { Head } from 'uni-types'

type First = Head<[1, 2, 3]> // 1
type FromArray = Head<string[]> // string
type Empty = Head<[]> // never
```

## Last

获取元组的最后一个元素。

```typescript
import type { Last } from 'uni-types'

type LastElement = Last<[1, 2, 3]> // 3
type FromArray = Last<string[]> // string
```

## Tail

获取除第一个元素外的所有元素。

```typescript
import type { Tail } from 'uni-types'

type Rest = Tail<[1, 2, 3]> // [2, 3]
type Single = Tail<[1]> // []
type Empty = Tail<[]> // []
```

## Init

获取除最后一个元素外的所有元素。

```typescript
import type { Init } from 'uni-types'

type AllButLast = Init<[1, 2, 3]> // [1, 2]
type Single = Init<[1]> // []
```

## Reverse

反转元组。

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<[1, 2, 3]> // [3, 2, 1]
type Empty = Reverse<[]> // []
```

## Flatten

展平嵌套元组。

```typescript
import type { Flatten } from 'uni-types'

type Flat = Flatten<[1, [2, [3]]]> // [1, 2, 3]
type Nested = Flatten<[[1, 2], [3, 4]]> // [1, 2, 3, 4]
```

## TupleLength

获取元组的长度。

```typescript
import type { TupleLength } from 'uni-types'

type Len = TupleLength<[1, 2, 3]> // 3
type Empty = TupleLength<[]> // 0
```

## IsEmptyTuple

检查元组是否为空。

```typescript
import type { IsEmptyTuple } from 'uni-types'

type Empty = IsEmptyTuple<[]> // true
type NotEmpty = IsEmptyTuple<[1]> // false
```
