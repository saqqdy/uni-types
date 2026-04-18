# YupOutput

**Since 1.2.0**

Extract the output type from a Yup schema.

## Signature

```typescript
type YupOutput<T> = T extends { __outputType: infer O }
  ? O
  : T extends { spec: object }
    ? T
    : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The Yup schema type |

## Description

Extracts the TypeScript type that represents the output of a Yup schema. This is useful for getting the type that will be returned after validation.

## Examples

### Basic Usage

```typescript
import type { YupOutput } from 'uni-types'
import * as yup from 'yup'

const UserSchema = yup.object({
  name: yup.string().required(),
  age: yup.number().optional()
})

type User = YupOutput<typeof UserSchema>
// { name: string; age?: number | undefined }
```

### With Transformations

```typescript
import type { YupOutput } from 'uni-types'
import * as yup from 'yup'

const DateSchema = yup.string().transform(value => new Date(value))

type Output = YupOutput<typeof DateSchema>
// string (or transformed type)
```

## Related

- [`YupInput`](./yup-input) - Extract input type
- [`IsYupSchema`](./isyupschema) - Check if type is Yup schema
