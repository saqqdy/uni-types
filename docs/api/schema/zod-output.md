# ZodOutput

**Since 1.2.0**

Extract the output type from a Zod schema.

## Signature

```typescript
type ZodOutput<T> = T extends { _output: infer O } ? O : ...
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The Zod schema type |

## Description

Extracts the TypeScript type that represents the output of a Zod schema. This is useful for getting the type that will be returned after parsing.

## Examples

### Basic Usage

```typescript
import type { ZodOutput } from 'uni-types'
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string(),
  age: z.number().optional()
})

type User = ZodOutput<typeof UserSchema>
// { name: string; age?: number | undefined }
```

### With Nested Schemas

```typescript
const ConfigSchema = z.object({
  database: z.object({
    host: z.string(),
    port: z.number()
  })
})

type Config = ZodOutput<typeof ConfigSchema>
// { database: { host: string; port: number } }
```

## Related

- [`ZodInput`](./zod-input) - Extract input type
- [`ZodShape`](./zod-shape) - Extract schema shape