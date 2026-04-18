# LongestCommonPrefix

**Since 1.4.0**

查找元组中所有字符串的最长公共前缀字符串。

## Signature

```typescript
export type LongestCommonPrefix<T extends string[]> = T extends [
	infer First extends string,
	...infer Rest extends string[],
]
	? Rest extends [infer Second extends string, ...infer Others extends string[]]
		? LongestCommonPrefix<[CommonPrefix<First, Second>, ...Others]>
		: First
	: ''
```

## Parameters

| 参数 | 描述 |
|------|------|
| `T` | 要查找公共前缀的字符串元组 |

## Examples

### 基本用法

```typescript
import type { LongestCommonPrefix } from 'uni-types'

type Prefix = LongestCommonPrefix<['flower', 'flow', 'flight']> // 'fl'
```

### 无公共前缀

```typescript
import type { LongestCommonPrefix } from 'uni-types'

type Prefix = LongestCommonPrefix<['dog', 'cat', 'bird']> // ''
```

## Related

- [Reverse](./reverse.md) - 反转元组
- [Unique](./unique.md) - 移除元组中的重复元素
