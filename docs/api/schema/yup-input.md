# YupInput

**Since 1.2.0**

Extract the input type from a Yup schema.

## Signature

```typescript
type YupInput<T> = T extends { __inputType: infer I }
  ? I
  : T extends { spec: object }
    ? T
    : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The Yup schema type |

## Description

Extracts the TypeScript type that represents the input of a Yup schema. This is useful for getting the type that will be accepted during validation.

## Examples

### Basic Usage

```typescript
import type { YupInput } from 'uni-types'
import * as yup from 'yup'

const UserSchema = yup.object({
  name: yup.string().required(),
  age: yup.number()
})

type Input = YupInput<typeof UserSchema>
// { name: string; age?: number | undefined }
```

### With Coercion

```typescript
import type { YupInput } from 'uni-types'
import * as yup from 'yup'

const NumberSchema = yup.number().transform(value => Number(value))

type Input = YupInput<typeof NumberSchema>
// number (input type before transformation)
```

## Related

- [`YupOutput`](./yup-output) - Extract output type
- [`IsYupSchema`](./isyupschema) - Check if type is Yup schema
