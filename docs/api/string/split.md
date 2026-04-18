# Split

**Since v1.3.0**

Split a string type by a delimiter into a tuple of string literals. Recursively divides the string at each occurrence of the delimiter.

## Signature

```typescript
export type Split<S extends string, D extends string> = S extends `${infer Head}${D}${infer Tail}`
	? [Head, ...Split<Tail, D>]
	: S extends ''
		? []
		: [S]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string type to split |
| `D` | The delimiter string to split by |

## Examples

### Basic Usage

```typescript
import type { Split } from 'uni-types'

type Parts = Split<'a-b-c', '-'>
// ['a', 'b', 'c']
```

### Splitting Words

```typescript
import type { Split } from 'uni-types'

type Words = Split<'hello world today', ' '>
// ['hello', 'world', 'today']
```