# LevenshteinDistance

**Since 1.4.0**

Computes the Levenshtein distance between two string literal types. The Levenshtein distance is the minimum number of single-character edits (insertions, deletions, or substitutions) required to transform one string into another.

## Signature

```typescript
export type LevenshteinDistance<A extends string, B extends string> = // complex implementation
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | The first string literal type |
| `B` | The second string literal type |

## Examples

### Basic Usage

```typescript
import type { LevenshteinDistance } from 'uni-types'

type Distance = LevenshteinDistance<'kitten', 'sitting'> // 3
```

### Identical Strings

```typescript
import type { LevenshteinDistance } from 'uni-types'

type Distance = LevenshteinDistance<'hello', 'hello'> // 0
```

## Related

- [LongestCommonPrefix](./longestcommonprefix.md) - Find longest common prefix of strings
