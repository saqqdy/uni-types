# 类型推断引擎 Types

**从 1.8.0 开始**

高级类型推断和推导工具。

## 推断引擎核心

### InferEngine

结合输入、上下文和结果的推断引擎类型。

```typescript
import type { InferEngine } from 'uni-types'

type Engine = InferEngine<string>
// { input: string; context: InferContext<string>; result: InferResult<string> }
```

### InferContext

包含类型变量、约束和替换的推断上下文。

```typescript
import type { InferContext } from 'uni-types'

type Context = InferContext<number>
```

### InferResult

类型推断结果 - 成功时返回推断类型，失败时返回错误。

```typescript
import type { InferResult } from 'uni-types'

type Result = InferResult<string>
// 成功: { success: true; type: string; context: InferContext<string> }
// 失败: { success: false; error: InferError<string> }
```

## 类型推导

### Deduce

从值推导类型。

```typescript
import type { Deduce } from 'uni-types'

type T = Deduce<string>  // string
```

### DeduceArray

推导数组元素类型。

```typescript
import type { DeduceArray } from 'uni-types'

type Element = DeduceArray<number[]>  // number
```

### DeducePromise

推导 Promise 值类型。

```typescript
import type { DeducePromise } from 'uni-types'

type Value = DeducePromise<Promise<string>>  // string
```

### DeduceReturn

推导函数返回类型。

```typescript
import type { DeduceReturn } from 'uni-types'

type Return = DeduceReturn<() => string>  // string
```

### DeduceParams

推导函数参数类型。

```typescript
import type { DeduceParams } from 'uni-types'

type Params = DeduceParams<(a: string, b: number) => void>  // [string, number]
```

### DeduceKey

根据值类型推导对象键。

```typescript
import type { DeduceKey } from 'uni-types'

type Key = DeduceKey<{ a: string; b: number }, string>  // 'a'
```

## 约束求解

### Constraint

类型约束定义。

```typescript
import type { Constraint } from 'uni-types'

type EqConstraint = Constraint<string>
```

### Unify

统一两个类型以找到公共类型。

```typescript
import type { Unify } from 'uni-types'

type Common = Unify<string | number, number | boolean>  // number
```

### Solve

求解约束以产生类型。

```typescript
import type { Solve } from 'uni-types'

type Result = Solve<string>
```

## 类型变量

### TypeVar

用于泛型编程的类型变量。

```typescript
import type { TypeVar } from 'uni-types'

type V = TypeVar<'T'>  // { __typeVar: 'T' }
```

### FreeVars

获取类型中的自由变量。

```typescript
import type { FreeVars } from 'uni-types'

type Free = FreeVars<TypeVar<'T'>>  // 'T'
```

## 多态

### Polymorphic

多态类型包装器。

```typescript
import type { Polymorphic } from 'uni-types'

type Poly = Polymorphic<string>
```

### Monomorphize

将多态类型转换为单态类型。

```typescript
import type { Monomorphize } from 'uni-types'

type Mono = Monomorphize<Polymorphic<string>>  // string
```

## Kind 系统

### Kind

获取类型的 kind。

```typescript
import type { Kind } from 'uni-types'

type FnKind = Kind<() => void>  // 'function'
type ObjKind = Kind<{ a: 1 }>  // 'object'
type StrKind = Kind<string>  // 'string'
```

### KindCheck

检查类型是否具有预期的 kind。

```typescript
import type { KindCheck } from 'uni-types'

type Check = KindCheck<string, 'string'>
// { success: true; kind: 'string' }
```

### HigherKind

高阶类型操作。

```typescript
import type { HigherKind } from 'uni-types'

type Result = HigherKind<Array, string>  // string[]
```

## 效果系统

### Effect

用于跟踪副作用的效果类型。

```typescript
import type { Effect } from 'uni-types'

type Eff = Effect<string>
// { value: string; effects: EffectRow }
```

### Pure

纯计算类型（无副作用）。

```typescript
import type { Pure } from 'uni-types'

type PureValue = Pure<string>
```

### Effectful

具有特定效果的计算。

```typescript
import type { Effectful } from 'uni-types'

type AsyncOp = Effectful<string, 'async'>
```

### Handle

处理/移除类型中的效果。

```typescript
import type { Handle } from 'uni-types'

type Handled = Handle<Effectful<string, 'async'>, 'async'>  // string
```
