# Type-Level Advanced Math

Advanced type-level mathematics utilities.

## Overview

The `math-advanced` module provides type-level mathematical operations, including basic arithmetic, trigonometry, number theory, statistics, bitwise operations, and more.

## Basic Math

### Arithmetic Operations

```ts
import type { Add, Subtract, Multiply, Divide, Modulo } from 'uni-types'

type Sum = Add<5, 3> // number
type Diff = Subtract<10, 4> // number
type Product = Multiply<6, 7> // number
type Quotient = Divide<20, 4> // number
type Remainder = Modulo<10, 3> // number
```

### Abs / Neg / Inc / Dec

```ts
import type { Abs, Neg, Inc, Dec } from 'uni-types'

type Absolute = Abs<-5> // number
type Negative = Neg<5> // number
type Incremented = Inc<5> // number
type Decremented = Dec<5> // number
```

## Advanced Math

### Power / Sqrt / Log

```ts
import type { Power, Sqrt, Cbrt, NthRoot, Log, Log10, Log2, Exp } from 'uni-types'

type Squared = Power<5, 2> // number
type Root = Sqrt<25> // number
type NaturalLog = Log<10> // number
type Exponential = Exp<1> // number
```

### Rounding

```ts
import type { Floor, Ceil, Round, Trunc, Sign } from 'uni-types'

type Floored = Floor<3.7> // number
type Ceiled = Ceil<3.2> // number
type Rounded = Round<3.5> // number
type SignValue = Sign<-5> // -1 | 0 | 1
```

## Trigonometry

### Trig Functions

```ts
import type { Sin, Cos, Tan, Asin, Acos, Atan, Atan2 } from 'uni-types'
import type { Sinh, Cosh, Tanh } from 'uni-types'

type Sine = Sin<0> // number
type Cosine = Cos<0> // number
type Tangent = Tan<0> // number
type HyperbolicSine = Sinh<1> // number
```

### Constants

```ts
import type { PI, E, LN2, LN10, SQRT2, SQRT1_2 } from 'uni-types'

type Pi = PI // 3.141592653589793
type Euler = E // 2.718281828459045
```

## Comparison

### Numeric Comparisons

```ts
import type {
  GreaterThan, LessThan,
  GreaterThanOrEqual, LessThanOrEqual,
  NumericEqual, NumericNotEqual
} from 'uni-types'

type GT = GreaterThan<5, 3> // boolean
type LT = LessThan<3, 5> // boolean
type GTE = GreaterThanOrEqual<5, 5> // boolean
type EQ = NumericEqual<5, 5> // boolean
```

### Min / Max / Clamp

```ts
import type { Max, Min, Clamp, InRange } from 'uni-types'

type Maximum = Max<5, 3> // number
type Minimum = Min<5, 3> // number
type Clamped = Clamp<10, 0, 5> // number (clamped to 0-5)
type InRangeResult = InRange<3, 0, 10> // boolean
```

## Number Theory

### Prime / Factors / GCD / LCM

```ts
import type {
  IsPrime, Factors, PrimeFactors, Divisors,
  GCD, LCM, Totient, IsCoprime
} from 'uni-types'

type Prime = IsPrime<7> // boolean
type Divisors = Factors<12> // number[]
type GreatestCommonDivisor = GCD<12, 8> // number
type LeastCommonMultiple = LCM<4, 6> // number
```

### Fibonacci / Factorial

```ts
import type { Fibonacci, Factorial, Permutation, Combination } from 'uni-types'

type Fib = Fibonacci<10> // number
type Fact = Factorial<5> // number
type Perm = Permutation<5, 3> // number
type Comb = Combination<5, 3> // number
```

## Statistics

### Statistical Functions

```ts
import type {
  Mean, Median, Mode, Variance, StdDev,
  Range, Sum, Product, Percentile, Quartiles
} from 'uni-types'

type Average = Mean<[1, 2, 3, 4, 5]> // number
type Middle = Median<[1, 2, 3, 4, 5]> // number
type Total = Sum<[1, 2, 3, 4, 5]> // number
type Std = StdDev<[1, 2, 3, 4, 5]> // number
```

### Correlation / Covariance

```ts
import type { Correlation, Covariance } from 'uni-types'

type Corr = Correlation<[1, 2, 3], [4, 5, 6]> // number
type Cov = Covariance<[1, 2, 3], [4, 5, 6]> // number
```

## Bitwise Operations

```ts
import type {
  BitAnd, BitOr, BitXor, BitNot,
  LeftShift, RightShift, UnsignedRightShift
} from 'uni-types'

type And = BitAnd<5, 3> // number
type Or = BitOr<5, 3> // number
type Xor = BitXor<5, 3> // number
type Shifted = LeftShift<1, 2> // number
```

## Number Utilities

### Type Checks

```ts
import type {
  IsEven, IsOdd, IsPositive, IsNegative,
  IsZero, IsInteger, IsFloat, IsFinite, IsNaN
} from 'uni-types'

type Even = IsEven<4> // boolean
type Odd = IsOdd<5> // boolean
type Positive = IsPositive<5> // boolean
type Integer = IsInteger<5> // boolean
```

## Angle Conversion

```ts
import type {
  DegreesToRadians, RadiansToDegrees,
  GradiansToDegrees, DegreesToGradians
} from 'uni-types'

type Radians = DegreesToRadians<180> // number
type Degrees = RadiansToDegrees<3.14159> // number
```

## Number Conversion

```ts
import type {
  NumberToString, StringToNumber,
  HexToDecimal, DecimalToHex,
  BinaryToDecimal, DecimalToBinary
} from 'uni-types'

type Str = NumberToString<42> // '42'
type Num = StringToNumber<'42'> // 42
type Hex = DecimalToHex<255> // string
type Bin = DecimalToBinary<10> // string
```

## API Reference

| Type | Description |
|------|-------------|
| `Add<A, B>` | Add numbers |
| `Subtract<A, B>` | Subtract numbers |
| `Multiply<A, B>` | Multiply numbers |
| `Divide<A, B>` | Divide numbers |
| `Power<A, B>` | Power operation |
| `Sqrt<N>` | Square root |
| `Sin<N>`, `Cos<N>`, `Tan<N>` | Trig functions |
| `PI`, `E` | Math constants |
| `GreaterThan<A, B>` | Greater than check |
| `Max<A, B>`, `Min<A, B>` | Max/Min |
| `Clamp<N, Min, Max>` | Clamp value |
| `IsPrime<N>` | Prime check |
| `Fibonacci<N>` | Fibonacci number |
| `Factorial<N>` | Factorial |
| `Mean<T>`, `Median<T>` | Statistics |
| `IsEven<N>`, `IsOdd<N>` | Even/Odd check |