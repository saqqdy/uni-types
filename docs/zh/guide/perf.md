# 性能优化

用于优化 TypeScript 编译和类型检查的类型。

## 懒加载类型求值

延迟类型求值以获得更好的编译性能。

```typescript
import type { Lazy, ForceEvaluate, Deferred, Thunk } from 'uni-types'

// 懒加载类型包装
type LazyString = Lazy<string>  // () => string

// 强制求值
type Evaluated = ForceEvaluate<LazyString>  // string

// 延迟类型（防止立即展开）
type Complex = Deferred<{ a: string } & { b: number }>

// Thunk 类型
type StringThunk = Thunk<string>  // () => string
```

## 类型缓存

缓存类型计算以防止重复求值。

```typescript
import type { Cached, CachedValue, Memoized } from 'uni-types'

// 缓存类型
type CachedString = Cached<string>  // { __cached: string }

// 提取缓存值
type Value = CachedValue<CachedString>  // string

// 记忆化类型计算
type Memo = Memoized<{ a: string } & { b: number }>
```

## 类型优化

简化和优化复杂类型。

### Simplify

展平交叉类型。

```typescript
import type { Simplify } from 'uni-types'

type Complex = { a: string } & { b: number }
type Simple = Simplify<Complex>
// { a: string; b: number }
```

### DeepSimplify

递归简化嵌套类型。

```typescript
import type { DeepSimplify } from 'uni-types'

type Nested = { 
  a: { b: string } & { c: number } 
}
type Deep = DeepSimplify<Nested>
// { a: { b: string; c: number } }
```

### Compact

移除 `never` 和 `undefined` 属性。

```typescript
import type { Compact } from 'uni-types'

type Compacted = Compact<{ a: string; b: never; c?: undefined }>
// { a: string }
```

### StripNever / StripUndefined / StripNull

从对象属性中移除特定类型。

```typescript
import type { StripNever, StripUndefined, StripNull } from 'uni-types'

type A = StripNever<{ a: string; b: never; c: number }>
// { a: string; c: number }

type B = StripUndefined<{ a: string; b?: undefined }>
// { a: string }
```

### MergeAll

合并多个对象类型。

```typescript
import type { MergeAll } from 'uni-types'

type Merged = MergeAll<[{ a: string }, { b: number }, { c: boolean }]>
// { a: string; b: number; c: boolean }
```

### TypeEq

在编译时检查类型相等性。

```typescript
import type { TypeEq } from 'uni-types'

type A = TypeEq<string, string>   // true
type B = TypeEq<string, number>   // false
```
