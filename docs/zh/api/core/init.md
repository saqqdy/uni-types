# Init

获取除最后一个元素外的所有元素。

## 签名

```typescript
type Init<T extends readonly unknown[]> = T extends readonly [...infer I, unknown]
  ? I
  : []
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 元组类型 |

## 示例

### 基本用法

```typescript
import type { Init } from 'uni-types'

type AllButLast = Init<[1, 2, 3]> // [1, 2]
type AllButLastStr = Init<['a', 'b', 'c']> // ['a', 'b']
```

### 单元素

```typescript
type Single = Init<[string]> // []
```

### 空元组

```typescript
type Empty = Init<[]> // []
```

## 相关

- [`Tail`](./tail) - 获取除第一个元素外的所有元素
- [`Last`](./last) - 获取最后一个元素
- [`Head`](./head) - 获取第一个元素
