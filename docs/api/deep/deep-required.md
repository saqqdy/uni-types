# DeepRequired

Make all nested properties required recursively.

## Signature

```typescript
type DeepRequired<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepRequired<K>, DeepRequired<V>>
    : T extends Set<infer V>
      ? Set<DeepRequired<V>>
      : T extends (infer E)[]
        ? DeepRequired<E>[]
        : T extends object
          ? { [P in keyof T]-?: DeepRequired<T[P]> }
          : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |

## Description

Unlike TypeScript's built-in `Required<T>`, `DeepRequired` recursively makes all nested properties required.

## Examples

### Basic Usage

```typescript
import type { DeepRequired } from 'uni-types'

interface Config {
  database?: {
    host?: string
    port?: number
  }
}

type RequiredConfig = DeepRequired<Config>
/*
{
  database: {
    host: string
    port: number
  }
}
*/
```

### With Arrays

```typescript
interface Data {
  items?: (string | undefined)[]
}

type RequiredData = DeepRequired<Data>
// items becomes string[] (undefined removed from elements)
```

## Related

- [`DeepPartial`](./deep-partial) - Make all nested properties optional
- [`DeepReadonly`](./deep-readonly) - Make all nested properties readonly
- [`DeepMutable`](./deep-mutable) - Make all nested properties mutable