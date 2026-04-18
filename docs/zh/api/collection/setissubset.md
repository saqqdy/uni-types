# SetIsSubset

**自 1.3.0 起**

检查一个类型集合是否是另一个的子集。如果 `A` 的所有元素也都在 `B` 中，则返回 `true`。

## 签名

```typescript
export type SetIsSubset<A, B> = A extends B ? true : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `A` | 可能的子集类型集合 |
| `B` | 可能的超集类型集合 |

## 示例

### 基本用法

```typescript
import type { SetIsSubset } from 'uni-types'

type Result = SetIsSubset<string, string | number | boolean>
// true
```

### 不是子集

```typescript
type Result = SetIsSubset<string | number, string | boolean>
// false
```
