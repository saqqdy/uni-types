# 极致类型工具

极致类型工具提供完美的、完整的和终结的类型约束。

## Perfect

使所有属性变为 readonly 和 required。

```typescript
import type { Perfect } from 'uni-types'

interface User {
  name?: string
  age: number
}

type PerfectUser = Perfect<User>
// { readonly name: string; readonly age: number }
```

## Complete

确保所有属性都已定义且不可为空。

```typescript
import type { Complete } from 'uni-types'

interface Config {
  host?: string | null
  port: number | undefined
}

type CompleteConfig = Complete<Config>
// { host: string; port: number }
```

## Final

创建 readonly、required 且不可为空的类型。

```typescript
import type { Final } from 'uni-types'

interface Options {
  debug?: boolean
  timeout?: number | null
}

type FinalOptions = Final<Options>
// { readonly debug: boolean; readonly timeout: number }
```

## Ultimate

最严格的形式，具有深层 readonly 和不可为空。

```typescript
import type { Ultimate } from 'uni-types'

interface Nested {
  config?: {
    value?: string
  }
  count: number | null
}

type UltimateNested = Ultimate<Nested>
// { readonly config: { readonly value: string }; readonly count: number }
```

## PerfectPick / PerfectOmit

以完美类型进行选取或排除。

```typescript
import type { PerfectPick, PerfectOmit } from 'uni-types'

interface User {
  id: string
  name?: string
  email?: string
}

type PerfectName = PerfectPick<User, 'name'>
// { readonly name: string }

type PerfectWithoutEmail = PerfectOmit<User, 'email'>
// { readonly id: string; readonly name: string }
```

## Finalize / Frozen / Sealed / Locked

类型终结化工具。

```typescript
import type { Finalize, Frozen, Sealed, Locked } from 'uni-types'

interface Data {
  value?: string
}

type FinalData = Finalize<Data>  // Final<Data>
type FrozenData = Frozen<Data>   // 深层 readonly
type SealedData = Sealed<Data>   // 不能添加新属性
type LockedData = Locked<Data>   // Frozen 和 Sealed
```

## Validate

根据 schema 验证类型。

```typescript
import type { Validate, ValidationResult } from 'uni-types'

interface Schema {
  name: string
  age: number
}

type ValidUser = Validate<{ name: 'John', age: 30 }, Schema>
// { name: 'John', age: 30 }

type InvalidUser = Validate<{ name: 'John' }, Schema>
// never
```

## AssertType / AssertShape

类型断言工具。

```typescript
import type { AssertType, AssertShape } from 'uni-types'

type AssertString = AssertType<string, 'hello'>  // 'hello'
type AssertNumber = AssertType<string, 42>       // never

interface Shape {
  name: string
}

type Asserted = AssertShape<{ name: 'John', extra: boolean }, Shape>
// never (有额外属性)
```