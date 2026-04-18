# IsCompatible

**Since 1.4.0**

Check type compatibility.

## Signature

```typescript
type IsCompatible<T, U> = T extends U ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | First type |
| `U` | Second type to check against |

## Description

Checks if type T is compatible with type U.

## Examples

### Basic Usage

```typescript
import type { IsCompatible } from 'uni-types'

type Check1 = IsCompatible<string, string | number>
// true

type Check2 = IsCompatible<string, number>
// false
```

## Related

- [`CompatibleWith`](./compatiblewith) - Check library compatibility