# Reverse

**Since 1.4.0**

反转元组中元素的顺序。

## Signature

```typescript
export type Reverse<T extends unknown[], Acc extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? Reverse<Rest, [First, ...Acc]>
	: Acc
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要反转的元组 |
| `Acc` | 用于构建结果的内部累加器（默认值：`[]`） |

## Examples

### 基本用法

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<[1, 2, 3, 4, 5]> // [5, 4, 3, 2, 1]
```

### 混合类型

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<['a', 1, 'b', 2]> // [2, 'b', 1, 'a']
```

## Related

- [Unique](./unique.md) - 移除元组中的重复元素
- [Flatten](./flatten.md) - 扁平化嵌套元组（一层）
- [FlattenDeep](./flattendeep.md) - 扁平化嵌套元组（深度）
