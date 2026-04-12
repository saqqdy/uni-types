# Simplify

将交叉类型展平为单一对象类型。

## 签名

```typescript
type Simplify<T> = { [K in keyof T]: T[K] } & unknown
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要简化的类型 |

## 描述

将复杂的交叉类型转换为单个展平的对象类型，使类型更易阅读和使用。

## 示例

### 基本用法

```typescript
import type { Simplify } from 'uni-types'

type Complex = { a: string } & { b: number }
type Simple = Simplify<Complex>
// { a: string; b: number }
```

### 与合并工具一起使用

```typescript
import type { Merge, Simplify } from 'uni-types'

type Base = { id: string }
type Extended = { name: string; age: number }

type Result = Simplify<Base & Extended>
// { id: string; name: string; age: number }
```

### 嵌套交叉类型

```typescript
type A = { x: string }
type B = { y: number } & { z: boolean }

type Combined = Simplify<A & B>
// { x: string; y: number; z: boolean }
```

## 相关

- [`DeepSimplify`](./deep-simplify) - 递归简化嵌套类型
- [`MergeAll`](./merge-all) - 合并多个对象类型
