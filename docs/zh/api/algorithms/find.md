# Find

**Since 1.4.0**

在元组中查找第一个匹配给定谓词类型的元素。

## Signature

```typescript
export type Find<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P ? First : Find<Rest, P>
	: never
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要搜索的元组 |
| `P` | 用于匹配的谓词类型 |

## Examples

### 基本用法

```typescript
import type { Find } from 'uni-types'

type Result = Find<[1, 'a', 2, 'b'], string> // 'a'
```

### 使用联合谓词

```typescript
import type { Find } from 'uni-types'

type Numbers = Find<['hello', 42, 'world', 100], number> // 42
```

## Related

- [FindIndex](./findindex.md) - 查找第一个匹配元素的索引
- [Includes](./includes.md) - 检查元组是否包含元素
- [Unique](./unique.md) - 移除元组中的重复元素
