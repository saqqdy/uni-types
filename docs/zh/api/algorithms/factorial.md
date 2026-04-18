# Factorial

**自 1.4.0 起**

阶乘计算。

## 签名

```typescript
type Factorial<N extends number> = N extends 0 ? 1 : Multiply<N, Factorial<Decrement<N>>>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `N` | 要计算阶乘的数 |

## 描述

计算 N! = N * (N-1) * ... * 1。

## 示例

### 基本用法

```typescript
import type { Factorial } from 'uni-types'

type F0 = Factorial<0>
// 1

type F1 = Factorial<1>
// 1

type F5 = Factorial<5>
// 120

type F6 = Factorial<6>
// 720
```

## 相关

- [`Fibonacci`](./fibonacci) - 斐波那契数列