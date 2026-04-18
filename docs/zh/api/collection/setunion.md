# SetUnion

**自 1.3.0 起**

计算两个类型集合的并集。返回包含两个集合所有元素的新集合。

## 签名

```typescript
export type SetUnion<A, B> = A | B
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `A` | 第一个类型集合 |
| `B` | 第二个类型集合 |

## 示例

### 基本用法

```typescript
import type { SetUnion } from 'uni-types'

type SetA = string | number
type SetB = boolean | null
type Result = SetUnion<SetA, SetB>
// string | number | boolean | null
```

### 有重叠的集合

```typescript
type SetA = string | number
type SetB = number | boolean
type Result = SetUnion<SetA, SetB>
// string | number | boolean
```
