# PrefixKeys

为所有键添加前缀。

## 签名

```typescript
type PrefixKeys<T, P extends string> = {
  [K in keyof T as `${P}${Capitalize<K & string>}`]: T[K]
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 对象类型 |
| `P` | 要添加的前缀 |

## 描述

为所有键添加前缀，并将每个原始键的首字母大写。

## 示例

### 基本用法

```typescript
import type { PrefixKeys } from 'uni-types'

type Data = { a: string; b: number }
type Prefixed = PrefixKeys<Data, 'data'>
// { dataA: string; dataB: number }
```

### 表单字段命名空间

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

## 相关

- [`SuffixKeys`](./suffix-keys) - 为所有键添加后缀
- [`RenameKeys`](./rename-keys) - 重命名特定键