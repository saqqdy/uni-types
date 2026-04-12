# LiteralBoolean

**Since 1.0.0**

Exact boolean literal.

## Signature

```typescript
type LiteralBoolean<T> = T extends boolean ? (boolean extends T ? never : T) : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Description

Ensures the type is a boolean literal (`true` or `false`), not the broad `boolean` type.

## Examples

### Basic Usage

```typescript
import type { LiteralBoolean } from 'uni-types'

type A = LiteralBoolean<true> // true
type B = LiteralBoolean<false> // false
type C = LiteralBoolean<boolean> // never
```

### Feature Flags

```typescript
interface FeatureFlag<T extends boolean> {
  name: string
  enabled: LiteralBoolean<T>
}

const darkMode: FeatureFlag<true> = {
  name: 'darkMode',
  enabled: true
}

const beta: FeatureFlag<false> = {
  name: 'betaFeatures',
  enabled: false
}
```

## Related

- [`Literal`](./literal) - Literal types
- [`LiteralString`](./literal-string) - String literal
- [`LiteralNumber`](./literal-number) - Number literal
