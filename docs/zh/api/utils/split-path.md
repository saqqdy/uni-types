# SplitPath

将路径分割为数组。

## 签名

```typescript
type SplitPath<S extends string> = S extends `${infer Head}.${infer Tail}`
  ? [Head, ...SplitPath<Tail>]
  : [S]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 点分隔的路径字符串 |

## 描述

将点分隔的路径字符串转换为字符串元组类型。

## 示例

### 基本用法

```typescript
import type { SplitPath } from 'uni-types'

type Path1 = SplitPath<'user.name'> // ['user', 'name']
type Path2 = SplitPath<'database.config.host'> // ['database', 'config', 'host']
type Path3 = SplitPath<'single'> // ['single']
```

### 深层嵌套路径

```typescript
type Deep = SplitPath<'a.b.c.d.e.f'>
// ['a', 'b', 'c', 'd', 'e', 'f']
```

## 相关

- [`Paths`](./paths) - 获取所有可能的路径
- [`PathValue`](./path-value) - 获取路径处的值类型
