# Or

布尔类型的逻辑或运算。

## 签名

```typescript
type Or<A extends boolean, B extends boolean> = A extends true ? true : B
```

## 参数

| 参数 | 描述 |
|------|------|
| `A` | 第一个布尔类型 |
| `B` | 第二个布尔类型 |

## 示例

### 基本用法

```typescript
import type { Or } from 'uni-types'

type A = Or<true, true>     // true
type B = Or<true, false>    // true
type C = Or<false, true>    // true
type D = Or<false, false>   // false
```

### 任一条件

```typescript
import type { Or, IsString, IsNumber } from 'uni-types'

type IsPrimitive<T> = Or<IsString<T>, IsNumber<T>>

type A = IsPrimitive<string>  // true
type B = IsPrimitive<number>  // true
type C = IsPrimitive<object>  // false
```

## 相关

- [`If`](./if) - 条件类型
- [`Not`](./not) - 逻辑非
- [`And`](./and) - 逻辑与