# PathValue

获取指定路径处的值类型。

## 签名

```typescript
type PathValue<T, P extends string> = ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |
| `P` | 点分隔的路径字符串 |

## 描述

提取嵌套对象中特定路径处的值的类型。

## 示例

### 基本用法

```typescript
import type { PathValue } from 'uni-types'

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

type Host = PathValue<Config, 'database.host'> // string
type Port = PathValue<Config, 'database.port'> // number
type Creds = PathValue<Config, 'database.credentials'>
// { username: string; password: string }
```

### 无效路径

```typescript
type Invalid = PathValue<Config, 'database.invalid'> // never
```

## 相关

- [`Paths`](./paths) - 获取所有可能的路径
- [`SplitPath`](./split-path) - 将路径分割为数组
