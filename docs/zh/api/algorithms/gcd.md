# GCD

**自 1.4.0 起**

最大公约数。

## 签名

```typescript
type GCD<A extends number, B extends number> = B extends 0 ? A : GCD<B, Mod<A, B>>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `A` | 第一个数 |
| `B` | 第二个数 |

## 描述

使用欧几里得算法计算最大公约数。

## 示例

### 基本用法

```typescript
import type { GCD } from 'uni-types'

type Result1 = GCD<12, 8>
// 4

type Result2 = GCD<100, 25>
// 25

type Result3 = GCD<17, 13>
// 1
```

## 相关

- [`LCM`](./lcm) - 最小公倍数