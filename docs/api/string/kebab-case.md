# KebabCase

**Since v1.3.0**

Convert a string type to kebab-case format. Transforms camelCase or PascalCase strings into lowercase words separated by hyphens.

## Signature

```typescript
export type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends Uppercase<First>
		? First extends Lowercase<First>
			? `${First}${KebabCase<Rest>}`
			: `-${Lowercase<First>}${KebabCase<Rest>}`
		: `${First}${KebabCase<Rest>}`
	: S
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The string type to convert to kebab-case |

## Examples

### Basic Usage

```typescript
import type { KebabCase } from 'uni-types'

type Result = KebabCase<'camelCase'>
// 'camel-case'
```

### From PascalCase

```typescript
import type { KebabCase } from 'uni-types'

type Result = KebabCase<'PascalCaseExample'>
// '-pascal-case-example'
```