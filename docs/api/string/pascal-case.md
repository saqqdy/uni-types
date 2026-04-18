# PascalCase

**Since v1.3.0**

Convert a string type to PascalCase format. Transforms strings into a format where each word starts with an uppercase letter and there are no separators between words.

## Signature

```typescript
export type PascalCase<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends Uppercase<First>
		? First extends Lowercase<First>
			? `${Uppercase<First>}${PascalCase<Rest>}`
			: `${First}${PascalCase<Rest>}`
		: `${Uppercase<First>}${PascalCase<Rest>}`
	: S
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string type to convert to PascalCase |

## Examples

### Basic Usage

```typescript
import type { PascalCase } from 'uni-types'

type Result = PascalCase<'hello-world'>
// 'HelloWorld'
```

### From camelCase

```typescript
import type { PascalCase } from 'uni-types'

type Result = PascalCase<'myVariableName'>
// 'MyVariableName'
```