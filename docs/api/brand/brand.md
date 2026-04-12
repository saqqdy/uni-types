# Brand

**Since 1.1.0**

Create a branded type for nominal typing.

## Signature

```typescript
type Brand<T, B extends string> = T & { __brand: B }
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The underlying type to brand |
| `B` | The brand identifier string |

## Description

Creates a unique type that cannot be accidentally mixed with other branded types. This enables nominal typing in TypeScript, which is structurally typed by default.

## Examples

### Basic Usage

```typescript
import type { Brand } from 'uni-types'

type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>

const userId: UserId = 'user-123' as UserId
const orderId: OrderId = 'order-456' as OrderId

// Error: Type 'UserId' is not assignable to type 'OrderId'
// const wrong: OrderId = userId
```

### Validated Data

```typescript
type ValidatedEmail = Brand<string, 'ValidatedEmail'>

function validateEmail(email: string): ValidatedEmail | null {
  if (email.includes('@')) {
    return email as ValidatedEmail
  }
  return null
}

// Only validated emails can be used
function sendEmail(email: ValidatedEmail) {
  // ...
}
```

### Units of Measurement

```typescript
type Celsius = Brand<number, 'Celsius'>
type Fahrenheit = Brand<number, 'Fahrenheit'>

function celsiusToFahrenheit(c: Celsius): Fahrenheit {
  return ((c * 9/5) + 32) as Fahrenheit
}

const temp: Celsius = 25 as Celsius
const fahrenheit = celsiusToFahrenheit(temp)  // 77
```

## Related

- [`Unbrand`](./unbrand) - Extract the underlying type
