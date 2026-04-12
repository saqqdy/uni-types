# Literal

**Since 1.0.0**

All literal types union.

## Signature

```typescript
type Literal = string | number | boolean | bigint | null | undefined
```

## Description

Represents a union of all possible literal types. Used to constrain generic parameters to literal types.

## Examples

### Basic Usage

```typescript
import type { Literal } from 'uni-types'

function setConfig<K extends string, V extends Literal>(key: K, value: V): Record<K, V> {
  return { [key]: value } as Record<K, V>
}

const config = setConfig('theme', 'dark')
// { theme: 'dark' }
```

### As Type Constraint

```typescript
type ConfigValue = Literal

interface Config {
  name: string
  value: ConfigValue
}
```

## Related

- [`LiteralString`](./literal-string) - String literal type
- [`LiteralNumber`](./literal-number) - Number literal type
- [`LiteralBoolean`](./literal-boolean) - Boolean literal type
