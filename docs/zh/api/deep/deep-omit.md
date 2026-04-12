# DeepOmit

**自 1.1.0 起**

移除嵌套路径处的属性。

## 签名

```typescript
type DeepOmit<T, P extends string> = T extends object
  ? P extends ''
    ? T
    : DeepOmitBySegments<T, PathSegments<T, P>>
  : T
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 目标对象类型 |
| `P` | 要移除的路径 |

## 描述

从对象类型中移除指定嵌套路径处的属性。

## 示例

### 基本用法

```typescript
import type { DeepOmit } from 'uni-types'

interface User {
  profile: {
    name: string
    email: string
    settings: {
      theme: string
      lang: string
    }
  }
}

type WithoutSettings = DeepOmit<User, 'profile.settings'>
// { profile: { name: string; email: string } }
```

### 单个属性

```typescript
interface Config {
  database: {
    host: string
    port: number
    password: string
  }
}

type SafeConfig = DeepOmit<Config, 'database.password'>
// { database: { host: string; port: number } }
```

## 相关

- [`DeepPick`](./deep-pick) - 仅保留指定路径
- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) - TypeScript 内置 Omit