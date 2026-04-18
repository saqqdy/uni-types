# ZodShape

**Since 1.2.0**

Extract shape from ZodObject.

## Signature

```typescript
type ZodShape<T> = T extends { _def: { shape: () => infer S } }
  ? S
  : T extends { shape: infer S }
    ? S
    : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The ZodObject schema type |

## Description

Extracts the shape type from a ZodObject schema. The shape represents the structure of properties defined in the schema.

## Examples

### Basic Usage

```typescript
import type { ZodShape } from 'uni-types'
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string(),
  age: z.number()
})

type Shape = ZodShape<typeof UserSchema>
// { name: ZodString; age: ZodNumber }
```

### With Nested Objects

```typescript
import type { ZodShape } from 'uni-types'
import { z } from 'zod'

const ConfigSchema = z.object({
  database: z.object({
    host: z.string(),
    port: z.number()
  })
})

type Shape = ZodShape<typeof ConfigSchema>
// { database: ZodObject<{ host: ZodString; port: ZodNumber }> }
```

## Related

- [`ZodOutput`](./zod-output) - Extract output type
- [`ZodArrayElement`](./zodarrayelement) - Get array element type
