# DeepNullable

递归地将所有属性变为可空。

## 签名

```typescript
type DeepNullable<T> = T extends (...args: any[]) => any
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepNullable<K>, DeepNullable<V>>
    : T extends Set<infer V>
      ? Set<DeepNullable<V>>
      : T extends readonly (infer E)[]
        ? DeepNullable<E>[]
        : T extends object
          ? { [K in keyof T]: DeepNullable<T[K]> | null }
          : T | null
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 目标类型 |

## 描述

递归地将对象类型中的所有属性变为可空（添加 `| null`）。

## 示例

### 基本用法

```typescript
import type { DeepNullable } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type Nullable = DeepNullable<Config>
// { database: { host: string | null; port: number | null } | null }
```

### 嵌套对象

```typescript
interface User {
  profile: {
    name: string
    address: {
      city: string
      zip: string
    }
  }
}

type NullableUser = DeepNullable<User>
// 所有嵌套属性都可以为 null
```

## 相关

- [`DeepOptional`](./deep-optional) - 使所有属性可选
- [`DeepNonNullable`](./deep-non-nullable) - 移除所有属性的 null