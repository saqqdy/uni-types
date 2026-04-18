# ObjectMap

**Since v1.3.0**

Map over object values with a transformation function type. Applies a function type to each value in an object, producing a new object with transformed values.

## Signature

```typescript
export type ObjectMap<T extends Record<string, any>, F> = {
	[K in keyof T]: F extends (x: T[K]) => infer R ? R : never
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The source object type to map over |
| `F` | A function type that transforms each value |

## Examples

### Basic Usage

```typescript
import type { ObjectMap } from 'uni-types'

type Source = { a: number; b: number; c: number }
type ToString = ObjectMap<Source, (x: number) => string>
// { a: string; b: string; c: string }
```

### With Different Types

```typescript
import type { ObjectMap } from 'uni-types'

type Data = { name: string; age: number; active: boolean }
type WrapInArray = ObjectMap<Data, (x: any) => Array<any>>
// { name: string[]; age: number[]; active: boolean[] }
```
