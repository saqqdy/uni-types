# Unbrand

**自 1.1.0 起**

从品牌类型中提取底层类型。

## 签名

```typescript
type Unbrand<T> = T extends Brand<infer U, infer _> ? U : T
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 要解除品牌的类型 |

## 描述

从 `Brand` 类型中提取底层类型。如果类型不是品牌类型，则返回原类型。

## 示例

### 基本用法

```typescript
import type { Brand, Unbrand } from 'uni-types'

type UserId = Brand<string, 'UserId'>

type Raw = Unbrand<UserId>  // string
```

### 非品牌类型

```typescript
type A = Unbrand<string>   // string
type B = Unbrand<number>   // number
type C = Unbrand<User>     // User（不变）
```

### 提取值

```typescript
type UserId = Brand<string, 'UserId'>

function getRawId(id: UserId): string {
  return id as Unbrand<UserId>
}
```

## 相关

- [`Brand`](./brand) - 创建品牌类型