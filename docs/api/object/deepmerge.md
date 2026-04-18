# DeepMerge

**Since v1.3.0**

Deep merge two object types recursively. When both types have the same key with object values, they are merged recursively; otherwise, the second type's value takes precedence.

## Signature

```typescript
export type DeepMerge<T, U> = {
	[K in keyof T | keyof U]: K extends keyof U
		? K extends keyof T
			? T[K] extends Record<string, any>
				? U[K] extends Record<string, any>
					? DeepMerge<T[K], U[K]>
					: U[K]
				: U[K]
			: U[K]
		: K extends keyof T
			? T[K]
			: never
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The base object type |
| `U` | The object type to merge into T |

## Examples

### Basic Usage

```typescript
import type { DeepMerge } from 'uni-types'

type Defaults = { host: string; port: number; ssl: { enabled: boolean; cert: string } }
type Overrides = { port: number; ssl: { enabled: boolean; key: string } }
type Config = DeepMerge<Defaults, Overrides>
// { host: string; port: number; ssl: { enabled: boolean; cert: string; key: string } }
```

### Nested Object Merging

```typescript
import type { DeepMerge } from 'uni-types'

type Base = { a: { b: { c: number }; d: string } }
type Extension = { a: { b: { e: boolean } } }
type Result = DeepMerge<Base, Extension>
// { a: { b: { c: number; e: boolean }; d: string } }
```
