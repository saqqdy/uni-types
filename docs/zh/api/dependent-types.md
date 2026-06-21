# 依赖类型 API 参考

## 核心依赖类型

### `Dep<T, P>`

模拟依赖类型 — 约束 `T` 必须扩展 `P`。

```typescript
import type { Dep } from 'uni-types'

type A = Dep<string, string>  // string
type B = Dep<number, string>  // never
```

### `DepValue<T, V extends T>`

值依赖类型 — 创建表示特定值的类型。

```typescript
import type { DepValue } from 'uni-types'

type Hello = DepValue<string, 'hello'>  // 'hello'
type Num42 = DepValue<number, 42>       // 42
```

### `DepIndex<T extends readonly unknown[], I extends keyof T>`

索引依赖类型 — 通过索引提取类型。

```typescript
import type { DepIndex } from 'uni-types'

type First = DepIndex<['a', 'b'], 0>  // 'a'
type Second = DepIndex<['a', 'b', 'c'], 1>  // 'b'
```

### `DepKey<T extends Record<string, unknown>, K extends keyof T>`

键依赖类型 — 通过键提取类型。

```typescript
import type { DepKey } from 'uni-types'

type Name = DepKey<{ name: string; age: number }, 'name'>  // string
type Age = DepKey<{ name: string; age: number }, 'age'>    // number
```

## 值依赖类型

### `ValueOf<T, V>`

筛选匹配特定值的类型。

```typescript
import type { ValueOf } from 'uni-types'

type R = ValueOf<string, string>  // string
```

### `Where<T, Condition>`

条件类型约束 — 根据条件筛选。

```typescript
import type { Where } from 'uni-types'

type R = Where<string, string>  // string
```

### `SuchThat<T, Predicate>`

基于谓词的类型收窄。

```typescript
import type { SuchThat } from 'uni-types'

type R = SuchThat<string, string>  // string
```

## 约束验证

### `Satisfies<T, Constraint>`

验证类型满足约束且不拓宽。

```typescript
import type { Satisfies } from 'uni-types'

type R = Satisfies<{ a: number }, { a: number }>  // { a: number }
```

### `Exactly<T, Shape>`

确保类型完全匹配，不允许多余属性。

```typescript
import type { Exactly } from 'uni-types'

type R = Exactly<{ a: number }, { a: number }>  // { a: number }
```

## 证明承载类型

### `Proof<T, P extends string>`

类型级证明载体。

```typescript
import type { Proof } from 'uni-types'

type P = Proof<string, 'non-empty'>
// P._value: string, P._proof: 'non-empty'
```

### `Prove<T, Constraint extends string>`

创建类型满足约束的证明。

### `Verified<T>`

验证通过的类型，添加 `__verified__: true` 和 `__verifiedAt__: number` 标记。

```typescript
import type { Verified } from 'uni-types'

type V = Verified<string>
// string & { __verified__: true; __verifiedAt__: number }
```

### `Unverified<T>`

移除类型的验证标记，还原为基础类型。

```typescript
import type { Unverified } from 'uni-types'

type U = Unverified<Verified<string>>  // string
```

## 细化类型

### `Refined<T, Predicate>`

细化类型，附加谓词约束。

### `Refine<T, R extends string>`

为类型添加细化标记。

```typescript
import type { Refine } from 'uni-types'

type Email = Refine<string, 'email'>
// string & { __refinement__: 'email' }
```

### `Unrefine<T>`

移除细化标记，还原为基础类型。

```typescript
import type { Unrefine } from 'uni-types'

type Plain = Unrefine<Refine<string, 'email'>>  // string
```

## 类型级等价

### `TypeEq<A, B>`

严格类型等价检查，返回 `true` 或 `false`。

```typescript
import type { TypeEq } from 'uni-types'

type T1 = TypeEq<string, string>   // true
type T2 = TypeEq<string, number>   // false
type T3 = TypeEq<'hello', string>  // false
```

### `TypeNotEq<A, B>`

类型不等价检查。

```typescript
import type { TypeNotEq } from 'uni-types'

type T1 = TypeNotEq<string, number>  // true
type T2 = TypeNotEq<string, string>  // false
```

### `TypeExtends<A, B>`

检查子类型关系。

```typescript
import type { TypeExtends } from 'uni-types'

type T1 = TypeExtends<string, string>    // true
type T2 = TypeExtends<'hello', string>   // true
type T3 = TypeExtends<string, 'hello'>   // false
```

### `TypeCompatible<A, B>`

双向兼容性检查，返回 `true`、`'partial'` 或 `false`。

```typescript
import type { TypeCompatible } from 'uni-types'

type T1 = TypeCompatible<string, string>   // true
type T2 = TypeCompatible<'hello', string>  // 'partial'
type T3 = TypeCompatible<string, number>   // false
```

## 类型级断言

### `AssertType<T, U>`

严格类型匹配断言，返回 `true` 或 `false`。

```typescript
import type { AssertType } from 'uni-types'

type T1 = AssertType<string, string>  // true
type T2 = AssertType<string, number>  // false
```

### `AssertShape<T, Shape>`

形状匹配断言。

```typescript
import type { AssertShape } from 'uni-types'

type T1 = AssertShape<{ a: number }, { a: number }>           // true
type T2 = AssertShape<{ a: number; b: string }, { a: number }>  // false
```

### `AssertKeys<T, K>`

键存在性断言。

```typescript
import type { AssertKeys } from 'uni-types'

type T1 = AssertKeys<{ a: number; b: string }, 'a'>       // true
type T2 = AssertKeys<{ a: number }, 'a' | 'b'>            // false
```

### `AssertValues<T, V>`

值类型断言。

```typescript
import type { AssertValues } from 'uni-types'

type T1 = AssertValues<{ a: string; b: string }, string>  // true
```

## 类型级计算

### `DepCompute<T>`

计算接口，包含 `_result: T` 和 `_success: boolean`。

```typescript
import type { DepCompute } from 'uni-types'

type C = DepCompute<string>
// C._success: boolean
```

### `DepIf<Cond extends boolean, Then, Else>`

类型级条件判断。

```typescript
import type { DepIf } from 'uni-types'

type T1 = DepIf<true, 'yes', 'no'>   // 'yes'
type T2 = DepIf<false, 'yes', 'no'>  // 'no'
```

### `DepMatch<T, Cases>`

模式匹配类型。

```typescript
import type { DepMatch } from 'uni-types'

type T1 = DepMatch<'a', { a: 1; b: 2; default: 0 }>  // 1
type T2 = DepMatch<'z', { a: 1; b: 2; default: 0 }>  // 0
```

### `DepFmap<T extends readonly unknown[], F>`

类型级函子映射。
