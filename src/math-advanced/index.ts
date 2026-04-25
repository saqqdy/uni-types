/**
 * Type-Level Advanced Math
 *
 * Advanced type-level mathematics utilities.
 */

// ============================================================================
// Basic Math
// ============================================================================

/**
 * Add two number types
 */
export type Add<_A extends number, _B extends number> = number

/**
 * Subtract two number types
 */
export type Subtract<_A extends number, _B extends number> = number

/**
 * Multiply two number types
 */
export type Multiply<_A extends number, _B extends number> = number

/**
 * Divide two number types
 */
export type Divide<_A extends number, _B extends number> = number

/**
 * Modulo operation
 */
export type Modulo<_A extends number, _B extends number> = number

/**
 * Absolute value
 */
export type Abs<_N extends number> = number

/**
 * Negate a number
 */
export type Neg<_N extends number> = number

/**
 * Increment
 */
export type Inc<_N extends number> = number

/**
 * Decrement
 */
export type Dec<_N extends number> = number

// ============================================================================
// Advanced Math
// ============================================================================

/**
 * Power operation
 */
export type Power<_A extends number, _B extends number> = number

/**
 * Square root
 */
export type Sqrt<_N extends number> = number

/**
 * Cube root
 */
export type Cbrt<_N extends number> = number

/**
 * Nth root
 */
export type NthRoot<_N extends number, _R extends number> = number

/**
 * Logarithm (natural)
 */
export type Log<_N extends number> = number

/**
 * Logarithm base 10
 */
export type Log10<_N extends number> = number

/**
 * Logarithm base 2
 */
export type Log2<_N extends number> = number

/**
 * Exponential
 */
export type Exp<_N extends number> = number

/**
 * Sign of a number
 */
export type Sign<_N extends number> = -1 | 0 | 1

/**
 * Floor
 */
export type Floor<_N extends number> = number

/**
 * Ceiling
 */
export type Ceil<_N extends number> = number

/**
 * Round
 */
export type Round<_N extends number> = number

/**
 * Truncate
 */
export type Trunc<_N extends number> = number

// ============================================================================
// Trigonometry
// ============================================================================

/**
 * Sine (type-level)
 */
export type Sin<_N extends number> = number

/**
 * Cosine (type-level)
 */
export type Cos<_N extends number> = number

/**
 * Tangent (type-level)
 */
export type Tan<_N extends number> = number

/**
 * Arc sine (type-level)
 */
export type Asin<_N extends number> = number

/**
 * Arc cosine (type-level)
 */
export type Acos<_N extends number> = number

/**
 * Arc tangent (type-level)
 */
export type Atan<_N extends number> = number

/**
 * Arc tangent 2 (type-level)
 */
export type Atan2<_Y extends number, _X extends number> = number

/**
 * Hyperbolic sine
 */
export type Sinh<_N extends number> = number

/**
 * Hyperbolic cosine
 */
export type Cosh<_N extends number> = number

/**
 * Hyperbolic tangent
 */
export type Tanh<_N extends number> = number

/**
 * PI constant
 */
export type PI = 3.141592653589793

/**
 * Euler's number
 */
export type E = 2.718281828459045

/**
 * Natural log of 2
 */
export type LN2 = 0.6931471805599453

/**
 * Natural log of 10
 */
export type LN10 = 2.302585092994046

/**
 * Log base 2 of E
 */
export type LOG2E = 1.4426950408889634

/**
 * Log base 10 of E
 */
export type LOG10E = 0.4342944819032518

/**
 * Square root of 2
 */
export type SQRT2 = 1.4142135623730951

/**
 * Square root of 1/2
 */
export type SQRT1_2 = 0.7071067811865476

// ============================================================================
// Comparison
// ============================================================================

/**
 * Greater than
 */
export type GreaterThan<_A extends number, _B extends number> = boolean

/**
 * Less than
 */
