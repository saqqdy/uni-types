# Higher-Kinded Types (HKT)

Higher-kinded types simulation for advanced type-level programming.

## Kind

Type constructor with one parameter.

```typescript
import type { Kind } from 'uni-types'

interface MaybeHKT {
  _A?: unknown
}

type MaybeNumber = Kind<MaybeHKT, number>
// { _A: number }
```

## Kind2 / Kind3

Type constructors with multiple parameters.

```typescript
import type { Kind2, Kind3 } from 'uni-types'

interface EitherHKT {
  _A?: unknown
  _B?: unknown
}

type EitherStringNumber = Kind2<EitherHKT, string, number>
// { _A: string; _B: number }
```

## Recurse

Type-level recursion with depth limit.

```typescript
import type { Recurse } from 'uni-types'

type DeepObject = { a: { b: { c: string } } }
type Recursed = Recurse<DeepObject, 10>
// Recursively processes nested structure
```

## Compose / Pipe

Function composition at type level.

```typescript
import type { Compose, Pipe } from 'uni-types'

type StringToNumber = (s: string) => number
type NumberToBoolean = (n: number) => boolean

type Composed = Compose<NumberToBoolean, StringToNumber>
// (s: string) => boolean

type Piped = Pipe<StringToNumber, NumberToBoolean>
// (s: string) => boolean
```

## Church Encoding

Church encoded data structures.

```typescript
import type { ChurchNumeral, ChurchBoolean, ChurchList, ChurchPair } from 'uni-types'

// Church numerals represent numbers as functions
type Zero = ChurchNumeral
type One = ChurchNumeral

// Church booleans represent true/false as functions
type True = ChurchBoolean
type False = ChurchBoolean

// Church lists represent lists as functions
type List = ChurchList<string>

// Church pairs represent pairs as functions
type Pair = ChurchPair<string, number>
```

## Functor / Applicative / Monad

Type class simulations.

```typescript
import type { Functor, Applicative, Monad } from 'uni-types'

interface MaybeFunctor extends Functor<MaybeHKT> {
  map: <A, B>(f: (a: A) => B) => (fa: Maybe<A>) => Maybe<B>
}
```

## Either / Maybe

Algebraic data types.

```typescript
import type { Either, Left, Right, Maybe, Just, Nothing } from 'uni-types'

type Result = Either<string, number>
// Left<string> | Right<number>

type Optional = Maybe<string>
// Nothing | Just<string>

type ErrorResult = Left<'error message'>
type SuccessResult = Right<42>

type NoValue = Nothing
type SomeValue = Just<'value'>
```

## PartialApply / Curried

Partial application and currying.

```typescript
import type { PartialApply, Curried } from 'uni-types'

type ThreeArgs = (a: string, b: number, c: boolean) => void

type PartiallyApplied = PartialApply<ThreeArgs, [string]>
// (b: number, c: boolean) => void

type CurriedFunction = Curried<ThreeArgs>
// (a: string) => (b: number) => (c: boolean) => void
```