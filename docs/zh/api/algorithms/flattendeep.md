# FlattenDeep

**Since 1.4.0**

递归地将嵌套元组扁平化到任意深度，生成一个包含所有元素的扁平元组。

## Signature

```typescript
export type FlattenDeep<T extends unknown[], Acc extends unknown[] = []> = T extends [
	infer First,
	...infer Rest,
]
	? First extends unknown[]
		? FlattenDeep<Rest, [...Acc, ...FlattenDeep<First>]>
		: FlattenDeep<Rest, [...Acc, First]>
	: Acc
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要递归扁平化的嵌套元组 |
| `Acc` | 用于构建结果的内部累加器（默认值：`[]`） |

## Examples

### 基本用法

```typescript
import type { FlattenDeep } from 'uni-types'

type Result = FlattenDeep<[1, [2, [3, [4, [5]]]]]> // [1, 2, 3, 4, 5]
```

### 多层嵌套

```typescript
import type { FlattenDeep } from 'uni-types'

type Result = FlattenDeep<[['a', ['b']], [['c', ['d', ['e']]]]]> // ['a', 'b', 'c', 'd', 'e']
```

## Related

- [Flatten](./flatten.md) - 扁平化嵌套元组（一层）
- [Reverse](./reverse.md) - 反转元组
- [Unique](./unique.md) - 移除元组中的重复元素
