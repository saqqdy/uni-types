# Head

**Since 1.0.0**

Get the first element of a tuple.

## Signature

```typescript
type Head<T extends readonly unknown[]> = T extends readonly [infer H, ...unknown[]]
  ? H
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
import type { Head } from 'uni-types'

type First = Head<[1, 2, 3]> // 1
type FirstStr = Head<['a', 'b', 'c']> // 'a'
```

### Single Element

```typescript
type Single = Head<[string]> // string
```

### With Arrays

```typescript
type FromArray = Head<string[]> // string
type FromNumberArray = Head<number[]> // number
```

### Empty Tuple

```typescript
type Empty = Head<[]> // never
```

## Related

- [`Last`](./last) - Get last element
- [`Tail`](./tail) - Get all elements except first
- [`Init`](./init) - Get all elements except last