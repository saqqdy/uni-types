# Brand Types

Create nominal types for type-safe branding.

## Brand

Create a branded type that cannot be accidentally mixed with other types.

```typescript
import type { Brand } from 'uni-types'

type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>

const userId: UserId = 'user-123' as UserId
const orderId: OrderId = 'order-456' as OrderId

// These won't mix - type safety!
// const wrong: OrderId = userId  // Error!
```

### Use Cases

- **IDs**: Prevent mixing different entity IDs
- **Validated Data**: Mark data that has been validated
- **Units**: Distinguish different unit types

```typescript
type ValidatedEmail = Brand<string, 'ValidatedEmail'>
type Celsius = Brand<number, 'Celsius'>
type Fahrenheit = Brand<number, 'Fahrenheit'>
```

## Unbrand

Extract the underlying type from a branded type.

```typescript
import type { Unbrand } from 'uni-types'

type UserId = Brand<string, 'UserId'>
type RawId = Unbrand<UserId>  // string
```

## BrandedString & BrandedNumber

Convenience types for common branded patterns.

```typescript
import type { BrandedString, BrandedNumber } from 'uni-types'

type Username = BrandedString<'Username'>
type Port = BrandedNumber<'Port'>
```
