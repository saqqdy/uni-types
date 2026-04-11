# Optional

Add undefined to a type.

## Signature

```typescript
type Optional<T> = T | undefined
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The base type |

## Description

Creates a type that can be `undefined`. Useful for representing optional values or values that may not be defined.

## Examples

### Basic Usage

```typescript
import type { Optional } from 'uni-types'

type Name = Optional<string> // string | undefined

function greet(name: Optional<string>) {
  return `Hello, ${name ?? 'stranger'}!`
}
```

### With Configuration

```typescript
interface Config {
  apiKey: string
  timeout: Optional<number>
  retries: Optional<number>
}

const config: Config = {
  apiKey: 'abc123',
  // timeout and retries can be omitted
}
```

## Related

- [`Nullable`](./nullable) - Add null to a type
- [`Maybe`](./maybe) - Add null/undefined to a type
- [`NonNullable`](./non-nullable) - Exclude null/undefined
