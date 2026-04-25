# 类型级高级数学

类型级别的高级数学工具。

## 概述

`math-advanced` 模块提供类型级别的数学操作，包括基本算术、三角函数、数论、统计、位运算等。

## 基本数学

### 算术操作

```ts
import type { Add, Subtract, Multiply, Divide, Modulo } from 'uni-types'

type Sum = Add<5, 3> // number
type Diff = Subtract<10, 4> // number
type Product = Multiply<6, 7> // number
```

### Abs / Neg / Inc / Dec

```ts
import type { Abs, Neg, Inc, Dec } from 'uni-types'

type Absolute = Abs<-5> // number
type Incremented = Inc<5> // number
```

## 高级数学

### Power / Sqrt / Log

```ts
import type { Power, Sqrt, Log, Exp } from 'uni-types'

type Squared = Power<5, 2> // number
type Root = Sqrt<25> // number
```

## 三角函数

```ts
import type { Sin, Cos, Tan, PI, E } from 'uni-types'

type Sine = Sin<0> // number
type Pi = PI // 3.141592653589793
```

## 比较

### 数值比较

```ts
import type { GreaterThan, LessThan, Max, Min, Clamp } from 'uni-types'

type GT = GreaterThan<5, 3> // boolean
type Maximum = Max<5, 3> // number
type Clamped = Clamp<10, 0, 5> // number
```

## 数论

```ts
import type { IsPrime, GCD, LCM, Fibonacci, Factorial } from 'uni-types'

type Prime = IsPrime<7> // boolean
type Fib = Fibonacci<10> // number
type Fact = Factorial<5> // number
```

## 统计

```ts
import type { Mean, Median, Sum, StdDev } from 'uni-types'

type Average = Mean<[1, 2, 3, 4, 5]> // number
type Total = Sum<[1, 2, 3, 4, 5]> // number
```

## 位运算

```ts
import type { BitAnd, BitOr, BitXor, LeftShift } from 'uni-types'

type And = BitAnd<5, 3> // number
type Shifted = LeftShift<1, 2> // number
```

## 数值工具

```ts
import type { IsEven, IsOdd, IsPositive, IsInteger } from 'uni-types'

type Even = IsEven<4> // boolean
type Integer = IsInteger<5> // boolean
```

## API 参考

| 类型 | 描述 |
|------|------|
| `Add<A, B>` | 加法 |
| `Subtract<A, B>` | 减法 |
| `Multiply<A, B>` |乘法 |
| `Power<A, B>` | 幂运算 |
| `Sqrt<N>` | 平方根 |
| `Sin<N>`, `Cos<N>` | 三角函数 |
| `PI`, `E` | 数学常量 |
| `Max<A, B>`, `Min<A, B>` | 最大/最小值 |
| `IsPrime<N>` | 质数检查 |
| `Fibonacci<N>` | 斐波那契数 |
| `Mean<T>` | 平均值 |
| `IsEven<N>` | 奇偶检查 |