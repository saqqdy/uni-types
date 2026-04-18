# TypeFind

**Since v1.3.0**

Type-level find for tuple elements. Finds and returns the first element in a tuple that extends the predicate type, or `never` if no match is found.

## Signature

```typescript
export type TypeFind<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? First
		: TypeFind<Rest, P>
	: never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type to search |
| `P` | The predicate type to find |

## Examples

### Basic Usage

```typescript
import type { TypeFind } from 'uni-types'

type Mixed = [string, number, boolean, string]
type FoundNumber = TypeFind<Mixed, number>
// number
```

### No Match Found

```typescript
import type { TypeFind } from 'uni-types'

type Strings = ['a', 'b', 'c']
type FindNumber = TypeFind<Strings, number>
// never
```
