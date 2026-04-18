# Includes

**Since 1.4.0**

检查元组是否包含匹配给定类型的元素。如果找到则返回 `true`，否则返回 `false`。

## Signature

```typescript
export type Includes<T extends unknown[], U> = T extends [infer First, ...infer Rest]
	? First extends U ? (U extends First ? true : Includes<Rest, U>) : Includes<Rest, U>
	: false
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要搜索的元组 |
| `U` | 要检查的类型 |

## Examples

### 基本用法

```typescript
import type { Includes } from 'uni-types'

type HasString = Includes<[1, 'a', 2], string> // true
```

### 元素未找到

```typescript
import type { Includes } from 'uni-types'

type HasBoolean = Includes<[1, 'a', 2], boolean> // false
```

## Related

- [Find](./find.md) - 查找第一个匹配的元素
- [FindIndex](./findindex.md) - 查找第一个匹配元素的索引
- [IndexOf](./indexof.md) - 获取特定元素的索引
