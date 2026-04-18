# Default

**Since v1.3.0**

类型级别模式匹配的默认 case 辅助类型。定义一个备用情况，当没有其他 case 匹配时使用。

## 签名

```typescript
export type Default<R> = R
```

## 参数

| 参数 | 说明 |
|------|------|
| `R` | 默认情况的结果类型 |

## 示例

### 基本用法

```typescript
import type { Default } from 'uni-types'

type Fallback = Default<'unknown'> // 'unknown'
```

### 结合模式匹配

```typescript
import type { Default, Match } from 'uni-types'

type Input = 'a' | 'b' | 'c'
type Result = Match<Input, { a: 1; b: 2; _: Default<0> }>
// 1 | 2 | 0 (c 匹配默认值)
```