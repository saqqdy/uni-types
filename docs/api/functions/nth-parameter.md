# NthParameter

Get the Nth parameter type (0-indexed).

## Signature

```typescript
type NthParameter<T, N extends number> = T extends (...args: infer P) => any ? P[N] : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The function type |
| `N` | The parameter index (0-indexed) |

## Examples

### Basic Usage

```typescript
import type { NthParameter } from 'uni-types'

type Fn = (a: string, b: number, c: boolean) => void

type First = NthParameter<Fn, 0>   // string
type Second = NthParameter<Fn, 1>  // number
type Third = NthParameter<Fn, 2>   // boolean
```

### Extract Specific Parameters

```typescript
type FetchFn = (url: string, options: RequestInit, callback: () => void) => void

type Url = NthParameter<FetchFn, 0>      // string
type Options = NthParameter<FetchFn, 1>  // RequestInit
type Callback = NthParameter<FetchFn, 2> // () => void
```

## Related

- [`Parameters`](./parameters) - Get all parameters as tuple