# ObjectPickByType

**Since v1.3.0**

Pick object properties by their value type. Creates a new object type containing only the properties whose values extend the specified type.

## Signature

```typescript
export type ObjectPickByType<T extends Record<string, any>, U> = {
	[K in keyof T as T[K] extends U ? K : never]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The source object type |
| `U` | The value type to pick |

## Examples

### Basic Usage

```typescript
import type { ObjectPickByType } from 'uni-types'

type User = { name: string; age: number; email: string; score: number }
type OnlyStrings = ObjectPickByType<User, string>
// { name: string; email: string }
```

### Pick Function Properties

```typescript
import type { ObjectPickByType } from 'uni-types'

type Methods = { greet: () => void; count: number; farewell: () => string; id: number }
type OnlyFunctions = ObjectPickByType<Methods, Function>
// { greet: () => void; farewell: () => string }
```
