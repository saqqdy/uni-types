# IsZodSchema

**Since 1.2.0**

Check if a type is a Zod schema.

## Signature

```typescript
type IsZodSchema<T> = T extends { _def: object } ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Description

Determines if a given type is a Zod schema by checking for the presence of the `_def` property that all Zod schemas have.

## Examples

### Basic Usage

```typescript
import type { IsZodSchema } from 'uni-types'
import { z } from 'zod'

const StringSchema = z.string()

type Check = IsZodSchema<typeof StringSchema>  // true
type CheckPlain = IsZodSchema<string>  // false
```

### With Conditional Types

```typescript
import type { IsZodSchema } from 'uni-types'
import { z } from 'zod'

type GetSchemaType<T> = IsZodSchema<T> extends true
  ? T['_output']
  : T

const UserSchema = z.object({ name: z.string() })

type Result = GetSchemaType<typeof UserSchema>
// { name: string }
```

## Related

- [`ZodOutput`](./zod-output) - Extract output type
- [`ZodInput`](./zod-input) - Extract input type
