# LiteralString

**Since 1.0.0**

Exact string literal.

## Signature

```typescript
type LiteralString<T> = T extends string ? (string extends T ? never : T) : never
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type to check |

## Description

Ensures the type is a string literal, not the broad `string` type.

## Examples

### Basic Usage

```typescript
import type { LiteralString } from 'uni-types'

type A = LiteralString<'hello'> // 'hello'
type B = LiteralString<'world'> // 'world'
type C = LiteralString<string> // never
```

### Function Constraint

```typescript
function createAction<T extends string>(
  type: LiteralString<T>
): { type: T } {
  return { type }
}

createAction('ADD_TODO') // { type: 'ADD_TODO' }
createAction('REMOVE_TODO') // { type: 'REMOVE_TODO' }
```

## Related

- [`Literal`](./literal) - Literal types
- [`LiteralNumber`](./literal-number) - Number literal
- [`LiteralBoolean`](./literal-boolean) - Boolean literal
