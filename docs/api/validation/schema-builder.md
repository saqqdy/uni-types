# SchemaBuilder

**Since 1.5.0**

Builder type for constructing validation schemas.

## Signature

```typescript
type SchemaBuilder<T> = {
  string: () => StringFieldValidator
  number: () => NumberFieldValidator
  boolean: () => BooleanFieldValidator
  array: <E>(element: Validator<E>) => ArrayFieldValidator<E[]>
  object: <S extends Record<string, Validator<any>>>(schema: S) => ObjectFieldValidator<{ [K in keyof S]: S[K] extends Validator<infer V> ? V : never }>
  optional: <V>(validator: Validator<V>) => Validator<V | undefined>
  nullable: <V>(validator: Validator<V>) => Validator<V | null>
}
```

## Examples

### Basic Usage

```typescript
import type { SchemaBuilder, Validator } from 'uni-types'

const builder: SchemaBuilder<User> = {
  string: () => ({ validate: (v): v is string => typeof v === 'string' }),
  number: () => ({ validate: (v): v is number => typeof v === 'number' }),
  // ...
}
```

## Related

- [`Validator`](./validator)
- [`ValidationRule`](./validation-rule)
