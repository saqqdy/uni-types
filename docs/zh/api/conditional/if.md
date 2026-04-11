# If

类型级别的 if-then-else。

## 签名

```typescript
type If<C extends boolean, T, F> = C extends true ? T : F
```

## 参数

| 参数 | 描述 |
|------|------|
| `C` | 条件（布尔类型） |
| `T` | 条件为真时返回的类型 |
| `F` | 条件为假时返回的类型 |

## 示例

### 基本用法

```typescript
import type { If } from 'uni-types'

type A = If<true, string, number>    // string
type B = If<false, string, number>   // number
```

### 与类型谓词

```typescript
import type { If, IsAny } from 'uni-types'

type SafeResult<T> = If<IsAny<T>, never, T>

type A = SafeResult<string>  // string
type B = SafeResult<any>     // never
```

### 条件逻辑

```typescript
import type { If, And, Or } from 'uni-types'

type Result<A extends boolean, B extends boolean> = If<
  Or<A, B>,
  '至少有一个为真',
  '两个都为假'
>
```

## 相关

- [`Not`](./not) - 逻辑非
- [`And`](./and) - 逻辑与
- [`Or`](./or) - 逻辑或