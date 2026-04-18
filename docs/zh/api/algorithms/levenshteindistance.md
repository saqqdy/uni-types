# LevenshteinDistance

**Since 1.4.0**

计算两个字符串字面量类型之间的 Levenshtein 距离。Levenshtein 距离是将一个字符串转换为另一个字符串所需的最少单字符编辑（插入、删除或替换）次数。

## Signature

```typescript
export type LevenshteinDistance<A extends string, B extends string> = // 复杂实现
```

## Parameters

| 参数 | 描述 |
|------|------|
| `A` | 第一个字符串字面量类型 |
| `B` | 第二个字符串字面量类型 |

## Examples

### 基本用法

```typescript
import type { LevenshteinDistance } from 'uni-types'

type Distance = LevenshteinDistance<'kitten', 'sitting'> // 3
```

### 相同字符串

```typescript
import type { LevenshteinDistance } from 'uni-types'

type Distance = LevenshteinDistance<'hello', 'hello'> // 0
```

## Related

- [LongestCommonPrefix](./longestcommonprefix.md) - 查找字符串的最长公共前缀
