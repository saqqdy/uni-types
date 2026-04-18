# Join

**Since v1.3.0**

Join a tuple of string literals into a single string type with a separator. Concatenates all strings in the tuple with the separator between each element.

## Signature

```typescript
export type Join<T extends string[], S extends string> = T extends [infer First extends string]
	? First
	: T extends [infer First extends string, ...infer Rest extends string[]]
		? `${First}${S}${Join<Rest, S>}`
		: ''
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple of string literals to join |
| `S` | The separator string to insert between elements |

## Examples

### Basic Usage

```typescript
import type { Join } from 'uni-types'

type Result = Join<['a', 'b', 'c'], '-'>
// 'a-b-c'
```

### Joining Words

```typescript
import type { Join } from 'uni-types'

type Sentence = Join<['hello', 'world'], ' '>
// 'hello world'
```