# 类型断言

**自 1.3.0 起**

编译时类型验证的类型断言和约束。

## 基本断言

### AssertEqual

断言类型 T 等于 Expected。

```typescript
import type { AssertEqual } from 'uni-types'

type A = AssertEqual<string, string>  // string
type B = AssertEqual<string, number>  // never（编译时错误）
```

### AssertExtends

断言类型 T 继承 U。

```typescript
import type { AssertExtends } from 'uni-types'

type A = AssertExtends<'a', string>  // 'a'
type B = AssertExtends<number, string>  // never
```

### AssertKeyof

断言 K 是 T 的键。

```typescript
import type { AssertKeyof } from 'uni-types'

type A = AssertKeyof<{ a: 1; b: 2 }, 'a'>  // 'a'
type B = AssertKeyof<{ a: 1 }, 'b'>  // never
```

### AssertNotNil

断言类型 T 不是 never。

```typescript
import type { AssertNotNil } from 'uni-types'

type A = AssertNotNil<string>  // string
type B = AssertNotNil<never>  // never
```

## 键约束

### RequireKeys

要求特定键必须存在（非可选）。

```typescript
import type { RequireKeys } from 'uni-types'

type Required = RequireKeys<{ a?: string; b?: number }, 'a'>  // { a: string; b?: number }
```

### MakeOptional

将特定键设为可选。

```typescript
import type { MakeOptional } from 'uni-types'

type Optional = MakeOptional<{ a: string; b: number }, 'b'>  // { a: string; b?: number }
```

### RequireAtLeastOne

要求至少有一个指定键。

```typescript
import type { RequireAtLeastOne } from 'uni-types'

type Config = RequireAtLeastOne<{ a?: string; b?: number }, 'a' | 'b'>
// 必须有 'a' 或 'b'（或两者）
```

### RequireExactlyOne

要求恰好有一个指定键。

```typescript
import type { RequireExactlyOne } from 'uni-types'

type Config = RequireExactlyOne<{ a?: string; b?: number }, 'a' | 'b'>
// 必须恰好有 'a' 或 'b' 之一
```

## 属性断言

### AssertHasProperty

确保对象具有特定属性。

```typescript
import type { AssertHasProperty } from 'uni-types'

type A = AssertHasProperty<{ a: 1 }, 'a'>  // { a: 1 }
type B = AssertHasProperty<{ a: 1 }, 'b'>  // never
```

## 类型要求

### RequireNotNullish

确保类型不是 null 或 undefined。

```typescript
import type { RequireNotNullish } from 'uni-types'

type A = RequireNotNullish<string>  // string
type B = RequireNotNullish<string | null>  // never
```

### RequireArray

确保类型是数组。

```typescript
import type { RequireArray } from 'uni-types'

type A = RequireArray<string[]>  // string[]
type B = RequireArray<string>  // never
```

### RequireFunction

确保类型是函数。

```typescript
import type { RequireFunction } from 'uni-types'

type A = RequireFunction<() => void>  // () => void
type B = RequireFunction<string>  // never
```

## 相关

- [类型测试](./testing) - 类型级测试工具
- [类型判断](./guards) - 类型守卫工具