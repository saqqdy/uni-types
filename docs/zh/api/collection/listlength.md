# ListLength

**自 1.3.0 起**

获取类型层面列表（元组）的长度。返回元素数量作为数字字面量类型。

## 签名

```typescript
export type ListLength<T extends readonly unknown[]> = T['length']
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要获取长度的元组 |

## 示例

### 基本用法

```typescript
import type { ListLength } from 'uni-types'

type Result = ListLength<['a', 'b', 'c']>
// 3
```

### 空元组

```typescript
type Result = ListLength<[]>
// 0
```
