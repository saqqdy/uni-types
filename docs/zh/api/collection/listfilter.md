# ListFilter

**自 1.3.0 起**

基于谓词筛选类型层面列表（元组）的元素。返回仅包含匹配谓词元素的新元组。

## 签名

```typescript
export type ListFilter<T extends readonly unknown[], P> = T extends [infer First, ...infer Rest]
  ? First extends P
    ? [First, ...ListFilter<Rest, P>]
    : ListFilter<Rest, P>
  : []
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要筛选的元组 |
| `P` | 要匹配的谓词类型 |

## 示例

### 基本用法

```typescript
import type { ListFilter } from 'uni-types'

type Result = ListFilter<[1, 'a', 2, 'b', 3], number>
// [1, 2, 3]
```

### 筛选字符串

```typescript
type Result = ListFilter<[1, 'a', 2, 'b', 3], string>
// ['a', 'b']
```
