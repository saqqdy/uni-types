# 类型级算法

**自 1.4.0 起**

常见算法的类型级实现，用于编译时计算。

## 搜索算法

### Find

在元组中查找第一个匹配谓词的元素。

```typescript
import type { Find } from 'uni-types'

type Result = Find<[1, 2, 3], 2>  // 2
type NotFound = Find<[1, 2, 3], 4>  // never
```

### FindIndex

查找第一个匹配谓词的元素索引。

```typescript
import type { FindIndex } from 'uni-types'

type Index = FindIndex<[1, 2, 3], 2>  // 1
type NotFound = FindIndex<[1, 2, 3], 4>  // -1
```

### Includes

检查元组是否包含元素。

```typescript
import type { Includes } from 'uni-types'

type Has = Includes<[1, 2, 3], 2>  // true
type NotHas = Includes<[1, 2, 3], 4>  // false
```

## 字符串算法

### LongestCommonPrefix

查找字符串元组的最长公共前缀。

```typescript
import type { LongestCommonPrefix } from 'uni-types'

type Prefix = LongestCommonPrefix<['flower', 'flow', 'flight']>  // 'fl'
type Empty = LongestCommonPrefix<['dog', 'cat']>  // ''
```

## 实用算法

### Reverse

反转元组。

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<[1, 2, 3]>  // [3, 2, 1]
```

### Unique

移除元组中的重复元素。

```typescript
import type { Unique } from 'uni-types'

type Uniq = Unique<[1, 2, 1, 3, 2]>  // [1, 2, 3]
```

### Flatten

展平嵌套元组（一层）。

```typescript
import type { Flatten } from 'uni-types'

type Flat = Flatten<[[1, 2], [3, 4]]>  // [1, 2, 3, 4]
```

### FlattenDeep

递归展平嵌套元组。

```typescript
import type { FlattenDeep } from 'uni-types'

type Deep = FlattenDeep<[[1, [2, 3]], [4]]>  // [1, 2, 3, 4]
```

## 相关

- [集合类型](./collection) - Set、Map、List 操作
- [模式类型](./pattern) - 模式匹配工具
