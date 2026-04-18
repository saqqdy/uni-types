# FlattenType

**自 1.2.0 起**

展平类型 - 移除额外的交叉类型。

## 签名

```typescript
type FlattenType<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要展平的类型 |

## 描述

将交叉类型和额外的类型包装展平为单一的内聚对象类型。类似于 Simplify，但更专注于移除交叉类型。

## 示例

### 基本用法

```typescript
import type { FlattenType } from 'uni-types'

type Intersection = { a: string } & { b: number }
type Flattened = FlattenType<Intersection>
// { a: string; b: number }
```

### 与嵌套对象一起使用

```typescript
import type { FlattenType } from 'uni-types'

type Nested = { x: string } & { y: number } & { z: boolean }
type Result = FlattenType<Nested>
// { x: string; y: number; z: boolean }
```

## 相关

- [`Simplify`](./simplify) - 简化交叉类型
- [`DeepSimplify`](./deep-simplify) - 递归简化嵌套类型
