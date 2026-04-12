# TupleLength

**自 1.0.0 起**

获取元组的长度。

## 签名

```typescript
type TupleLength<T extends readonly unknown[]> = T['length']
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 元组类型 |

## 示例

### 基本用法

```typescript
import type { TupleLength } from 'uni-types'

type Len3 = TupleLength<[1, 2, 3]> // 3
type Len0 = TupleLength<[]> // 0
type Len5 = TupleLength<['a', 'b', 'c', 'd', 'e']> // 5
```

### 数组

```typescript
type ArrayLen = TupleLength<string[]> // number
```

## 相关

- [`IsEmptyTuple`](./is-empty-tuple) - 检查元组是否为空
