# 元编程工具

类型级别的元编程工具，用于高级类型操作。

## 概述

`meta` 模块提供了强大的类型级元编程能力，允许您在编译时检查、转换和操作类型。

## 类型反射

### TypeName

获取类型名称作为字符串字面量：

```ts
import type { TypeName } from 'uni-types'

type T1 = TypeName<string> // 'string'
type T2 = TypeName<number> // 'number'
type T3 = TypeName<boolean> // 'boolean'
type T4 = TypeName<object> // 'object'
type T5 = TypeName<unknown[]> // 'array'
```

### TypeCategory

类型类别枚举，用于分类类型：

```ts
import type { TypeCategory, GetTypeCategory } from 'uni-types'

type C1 = GetTypeCategory<string> // 'primitive' 或 'literal'
type C2 = GetTypeCategory<{ a: number }> // 'object'
type C3 = GetTypeCategory<[1, 2, 3]> // 'tuple'
type C4 = GetTypeCategory<number[]> // 'array'
```

## 类型操作

### Transform

使用规则转换类型属性：

```ts
import type { Transform } from 'uni-types'

type Original = { foo: number, bar: string }
type Transformed = Transform<Original, { foo: 'newFoo' }>
// { newFoo: number, bar: string }
```

### MergeTypes

深度合并两个类型：

```ts
import type { MergeTypes } from 'uni-types'

type A = { a: number, b: { c: string } }
type B = { b: { d: number }, e: boolean }
type Merged = MergeTypes<A, B>
// { a: number, b: { c: string, d: number }, e: boolean }
```

## 类型谓词

### Satisfies

检查类型是否满足约束：

```ts
import type { Satisfies } from 'uni-types'

type Check = Satisfies<string, string | number> // true
```

### Exactly

检查类型是否完全匹配：

```ts
import type { Exactly } from 'uni-types'

type E1 = Exactly<string, string> // true
type E2 = Exactly<string, string | number> // false
```

## 路径工具

### TypeAtPath

获取嵌套路径处的类型：

```ts
import type { TypeAtPath } from 'uni-types'

type Obj = { user: { profile: { name: string } } }
type Name = TypeAtPath<Obj, 'user.profile.name'> // string
```

## API 参考

| 类型 | 描述 |
|------|------|
| `Reflect<T>` | 运行时风格的类型反射 |
| `TypeName<T>` | 获取类型名称 |
| `GetTypeCategory<T>` | 获取类型类别 |
| `Transform<T, Rules>` | 使用规则转换类型 |
| `MergeTypes<T, U>` | 深度合并类型 |
| `Satisfies<T, U>` | 检查是否满足约束 |
| `Exactly<T, U>` | 检查是否完全匹配 |
| `IsNullable<T>` | 检查是否可空 |
| `Depth<T>` | 获取类型嵌套深度 |
| `Width<T>` | 获取类型属性数量 |
| `TypeAtPath<T, P>` | 获取路径处的类型 |
| `Lazy<T>` | 惰性类型包装器 |