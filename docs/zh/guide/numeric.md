# 数字类型

编译时数字类型算术运算。

## Inc & Dec

数字类型的自增和自减。

```typescript
import type { Inc, Dec } from 'uni-types'

type A = Inc<5>   // 6
type B = Inc<0>   // 1

type C = Dec<5>   // 4
type D = Dec<1>   // 0
type E = Dec<0>   // 0（下限）
```

## Add & Subtract

类型级别的加法和减法。

```typescript
import type { Add, Subtract } from 'uni-types'

type A = Add<3, 4>      // 7
type B = Add<0, 5>      // 5

type C = Subtract<10, 3>  // 7
type D = Subtract<5, 10>  // 0（下限）
```

## Range

创建数字范围的联合类型（包含边界）。

```typescript
import type { Range } from 'uni-types'

type OneToFive = Range<1, 5>  // 1 | 2 | 3 | 4 | 5
type ZeroToThree = Range<0, 3> // 0 | 1 | 2 | 3
```

::: warning
由于 TypeScript 递归限制，仅支持小范围。
:::

## 比较运算

### GreaterThan & LessThan

```typescript
import type { GreaterThan, LessThan } from 'uni-types'

type A = GreaterThan<5, 3>  // true
type B = GreaterThan<3, 5>  // false

type C = LessThan<3, 5>     // true
type D = LessThan<5, 3>     // false
```

### Max & Min

```typescript
import type { Max, Min } from 'uni-types'

type A = Max<3, 5>  // 5
type B = Max<5, 3>  // 5

type C = Min<3, 5>  // 3
type D = Min<5, 3>  // 3
```