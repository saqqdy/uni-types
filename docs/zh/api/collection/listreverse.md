# ListReverse

**自 1.3.0 起**

反转类型层面的列表（元组）。返回元素顺序反转后的新元组。

## 签名

```typescript
export type ListReverse<T extends readonly unknown[]> = T extends [infer First, ...infer Rest]
  ? [...ListReverse<Rest>, First]
  : []
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要反转的元组 |

## 示例

### 基本用法

```typescript
import type { ListReverse } from 'uni-types'

type Result = ListReverse<[1, 2, 3]>
// [3, 2, 1]
```

### 字符串元组

```typescript
type Result = ListReverse<['a', 'b', 'c']>
// ['c', 'b', 'a']
```
