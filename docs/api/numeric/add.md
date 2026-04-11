# Add

Add two number types.

## Signature

```typescript
type Add<A extends number, B extends number> = [
  ...NumberToArray<A>,
  ...NumberToArray<B>,
]['length']
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `A` | First number |
| `B` | Second number |

## Examples

### Basic Usage

```typescript
import type { Add } from 'uni-types'

type A = Add<3, 4>   // 7
type B = Add<0, 5>   // 5
type C = Add<10, 20> // 30
```

### With Other Numeric Types

```typescript
type Sum = Add<Inc<5>, Dec<10>>  // 15
```

## Related

- [`Subtract`](./subtract) - Subtract two numbers
- [`Inc`](./inc) - Increment by 1
- [`Dec`](./dec) - Decrement by 1