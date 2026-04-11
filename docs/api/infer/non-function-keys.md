# NonFunctionKeys

Get keys of non-function properties.

## Signature

```typescript
type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K
}[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Extracts the keys of all non-function properties from an object type.

## Examples

### Basic Usage

```typescript
import type { NonFunctionKeys } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type DataKeys = NonFunctionKeys<User>
// 'name' | 'age'
```

### Only Functions

```typescript
interface Handlers {
  onClick: () => void
  onChange: (v: string) => void
}

type NoData = NonFunctionKeys<Handlers> // never
```

## Related

- [`FunctionKeys`](./function-keys) - Get function property keys
- [`FunctionOnly`](./function-only) - Extract function properties
- [`DataOnly`](./data-only) - Extract non-function properties