# ObjectFilter

**Since v1.3.0**

Filter object properties by a type predicate. Retains only the key-value pairs whose values extend the predicate type.

## Signature

```typescript
export type ObjectFilter<T extends Record<string, any>, P> = {
	[K in keyof T as T[K] extends P ? K : never]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The source object type to filter |
| `P` | The predicate type to filter values by |

## Examples

### Basic Usage

```typescript
import type { ObjectFilter } from 'uni-types'

type Mixed = { name: string; age: number; active: boolean; score: number }
type OnlyNumbers = ObjectFilter<Mixed, number>
// { age: number; score: number }
```

### Filter by Union Type

```typescript
import type { ObjectFilter } from 'uni-types'

type Config = { host: string; port: number; debug: boolean; timeout: number }
type StringsAndNumbers = ObjectFilter<Config, string | number>
// { host: string; port: number; timeout: number }
```