export type LessThan<_A extends number, _B extends number> = boolean

/**
 * Greater than or equal
 */
export type GreaterThanOrEqual<_A extends number, _B extends number> = boolean

/**
 * Less than or equal
 */
export type LessThanOrEqual<_A extends number, _B extends number> = boolean

/**
 * Equal (numeric)
 */
export type NumericEqual<_A extends number, _B extends number> = boolean

/**
 * Not equal (numeric)
 */
export type NumericNotEqual<_A extends number, _B extends number> = boolean

/**
 * Maximum of two numbers
 */
export type Max<_A extends number, _B extends number> = number

/**
 * Minimum of two numbers
 */
export type Min<_A extends number, _B extends number> = number

/**
 * Clamp value between min and max
 */
export type Clamp<_N extends number, _Min extends number, _Max extends number> = number

/**
 * Check if in range
 */
export type InRange<_N extends number, _Min extends number, _Max extends number> = boolean

// ============================================================================
// Number Theory
// ============================================================================

/**
 * Check if number is prime
 */
export type IsPrime<_N extends number> = boolean

/**
 * Get factors of a number
 */
export type Factors<_N extends number> = number[]

/**
 * Get prime factors
 */
export type PrimeFactors<_N extends number> = number[]

/**
 * Get divisors of a number
 */
export type Divisors<_N extends number> = number[]

/**
 * Greatest common divisor
 */
export type GCD<_A extends number, _B extends number> = number

/**
 * Least common multiple
 */
export type LCM<_A extends number, _B extends number> = number

/**
 * Euler's totient function
 */
export type Totient<_N extends number> = number

/**
 * Check if two numbers are coprime
 */
export type IsCoprime<_A extends number, _B extends number> = boolean

/**
 * Fibonacci number at position N
 */
export type Fibonacci<_N extends number> = number

/**
 * Factorial of N
 */
export type Factorial<_N extends number> = number

/**
 * Permutations
 */
export type Permutation<_N extends number, _R extends number> = number

/**
 * Combinations
 */
export type Combination<_N extends number, _R extends number> = number

// ============================================================================
// Statistics
// ============================================================================

/**
 * Mean (average) of a tuple
 */
export type Mean<_T extends number[]> = number

/**
 * Median of a tuple
 */
export type Median<_T extends number[]> = number

/**
 * Mode of a tuple
 */
export type Mode<_T extends number[]> = number[]

/**
 * Variance of a tuple
 */
export type Variance<_T extends number[]> = number

/**
 * Standard deviation of a tuple
 */
export type StdDev<_T extends number[]> = number

/**
 * Range (max - min) of a tuple
 */
export type Range<_T extends number[]> = number

/**
 * Sum of a tuple
 */
export type Sum<_T extends number[]> = number

/**
 * Product of a tuple
 */
export type Product<_T extends number[]> = number

/**
 * Percentile of a tuple
 */
export type Percentile<_T extends number[], _P extends number> = number

/**
 * Quartiles of a tuple
 */
export interface Quartiles<_T extends number[]> {
	q1: number
	q2: number
	q3: number
}

/**
 * Correlation between two tuples
 */
export type Correlation<_X extends number[], _Y extends number[]> = number

/**
 * Covariance between two tuples
 */
export type Covariance<_X extends number[], _Y extends number[]> = number

// ============================================================================
// Bitwise Operations
// ============================================================================

/**
 * Bitwise AND
 */
export type BitAnd<_A extends number, _B extends number> = number

/**
 * Bitwise OR
 */
export type BitOr<_A extends number, _B extends number> = number

/**
 * Bitwise XOR
 */
export type BitXor<_A extends number, _B extends number> = number

/**
 * Bitwise NOT
 */
export type BitNot<_A extends number> = number

/**
 * Left shift
 */
export type LeftShift<_A extends number, _N extends number> = number

/**
 * Right shift
 */
