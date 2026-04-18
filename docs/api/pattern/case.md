# Case

**Since v1.3.0**

Case helper for type-level pattern matching. Defines a case in a pattern matching expression, simply returning the property key itself.

## Signature

```typescript
export type Case<P extends PropertyKey> = P
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `P` | The property key representing this case |

## Examples

### Basic Usage

```typescript
import type { Case } from 'uni-types'

type A = Case<'a'> // 'a'
type B = Case<'b'> // 'b'
```

### With Pattern Matching

```typescript
import type { Case, Match } from 'uni-types'

type Action = 'create' | 'update' | 'delete'
type Pattern = { create: Case<'create'>; update: Case<'update'>; delete: Case<'delete'> }
type Result = Match<Action, Pattern>
// 'create' | 'update' | 'delete'
```
