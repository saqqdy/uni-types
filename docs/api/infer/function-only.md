# FunctionOnly

**Since 1.0.0**

Extract only function properties from an object.

## Signature

```typescript
type FunctionOnly<T> = Pick<T, FunctionKeys<T>>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Creates a new type containing only the function properties of the original type.

## Examples

### Basic Usage

```typescript
import type { FunctionOnly } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
  onChange: (value: string) => void
}

type Fns = FunctionOnly<User>
// { onClick: () => void; onChange: (value: string) => void }
```

### No Functions

```typescript
interface Data {
  name: string
  email: string
}

type NoFns = FunctionOnly<Data> // {}
```

## Related

- [`DataOnly`](./data-only) - Extract non-function properties
- [`FunctionKeys`](./function-keys) - Get function property keys