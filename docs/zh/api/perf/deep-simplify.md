# DeepSimplify

递归简化嵌套的交叉类型。

## 签名

```typescript
type DeepSimplify<T> = T extends object
  ? T extends (...args: any[]) => any
    ? T
    : T extends Array<infer E>
      ? DeepSimplify<E>[]
      : { [K in keyof T]: DeepSimplify<T[K]> }
  : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要深度简化的类型 |

## 描述

递归遍历嵌套对象和数组，简化结构中的所有交叉类型。

## 示例

### 基本用法

```typescript
import type { DeepSimplify } from 'uni-types'

type Nested = {
  a: { b: string } & { c: number }
}

type Simple = DeepSimplify<Nested>
// { a: { b: string; c: number } }
```

### 深度嵌套

```typescript
type Deep = {
  level1: {
    level2: {
      level3: { x: string } & { y: number }
    }
  }
}

type Result = DeepSimplify<Deep>
// 所有嵌套的交叉类型都被展平
```

### 数组处理

```typescript
type WithArray = {
  items: ({ id: string } & { name: string })[]
}

type Simplified = DeepSimplify<WithArray>
// { items: { id: string; name: string }[] }
```

## 相关

- [`Simplify`](./simplify) - 单层简化
- [`FlattenType`](./flatten-type) - 展平类型
