# Exclusive

**自 1.0.0 起**

创建互斥属性。

## 签名

```typescript
type Exclusive<T, K extends keyof T> = Omit<T, K> & {
  [P in K]: Pick<T, P> & Partial<Record<Exclude<K, P>, never>>
}[K]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 基础对象类型 |
| `K` | 要互斥的键 |

## 描述

创建一个类型，其中指定的属性是互斥的 - 只能选择其中一个。当选择一个属性时，其他互斥属性必须为 `never`。

## 示例

### 基本用法

```typescript
import type { Exclusive } from 'uni-types'

type Button = Exclusive<{
  onClick: () => void
  href: string
  to: string
  disabled: boolean
}, 'onClick' | 'href' | 'to'>

// 有效：只有 onClick
const clickButton: Button = {
  onClick: () => console.log('clicked'),
  disabled: false
}

// 有效：只有 href
const linkButton: Button = {
  href: 'https://example.com',
  disabled: false
}

// 无效：不能同时有 onClick 和 href
const invalid: Button = {
  onClick: () => {},
  href: 'https://example.com', // 错误：类型为 never
  disabled: false
}
```

### 表单输入类型

```typescript
type Input = Exclusive<{
  type: 'text' | 'email' | 'password'
  options: string[]
  min: number
  max: number
}, 'type' | 'options'>
```

## 相关

- [`AtLeastOne`](./at-least-one) - 要求至少一个属性
- [`Merge`](./merge) - 合并两个类型