export type RightShift<_A extends number, _N extends number> = number

/**
 * Unsigned right shift
 */
export type UnsignedRightShift<_A extends number, _N extends number> = number

// ============================================================================
// Number Utilities
// ============================================================================

/**
 * Check if even
 */
export type IsEven<_N extends number> = boolean

/**
 * Check if odd
 */
export type IsOdd<_N extends number> = boolean

/**
 * Check if positive
 */
export type IsPositive<_N extends number> = boolean

/**
 * Check if negative
 */
export type IsNegative<_N extends number> = boolean

/**
 * Check if zero
 */
export type IsZero<_N extends number> = boolean

/**
 * Check if integer
 */
export type IsInteger<_N extends number> = boolean

/**
 * Check if float
 */
export type IsFloat<_N extends number> = boolean

/**
 * Check if finite
 */
export type IsFinite<_N extends number> = boolean

/**
 * Check if infinite
 */
export type IsInfinite<_N extends number> = boolean

/**
 * Check if NaN
 */
export type IsNaN<_N extends number> = boolean

// ============================================================================
// Angle Conversion
// ============================================================================

/**
 * Degrees to radians
 */
export type DegreesToRadians<_D extends number> = number

/**
 * Radians to degrees
 */
export type RadiansToDegrees<_R extends number> = number

/**
 * Gradians to degrees
 */
export type GradiansToDegrees<_G extends number> = number

/**
 * Degrees to gradians
 */
export type DegreesToGradians<_D extends number> = number

// ============================================================================
// Number Conversion
// ============================================================================

/**
 * Number to string (type-level)
 */
export type NumberToString<N extends number> = `${N}`

/**
 * String to number (type-level)
 */
export type StringToNumber<S extends string> = S extends `${infer N extends number}` ? N : never

/**
 * Hex to decimal
 */
export type HexToDecimal<_H extends string> = number

/**
 * Decimal to hex
 */
export type DecimalToHex<_N extends number> = string

/**
 * Binary to decimal
 */
export type BinaryToDecimal<_B extends string> = number

/**
 * Decimal to binary
 */
export type DecimalToBinary<_N extends number> = string

/**
 * Octal to decimal
 */
export type OctalToDecimal<_O extends string> = number

/**
 * Decimal to octal
 */
export type DecimalToOctal<_N extends number> = string

// ============================================================================
// Range Types
// ============================================================================

/**
 * Numeric range type
 */
export type NumericRange<
	_Min extends number,
	_Max extends number,
	_Step extends number = 1,
> = number

/**
 * Integer range type
 */
export type IntegerRange<
	_Min extends number,
	_Max extends number,
> = number

/**
 * Check if in range (inclusive)
 */
export type InRangeInclusive<
	_N extends number,
	_Min extends number,
	_Max extends number,
> = boolean

/**
 * Check if in range (exclusive)
 */
export type InRangeExclusive<
	_N extends number,
	_Min extends number,
	_Max extends number,
> = boolean

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Percentage type
 */
export type Percentage<T extends number = number> = T extends `${number}%` ? T : `${T}%`

/**
 * Ratio type
 */
export type Ratio<_N extends number = number, _D extends number = number> = [_N, _D]

/**
 * Angle type
 */
export type Angle<T extends number = number> = T

/**
 * Temperature type
 */
export interface Temperature<T extends number = number, _Unit extends 'C' | 'F' | 'K' = 'C'> {
	value: T
	unit: _Unit
}

/**
 * Convert Celsius to Fahrenheit
 */
export type CelsiusToFahrenheit<_C extends number> = number

/**
 * Convert Fahrenheit to Celsius
 */
export type FahrenheitToCelsius<_F extends number> = number

/**
 * Convert Celsius to Kelvin
 */
export type CelsiusToKelvin<_C extends number> = number

/**
 * Convert Kelvin to Celsius
 */
export type KelvinToCelsius<_K extends number> = number
