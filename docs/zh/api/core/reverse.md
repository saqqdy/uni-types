# Reverse

**自 1.0.0 起**

反转元组。

## 签名

```typescript
type Reverse<T extends readonly unknown[], Acc extends readonly unknown[] = []> = 
  T extends readonly [infer H, ...infer R]
    ? Reverse<R, [H, ...Acc]>
    : Acc
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 元组类型 |

## 示例

### 基本用法

```typescript
import type { Reverse } from 'uni-types'

type Reversed = Reverse<[1, 2, 3]> // [3, 2, 1]
type ReversedStr = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
```

### 空元组

```typescript
type Empty = Reverse<[]> // []
```

### 单元素

```typescript
type Single = Reverse<[string]> // [string]
```

## 相关

- [`Head`](./head) - 获取第一个元素
- [`Last`](./last) - 获取最后一个元素
- [`Tail`](./tail) - 获取除第一个元素外的所有元素
