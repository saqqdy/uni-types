# PrefixKeys

Prefix all keys with a string.

## Signature

```typescript
type PrefixKeys<T, P extends string> = {
  [K in keyof T as `${P}${Capitalize<K & string>}`]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `P` | The prefix to add |

## Description

Adds a prefix to all keys, capitalizing the first character of each original key.

## Examples

### Basic Usage

```typescript
import type { PrefixKeys } from 'uni-types'

type Data = { a: string; b: number }
type Prefixed = PrefixKeys<Data, 'data'>
// { dataA: string; dataB: number }
```

### Form Field Namespacing

```typescript
type Address = {
  street: string
  city: string
  zipCode: string
}

type ShippingPrefix = PrefixKeys<Address, 'shipping'>
// { shippingStreet: string; shippingCity: string; shippingZipCode: string }

type BillingPrefix = PrefixKeys<Address, 'billing'>
// { billingStreet: string; billingCity: string; billingZipCode: string }
```

## Related

- [`SuffixKeys`](./suffix-keys) - Add suffix to all keys
- [`RenameKeys`](./rename-keys) - Rename specific keys