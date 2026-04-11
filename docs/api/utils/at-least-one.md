# AtLeastOne

Require at least one property.

## Signature

```typescript
type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K> & Partial<Omit<T, K>>
}[keyof T]
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |

## Description

Creates a type that requires at least one property to be provided. All properties are optional, but at least one must be present.

## Examples

### Basic Usage

```typescript
import type { AtLeastOne } from 'uni-types'

interface Options {
  a: string
  b: number
  c: boolean
}

type AtLeastOneOption = AtLeastOne<Options>

// Valid: only one property
const opt1: AtLeastOneOption = { a: 'hello' }
const opt2: AtLeastOneOption = { b: 42 }
const opt3: AtLeastOneOption = { c: true }

// Valid: multiple properties
const opt4: AtLeastOneOption = { a: 'hello', b: 42 }

// Invalid: no properties
const invalid: AtLeastOneOption = {} // Error
```

### Update Fields

```typescript
interface User {
  name: string
  email: string
  age: number
}

function updateUser(id: number, updates: AtLeastOne<User>) {
  // Update at least one field
}

updateUser(1, { name: 'John' }) // Valid
updateUser(2, { email: 'john@example.com', age: 25 }) // Valid
updateUser(3, {}) // Error: must have at least one property
```

## Related

- [`Exclusive`](./exclusive) - Create mutually exclusive properties
- [`Merge`](./merge) - Merge two types
