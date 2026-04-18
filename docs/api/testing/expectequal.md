# ExpectEqual

**Since 1.4.0**

Expect types to be equal.

## Signature

```typescript
type ExpectEqual<T, Expected> = (() => T extends Expected ? Expected extends T ? true : false : false) extends () => true ? T : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Actual type |
| `Expected` | Expected type |

## Description

Type assertion for testing type equality.

## Examples

### Basic Usage

```typescript
import type { ExpectEqual } from 'uni-types'

type Test1 = ExpectEqual<'hello', 'hello'> // OK
type Test2 = ExpectEqual<'hello', 'world'> // Error
```

## Related

- [`ExpectTrue`](./expecttrue) - Expect type to be true
- [`ExpectFalse`](./expectfalse) - Expect type to be false