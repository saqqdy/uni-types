# DeepMutable

**Since 1.0.0**

Make all nested properties mutable (remove readonly) recursively.

## Signature

```typescript
type DeepMutable<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepMutable<K>, DeepMutable<V>>
    : T extends Set<infer V>
      ? Set<DeepMutable<V>>
      : T extends readonly (infer E)[]
        ? DeepMutable<E>[]
        : T extends object
          ? { -readonly [P in keyof T]: DeepMutable<T[P]> }
          : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |

## Description

`DeepMutable` is the opposite of `DeepReadonly`. It removes all `readonly` modifiers from all nested properties.

## Examples

### Basic Usage

```typescript
import type { DeepMutable } from 'uni-types'

interface Config {
  readonly database: {
    readonly host: string
    readonly port: number
  }
}

type MutableConfig = DeepMutable<Config>
/*
{
  database: {
    host: string
    port: number
  }
}
*/
```

### With Readonly Arrays

```typescript
type ReadonlyArray = readonly string[]
type MutableArray = DeepMutable<ReadonlyArray> // string[]
```

### With DeepReadonly

```typescript
import type { DeepReadonly, DeepMutable } from 'uni-types'

interface Data {
  items: { name: string }[]
}

type Readonly = DeepReadonly<Data>
type BackToMutable = DeepMutable<Readonly> // Same as Data
```

## Related

- [`DeepReadonly`](./deep-readonly) - Make all nested properties readonly
- [`DeepPartial`](./deep-partial) - Make all nested properties optional
- [`DeepRequired`](./deep-required) - Make all nested properties required