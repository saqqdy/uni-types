# LongestCommonPrefix

**Since 1.4.0**

Finds the longest common prefix string among all strings in a tuple.

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

| Parameter | Description |
|-----------|-------------|
| `T` | A tuple of strings to find the common prefix for |

## Examples

### Basic Usage

```typescript
import type { LongestCommonPrefix } from 'uni-types'

type Prefix = LongestCommonPrefix<['flower', 'flow', 'flight']> // 'fl'
```

### No Common Prefix

```typescript
import type { LongestCommonPrefix } from 'uni-types'

type Prefix = LongestCommonPrefix<['dog', 'cat', 'bird']> // ''
```

## Related

- [Reverse](./reverse.md) - Reverse a tuple
- [Unique](./unique.md) - Remove duplicates from tuple
