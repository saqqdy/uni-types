# Default

**Since v1.3.0**

Default case helper for type-level pattern matching. Defines a fallback case that matches when no other case matches.

## Signature

```typescript
export type Default<R> = R
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `R` | The result type for the default case |

## Examples

### Basic Usage

```typescript
import type { Default } from 'uni-types'

type Fallback = Default<'unknown'> // 'unknown'
```

### With Pattern Matching

```typescript
import type { Default, Match } from 'uni-types'

type Input = 'a' | 'b' | 'c'
type Result = Match<Input, { a: 1; b: 2; _: Default<0> }>
// 1 | 2 | 0 (c matches default)
```
