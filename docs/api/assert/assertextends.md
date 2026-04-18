# AssertExtends

**Since 1.3.0**

Assert that type `T` extends `U` at compile time.

## Signature

```typescript
type AssertExtends<T, U> = T extends U ? T : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |
| `U` | The type that T must extend |

## Examples

### Basic Usage

```typescript
import type { AssertExtends } from 'uni-types'

type Result = AssertExtends<'hello', string> // 'hello'
type Failed = AssertExtends<number, string> // never
```

### With Union Types

```typescript
type Result = AssertExtends<'a' | 'b', string> // 'a' | 'b'
```

### With Object Types

```typescript
type Extended = AssertExtends<{ name: string; age: number }, { name: string }> // { name: string; age: number }
```

## Related

- [`AssertEqual`](./assertequal) - Assert types are equal
- [`AssertKeyof`](./assertkeyof) - Assert key exists on type
