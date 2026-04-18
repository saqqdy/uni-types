# AssertEqual

**Since 1.3.0**

Assert that type `T` equals `Expected` at compile time.

## Signature

```typescript
type AssertEqual<T, Expected> = (() => T extends Expected
  ? Expected extends T
    ? 1
    : 2
  : 2) extends () => 1
  ? T
  : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |
| `Expected` | The expected type to match |

## Examples

### Basic Usage

```typescript
import type { AssertEqual } from 'uni-types'

type Result = AssertEqual<string, string> // string
type Failed = AssertEqual<string, number> // never
```

### With Object Types

```typescript
type Obj = { name: string }
type Result = AssertEqual<Obj, { name: string }> // { name: string }
```

### In Type Tests

```typescript
type Test = AssertEqual<'hello' | 'world', 'world' | 'hello'> // 'hello' | 'world'
```

## Related

- [`AssertExtends`](./assertextends) - Assert type extends another
- [`AssertKeyof`](./assertkeyof) - Assert key exists on type
