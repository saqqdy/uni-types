# Not

布尔类型的逻辑非运算。

## 签名

```typescript
type Not<B extends boolean> = B extends true ? false : true
```

## 参数

| 参数 | 描述 |
|------|------|
| `B` | 要取反的布尔类型 |

## 示例

### 基本用法

```typescript
import type { Not } from 'uni-types'

type A = Not<true>   // false
type B = Not<false>  // true
```

### 条件类型

```typescript
import type { Not, IsAny } from 'uni-types'

type IsDefined<T> = Not<IsAny<T>>

type A = IsDefined<string>  // true
type B = IsDefined<any>     // false
```

## 相关

- [`If`](./if) - 条件类型
- [`And`](./and) - 逻辑与
- [`Or`](./or) - 逻辑或