# UnionToTuple

**自 1.0.0 起**

将联合类型转换为元组。

## 签名

```typescript
type UnionToTuple<T> = ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 联合类型 |

## 描述

将联合类型转换为元组类型。注意：元组中的顺序是实现细节，不应依赖。

## 示例

### 基本用法

```typescript
import type { UnionToTuple } from 'uni-types'

type Status = 'pending' | 'active' | 'inactive'
type StatusTuple = UnionToTuple<Status>
// ['pending', 'active', 'inactive'] 或其他排列
```

### 与原始类型一起使用

```typescript
type Primitive = string | number | boolean
type PrimitiveTuple = UnionToTuple<Primitive>
// [string, number, boolean] 或其他排列
```

## 相关

- [`UnionToIntersection`](./union-to-intersection) - 将联合类型转换为交叉类型
