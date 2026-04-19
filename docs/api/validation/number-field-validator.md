# NumberFieldValidator

**Since 1.5.0**

Validator for number fields with chainable validation rules.

## Signature

```typescript
type NumberFieldValidator = Validator<number> & {
  min: (value: number) => NumberFieldValidator
  max: (value: number) => NumberFieldValidator
  integer: () => NumberFieldValidator
  positive: () => NumberFieldValidator
  negative: () => NumberFieldValidator
}
```

## Examples

### Basic Usage

```typescript
import type { NumberFieldValidator } from 'uni-types'

const ageValidator: NumberFieldValidator = {
  validate: (value): value is number => typeof value === 'number' && value >= 0 && value <= 150,
  min: (v) => ageValidator,
  max: (v) => ageValidator,
  integer: () => ageValidator,
  positive: () => ageValidator,
  negative: () => ageValidator
}
```

## Related

- [`StringFieldValidator`](./string-field-validator)
- [`Validator`](./validator)
