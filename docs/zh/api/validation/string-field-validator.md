# StringFieldValidator

**自 1.5.0 起**

Validator for string fields with chainable validation rules.

## 签名

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

## 示例

### 基本用法

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

## 相关

- [`NumberFieldValidator`](./number-field-validator)
- [`Validator`](./validator)
