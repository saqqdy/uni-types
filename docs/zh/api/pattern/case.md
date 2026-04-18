# Case

**Since v1.3.0**

类型级别模式匹配的 Case 辅助类型。在模式匹配表达式中定义一个 case，直接返回属性键本身。

## 签名

```typescript
export type Case<P extends PropertyKey> = P
```

## 参数

| 参数 | 说明 |
|------|------|
| `P` | 表示此 case 的属性键 |

## 示例

### 基本用法

```typescript
import type { Case } from 'uni-types'

type A = Case<'a'> // 'a'
type B = Case<'b'> // 'b'
```

### 结合模式匹配

```typescript
import type { Case, Match } from 'uni-types'

type Action = 'create' | 'update' | 'delete'
type Pattern = { create: Case<'create'>; update: Case<'update'>; delete: Case<'delete'> }
type Result = Match<Action, Pattern>
// 'create' | 'update' | 'delete'
```