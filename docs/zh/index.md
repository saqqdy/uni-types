---
layout: home
title: uni-types
titleTemplate: 通用 TypeScript 类型工具库

hero:
  name: uni-types
  text: TypeScript 类型工具库
  tagline: 全面的 TypeScript 类型助手集合 - 50+ 实用类型工具，让你的代码更安全、更简洁
  image:
    src: /logo.svg
    alt: uni-types
  actions:
    - theme: brand
      text: 开始使用
      link: /zh/guide/
    - theme: alt
      text: GitHub
      link: https://github.com/saqqdy/uni-types
    - theme: alt
      text: API 参考
      link: /zh/api/

features:
  - icon: 🎯
    title: 全面覆盖
    details: 50+ 实用类型工具，涵盖核心操作、深度转换、类型判断、类型推导等。
  - icon: 🔒
    title: 类型安全
    details: 完整的 TypeScript 类型定义，编译时捕获错误。
  - icon: 🚀
    title: 零运行时
    details: 纯类型级别工具，零运行时开销，不影响打包体积。
  - icon: 📦
    title: Tree-shakable
    details: 按需导入，配合打包工具自动优化。
  - icon: 🔄
    title: 深度操作
    details: DeepPartial、DeepRequired、DeepReadonly、DeepMutable 支持嵌套对象转换。
  - icon: 🛠️
    title: 类型判断
    details: IsArray、IsTuple、IsEqual、IsAny、IsNever、IsUnknown 类型级别检查。
---

## 快速示例

```typescript
import type { PickRequired, DeepPartial, IsArray } from 'uni-types'

// 将指定属性变为必需
interface User {
  name?: string
  age?: number
  email: string
}

type RequiredUser = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string }

// 深度可选，处理嵌套对象
interface Config {
  database: {
    host: string
    port: number
  }
}

type PartialConfig = DeepPartial<Config>
// { database?: { host?: string; port?: number } }

// 类型判断
type Check = IsArray<string[]> // true
```

## 为什么选择 uni-types？

::: tip 零依赖
轻量级，无外部依赖。纯粹的 TypeScript 类型魔法。
:::

::: info TypeScript 5+
使用最新的 TypeScript 特性，提供最佳类型推导。
:::
