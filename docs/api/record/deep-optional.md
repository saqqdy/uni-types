# DeepOptional

Make all properties optional recursively.

## Signature

```typescript
type DeepOptional<T> = T extends (...args: any[]) => any
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepOptional<K>, DeepOptional<V>>
    : T extends Set<infer V>
      ? Set<DeepOptional<V>>
      : T extends readonly (infer E)[]
        ? DeepOptional<E>[]
        : T extends object
          ? { [K in keyof T]?: DeepOptional<T[K]> }
          : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |

## Description

Recursively makes all properties in an object type optional.

## Examples

### Basic Usage

```typescript
import type { DeepOptional } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type Optional = DeepOptional<Config>
// { database?: { host?: string; port?: number } }
```

### For Partial Updates

```typescript
interface Settings {
  theme: string
  notifications: {
    email: boolean
    push: boolean
  }
}

type PartialSettings = DeepOptional<Settings>

function updateSettings(settings: PartialSettings) {
  // All properties are optional
}
```

## Related

- [`DeepNullable`](./deep-nullable) - Make all properties nullable
- [`DeepRequired`](./deep-required) - Make all properties required