# 类型推断增强

**始于 1.6.0**

高级类型推断工具。

## 概述

类型推断增强提供了高级类型推断工具，包括类型提取、重建、缩小、扩大和类型谓词。它支持通过正确的类型分析进行复杂的类型级编程。

此模块扩展了 TypeScript 的内置推断能力，提供更强大的类型操作工具。

## 基本用法

```typescript
import type { Infer, InferReturn, InferArgs, IsAny, IsNever, Equals, TypeName } from 'uni-types'

// 推断 Promise 值
type PromiseValue = Infer<Promise<string>> // string

// 推断函数返回类型
type ReturnValue = InferReturn<() => number> // number

// 推断函数参数
type Args = InferArgs<(a: string, b: number) => void> // [string, number]

// 类型谓词
type CheckAny = IsAny<any> // true
type CheckNever = IsNever<never> // true

// 类型相等
type AreEqual = Equals<string, string> // true

// 类型名称
type Name = TypeName<number> // 'number'
```

## 核心类型

### Infer

从包装类型提取类型。

```typescript
type Infer<T> = T extends Promise<infer U> ? U : T
```

### InferReturn

从函数提取返回类型。

```typescript
type InferReturn<T extends (...args: unknown[]) => unknown> = T extends (...args: unknown[]) => infer R ? R : never
```

### InferArgs

从函数提取参数类型。

```typescript
type InferArgs<T extends (...args: unknown[]) => unknown> = T extends (...args: infer A) => unknown ? A : never
```

### ExtractFunction

从联合类型提取函数类型。

```typescript
type ExtractFunction<T> = T extends (...args: unknown[]) => unknown ? T : never
```

### ExtractClass

从联合类型提取类类型。

```typescript
type ExtractClass<T> = T extends abstract new (...args: unknown[]) => unknown ? T : never
```

### Reconstruct

重建具有推断属性的类型。

```typescript
type Reconstruct<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
```

### Narrow

使用谓词缩小类型。

```typescript
type Narrow<T> = T extends unknown ? (x: T) => T : never
```

### Widen

将字面量类型扩大为原始类型。

```typescript
type Widen<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : T extends bigint ? bigint : T
```

### IsAny

检查类型是否为 `any`。

```typescript
type IsAny<T> = 0 extends (1 & T) ? true : false
```

### IsNever

检查类型是否为 `never`。

```typescript
type IsNever<T> = [T] extends [never] ? true : false
```

### IsUnknown

检查类型是否为 `unknown`。

```typescript
type IsUnknown<T> = unknown extends T ? (T extends Record<string, never> ? false : true) : false
```

### IsFunction

检查类型是否为函数。

```typescript
type IsFunction<T> = T extends (...args: unknown[]) => unknown ? true : false
```

### IsArray

检查类型是否为数组。

```typescript
type IsArray<T> = T extends unknown[] ? true : false
```

### IsUnion

检查类型是否为联合类型。

```typescript
type IsUnion<T, U = T> = (T extends U ? (U extends T ? true : false) : false) extends true ? false : true
```

### Equals

检查类型相等。

```typescript
type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
```

### TypeName

获取类型名称。

```typescript
type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : T extends boolean ? 'boolean' : T extends undefined ? 'undefined' : T extends null ? 'null' : 'unknown'
```

### TypeCategory

获取类型类别。

```typescript
type TypeCategory = 'primitive' | 'object' | 'array' | 'function' | 'union' | 'intersection' | 'tuple' | 'literal' | 'unknown'
```

## 相关

- [推断](./infer) - 基本推断类型
- [类型守卫](./guards) - 类型守卫
- [函数式编程](./functional) - 函数式编程