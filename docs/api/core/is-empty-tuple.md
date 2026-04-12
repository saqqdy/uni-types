# IsEmptyTuple

**Since 1.0.0**

Check if a tuple is empty.

## Signature

```typescript
type IsEmptyTuple<T extends readonly unknown[]> = T extends readonly []
  ? true
  : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The tuple type |

## Examples

### Basic Usage

```typescript
import type { IsEmptyTuple } from 'uni-types'

type Empty = IsEmptyTuple<[]> // true
type NotEmpty = IsEmptyTuple<[1]> // false
type NotEmpty2 = IsEmptyTuple<[string, number]> // false
```

### With Arrays

```typescript
type ArrayCheck = IsEmptyTuple<string[]> // false
```

## Related

- [`TupleLength`](./tuple-length) - Get tuple length