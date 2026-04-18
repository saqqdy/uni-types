# AssertKeyof

**Since 1.3.0**

Assert that `K` is a key of `T` at compile time.

## Signature

```typescript
type AssertKeyof<T, K> = K extends keyof T ? K : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to check against |
| `K` | The key to verify |

## Examples

### Basic Usage

```typescript
import type { AssertKeyof } from 'uni-types'

type Result = AssertKeyof<{ name: string; age: number }, 'name'> // 'name'
type Failed = AssertKeyof<{ name: string }, 'email'> // never
```

### With Union Keys

```typescript
type Keys = 'name' | 'age'
type Result = AssertKeyof<{ name: string; age: number }, Keys> // 'name' | 'age'
```

### With Symbol Keys

```typescript
const sym = Symbol('id')
type Obj = { [sym]: number }
type Result = AssertKeyof<Obj, typeof sym> // typeof sym
```

## Related

- [`AssertExtends`](./assertextends) - Assert type extends another
- [`AssertHasProperty`](./asserthasproperty) - Ensure object has specific property
