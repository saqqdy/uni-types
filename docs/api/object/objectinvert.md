# ObjectInvert

**Since v1.3.0**

Invert an object type by swapping its keys and values. The resulting object uses the original values as keys and the original keys as values.

## Signature

```typescript
export type ObjectInvert<T extends Record<string, string | number>> = {
	[K in T[keyof T]]: { [P in keyof T]: T[P] extends K ? P : never }[keyof T]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The source object type with string or number values |

## Examples

### Basic Usage

```typescript
import type { ObjectInvert } from 'uni-types'

type Roles = { admin: 'a'; editor: 'e'; viewer: 'v' }
type InvertedRoles = ObjectInvert<Roles>
// { a: 'admin'; e: 'editor'; v: 'viewer' }
```

### With Numeric Values

```typescript
import type { ObjectInvert } from 'uni-types'

type StatusCodes = { ok: 200; notFound: 404; error: 500 }
type CodeToName = ObjectInvert<StatusCodes>
// { 200: 'ok'; 404: 'notFound'; 500: 'error' }
```
