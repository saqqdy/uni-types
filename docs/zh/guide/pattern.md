# 类型模式

**自 1.3.0 起**

用于类型级编程的高级类型模式。

## 模式匹配

### Match

类型级模式匹配。

```typescript
import type { Match } from 'uni-types'

type Result = Match<'a', { a: 1; b: 2 }>  // 1
type WithDefault = Match<'c', { a: 1; _: 0 }>  // 0（默认值）
```

### Case / Default

模式匹配的辅助类型。

```typescript
import type { Case, Default } from 'uni-types'

type A = Case<'a'>  // 'a'
type Fallback = Default<0>  // { _: 0 }
```

## 类型级谓词

### TypeFilter

按谓词过滤元组元素。

```typescript
import type { TypeFilter } from 'uni-types'

type Filtered = TypeFilter<[1, 'a', 2, 'b'], string>  // ['a', 'b']
```

### TypeFind

查找第一个匹配谓词的元素。

```typescript
import type { TypeFind } from 'uni-types'

type Found = TypeFind<[1, 'a', 2, 'b'], string>  // 'a'
type NotFound = TypeFind<[1, 2, 3], string>  // never
```

### TypeIncludes

检查类型是否存在于元组中。

```typescript
import type { TypeIncludes } from 'uni-types'

type Has = TypeIncludes<[1, 2, 3], 2>  // true
type NotHas = TypeIncludes<[1, 2, 3], 4>  // false
```

### TypeEvery / TypeSome

检查所有或任意元素是否匹配。

```typescript
import type { TypeEvery, TypeSome } from 'uni-types'

type AllMatch = TypeEvery<[1, 2, 3], number>  // true
type AnyMatch = TypeSome<[1, 'a', 2], string>  // true
```

## 类型级迭代

### Iterate

应用转换 N 次。

```typescript
import type { Iterate } from 'uni-types'

type Doubled = Iterate<1, (x: number) => x * 2, 3>  // 8
```

### Reduce

从元组累积值。

```typescript
import type { Reduce } from 'uni-types'

type Sum = Reduce<[1, 2, 3], (acc: number, val: number) => number, 0>  // 6
```

### ForEach

对每个元素应用函数。

```typescript
import type { ForEach } from 'uni-types'

type Doubled = ForEach<[1, 2, 3], (x: number) => number>  // [2, 4, 6]
```

## 相关

- [算法](./algorithms) - 搜索和实用算法
- [集合类型](./collection) - Set、Map、List 操作
