# ArrayPaths

**自 1.1.0 起**

获取包含数组索引的所有路径。

## 签名

```typescript
type ArrayPaths<T, D extends number = 10> = ...
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 对象类型 |
| `D` | 最大深度（默认: 10） |

## 描述

生成所有可能的属性路径，包括使用 `${number}` 的数组索引路径。

## 示例

### 基本用法

```typescript
import type { ArrayPaths } from 'uni-types'

interface Users {
  users: { name: string; age: number }[]
}

type Paths = ArrayPaths<Users>
// 'users' | `users.${number}` | `users.${number}.name` | `users.${number}.age`
```

### 嵌套数组

```typescript
interface Matrix {
  grid: number[][]
}

type Paths = ArrayPaths<Matrix>
// 'grid' | `grid.${number}` | `grid.${number}.${number}`
```

## 相关

- [`LeafPaths`](./leaf-paths) - 仅获取叶子节点路径
- [`ValidPath`](./valid-path) - 检查路径是否存在