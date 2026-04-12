# OptionalKeys

**自 1.0.0 起**

获取可选属性的键。

## 签名

```typescript
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

从对象类型中提取所有可选属性的键。

## 示例

### 基本用法

```typescript
import type { OptionalKeys } from 'uni-types'

interface User {
  name: string
  email: string
  age?: number
  phone?: string
}

type Optional = OptionalKeys<User>
// 'age' | 'phone'
```

### 全部必需

```typescript
interface Required {
  a: string
  b: number
}

type NoOptional = OptionalKeys<Required> // never
```

## 相关

- [`RequiredKeys`](./required-keys) - 获取必需属性的键
- [`WritableKeys`](./writable-keys) - 获取可写属性的键
- [`ReadonlyKeys`](./readonly-keys) - 获取只读属性的键
