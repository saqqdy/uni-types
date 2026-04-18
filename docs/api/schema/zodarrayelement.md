# ZodArrayElement

**Since 1.2.0**

Get the element type from ZodArray.

## Signature

```typescript
type ZodArrayElement<T> = T extends { _def: { type: 'array', elementType: infer E } }
  ? E
  : T extends { element: infer E }
    ? E
    : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The ZodArray schema type |

## Description

Extracts the element type from a ZodArray schema. Useful for getting the type of items in an array schema.

## Examples

### Basic Usage

```typescript
import type { ZodArrayElement } from 'uni-types'
import { z } from 'zod'

const NumbersSchema = z.array(z.number())

type Element = ZodArrayElement<typeof NumbersSchema>
// ZodNumber
```

### With Complex Element Types

```typescript
import type { ZodArrayElement } from 'uni-types'
import { z } from 'zod'

const UsersSchema = z.array(z.object({
  id: z.string(),
  name: z.string()
}))

type Element = ZodArrayElement<typeof UsersSchema>
// ZodObject<{ id: ZodString; name: ZodString }>
```

## Related

- [`ZodOutput`](./zod-output) - Extract output type
- [`ZodShape`](./zodshape) - Extract schema shape
