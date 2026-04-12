# And

**自 1.1.0 起**

布尔类型的逻辑与运算。

## 签名

```typescript
type And<A extends boolean, B extends boolean> = A extends true ? B : false
```

## 参数

| 参数 | 描述 |
|------|------|
| `A` | 第一个布尔类型 |
| `B` | 第二个布尔类型 |

## 示例

### 基本用法

```typescript
import type { And } from 'uni-types'

type A = And<true, true>    // true
type B = And<true, false>   // false
type C = And<false, true>   // false
type D = And<false, false>  // false
```

### 多条件

```typescript
import type { And, IsAny, IsNever } from 'uni-types'

type IsValid<T> = And<Not<IsAny<T>>, Not<IsNever<T>>>

type A = IsValid<string>  // true
type B = IsValid<any>     // false
type C = IsValid<never>   // false
```

## 相关

- [`If`](./if) - 条件类型
- [`Not`](./not) - 逻辑非
- [`Or`](./or) - 逻辑或