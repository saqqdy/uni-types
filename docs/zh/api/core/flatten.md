# Flatten

展平嵌套元组。

## 签名

```typescript
type Flatten<T extends readonly unknown[], Acc extends readonly unknown[] = []> = 
  T extends readonly [infer H, ...infer R]
    ? H extends readonly unknown[]
      ? Flatten<[...H, ...R], Acc>
      : Flatten<R, [...Acc, H]>
    : Acc
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 嵌套元组类型 |

## 示例

### 基本用法

```typescript
import type { Flatten } from 'uni-types'

type Flat = Flatten<[1, [2, [3]]]> // [1, 2, 3]
type Nested = Flatten<[[1, 2], [3, 4]]> // [1, 2, 3, 4]
type Deep = Flatten<[1, [2, [3, [4, [5]]]]]> // [1, 2, 3, 4, 5]
```

### 已展平

```typescript
type FlatAlready = Flatten<[1, 2, 3]> // [1, 2, 3]
```

### 空元组

```typescript
type Empty = Flatten<[]> // []
```

## 相关

- [`Reverse`](./reverse) - 反转元组
- [`Tail`](./tail) - 获取除第一个元素外的所有元素
