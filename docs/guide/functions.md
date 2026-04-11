# Function Types

Utilities for working with function types.

## Parameters

Get function parameters as a tuple.

```typescript
import type { Parameters } from 'uni-types'

type Fn = (a: string, b: number) => boolean
type Params = Parameters<Fn>    // [string, number]
```

## ReturnType

Get function return type.

```typescript
import type { ReturnType } from 'uni-types'

type Fn = (a: string) => number
type Result = ReturnType<Fn>    // number
```

## NthParameter

Get the Nth parameter type (0-indexed).

```typescript
import type { NthParameter } from 'uni-types'

type Fn = (a: string, b: number, c: boolean) => void

type First = NthParameter<Fn, 0>   // string
type Second = NthParameter<Fn, 1>  // number
type Third = NthParameter<Fn, 2>   // boolean
```

## AsyncReturnType

Extract async function return type (unwraps Promise).

```typescript
import type { AsyncReturnType } from 'uni-types'

type AsyncFn = () => Promise<string>
type Result = AsyncReturnType<AsyncFn>  // string
```

## ThisParameterType

Get function `this` parameter type.

```typescript
import type { ThisParameterType } from 'uni-types'

type Fn = (this: { x: number }) => void
type This = ThisParameterType<Fn>  // { x: number }
```

## OmitThisParameter

Omit `this` parameter from function type.

```typescript
import type { OmitThisParameter } from 'uni-types'

type Fn = (this: { x: number }, a: string) => void
type FnWithoutThis = OmitThisParameter<Fn>  // (a: string) => void
```

## IsFunction & IsAsyncFunction

Check if a type is a function.

```typescript
import type { IsFunction, IsAsyncFunction } from 'uni-types'

type A = IsFunction<() => void>              // true
type B = IsFunction<string>                  // false

type C = IsAsyncFunction<() => Promise<any>> // true
type D = IsAsyncFunction<() => string>       // false
```

## Parameter Manipulation

### OptionalParameters

Make all function parameters optional.

```typescript
import type { OptionalParameters } from 'uni-types'

type Fn = (a: string, b: number) => void
type OptionalFn = OptionalParameters<Fn>
// (a?: string, b?: number) => void
```

### AppendParameter & PrependParameter

Add parameters to a function.

```typescript
import type { AppendParameter, PrependParameter } from 'uni-types'

type Fn = (a: string) => void

type WithAppend = AppendParameter<Fn, number>
// (a: string, b: number) => void

type WithPrepend = PrependParameter<Fn, number>
// (a: number, b: string) => void
```
