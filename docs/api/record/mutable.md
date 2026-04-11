# Mutable

Remove readonly from all properties recursively.

## Signature

```typescript
type Mutable<T> = T extends (...args: any[]) => any
  ? T
  : T extends Map<infer K, infer V>
    ? Map<Mutable<K>, Mutable<V>>
    : T extends Set<infer V>
      ? Set<Mutable<V>>
      : T extends readonly (infer E)[]
        ? Mutable<E>[]
        : T extends object
          ? { -readonly [K in keyof T]: Mutable<T[K]> }
          : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |

## Description

Recursively removes `readonly` modifiers from all properties.

## Examples

### Basic Usage

```typescript
import type { Mutable } from 'uni-types'

interface Config {
  readonly database: {
    readonly host: string
    readonly ports: readonly number[]
  }
}

type Writable = Mutable<Config>
// { database: { host: string; ports: number[] } }
```

### With Readonly Arrays

```typescript
type ReadonlyArray = readonly string[]
type WritableArray = Mutable<ReadonlyArray>  // string[]
```

### Converting Frozen Objects

```typescript
interface FrozenConfig {
  readonly apiKey: string
  readonly endpoints: readonly {
    readonly url: string
    readonly method: string
  }[]
}

type EditableConfig = Mutable<FrozenConfig>
// All readonly removed, can now modify
```

## Related

- [`Immutable`](./immutable) - Make all properties readonly
- [`DeepMutable`](../deep/deep-mutable) - Make all properties mutable