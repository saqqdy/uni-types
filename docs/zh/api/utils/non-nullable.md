# NonNullable

**自 1.0.0 起**

从类型中排除 `null` 和 `undefined`。

## 签名

```typescript
type NonNullable<T> = T & {}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要使其不可为 null 的类型 |

## 描述

从类型中移除 `null` 和 `undefined`。这与 TypeScript 内置的 `NonNullable` 类似，但实现方式不同以获得更广泛的兼容性。

## 示例

### 基本用法

```typescript
import type { NonNullable } from 'uni-types'

type Clean = NonNullable<string | null | undefined> // string
type Clean2 = NonNullable<number | null> // number
```

### 与对象类型一起使用

```typescript
interface User {
  name: string | null
  email: string | undefined
}

type CleanUser = NonNullable<User>
// User（null/undefined 仍保留在属性中，如需深度移除请使用 NoNullish）
```

## 相关

- [`NoNullish`](./no-nullish) - 从所有属性中移除 null/undefined
- [`Nullable`](./nullable) - 向类型添加 null
- [`Optional`](./optional) - 向类型添加 undefined
