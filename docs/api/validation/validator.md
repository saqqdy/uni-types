# Validator

**Since 1.5.0**

A comprehensive validator type for type-safe validation rules.

## Signature

```typescript
type Validator<T> = {
  validate: (value: unknown) => value is T
  message?: string | ((value: unknown) => string)
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to validate against |

## Examples

### Basic Usage

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

## Related

- [`SchemaBuilder`](./schema-builder)
- [`ValidationRule`](./validation-rule)
