# DeepReadonly

**自 1.0.0 起**

递归地将所有嵌套属性设置为只读。

## 签名

```typescript
type DeepReadonly<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends Set<infer V>
      ? ReadonlySet<DeepReadonly<V>>
      : T extends (infer E)[]
        ? readonly DeepReadonly<E>[]
        : T extends object
          ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
          : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 目标类型 |

## 描述

与 TypeScript 内置的 `Readonly<T>` 不同，`DeepReadonly` 递归地将所有嵌套属性设置为只读。

## 示例

### 基本用法

```typescript
import type { DeepReadonly } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type ReadonlyConfig = DeepReadonly<Config>
/*
{
  readonly database: {
    readonly host: string
    readonly port: number
  }
}
*/
```

### 与数组一起使用

```typescript
interface Data {
  items: string[]
}

type ReadonlyData = DeepReadonly<Data>
// items 变为 readonly string[]
```

## 相关

- [`DeepMutable`](./deep-mutable) - 将所有嵌套属性设置为可变
- [`DeepPartial`](./deep-partial) - 将所有嵌套属性设置为可选
- [`DeepRequired`](./deep-required) - 将所有嵌套属性设置为必需
