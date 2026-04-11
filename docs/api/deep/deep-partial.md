# DeepPartial

Make all nested properties optional recursively.

## Signature

```typescript
type DeepPartial<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepPartial<K>, DeepPartial<V>>
    : T extends Set<infer V>
      ? Set<DeepPartial<V>>
      : T extends (infer E)[]
        ? DeepPartial<E>[]
        : T extends object
          ? { [P in keyof T]?: DeepPartial<T[P]> }
          : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The target type |

## Description

Unlike TypeScript's built-in `Partial<T>`, `DeepPartial` recursively makes all nested properties optional. It also:

- Preserves built-in types like `Date`, `Function`, `RegExp`
- Handles `Map` and `Set` correctly
- Handles arrays correctly (arrays remain arrays)

## Examples

### Basic Usage

```typescript
import type { DeepPartial } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
    credentials: {
      username: string
      password: string
    }
  }
}

type PartialConfig = DeepPartial<Config>
/*
{
  database?: {
    host?: string
    port?: number
    credentials?: {
      username?: string
      password?: string
    }
  }
}
*/
```

### With Arrays

```typescript
interface Data {
  items: string[]
  users: { name: string }[]
}

type PartialData = DeepPartial<Data>
// Arrays are handled correctly - they remain arrays
```

### With Built-in Types

```typescript
interface AppState {
  createdAt: Date
  handler: () => void
  cache: Map<string, number>
}

type PartialState = DeepPartial<AppState>
// Date, Function, Map types are preserved (just made optional)
```

## Comparison

```typescript
// Built-in Partial - only top level
type Shallow = Partial<{ a: { b: string } }>
// { a?: { b: string } }

// DeepPartial - all levels
type Deep = DeepPartial<{ a: { b: string } }>
// { a?: { b?: string } }
```

## Related

- [`DeepRequired`](./deep-required) - Make all nested properties required
- [`DeepReadonly`](./deep-readonly) - Make all nested properties readonly
- [`DeepMutable`](./deep-mutable) - Make all nested properties mutable