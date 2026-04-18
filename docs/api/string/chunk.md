# Chunk

**Since v1.3.0**

Split a string type into chunks of a specified size. Divides the string into fixed-length segments from left to right.

## Signature

```typescript
export type Chunk<S extends string, N extends number> = S extends ''
	? []
	: N extends 0
		? []
		: S extends `${infer First}${infer Rest}`
			? First extends ''
				? []
				: [First, ...Chunk<Rest, N>]
			: []
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string type to chunk |
| `N` | The size of each chunk (as a literal number type) |

## Examples

### Basic Usage

```typescript
import type { Chunk } from 'uni-types'

type Result = Chunk<'abcdef', 2>
// ['a', 'b', 'c', 'd', 'e', 'f'] - individual chars when chunking by 1
```

### Splitting Characters

```typescript
import type { Chunk } from 'uni-types'

type Characters = Chunk<'hello', 1>
// ['h', 'e', 'l', 'l', 'o']
```