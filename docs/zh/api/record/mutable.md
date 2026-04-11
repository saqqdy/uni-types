# Mutable

递归地移除所有属性的只读修饰。

## 签名

```typescript
type Mutable<T> = T extends (...args: any[]) => any
  ? T
  : T extends Map<infer K, infer V>
    ? Map<Mutable<K>, Mutable<V>>
    : T extends Set<infer V>
      ? Set<Mutable<V>>
      : T extends readonly (infer E)[]
        ? Mutable<E>[]
        : T extends object
          ? { -readonly [K in keyof T]: Mutable<T[K]> }
          : T
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 目标类型 |

## 描述

递归地移除所有属性的 `readonly` 修饰符。

## 示例

### 基本用法

```typescript
import type { Mutable } from 'uni-types'

interface Config {
  readonly database: {
    readonly host: string
    readonly ports: readonly number[]
  }
}

type Writable = Mutable<Config>
// { database: { host: string; ports: number[] } }
```

### 只读数组

```typescript
type ReadonlyArray = readonly string[]
type WritableArray = Mutable<ReadonlyArray>  // string[]
```

### 转换冻结对象

```typescript
interface FrozenConfig {
  readonly apiKey: string
  readonly endpoints: readonly {
    readonly url: string
    readonly method: string
  }[]
}

type EditableConfig = Mutable<FrozenConfig>
// 所有只读已移除，现在可以修改
```

## 相关

- [`Immutable`](./immutable) - 使所有属性只读
- [`DeepMutable`](../deep/deep-mutable) - 使所有属性可变