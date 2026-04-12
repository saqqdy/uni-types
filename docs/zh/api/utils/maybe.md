# Maybe

**自 1.0.0 起**

向类型添加 null/undefined。

## 签名

```typescript
type Maybe<T> = T | null | undefined
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 基础类型 |

## 描述

创建一个可以为 `null` 或 `undefined` 的类型。这是 `Nullable` 和 `Optional` 的组合。

## 示例

### 基本用法

```typescript
import type { Maybe } from 'uni-types'

type Name = Maybe<string> // string | null | undefined

function greet(name: Maybe<string>) {
  if (!name) {
    return 'Hello, stranger!'
  }
  return `Hello, ${name}!`
}
```

### 与 API 响应一起使用

```typescript
interface ApiResponse<T> {
  data: Maybe<T>
  error: Maybe<string>
  loading: boolean
}

type UserResponse = ApiResponse<{
  id: number
  name: string
}>
```

## 相关

- [`Nullable`](./nullable) - 向类型添加 null
- [`Optional`](./optional) - 向类型添加 undefined
- [`NonNullable`](./non-nullable) - 排除 null/undefined
