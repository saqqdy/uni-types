# SchemaBuilder

**自 1.5.0 起**

Builder type for constructing validation schemas.

## 签名

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

## 示例

### 基本用法

```typescript
import type { SchemaBuilder, Validator } from 'uni-types'

const builder: SchemaBuilder<User> = {
  string: () => ({ validate: (v): v is string => typeof v === 'string' }),
  number: () => ({ validate: (v): v is number => typeof v === 'number' }),
  // ...
}
```

## 相关

- [`Validator`](./validator)
- [`ValidationRule`](./validation-rule)
