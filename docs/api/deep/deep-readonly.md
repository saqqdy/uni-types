# DeepReadonly

Make all nested properties readonly recursively.

## Signature

```typescript
type DeepReadonly<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends Set<infer V>
      ? ReadonlySet<DeepReadonly<V>>
      : T extends (infer E)[]
        ? readonly DeepReadonly<E>[]
        : T extends object
          ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
          : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |

## Description

Unlike TypeScript's built-in `Readonly<T>`, `DeepReadonly` recursively makes all nested properties readonly.

## Examples

### Basic Usage

```typescript
import type { DeepReadonly } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type ReadonlyConfig = DeepReadonly<Config>
/*
{
  readonly database: {
    readonly host: string
    readonly port: number
  }
}
*/
```

### With Arrays

```typescript
interface Data {
  items: string[]
}

type ReadonlyData = DeepReadonly<Data>
// items becomes readonly string[]
```

## Related

- [`DeepMutable`](./deep-mutable) - Make all nested properties mutable
- [`DeepPartial`](./deep-partial) - Make all nested properties optional
- [`DeepRequired`](./deep-required) - Make all nested properties required