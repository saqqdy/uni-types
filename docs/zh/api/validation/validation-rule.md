# ValidationRule

**自 1.5.0 起**

Represents a single validation rule.

## 签名

```typescript
type ValidationRule<T> = {
  name: string
  test: (value: T) => boolean
  message: string | ((value: T) => string)
}
```

## 示例

### 基本用法

```typescript
import type { ValidationRule } from 'uni-types'

const minLengthRule: ValidationRule<string> = {
  name: 'minLength',
  test: (value) => value.length >= 3,
  message: 'Must be at least 3 characters'
}
```

## 相关

- [`Validator`](./validator)
- [`SchemaBuilder`](./schema-builder)
