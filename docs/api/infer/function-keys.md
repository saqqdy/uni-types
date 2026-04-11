# FunctionKeys

Get keys of function properties.

## Signature

```typescript
type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never
}[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Extracts the keys of all function properties from an object type.

## Examples

### Basic Usage

```typescript
import type { FunctionKeys } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
  onChange: (value: string) => void
}

type FnKeys = FunctionKeys<User>
// 'onClick' | 'onChange'
```

### No Functions

```typescript
interface Data {
  name: string
  email: string
}

type NoFns = FunctionKeys<Data> // never
```

## Related

- [`NonFunctionKeys`](./non-function-keys) - Get non-function property keys
- [`FunctionOnly`](./function-only) - Extract function properties
- [`DataOnly`](./data-only) - Extract non-function properties