# StringFieldValidator

**Since 1.5.0**

Validator for string fields with chainable validation rules.

## Signature

```typescript
type StringFieldValidator = Validator<string> & {
  min: (length: number) => StringFieldValidator
  max: (length: number) => StringFieldValidator
  pattern: (regex: RegExp) => StringFieldValidator
  email: () => StringFieldValidator
  url: () => StringFieldValidator
  uuid: () => StringFieldValidator
}
```

## Examples

### Basic Usage

```typescript
import type { StringFieldValidator } from 'uni-types'

const nameValidator: StringFieldValidator = {
  validate: (value): value is string => typeof value === 'string' && value.length >= 2,
  min: (len) => nameValidator,
  max: (len) => nameValidator,
  pattern: (regex) => nameValidator,
  email: () => nameValidator,
  url: () => nameValidator,
  uuid: () => nameValidator
}
```

## Related

- [`NumberFieldValidator`](./number-field-validator)
- [`Validator`](./validator)
