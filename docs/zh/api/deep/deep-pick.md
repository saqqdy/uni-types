# DeepPick

仅保留指定路径处的属性。

## 签名

```typescript
type DeepPick<T, P extends string> = T extends object
  ? P extends ''
    ? T
    : DeepPickBySegments<T, PathSegments<T, P>>
  : T
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 目标对象类型 |
| `P` | 要保留的路径 |

## 描述

仅保留指定嵌套路径处的属性，移除其他所有属性。

## 示例

### 基本用法

```typescript
import type { DeepPick } from 'uni-types'

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

type JustName = DeepPick<User, 'profile.name'>
// { profile: { name: string } }
```

### 嵌套路径

```typescript
interface Config {
  app: {
    name: string
    version: string
  }
  database: {
    host: string
    port: number
  }
}

type AppInfo = DeepPick<Config, 'app.name'>
// { app: { name: string } }
```

## 相关

- [`DeepOmit`](./deep-omit) - 移除指定路径
- [`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys) - TypeScript 内置 Pick