# LCM

**自 1.4.0 起**

最小公倍数。

## 签名

```typescript
type LCM<A extends number, B extends number> = ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `A` | 第一个数 |
| `B` | 第二个数 |

## 描述

使用最大公约数计算最小公倍数：LCM(a, b) = (a / GCD(a, b)) * b。

## 示例

### 基本用法

```typescript
import type { LCM } from 'uni-types'

type Result1 = LCM<4, 6>
// 12

type Result2 = LCM<3, 5>
// 15

type Result3 = LCM<12, 8>
// 24
```

## 相关

- [`GCD`](./gcd) - 最大公约数