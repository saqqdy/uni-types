# KeysByValueType

Get keys by value type.

## Signature

```typescript
type KeysByValueType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never
}[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `V` | The value type to filter by |

## Description

Extracts keys from an object type where the value matches a specific type.

## Examples

### Basic Usage

```typescript
import type { KeysByValueType } from 'uni-types'

interface User {
  name: string
  age: number
  email: string
  active: boolean
}

type StringKeys = KeysByValueType<User, string>  // 'name' | 'email'
type NumberKeys = KeysByValueType<User, number>  // 'age'
type BooleanKeys = KeysByValueType<User, boolean> // 'active'
```

### Function Keys

```typescript
interface Component {
  render: () => void
  mount: () => void
  state: object
  props: object
}

type Methods = KeysByValueType<Component, Function>
// 'render' | 'mount'
```

### Array Values

```typescript
interface Data {
  items: string[]
  count: number
  tags: string[]
}

type ArrayKeys = KeysByValueType<Data, string[]>
// 'items' | 'tags'
```

## Related

- [`FilterKeys`](./filter-keys) - Filter keys by pattern