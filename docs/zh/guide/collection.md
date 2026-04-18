# 集合类型

**自 1.3.0 起**

类型级数据结构和操作。

## Set 操作

### TypeSet

类型级 Set 表示。

```typescript
import type { TypeSet } from 'uni-types'

type MySet = TypeSet<'a' | 'b' | 'c'>  // 'a' | 'b' | 'c'
```

### SetAdd / SetRemove

添加或移除集合元素。

```typescript
import type { SetAdd, SetRemove } from 'uni-types'

type Added = SetAdd<'a' | 'b', 'c'>  // 'a' | 'b' | 'c'
type Removed = SetRemove<'a' | 'b' | 'c', 'b'>  // 'a' | 'c'
```

### SetHas

检查元素是否存在于集合中。

```typescript
import type { SetHas } from 'uni-types'

type Has = SetHas<'a' | 'b', 'a'>  // true
type NotHas = SetHas<'a' | 'b', 'c'>  // false
```

### SetUnion / SetIntersection / SetDifference

集合操作。

```typescript
import type { SetUnion, SetIntersection, SetDifference } from 'uni-types'

type Union = SetUnion<'a' | 'b', 'b' | 'c'>  // 'a' | 'b' | 'c'
type Intersect = SetIntersection<'a' | 'b', 'b' | 'c'>  // 'b'
type Diff = SetDifference<'a' | 'b', 'b' | 'c'>  // 'a'
```

### SetIsEmpty / SetIsSubset

集合验证。

```typescript
import type { SetIsEmpty, SetIsSubset } from 'uni-types'

type Empty = SetIsEmpty<never>  // true
type Subset = SetIsSubset<'a', 'a' | 'b'>  // true
```

## Map 操作

### TypeMap

类型级 Map 表示。

```typescript
import type { TypeMap } from 'uni-types'

type MyMap = TypeMap<'a' | 'b', number>  // { a: number; b: number }
```

### MapGet / MapSet / MapDelete

Map 操作。

```typescript
import type { MapGet, MapSet, MapDelete } from 'uni-types'

type Value = MapGet<{ a: 1; b: 2 }, 'a'>  // 1
type Updated = MapSet<{ a: 1 }, 'b', 2>  // { a: 1; b: 2 }
type Removed = MapDelete<{ a: 1; b: 2 }, 'b'>  // { a: 1 }
```

### MapHas / MapKeys / MapValues

Map 工具。

```typescript
import type { MapHas, MapKeys, MapValues } from 'uni-types'

type Has = MapHas<{ a: 1 }, 'a'>  // true
type Keys = MapKeys<{ a: 1; b: 2 }>  // 'a' | 'b'
type Values = MapValues<{ a: 1; b: 2 }>  // 1 | 2
```

## List 操作

### ListFilter

按谓词过滤列表元素。

```typescript
import type { ListFilter } from 'uni-types'

type Filtered = ListFilter<[1, 'a', 2, 'b'], number>  // [1, 2]
```

### ListFind / ListIncludes

列表搜索操作。

```typescript
import type { ListFind, ListIncludes } from 'uni-types'

type Found = ListFind<[1, 2, 3], 2>  // 2
type Has = ListIncludes<[1, 2, 3], 2>  // true
```

### ListReverse / ListConcat

列表转换。

```typescript
import type { ListReverse, ListConcat } from 'uni-types'

type Reversed = ListReverse<[1, 2, 3]>  // [3, 2, 1]
type Concatenated = ListConcat<[1, 2], [3, 4]>  // [1, 2, 3, 4]
```

### ListLength

获取列表长度。

```typescript
import type { ListLength } from 'uni-types'

type Len = ListLength<[1, 2, 3]>  // 3
```

## 相关

- [类型模式](./pattern) - 模式匹配工具
- [算法](./algorithms) - 搜索和实用算法
