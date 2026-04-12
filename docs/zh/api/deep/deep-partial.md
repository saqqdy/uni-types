# DeepPartial

**自 1.0.0 起**

递归地将所有嵌套属性设置为可选。

## 签名

```typescript
type DeepPartial<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepPartial<K>, DeepPartial<V>>
    : T extends Set<infer V>
      ? Set<DeepPartial<V>>
      : T extends (infer E)[]
        ? DeepPartial<E>[]
        : T extends object
          ? { [P in keyof T]?: DeepPartial<T[P]> }
          : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 目标类型 |

## 描述

与 TypeScript 内置的 `Partial<T>` 不同，`DeepPartial` 递归地将所有嵌套属性设置为可选。它还：

- 保留 `Date`、`Function`、`RegExp` 等内置类型
- 正确处理 `Map` 和 `Set`
- 正确处理数组（数组仍保持为数组）

## 示例

### 基本用法

```typescript
import type { DeepPartial } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
    credentials: {
      username: string
      password: string
    }
  }
}

type PartialConfig = DeepPartial<Config>
/*
{
  database?: {
    host?: string
    port?: number
    credentials?: {
      username?: string
      password?: string
    }
  }
}
*/
```

### 与数组一起使用

```typescript
interface Data {
  items: string[]
  users: { name: string }[]
}

type PartialData = DeepPartial<Data>
// 数组被正确处理 - 它们仍然是数组
```

### 与内置类型一起使用

```typescript
interface AppState {
  createdAt: Date
  handler: () => void
  cache: Map<string, number>
}

type PartialState = DeepPartial<AppState>
// Date、Function、Map 类型被保留（只是变为可选）
```

## 对比

```typescript
// 内置 Partial - 仅顶层
type Shallow = Partial<{ a: { b: string } }>
// { a?: { b: string } }

// DeepPartial - 所有层级
type Deep = DeepPartial<{ a: { b: string } }>
// { a?: { b?: string } }
```

## 相关

- [`DeepRequired`](./deep-required) - 将所有嵌套属性设置为必需
- [`DeepReadonly`](./deep-readonly) - 将所有嵌套属性设置为只读
- [`DeepMutable`](./deep-mutable) - 将所有嵌套属性设置为可变
