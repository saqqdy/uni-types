# PickRequired

**自 1.0.0 起**

将指定属性设置为必选。

## 签名

```typescript
type PickRequired<T, K extends keyof T> = {
  [P in K]-?: T[P]
} & Omit<T, K>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 目标类型 |
| `K` | 要设置为必选的键（必须是 T 的键） |

## 示例

### 基本用法

```typescript
import type { PickRequired } from 'uni-types'

interface User {
  name?: string
  age?: number
  email: string
}

type RequiredName = PickRequired<User, 'name'>
// { name: string; age?: number; email: string }
```

### 多个属性

```typescript
type RequiredMultiple = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string }
```

### 嵌套对象

```typescript
interface Config {
  host?: string
  port?: number
  ssl?: boolean
}

type RequiredHost = PickRequired<Config, 'host'>
// { host: string; port?: number; ssl?: boolean }
```

## 相关

- [`PickPartial`](./pick-partial) - 将指定属性设置为可选
- [`OmitRequired`](./omit-required) - 将除指定属性外的所有属性设置为必选
- [`OmitPartial`](./omit-partial) - 将除指定属性外的所有属性设置为可选
