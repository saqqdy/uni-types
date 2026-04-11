# 条件类型

类型级别的条件逻辑，让类型定义更清晰。

## If

类型级别的 if-then-else。

```typescript
import type { If } from 'uni-types'

type A = If<true, string, number>    // string
type B = If<false, string, number>   // number
```

## Not

布尔类型的逻辑非运算。

```typescript
import type { Not } from 'uni-types'

type A = Not<true>   // false
type B = Not<false>  // true
```

## And

布尔类型的逻辑与运算。

```typescript
import type { And } from 'uni-types'

type A = And<true, true>   // true
type B = And<true, false>  // false
type C = And<false, true>  // false
```

## Or

布尔类型的逻辑或运算。

```typescript
import type { Or } from 'uni-types'

type A = Or<true, false>   // true
type B = Or<false, false>  // false
```

## Assert

类型约束断言 - 确保 T 继承自 U。

```typescript
import type { Assert } from 'uni-types'

type A = Assert<string | number, string>  // string
type B = Assert<string, number>           // never
```

## 组合条件

```typescript
import type { If, And, Not } from 'uni-types'

type IsValid<T> = If<And<Not<IsAny<T>>, Not<IsNever<T>>>, T, never>
```