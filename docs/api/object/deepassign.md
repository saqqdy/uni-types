# DeepAssign

**Since v1.3.0**

Deep assign properties from one object type to another. Similar to `Object.assign` but operates recursively on nested objects, assigning all properties from the source to the target.

## Signature

```typescript
export type DeepAssign<T, U> = {
	[K in keyof T | keyof U]: K extends keyof U
		? U[K] extends Record<string, any>
			? K extends keyof T
				? T[K] extends Record<string, any>
					? DeepAssign<T[K], U[K]>
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
| `T` | The target object type |
| `U` | The source object type to assign from |

## Examples

### Basic Usage

```typescript
import type { DeepAssign } from 'uni-types'

type Target = { a: number; b: { c: string } }
type Source = { b: { d: boolean }; e: number }
type Result = DeepAssign<Target, Source>
// { a: number; b: { c: string; d: boolean }; e: number }
```

### Overwriting Nested Properties

```typescript
import type { DeepAssign } from 'uni-types'

type Config = { database: { host: string; port: number }; cache: { ttl: number } }
type Override = { database: { host: string }; cache: { enabled: boolean } }
type Assigned = DeepAssign<Config, Override>
// { database: { host: string; port: number }; cache: { ttl: number; enabled: boolean } }
```
