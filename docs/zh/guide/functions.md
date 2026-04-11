# 函数类型

用于处理函数类型的工具类型。

## Parameters

获取函数参数作为元组。

```typescript
import type { Parameters } from 'uni-types'

type Fn = (a: string, b: number) => boolean
type Params = Parameters<Fn>    // [string, number]
```

## ReturnType

获取函数返回类型。

```typescript
import type { ReturnType } from 'uni-types'

type Fn = (a: string) => number
type Result = ReturnType<Fn>    // number
```

## NthParameter

获取第 N 个参数类型（从 0 开始）。

```typescript
import type { NthParameter } from 'uni-types'

type Fn = (a: string, b: number, c: boolean) => void

type First = NthParameter<Fn, 0>   // string
type Second = NthParameter<Fn, 1>  // number
type Third = NthParameter<Fn, 2>   // boolean
```

## AsyncReturnType

提取异步函数返回类型（解包 Promise）。

```typescript
import type { AsyncReturnType } from 'uni-types'

type AsyncFn = () => Promise<string>
type Result = AsyncReturnType<AsyncFn>  // string
```

## ThisParameterType

获取函数 `this` 参数类型。

```typescript
import type { ThisParameterType } from 'uni-types'

type Fn = (this: { x: number }) => void
type This = ThisParameterType<Fn>  // { x: number }
```

## OmitThisParameter

从函数类型中移除 `this` 参数。

```typescript
import type { OmitThisParameter } from 'uni-types'

type Fn = (this: { x: number }, a: string) => void
type FnWithoutThis = OmitThisParameter<Fn>  // (a: string) => void
```

## IsFunction & IsAsyncFunction

检查类型是否为函数。

```typescript
import type { IsFunction, IsAsyncFunction } from 'uni-types'

type A = IsFunction<() => void>              // true
type B = IsFunction<string>                  // false

type C = IsAsyncFunction<() => Promise<any>> // true
type D = IsAsyncFunction<() => string>       // false
```

## 参数操作

### OptionalParameters

使所有函数参数变为可选。

```typescript
import type { OptionalParameters } from 'uni-types'

type Fn = (a: string, b: number) => void
type OptionalFn = OptionalParameters<Fn>
// (a?: string, b?: number) => void
```

### AppendParameter & PrependParameter

向函数添加参数。

```typescript
import type { AppendParameter, PrependParameter } from 'uni-types'

type Fn = (a: string) => void

type WithAppend = AppendParameter<Fn, number>
// (a: string, b: number) => void

type WithPrepend = PrependParameter<Fn, number>
// (a: number, b: string) => void
```