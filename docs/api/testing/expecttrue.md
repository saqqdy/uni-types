# ExpectTrue

**Since 1.4.0**

Expect type to be true.

## Signature

```typescript
type ExpectTrue<T extends true> = T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Type that should extend true |

## Description

Type assertion for testing that a type is true.

## Examples

### Basic Usage

```typescript
import type { ExpectTrue, IsEqual } from 'uni-types'

type Test1 = ExpectTrue<IsEqual<string, string>> // OK
type Test2 = ExpectTrue<IsEqual<string, number>> // Error
```

## Related

- [`ExpectFalse`](./expectfalse) - Expect type to be false
- [`ExpectEqual`](./expectequal) - Expect types to be equal