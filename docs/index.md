---
layout: home
title: uni-types
titleTemplate: Universal TypeScript Type Utilities

hero:
  name: uni-types
  text: TypeScript Type Utilities
  tagline: A comprehensive collection of type helpers for TypeScript development - 50+ utility types for safer, cleaner code
  image:
    src: /logo.svg
    alt: uni-types
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/saqqdy/uni-types
    - theme: alt
      text: API Reference
      link: /api/

features:
  - icon: 🎯
    title: Comprehensive
    details: 50+ utility types covering core operations, deep transformations, type guards, inference, and more.
  - icon: 🔒
    title: Type Safe
    details: Full TypeScript support with complete type definitions. Catch errors at compile time.
  - icon: 🚀
    title: Zero Runtime
    details: Pure type-level utilities with zero runtime overhead. No bundle size impact.
  - icon: 📦
    title: Tree-shakable
    details: Import only the types you need. Works perfectly with bundlers.
  - icon: 🔄
    title: Deep Operations
    details: DeepPartial, DeepRequired, DeepReadonly, DeepMutable for nested object transformations.
  - icon: 🛠️
    title: Type Guards
    details: IsArray, IsTuple, IsEqual, IsAny, IsNever, IsUnknown for type checking.
---

## Quick Example

```typescript
import type { PickRequired, DeepPartial, IsArray } from 'uni-types'

// Make specific properties required
interface User {
  name?: string
  age?: number
  email: string
}

type RequiredUser = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string }

// Deep partial for nested objects
interface Config {
  database: {
    host: string
    port: number
  }
}

type PartialConfig = DeepPartial<Config>
// { database?: { host?: string; port?: number } }

// Type guards for conditional logic
type Check = IsArray<string[]> // true
```

## Why uni-types?

::: tip Zero Dependencies
Lightweight with no external dependencies. Just pure TypeScript type magic.
:::

::: info TypeScript 5+
Built with the latest TypeScript features for the best type inference.
:::
