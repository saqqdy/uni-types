# Tail

**Since 1.0.0**

Get all elements except the first.

## Signature

```typescript
type Tail<T extends readonly unknown[]> = T extends readonly [unknown, ...infer R]
  ? R
  : []
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type |

## Examples

### Basic Usage

```typescript
import type { Tail } from 'uni-types'

type Rest = Tail<[1, 2, 3]> // [2, 3]
type RestStr = Tail<['a', 'b', 'c']> // ['b', 'c']
```

### Single Element

```typescript
type Single = Tail<[string]> // []
```

### Empty Tuple

```typescript
type Empty = Tail<[]> // []
```

## Related

- [`Head`](./head) - Get first element
- [`Init`](./init) - Get all elements except last
- [`Last`](./last) - Get last element