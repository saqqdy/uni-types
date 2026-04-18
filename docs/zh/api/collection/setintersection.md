# SetIntersection

**自 1.3.0 起**

计算两个类型集合的交集。返回仅包含两个集合共有元素的新集合。

## 签名

```typescript
export type SetIntersection<A, B> = A & B
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `A` | 第一个类型集合 |
| `B` | 第二个类型集合 |

## 示例

### 基本用法

```typescript
import type { SetIntersection } from 'uni-types'

type SetA = string | number
type SetB = number | boolean
type Result = SetIntersection<SetA, SetB>
// number
```

### 无重叠

```typescript
type SetA = string
type SetB = number
type Result = SetIntersection<SetA, SetB>
// never
```
