# TypeFilter

**Since v1.3.0**

Type-level filter for tuple elements. Filters a tuple to retain only elements that extend the predicate type.

## Signature

```typescript
export type TypeFilter<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? [First, ...TypeFilter<Rest, P>]
		: TypeFilter<Rest, P>
	: []
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type to filter |
| `P` | The predicate type to filter elements by |

## Examples

### Basic Usage

```typescript
import type { TypeFilter } from 'uni-types'

type Mixed = [string, number, string, boolean, number]
type OnlyStrings = TypeFilter<Mixed, string>
// [string, string]
```

### Filter by Union Type

```typescript
import type { TypeFilter } from 'uni-types'

type Elements = [1, 'a', 2, 'b', true, 'c']
type OnlyNumbersAndBooleans = TypeFilter<Elements, number | boolean>
// [1, 2, true]
```
