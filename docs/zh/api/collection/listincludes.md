# ListIncludes

**自 1.3.0 起**

检查类型层面列表（元组）是否包含指定元素。如果找到元素则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type ListIncludes<T extends readonly unknown[], U> = T extends [infer First, ...infer Rest]
  ? First extends U
    ? true
    : ListIncludes<Rest, U>
  : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要搜索的元组 |
| `U` | 要检查的元素类型 |

## 示例

### 基本用法

```typescript
import type { ListIncludes } from 'uni-types'

type Result = ListIncludes<[1, 2, 3], 2>
// true
```

### 元素未找到

```typescript
type Result = ListIncludes<[1, 2, 3], 4>
// false
```
