# 品牌类型

创建名义类型以实现类型安全的标记。

## Brand

创建一个品牌类型，防止与其他类型意外混淆。

```typescript
import type { Brand } from 'uni-types'

type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>

const userId: UserId = 'user-123' as UserId
const orderId: OrderId = 'order-456' as OrderId

// 这些类型不会混淆 - 类型安全！
// const wrong: OrderId = userId  // 错误！
```

### 使用场景

- **ID 类型**: 防止不同实体 ID 混用
- **验证数据**: 标记已验证的数据
- **单位**: 区分不同单位类型

```typescript
type ValidatedEmail = Brand<string, 'ValidatedEmail'>
type Celsius = Brand<number, 'Celsius'>
type Fahrenheit = Brand<number, 'Fahrenheit'>
```

## Unbrand

从品牌类型中提取底层类型。

```typescript
import type { Unbrand } from 'uni-types'

type UserId = Brand<string, 'UserId'>
type RawId = Unbrand<UserId>  // string
```

## BrandedString & BrandedNumber

便捷类型，用于常见品牌模式。

```typescript
import type { BrandedString, BrandedNumber } from 'uni-types'

type Username = BrandedString<'Username'>
type Port = BrandedNumber<'Port'>
```