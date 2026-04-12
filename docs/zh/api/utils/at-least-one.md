# AtLeastOne

**自 1.0.0 起**

要求至少一个属性。

## 签名

```typescript
type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K> & Partial<Omit<T, K>>
}[keyof T]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

创建一个类型，要求至少提供一个属性。所有属性都是可选的，但必须至少存在一个。

## 示例

### 基本用法

```typescript
import type { AtLeastOne } from 'uni-types'

interface Options {
  a: string
  b: number
  c: boolean
}

type AtLeastOneOption = AtLeastOne<Options>

// 有效：只有一个属性
const opt1: AtLeastOneOption = { a: 'hello' }
const opt2: AtLeastOneOption = { b: 42 }
const opt3: AtLeastOneOption = { c: true }

// 有效：多个属性
const opt4: AtLeastOneOption = { a: 'hello', b: 42 }

// 无效：没有任何属性
const invalid: AtLeastOneOption = {} // 错误
```

### 更新字段

```typescript
interface User {
  name: string
  email: string
  age: number
}

function updateUser(id: number, updates: AtLeastOne<User>) {
  // 至少更新一个字段
}

updateUser(1, { name: 'John' }) // 有效
updateUser(2, { email: 'john@example.com', age: 25 }) // 有效
updateUser(3, {}) // 错误：必须至少有一个属性
```

## 相关

- [`Exclusive`](./exclusive) - 创建互斥属性
- [`Merge`](./merge) - 合并两个类型
