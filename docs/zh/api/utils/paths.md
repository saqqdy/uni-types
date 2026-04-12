# Paths

**自 1.0.0 起**

获取嵌套属性的所有可能路径。

## 签名

```typescript
type Paths<T, D extends number = 10> = ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |
| `D` | 最大深度（默认值：10） |

## 描述

生成嵌套属性的所有可能点分隔路径的联合类型。

## 示例

### 基本用法

```typescript
import type { Paths } from 'uni-types'

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

type AllPaths = Paths<Config>
// 'database' | 'database.host' | 'database.port' | 'database.credentials' | 'database.credentials.username' | 'database.credentials.password'
```

### 与数组一起使用

```typescript
interface Data {
  items: { id: number; name: string }[]
}

type ItemPaths = Paths<Data>
// 'items' | 'items.0' | 'items.1' | ...
```

## 相关

- [`PathValue`](./path-value) - 获取路径处的值类型
- [`SplitPath`](./split-path) - 将路径分割为数组
