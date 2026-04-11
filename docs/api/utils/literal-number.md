# LiteralNumber

Exact number literal.

## Signature

```typescript
type LiteralNumber<T> = T extends number ? (number extends T ? never : T) : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Description

Ensures the type is a number literal, not the broad `number` type.

## Examples

### Basic Usage

```typescript
import type { LiteralNumber } from 'uni-types'

type A = LiteralNumber<42> // 42
type B = LiteralNumber<100> // 100
type C = LiteralNumber<number> // never
```

### HTTP Status Code Constraint

```typescript
type HttpStatusCode = 200 | 201 | 400 | 404 | 500

function setStatus<T extends number>(
  code: LiteralNumber<T>
): { status: T } {
  return { status: code }
}

setStatus(200) // { status: 200 }
setStatus(404) // { status: 404 }
```

## Related

- [`Literal`](./literal) - Literal types
- [`LiteralString`](./literal-string) - String literal
- [`LiteralBoolean`](./literal-boolean) - Boolean literal
