# HasProperties

**Since v1.3.0**

Check if an object type has all specified properties. Returns `true` only if every property key in the list exists on the object type.

## Signature

```typescript
export type HasProperties<T, K extends PropertyKey[]> = K extends [infer First, ...infer Rest]
	? First extends keyof T
		? Rest extends PropertyKey[]
			? HasProperties<T, Rest>
			: true
		: false
	: true
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to check |
| `K` | An array of property keys to look for |

## Examples

### Basic Usage

```typescript
import type { HasProperties } from 'uni-types'

type User = { name: string; age: number; email: string }
type HasNameAndAge = HasProperties<User, ['name', 'age']> // true
type HasNameAndPhone = HasProperties<User, ['name', 'phone']> // false
```

### Checking Multiple Properties

```typescript
import type { HasProperties } from 'uni-types'

type Config = { host: string; port: number; protocol: string }
type HasRequired = HasProperties<Config, ['host', 'port', 'protocol']> // true
type HasOptional = HasProperties<Config, ['host', 'timeout']> // false
```
