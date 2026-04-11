# Head

获取元组的第一个元素。

## 签名

```typescript
type Head<T extends readonly unknown[]> = T extends readonly [infer H, ...unknown[]]
  ? H
  : T extends readonly (infer E)[]
    ? E
    : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 元组类型 |

## 示例

### 基本用法

```typescript
import type { Head } from 'uni-types'

type First = Head<[1, 2, 3]> // 1
type FirstStr = Head<['a', 'b', 'c']> // 'a'
```

### 单元素

```typescript
type Single = Head<[string]> // string
```

### 数组

```typescript
type FromArray = Head<string[]> // string
type FromNumberArray = Head<number[]> // number
```

### 空元组

```typescript
type Empty = Head<[]> // never
```

## 相关

- [`Last`](./last) - 获取最后一个元素
- [`Tail`](./tail) - 获取除第一个元素外的所有元素
- [`Init`](./init) - 获取除最后一个元素外的所有元素
