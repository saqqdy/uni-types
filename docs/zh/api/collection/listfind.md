# ListFind

**自 1.3.0 起**

在类型层面列表（元组）中查找第一个匹配谓词的元素。返回匹配的元素，未找到则返回 `never`。

## 签名

```typescript
export type ListFind<T extends readonly unknown[], P> = T extends [infer First, ...infer Rest]
  ? First extends P
    ? First
    : ListFind<Rest, P>
  : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要搜索的元组 |
| `P` | 要匹配的谓词类型 |

## 示例

### 基本用法

```typescript
import type { ListFind } from 'uni-types'

type Result = ListFind<['a', 1, 'b', 2], number>
// 1
```

### 未找到

```typescript
type Result = ListFind<['a', 'b', 'c'], number>
// never
```
