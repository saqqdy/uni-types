# Immutable

将所有属性变为深层只读。

## 签名

```typescript
type Immutable<T> = T extends (...args: any[]) => any
  ? T
  : T extends Map<infer K, infer V>
    ? ReadonlyMap<Immutable<K>, Immutable<V>>
    : T extends Set<infer V>
      ? ReadonlySet<Immutable<V>>
      : T extends readonly (infer E)[]
        ? readonly Immutable<E>[]
        : T extends object
          ? { readonly [K in keyof T]: Immutable<T[K]> }
          : T
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 目标类型 |

## 描述

递归地将所有属性变为只读，包括数组元素和集合值。

## 示例

### 基本用法

```typescript
import type { Immutable } from 'uni-types'

interface Config {
  database: {
    host: string
    ports: number[]
  }
}

type Readonly = Immutable<Config>
// { readonly database: { readonly host: string; readonly ports: readonly number[] } }
```

### 防止修改

```typescript
interface State {
  user: {
    name: string
    preferences: {
      theme: string
    }
  }
}

function processState(state: Immutable<State>) {
  // state.user.name = 'new'  // 错误: 只读
  // state.user.preferences.theme = 'dark'  // 错误: 只读
}
```

## 相关

- [`Mutable`](./mutable) - 移除所有属性的只读
- [`DeepReadonly`](../deep/deep-readonly) - 使所有属性只读