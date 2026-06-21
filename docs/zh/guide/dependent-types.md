# 依赖类型

本指南介绍 v2.0.0 中引入的 **依赖类型模拟** 特性。

## 概述

虽然 TypeScript 原生不支持依赖类型（依赖于值的类型），`uni-types` 通过条件类型和类型推断提供了模拟的依赖类型工具，可以在类型层面实现更精确的类型检查。

## 核心概念

### 依赖类型

`Dep<T, P>` 将 `T` 约束为继承自 `P`：

```typescript
import type { Dep } from 'uni-types'

type A = Dep<string, string>  // string
type B = Dep<number, string>  // never
```

### 值依赖类型

`DepValue<T, V>` 创建表示类型 `T` 的特定值 `V` 的类型：

```typescript
import type { DepValue } from 'uni-types'

type Hello = DepValue<string, 'hello'>  // 'hello'
type Num42 = DepValue<number, 42>       // 42
```

### 索引和键依赖

`DepIndex` 和 `DepKey` 分别根据索引和键提取类型：

```typescript
import type { DepIndex, DepKey } from 'uni-types'

type First = DepIndex<['a', 'b', 'c'], 0>  // 'a'
type Name = DepKey<{ name: string; age: number }, 'name'>  // string
```

## 类型级断言

```typescript
import type { AssertType, TypeEq, TypeExtends } from 'uni-types'

type Check = AssertType<string, string>  // true
type Eq = TypeEq<string, string>     // true
type Ext = TypeExtends<'hello', string>  // true
```

## 证明携带类型

```typescript
import type { Proof, Prove, Verified as VerifiedV2, Unverified } from 'uni-types'

type V = VerifiedV2<string>      // string & { __verified__: true; __verifiedAt__: number }
type U = Unverified<VerifiedV2<string>>  // string
```

## 精炼类型

```typescript
import type { Refine, Refined, Unrefine } from 'uni-types'

type Email = Refine<string, 'email'>  // string & { __refinement__: 'email' }
type Plain = Unrefine<Email>          // string
```

## API 参考

参阅 [依赖类型 API 参考](/zh/api/dependent-types) 获取完整文档。
