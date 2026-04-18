# SetIsEmpty

**Since 1.3.0**

Check if a type set is empty. Returns `true` if the set is `never`, otherwise `false`.

## Signature

```typescript
export type SetIsEmpty<S> = S extends never ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | The type set to check |

## Examples

### Basic Usage

```typescript
import type { SetIsEmpty } from 'uni-types'

type Result = SetIsEmpty<never>
// true
```

### Non-Empty Set

```typescript
type Result = SetIsEmpty<string | number>
// false
```
