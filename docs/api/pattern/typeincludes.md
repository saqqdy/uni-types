# TypeIncludes

**Since v1.3.0**

Type-level includes check for tuples. Returns `true` if any element in the tuple extends the predicate type, otherwise returns `false`.

## Signature

```typescript
export type TypeIncludes<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? true
		: TypeIncludes<Rest, P>
	: false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type to check |
| `P` | The predicate type to look for |

## Examples

### Basic Usage

```typescript
import type { TypeIncludes } from 'uni-types'

type HasNumber = TypeIncludes<['a', 1, 'b'], number> // true
type HasBoolean = TypeIncludes<['a', 1, 'b'], boolean> // false
```

### Check for Type Existence

```typescript
import type { TypeIncludes } from 'uni-types'

type Mixed = [string, number, boolean, string, number]
type IncludesString = TypeIncludes<Mixed, number> // true
type IncludesNull = TypeIncludes<Mixed, null> // false
```
