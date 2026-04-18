# IsPrime

**自 1.4.0 起**

判断是否为质数。

## 签名

```typescript
type IsPrime<N extends number> = N extends 0 | 1 ? false : N extends 2 ? true : ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `N` | 要检查的数 |

## 描述

判断一个数是否为质数。对较小的数使用查找表。

## 示例

### 基本用法

```typescript
import type { IsPrime } from 'uni-types'

type Check1 = IsPrime<2>
// true

type Check2 = IsPrime<17>
// true

type Check3 = IsPrime<4>
// false

type Check4 = IsPrime<1>
// false
```

## 相关

- [`GCD`](./gcd) - 最大公约数