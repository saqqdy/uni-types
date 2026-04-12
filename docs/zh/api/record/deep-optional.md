# DeepOptional

**自 1.1.0 起**

递归地将所有属性变为可选。

## 签名

```typescript
type DeepOptional<T> = T extends (...args: any[]) => any
  ? T
  : T extends Map<infer K, infer V>
    ? Map<DeepOptional<K>, DeepOptional<V>>
    : T extends Set<infer V>
      ? Set<DeepOptional<V>>
      : T extends readonly (infer E)[]
        ? DeepOptional<E>[]
        : T extends object
          ? { [K in keyof T]?: DeepOptional<T[K]> }
          : T
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 目标类型 |

## 描述

递归地将对象类型中的所有属性变为可选。

## 示例

### 基本用法

```typescript
import type { DeepOptional } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

type Optional = DeepOptional<Config>
// { database?: { host?: string; port?: number } }
```

### 部分更新

```typescript
interface Settings {
  theme: string
  notifications: {
    email: boolean
    push: boolean
  }
}

type PartialSettings = DeepOptional<Settings>

function updateSettings(settings: PartialSettings) {
  // 所有属性都是可选的
}
```

## 相关

- [`DeepNullable`](./deep-nullable) - 使所有属性可空
- [`DeepRequired`](./deep-required) - 使所有属性必选