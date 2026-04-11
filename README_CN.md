<div style="text-align: center;" align="center">

# uni-types

通用 TypeScript 类型工具库 - 为 TypeScript 开发提供全面的类型助手集合

[![NPM version][npm-image]][npm-url]
![typescript][typescript-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

</div>

[English](./README.md) | 简体中文

## 安装

```bash
# 使用 pnpm
$ pnpm add uni-types

# 使用 yarn
$ yarn add uni-types

# 使用 npm
$ npm install uni-types
```

## 使用

```typescript
import type { PickRequired, DeepPartial, IsArray } from 'uni-types'

// 在你的 TypeScript 项目中使用
interface User {
  name?: string
  age?: number
  email: string
}

type RequiredNameUser = PickRequired<User, 'name'>
// { name: string; age?: number; email: string }
```

## API 参考

### 核心操作

| 类型 | 描述 |
|------|------|
| `PickRequired<T, K>` | 将指定属性变为必需 |
| `OmitRequired<T, K>` | 将指定属性之外变为必需 |
| `PickPartial<T, K>` | 将指定属性变为可选 |
| `OmitPartial<T, K>` | 将指定属性之外变为可选 |

```typescript
interface User {
  name?: string
  age?: number
  email: string
}

PickRequired<User, 'name'>   // { name: string; age?: number; email: string }
OmitRequired<User, 'name'>   // { name?: string; age: number; email: string }
PickPartial<User, 'email'>   // { name?: string; age?: number; email?: string }
OmitPartial<User, 'email'>   // { name: string; age: number; email?: string }
```

### 元组操作

| 类型 | 描述 |
|------|------|
| `Head<T>` | 获取元组第一个元素 |
| `Last<T>` | 获取元组最后一个元素 |
| `Tail<T>` | 获取除第一个外的所有元素 |
| `Init<T>` | 获取除最后一个外的所有元素 |
| `Reverse<T>` | 反转元组 |
| `Flatten<T>` | 展平嵌套元组 |
| `TupleLength<T>` | 获取元组长度 |
| `IsEmptyTuple<T>` | 判断元组是否为空 |

```typescript
Head<[1, 2, 3]>       // 1
Last<[1, 2, 3]>       // 3
Tail<[1, 2, 3]>       // [2, 3]
Init<[1, 2, 3]>       // [1, 2]
Reverse<[1, 2, 3]>    // [3, 2, 1]
Flatten<[1, [2, [3]]]> // [1, 2, 3]
TupleLength<[1, 2, 3]> // 3
IsEmptyTuple<[]>       // true
```

### 深度操作

| 类型 | 描述 |
|------|------|
| `DeepPartial<T>` | 将所有嵌套属性变为可选 |
| `DeepRequired<T>` | 将所有嵌套属性变为必需 |
| `DeepReadonly<T>` | 将所有嵌套属性变为只读 |
| `DeepMutable<T>` | 将所有嵌套属性变为可变 |

```typescript
interface Nested {
  a: { b: { c: string } }
}

DeepPartial<Nested>  // { a?: { b?: { c?: string } } }
DeepRequired<{ a?: { b?: string } }>  // { a: { b: string } }
DeepReadonly<Nested>  // { readonly a: { readonly b: { readonly c: string } } }
DeepMutable<{ readonly a: { readonly b: string } }>  // { a: { b: string } }
```

### 类型判断

| 类型 | 描述 |
|------|------|
| `IsArray<T>` | 判断类型是否为数组 |
| `IsTuple<T>` | 判断类型是否为元组 |
| `IsEqual<X, Y>` | 判断两个类型是否相等 |
| `IsAny<T>` | 判断类型是否为 `any` |
| `IsNever<T>` | 判断类型是否为 `never` |
| `IsUnknown<T>` | 判断类型是否为 `unknown` |

```typescript
IsArray<string[]>    // true
IsArray<string>      // false
IsTuple<[string, number]>  // true
IsTuple<string[]>    // false
IsEqual<string, string>    // true
IsEqual<string, number>    // false
```

### 类型推导

| 类型 | 描述 |
|------|------|
| `Awaited<T>` | 递归解包 Promise 类型 |
| `ArrayElement<T>` | 获取数组元素类型 |
| `ValueOf<T>` | 获取对象值类型 |
| `FunctionKeys<T>` | 获取函数属性的键 |
| `NonFunctionKeys<T>` | 获取非函数属性的键 |
| `FirstParameter<T>` | 获取函数第一个参数类型 |

```typescript
Awaited<Promise<string>>           // string
Awaited<Promise<Promise<number>>>  // number
ArrayElement<string[]>             // string
ValueOf<{ a: string; b: number }>  // string | number
FunctionKeys<{ name: string; onClick: () => void }>  // 'onClick'
NonFunctionKeys<{ name: string; onClick: () => void }>  // 'name'
```

### 实用类型

| 类型 | 描述 |
|------|------|
| `Merge<T, U>` | 合并两个类型（后者覆盖前者） |
| `NonNullable<T>` | 排除 `null` 和 `undefined` |
| `Exclusive<T, K>` | 创建互斥属性 |
| `NoNullish<T>` | 移除所有属性的 null/undefined |
| `Nullable<T>` | 添加 `null` 到类型 |
| `Optional<T>` | 添加 `undefined` 到类型 |
| `Maybe<T>` | 添加 `null` 和 `undefined` 到类型 |
| `LoosePartial<T>` | 将所有属性变为可选 |

```typescript
Merge<{ a: string; b: number }, { b: boolean; c: string }>
// { a: string; b: boolean; c: string }

NonNullable<string | null | undefined>  // string
Nullable<string>   // string | null
Optional<string>   // string | undefined
Maybe<string>      // string | null | undefined
```

### 键类型

| 类型 | 描述 |
|------|------|
| `RequiredKeys<T>` | 获取所有必需属性的键 |
| `OptionalKeys<T>` | 获取所有可选属性的键 |
| `WritableKeys<T>` | 获取所有可写（非只读）属性的键 |
| `ReadonlyKeys<T>` | 获取所有只读属性的键 |

```typescript
interface User {
  name: string
  age?: number
  readonly id: number
}

RequiredKeys<User>   // 'name'
OptionalKeys<User>   // 'age'
WritableKeys<User>   // 'name' | 'age'
ReadonlyKeys<User>   // 'id'
```

### 路径类型

| 类型 | 描述 |
|------|------|
| `Paths<T>` | 获取所有嵌套属性路径 |
| `PathValue<T, P>` | 获取路径处的值类型 |
| `SplitPath<S>` | 将路径字符串分割为数组 |

```typescript
interface Obj {
  a: { b: { c: string } }
}

Paths<Obj>                    // 'a' | 'a.b' | 'a.b.c'
PathValue<Obj, 'a.b'>         // { c: string }
SplitPath<'a.b.c'>            // ['a', 'b', 'c']
```

### 字面量类型

| 类型 | 描述 |
|------|------|
| `Literal` | 所有字面量类型联合 |
| `LiteralString<T>` | 精确字符串字面量 |
| `LiteralNumber<T>` | 精确数字字面量 |
| `LiteralBoolean<T>` | 精确布尔字面量 |

```typescript
Literal  // string | number | boolean | undefined | null | void | bigint
LiteralString<'hello'>  // 'hello'
LiteralNumber<42>       // 42
LiteralBoolean<true>    // true
```

### 字符串命名转换

| 类型 | 描述 |
|------|------|
| `CamelCase<S>` | 转换为驼峰命名 |
| `SnakeCase<S>` | 转换为蛇形命名 |
| `CamelCaseKeys<T>` | 将对象键转换为驼峰命名 |
| `SnakeCaseKeys<T>` | 将对象键转换为蛇形命名 |

```typescript
CamelCase<'hello_world'>    // 'helloWorld'
CamelCase<'foo-bar-baz'>    // 'fooBarBaz'
SnakeCase<'helloWorld'>     // 'hello_world'
SnakeCase<'XMLParser'>      // 'xml_parser'
CamelCaseKeys<{ hello_world: string }>  // { helloWorld: string }
```

### 高级类型

| 类型 | 描述 |
|------|------|
| `FunctionOnly<T>` | 提取函数属性 |
| `DataOnly<T>` | 提取非函数属性 |
| `AtLeastOne<T>` | 要求至少有一个属性 |
| `StrictExtract<T, U>` | 严格提取匹配类型 |
| `StrictExclude<T, U>` | 严格排除类型 |
| `UnionToIntersection<U>` | 将联合类型转换为交叉类型 |
| `UnionToTuple<T>` | 将联合类型转换为元组 |

```typescript
interface Obj { name: string; onClick: () => void }
FunctionOnly<Obj>  // { onClick: () => void }
DataOnly<Obj>      // { name: string }

UnionToIntersection<{ a: string } | { b: number }>  // { a: string } & { b: number }
```

## 开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm build

# 测试
pnpm test

# 测试覆盖率
pnpm test:coverage

# 类型检查
pnpm typecheck

# 代码检查
pnpm lint
```

## 许可证

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/uni-types.svg?style=flat-square
[npm-url]: https://npmjs.org/package/uni-types
[typescript-url]: https://badgen.net/badge/icon/typescript?icon=typescript&label
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/uni-types.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/uni-types?branch=master
[download-image]: https://img.shields.io/npm/dm/uni-types.svg?style=flat-square
[download-url]: https://npmjs.org/package/uni-types
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE