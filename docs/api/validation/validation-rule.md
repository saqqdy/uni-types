# ValidationRule

**Since 1.5.0**

Represents a single validation rule.

## Signature

```typescript
type ValidationRule<T> = {
  name: string
  test: (value: T) => boolean
  message: string | ((value: T) => string)
}
```

## Examples

### Basic Usage

```typescript
import type { ValidationRule } from 'uni-types'

const minLengthRule: ValidationRule<string> = {
  name: 'minLength',
  test: (value) => value.length >= 3,
  message: 'Must be at least 3 characters'
}
```

## Related

- [`Validator`](./validator)
- [`SchemaBuilder`](./schema-builder)
