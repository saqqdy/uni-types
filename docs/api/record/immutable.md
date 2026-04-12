# Immutable

**Since 1.1.0**

Make all properties deeply readonly.

## Signature

```typescript
type Immutable<T> = T extends (...args: any[]) => any
  ? T
  : T extends Map<infer K, infer V>
    ? ReadonlyMap<Immutable<K>, Immutable<V>>
    : T extends Set<infer V>
      ? ReadonlySet<Immutable<V>>
      : T extends readonly (infer E)[]
        ? readonly Immutable<E>[]
        : T extends object
          ? { readonly [K in keyof T]: Immutable<T[K]> }
          : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |

## Description

Recursively makes all properties readonly, including array elements and collection values.

## Examples

### Basic Usage

```typescript
import type { Immutable } from 'uni-types'

interface Config {
  database: {
    host: string
    ports: number[]
  }
}

type Readonly = Immutable<Config>
// { readonly database: { readonly host: string; readonly ports: readonly number[] } }
```

### Preventing Mutations

```typescript
interface State {
  user: {
    name: string
    preferences: {
      theme: string
    }
  }
}

function processState(state: Immutable<State>) {
  // state.user.name = 'new'  // Error: readonly
  // state.user.preferences.theme = 'dark'  // Error: readonly
}
```

## Related

- [`Mutable`](./mutable) - Remove readonly from all properties
- [`DeepReadonly`](../deep/deep-readonly) - Make all properties readonly