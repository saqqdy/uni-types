# NoNullish

从所有属性中移除 null/undefined。

## 签名

```typescript
type NoNullish<T> = {
  [K in keyof T]: NonNullable<T[K]>
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要清理的对象类型 |

## 描述

深度移除对象所有属性中的 `null` 和 `undefined`。与 `NonNullable` 不同，这会递归处理所有属性。

## 示例

### 基本用法

```typescript
import type { NoNullish } from 'uni-types'

interface User {
  name: string | null
  email: string | undefined
  age: number | null | undefined
}

type CleanUser = NoNullish<User>
// { name: string; email: string; age: number }
```

### 嵌套对象

```typescript
interface Config {
  database: {
    host: string | null
    port: number | undefined
  } | null
}

type CleanConfig = NoNullish<Config>
// { database: { host: string; port: number } }
```

## 相关

- [`NonNullable`](./non-nullable) - 从类型中排除 null/undefined
- [`Nullable`](./nullable) - 向类型添加 null
- [`Optional`](./optional) - 向类型添加 undefined
