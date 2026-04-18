# FindIndex

**Since 1.4.0**

在元组中查找第一个匹配给定谓词类型的元素的索引。如果未找到匹配项，则返回 `-1`。

## Signature

```typescript
export type FindIndex<T extends unknown[], P, Acc extends 0[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends P ? Acc['length'] : FindIndex<Rest, P, [...Acc, 0]>
	: -1
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要搜索的元组 |
| `P` | 用于匹配的谓词类型 |
| `Acc` | 用于跟踪索引的内部累加器（默认值：`[]`） |

## Examples

### 基本用法

```typescript
import type { FindIndex } from 'uni-types'

type Index = FindIndex<[1, 'a', 2, 'b'], string> // 1
```

### 未找到匹配项

```typescript
import type { FindIndex } from 'uni-types'

type Index = FindIndex<[1, 2, 3], string> // -1
```

## Related

- [Find](./find.md) - 查找第一个匹配的元素
- [IndexOf](./indexof.md) - 获取特定元素的索引
- [Includes](./includes.md) - 检查元组是否包含元素
