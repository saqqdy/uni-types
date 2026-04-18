# SetDifference

**自 1.3.0 起**

计算两个类型集合的差集。返回包含第一个集合中存在但第二个集合中不存在的元素的新集合。

## 签名

```typescript
export type SetDifference<A, B> = Exclude<A, B>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `A` | 源类型集合 |
| `B` | 要减去的类型集合 |

## 示例

### 基本用法

```typescript
import type { SetDifference } from 'uni-types'

type SetA = string | number | boolean
type SetB = number | null
type Result = SetDifference<SetA, SetB>
// string | boolean
```

### 完全移除

```typescript
type SetA = string | number
type SetB = string | number | boolean
type Result = SetDifference<SetA, SetB>
// never
```
