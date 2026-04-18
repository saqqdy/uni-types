# Unique

**Since 1.4.0**

移除元组中的重复元素，只保留每个唯一类型的首次出现。

## Signature

```typescript
export type Unique<T extends unknown[], Seen extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends Seen[number] ? Unique<Rest, Seen> : [First, ...Unique<Rest, [...Seen, First]>]
	: []
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要移除重复元素的元组 |
| `Seen` | 用于跟踪已见元素的内部累加器（默认值：`[]`） |

## Examples

### 基本用法

```typescript
import type { Unique } from 'uni-types'

type Result = Unique<[1, 2, 1, 3, 2, 4]> // [1, 2, 3, 4]
```

### 字符串字面量

```typescript
import type { Unique } from 'uni-types'

type Result = Unique<['a', 'b', 'a', 'c', 'b']> // ['a', 'b', 'c']
```

## Related

- [Find](./find.md) - 查找第一个匹配的元素
- [Reverse](./reverse.md) - 反转元组
- [Includes](./includes.md) - 检查元组是否包含元素
