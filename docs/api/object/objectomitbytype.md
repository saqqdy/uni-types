# ObjectOmitByType

**Since v1.3.0**

Omit object properties by their value type. Creates a new object type excluding the properties whose values extend the specified type.

## Signature

```typescript
export type ObjectOmitByType<T extends Record<string, any>, U> = {
	[K in keyof T as T[K] extends U ? never : K]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The source object type |
| `U` | The value type to omit |

## Examples

### Basic Usage

```typescript
import type { ObjectOmitByType } from 'uni-types'

type User = { name: string; age: number; email: string; score: number }
type WithoutNumbers = ObjectOmitByType<User, number>
// { name: string; email: string }
```

### Omit Function Properties

```typescript
import type { ObjectOmitByType } from 'uni-types'

type Mixed = { name: string; onClick: () => void; value: number; onChange: () => string }
type DataOnly = ObjectOmitByType<Mixed, Function>
// { name: string; value: number }
```
