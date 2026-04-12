# LeafPaths

**自 1.1.0 起**

仅获取叶子节点（原始值）的路径。

## 签名

```typescript
type LeafPaths<T, D extends number = 10> = ...
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 对象类型 |
| `D` | 最大深度（默认: 10） |

## 描述

仅返回到原始值/叶子节点的路径，不包含中间对象路径。

## 示例

### 基本用法

```typescript
import type { LeafPaths } from 'uni-types'

interface Data {
  config: {
    host: string
    port: number
    nested: {
      value: boolean
    }
  }
}

type Paths = LeafPaths<Data>
// 'config.host' | 'config.port' | 'config.nested.value'
```

### 数组

```typescript
interface Users {
  users: { name: string; age: number }[]
}

type Paths = LeafPaths<Users>
// `users.${number}.name` | `users.${number}.age`
```

## 相关

- [`ArrayPaths`](./array-paths) - 获取包含数组的所有路径
- [`DeepOmit`](../deep/deep-omit) - 在路径处移除