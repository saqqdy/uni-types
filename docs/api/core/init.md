# Init

Get all elements except the last.

## Signature

```typescript
type Init<T extends readonly unknown[]> = T extends readonly [...infer I, unknown]
  ? I
  : []
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type |

## Examples

### Basic Usage

```typescript
import type { Init } from 'uni-types'

type AllButLast = Init<[1, 2, 3]> // [1, 2]
type AllButLastStr = Init<['a', 'b', 'c']> // ['a', 'b']
```

### Single Element

```typescript
type Single = Init<[string]> // []
```

### Empty Tuple

```typescript
type Empty = Init<[]> // []
```

## Related

- [`Tail`](./tail) - Get all elements except first
- [`Last`](./last) - Get last element
- [`Head`](./head) - Get first element