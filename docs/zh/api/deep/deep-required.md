# DeepRequired

递归地将所有嵌套属性设置为必需。

## 签名

```typescript
type DeepRequired<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepRequired<K>, DeepRequired<V>>
    : T extends Set<infer V>
      ? Set<DeepRequired<V>>
      : T extends (infer E)[]
        ? DeepRequired<E>[]
        : T extends object
          ? { [P in keyof T]-?: DeepRequired<T[P]> }
          : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 目标类型 |

## 描述

与 TypeScript 内置的 `Required<T>` 不同，`DeepRequired` 递归地将所有嵌套属性设置为必需。

## 示例

### 基本用法

```typescript
import type { DeepRequired } from 'uni-types'

interface Config {
  database?: {
    host?: string
    port?: number
  }
}

type RequiredConfig = DeepRequired<Config>
/*
{
  database: {
    host: string
    port: number
  }
}
*/
```

### 与数组一起使用

```typescript
interface Data {
  items?: (string | undefined)[]
}

type RequiredData = DeepRequired<Data>
// items 变为 string[]（undefined 从元素中移除）
```

## 相关

- [`DeepPartial`](./deep-partial) - 将所有嵌套属性设置为可选
- [`DeepReadonly`](./deep-readonly) - 将所有嵌套属性设置为只读
- [`DeepMutable`](./deep-mutable) - 将所有嵌套属性设置为可变
