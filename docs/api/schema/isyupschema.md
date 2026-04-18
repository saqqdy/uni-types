# IsYupSchema

**Since 1.2.0**

Check if a type is a Yup schema.

## Signature

```typescript
type IsYupSchema<T> = T extends { spec: object }
  ? true
  : T extends { __isYupSchema: true }
    ? true
    : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Description

Determines if a given type is a Yup schema by checking for the presence of the `spec` property or the `__isYupSchema` marker that Yup schemas have.

## Examples

### Basic Usage

```typescript
import type { IsYupSchema } from 'uni-types'
import * as yup from 'yup'

const StringSchema = yup.string()

type Check = IsYupSchema<typeof StringSchema>  // true
type CheckPlain = IsYupSchema<string>  // false
```

### With Conditional Types

```typescript
import type { IsYupSchema } from 'uni-types'
import * as yup from 'yup'

type GetSchemaType<T> = IsYupSchema<T> extends true
  ? T['__outputType']
  : T

const UserSchema = yup.object({ name: yup.string() })

type Result = GetSchemaType<typeof UserSchema>
// { name: string }
```

## Related

- [`YupOutput`](./yup-output) - Extract output type
- [`YupInput`](./yup-input) - Extract input type
