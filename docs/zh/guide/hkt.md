# 高阶类型 (HKT)

高阶类型模拟，用于高级类型级编程。

## Kind

具有一个参数的类型构造器。

```typescript
import type { Kind } from 'uni-types'

interface MaybeHKT {
  _A?: unknown
}

type MaybeNumber = Kind<MaybeHKT, number>
// { _A: number }
```

## Kind2 / Kind3

具有多个参数的类型构造器。

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

带有深度限制的类型级递归。

```typescript
import type { Recurse } from 'uni-types'

type DeepObject = { a: { b: { c: string } } }
type Recursed = Recurse<DeepObject, 10>
// 递归处理嵌套结构
```

## Compose / Pipe

类型级的函数组合。

```typescript
import type { Compose, Pipe } from 'uni-types'

type StringToNumber = (s: string) => number
type NumberToBoolean = (n: number) => boolean

type Composed = Compose<NumberToBoolean, StringToNumber>
// (s: string) => boolean

type Piped = Pipe<StringToNumber, NumberToBoolean>
// (s: string) => boolean
```

## Church 编码

Church 编码的数据结构。

```typescript
import type { ChurchNumeral, ChurchBoolean, ChurchList, ChurchPair } from 'uni-types'

// Church 数字将数字表示为函数
type Zero = ChurchNumeral
type One = ChurchNumeral

// Church 布尔将 true/false 表示为函数
type True = ChurchBoolean
type False = ChurchBoolean

// Church 列表将列表表示为函数
type List = ChurchList<string>

// Church 对将配对表示为函数
type Pair = ChurchPair<string, number>
```

## Functor / Applicative / Monad

类型类模拟。

```typescript
import type { Functor, Applicative, Monad } from 'uni-types'

interface MaybeFunctor extends Functor<MaybeHKT> {
  map: <A, B>(f: (a: A) => B) => (fa: Maybe<A>) => Maybe<B>
}
```

## Either / Maybe

代数数据类型。

```typescript
import type { Either, Left, Right, Maybe, Just, Nothing } from 'uni-types'

type Result = Either<string, number>
// Left<string> | Right<number>

type Optional = Maybe<string>
// Nothing | Just<string>

type ErrorResult = Left<'错误信息'>
type SuccessResult = Right<42>

type NoValue = Nothing
type SomeValue = Just<'value'>
```

## PartialApply / Curried

偏应用和柯里化。

```typescript
import type { PartialApply, Curried } from 'uni-types'

type ThreeArgs = (a: string, b: number, c: boolean) => void

type PartiallyApplied = PartialApply<ThreeArgs, [string]>
// (b: number, c: boolean) => void

type CurriedFunction = Curried<ThreeArgs>
// (a: string) => (b: number) => (c: boolean) => void
```