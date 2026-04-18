# IndexOf

**Since 1.4.0**

获取元组中特定元素类型的索引。这是 `FindIndex` 的别名。如果未找到则返回 `-1`。

## Signature

```typescript
export type IndexOf<T extends unknown[], U> = FindIndex<T, U>
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要搜索的元组 |
| `U` | 要查找索引的类型 |

## Examples

### 基本用法

```typescript
import type { IndexOf } from 'uni-types'

type Index = IndexOf<['a', 'b', 'c', 'b'], 'b'> // 1
```

### 元素未找到

```typescript
import type { IndexOf } from 'uni-types'

type Index = IndexOf<['a', 'b', 'c'], 'd'> // -1
```

## Related

- [FindIndex](./findindex.md) - 查找第一个匹配元素的索引
- [Find](./find.md) - 查找第一个匹配的元素
- [Includes](./includes.md) - 检查元组是否包含元素
