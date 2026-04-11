# Last

Get the last element of a tuple.

## Signature

```typescript
type Last<T extends readonly unknown[]> = T extends readonly [...unknown[], infer L]
  ? L
  : T extends readonly (infer E)[]
    ? E
    : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type |

## Examples

### Basic Usage

```typescript
import type { Last } from 'uni-types'

type LastElement = Last<[1, 2, 3]> // 3
type LastStr = Last<['a', 'b', 'c']> // 'c'
```

### Single Element

```typescript
type Single = Last<[string]> // string
```

### With Arrays

```typescript
type FromArray = Last<string[]> // string
type FromNumberArray = Last<number[]> // number
```

## Related

- [`Head`](./head) - Get first element
- [`Init`](./init) - Get all elements except last
- [`Tail`](./tail) - Get all elements except first