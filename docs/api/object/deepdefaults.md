# DeepDefaults

**Since v1.3.0**

Deep default properties in an object type. Recursively fills in missing properties from a defaults object, while preserving existing values in the target type.

## Signature

```typescript
export type DeepDefaults<T, U> = {
	[K in keyof T | keyof U]: K extends keyof T
		? K extends keyof U
			? T[K] extends Record<string, any>
				? U[K] extends Record<string, any>
					? DeepDefaults<T[K], U[K]>
					: T[K]
				: T[K]
			: T[K]
		: K extends keyof U
			? U[K]
			: never
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target object type |
| `U` | The defaults object type |

## Examples

### Basic Usage

```typescript
import type { DeepDefaults } from 'uni-types'

type Defaults = { host: string; port: number; ssl: { enabled: boolean; cert: string } }
type Partial = { host: string; ssl: { enabled: boolean } }
type Config = DeepDefaults<Partial, Defaults>
// { host: string; port: number; ssl: { enabled: boolean; cert: string } }
```

### Nested Defaults

```typescript
import type { DeepDefaults } from 'uni-types'

type DefaultTheme = { colors: { primary: string; secondary: string }; fontSize: number }
type CustomTheme = { colors: { primary: string } }
type Theme = DeepDefaults<CustomTheme, DefaultTheme>
// { colors: { primary: string; secondary: string }; fontSize: number }
```
