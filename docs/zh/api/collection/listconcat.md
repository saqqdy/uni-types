# ListConcat

**自 1.3.0 起**

连接两个类型层面的列表（元组）。返回包含两个列表所有元素的新元组。

## 签名

```typescript
export type ListConcat<A extends readonly unknown[], B extends readonly unknown[]> = [...A, ...B]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `A` | 第一个元组 |
| `B` | 第二个元组 |

## 示例

### 基本用法

```typescript
import type { ListConcat } from 'uni-types'

type Result = ListConcat<[1, 2], [3, 4]>
// [1, 2, 3, 4]
```

### 连接空元组

```typescript
type Result = ListConcat<['a', 'b'], []>
// ['a', 'b']
```
