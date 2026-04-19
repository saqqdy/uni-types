# Validator

**自 1.5.0 起**

A comprehensive validator type for type-safe validation rules.

## 签名

```typescript
type Validator<T> = {
  validate: (value: unknown) => value is T
  message?: string | ((value: unknown) => string)
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | The type to validate against |

## 示例

### 基本用法

```typescript
import type { Validator } from 'uni-types'

const stringValidator: Validator<string> = {
  validate: (value): value is string => typeof value === 'string',
  message: 'Value must be a string'
}
```

### Custom Validator

```typescript
import type { Validator } from 'uni-types'

const emailValidator: Validator<string> = {
  validate: (value): value is string => 
    typeof value === 'string' && /^[^@]+@[^@]+$/.test(value),
  message: (value) => `${value} is not a valid email`
}
```

## 相关

- [`SchemaBuilder`](./schema-builder)
- [`ValidationRule`](./validation-rule)
