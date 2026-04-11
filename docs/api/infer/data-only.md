# DataOnly

Extract only non-function properties from an object.

## Signature

```typescript
type DataOnly<T> = Pick<T, NonFunctionKeys<T>>
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Creates a new type containing only the non-function (data) properties of the original type.

## Examples

### Basic Usage

```typescript
import type { DataOnly } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type Data = DataOnly<User>
// { name: string; age: number }
```

### Only Functions

```typescript
interface Handlers {
  onClick: () => void
  onChange: () => void
}

type NoData = DataOnly<Handlers> // {}
```

## Related

- [`FunctionOnly`](./function-only) - Extract function properties
- [`NonFunctionKeys`](./non-function-keys) - Get non-function property keys