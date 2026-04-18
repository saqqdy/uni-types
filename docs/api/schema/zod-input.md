# ZodInput

**Since 1.2.0**

Extract the input type from a Zod schema.

## Signature

```typescript
type ZodInput<T> = T extends { _input: infer I } ? I : T extends { _def: { type: string } } ? T : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The Zod schema type |

## Description

Extracts the TypeScript type that represents the input of a Zod schema. This is useful for getting the type that will be accepted during parsing, which may differ from the output type due to transformations.

## Examples

### Basic Usage

```typescript
import type { ZodInput } from 'uni-types'
import { z } from 'zod'

const DateSchema = z.string().transform(s => new Date(s))

type Input = ZodInput<typeof DateSchema>
// string (the input type before transformation)
```

### With Object Schemas

```typescript
import type { ZodInput } from 'uni-types'
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string(),
  age: z.coerce.number()  // Accepts string input
})

type Input = ZodInput<typeof UserSchema>
// Type with age potentially accepting string input
```

## Related

- [`ZodOutput`](./zod-output) - Extract output type
- [`ZodShape`](./zod-shape) - Extract schema shape
