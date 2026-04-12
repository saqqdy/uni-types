# Inc

**Since 1.1.0**

Increment a number type by 1.

## Signature

```typescript
type Inc<N extends number> = [...NumberToArray<N>, 0]['length']
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `N` | The number to increment |

## Examples

### Basic Usage

```typescript
import type { Inc } from 'uni-types'

type A = Inc<5>   // 6
type B = Inc<0>   // 1
type C = Inc<10>  // 11
```

## Related

- [`Dec`](./dec) - Decrement a number
- [`Add`](./add) - Add two numbers