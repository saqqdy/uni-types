# HasProperty

**Since v1.3.0**

Check if an object type has a specific property. Returns `true` if the property key exists on the object type, otherwise returns `false`.

## Signature

```typescript
export type HasProperty<T, K> = K extends keyof T ? true : false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to check |
| `K` | The property key to look for |

## Examples

### Basic Usage

```typescript
import type { HasProperty } from 'uni-types'

type User = { name: string; age: number }
type HasName = HasProperty<User, 'name'> // true
type HasEmail = HasProperty<User, 'email'> // false
```

### With Symbol Keys

```typescript
import type { HasProperty } from 'uni-types'

const sym = Symbol('id')
type Obj = { [sym]: number; name: string }
type HasSym = HasProperty<Obj, typeof sym> // true
type HasAge = HasProperty<Obj, 'age'> // false
```
