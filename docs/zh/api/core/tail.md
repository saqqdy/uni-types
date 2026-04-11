# Tail

获取除第一个元素外的所有元素。

## 签名

```typescript
type Tail<T extends readonly unknown[]> = T extends readonly [unknown, ...infer R]
  ? R
  : []
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 元组类型 |

## 示例

### 基本用法

```typescript
import type { Tail } from 'uni-types'

type Rest = Tail<[1, 2, 3]> // [2, 3]
type RestStr = Tail<['a', 'b', 'c']> // ['b', 'c']
```

### 单元素

```typescript
type Single = Tail<[string]> // []
```

### 空元组

```typescript
type Empty = Tail<[]> // []
```

## 相关

- [`Head`](./head) - 获取第一个元素
- [`Init`](./init) - 获取除最后一个元素外的所有元素
- [`Last`](./last) - 获取最后一个元素
