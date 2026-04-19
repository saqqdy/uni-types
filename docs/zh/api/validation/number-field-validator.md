# NumberFieldValidator

**自 1.5.0 起**

Validator for number fields with chainable validation rules.

## 签名

```typescript
type NumberFieldValidator = Validator<number> & {
  min: (value: number) => NumberFieldValidator
  max: (value: number) => NumberFieldValidator
  integer: () => NumberFieldValidator
  positive: () => NumberFieldValidator
  negative: () => NumberFieldValidator
}
```

## 示例

### 基本用法

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

## 相关

- [`StringFieldValidator`](./string-field-validator)
- [`Validator`](./validator)
