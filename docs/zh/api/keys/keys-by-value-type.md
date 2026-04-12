# KeysByValueType

**自 1.1.0 起**

按值类型获取键。

## 签名

```typescript
type KeysByValueType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never
}[keyof T]
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 对象类型 |
| `V` | 要筛选的值类型 |

## 描述

从对象类型中提取值匹配特定类型的键。

## 示例

### 基本用法

```typescript
import type { KeysByValueType } from 'uni-types'

interface User {
  name: string
  age: number
  email: string
  active: boolean
}

type StringKeys = KeysByValueType<User, string>  // 'name' | 'email'
type NumberKeys = KeysByValueType<User, number>  // 'age'
type BooleanKeys = KeysByValueType<User, boolean> // 'active'
```

### 函数键

```typescript
interface Component {
  render: () => void
  mount: () => void
  state: object
  props: object
}

type Methods = KeysByValueType<Component, Function>
// 'render' | 'mount'
```

### 数组值

```typescript
interface Data {
  items: string[]
  count: number
  tags: string[]
}

type ArrayKeys = KeysByValueType<Data, string[]>
// 'items' | 'tags'
```

## 相关

- [`FilterKeys`](./filter-keys) - 按模式筛选键