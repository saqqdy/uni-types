# Fibonacci

**自 1.4.0 起**

斐波那契数列第 N 项。

## 签名

```typescript
type Fibonacci<N extends number> = N extends 0 | 1 ? N : FibonacciImpl<N, 0, 1, 0>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `N` | 斐波那契数列的位置 |

## 描述

计算第 N 个斐波那契数。F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)。

## 示例

### 基本用法

```typescript
import type { Fibonacci } from 'uni-types'

type F0 = Fibonacci<0>
// 0

type F1 = Fibonacci<1>
// 1

type F10 = Fibonacci<10>
// 55

type F15 = Fibonacci<15>
// 610
```

## 相关

- [`Factorial`](./factorial) - 阶乘计算