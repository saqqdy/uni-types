# ValueOf

Get the union of object value types.

## Signature

```typescript
type ValueOf<T> = T[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Extracts all value types from an object type as a union.

## Examples

### Basic Usage

```typescript
import type { ValueOf } from 'uni-types'

type Values = ValueOf<{ a: string; b: number; c: boolean }>
// string | number | boolean
```

### With Enums

```typescript
enum Status {
  Pending = 'pending',
  Active = 'active',
  Done = 'done'
}

type StatusValue = ValueOf<typeof Status>
// 'pending' | 'active' | 'done'
```

### Const Object

```typescript
const config = {
  host: 'localhost',
  port: 3000,
  ssl: true
} as const

type ConfigValue = ValueOf<typeof config>
// 'localhost' | 3000 | true
```

## Related

- [`ArrayElement`](./array-element) - Get array element type
- [`FunctionKeys`](./function-keys) - Get function property keys