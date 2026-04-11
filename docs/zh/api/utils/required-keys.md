# RequiredKeys

获取必需属性的键。

## 签名

```typescript
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

从对象类型中提取所有必需（非可选）属性的键。

## 示例

### 基本用法

```typescript
import type { RequiredKeys } from 'uni-types'

interface User {
  name: string
  email: string
  age?: number
  phone?: string
}

type Required = RequiredKeys<User>
// 'name' | 'email'
```

### 全部可选

```typescript
interface Optional {
  a?: string
  b?: number
}

type NoRequired = RequiredKeys<Optional> // never
```

## 相关

- [`OptionalKeys`](./optional-keys) - 获取可选属性的键
- [`WritableKeys`](./writable-keys) - 获取可写属性的键
- [`ReadonlyKeys`](./readonly-keys) - 获取只读属性的键
