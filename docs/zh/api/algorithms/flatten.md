# Flatten

**Since 1.4.0**

将嵌套元组扁平化一层，将所有内部数组合并为单个元组。

## Signature

```typescript
export type Flatten<T extends unknown[][], Acc extends unknown[] = []> = T extends [
	infer First extends unknown[],
	...infer Rest extends unknown[][],
]
	? Flatten<Rest, [...Acc, ...First]>
	: Acc
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要扁平化（一层）的数组元组 |
| `Acc` | 用于构建结果的内部累加器（默认值：`[]`） |

## Examples

### 基本用法

```typescript
import type { Flatten } from 'uni-types'

type Result = Flatten<[[1, 2], [3, 4], [5, 6]]> // [1, 2, 3, 4, 5, 6]
```

### 不同长度的数组

```typescript
import type { Flatten } from 'uni-types'

type Result = Flatten<[['a'], ['b', 'c'], ['d', 'e', 'f']]> // ['a', 'b', 'c', 'd', 'e', 'f']
```

## Related

- [FlattenDeep](./flattendeep.md) - 扁平化嵌套元组（深度）
- [Reverse](./reverse.md) - 反转元组
- [Unique](./unique.md) - 移除元组中的重复元素
