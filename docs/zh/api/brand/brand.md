# Brand

为名义类型创建品牌类型。

## 签名

```typescript
type Brand<T, B extends string> = T & { __brand: B }
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 要品牌的底层类型 |
| `B` | 品牌标识字符串 |

## 描述

创建一个独特的类型，防止与其他品牌类型意外混淆。这使 TypeScript 能够实现名义类型，而 TypeScript 默认是结构类型。

## 示例

### 基本用法

```typescript
import type { Brand } from 'uni-types'

type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>

const userId: UserId = 'user-123' as UserId
const orderId: OrderId = 'order-456' as OrderId

// 错误: 类型 'UserId' 不能赋值给类型 'OrderId'
// const wrong: OrderId = userId
```

### 验证数据

```typescript
type ValidatedEmail = Brand<string, 'ValidatedEmail'>

function validateEmail(email: string): ValidatedEmail | null {
  if (email.includes('@')) {
    return email as ValidatedEmail
  }
  return null
}

// 只有验证过的邮件才能使用
function sendEmail(email: ValidatedEmail) {
  // ...
}
```

### 测量单位

```typescript
type Celsius = Brand<number, 'Celsius'>
type Fahrenheit = Brand<number, 'Fahrenheit'>

function celsiusToFahrenheit(c: Celsius): Fahrenheit {
  return ((c * 9/5) + 32) as Fahrenheit
}

const temp: Celsius = 25 as Celsius
const fahrenheit = celsiusToFahrenheit(temp)  // 77
```

## 相关

- [`Unbrand`](./unbrand) - 提取底层类型