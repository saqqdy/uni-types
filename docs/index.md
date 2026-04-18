---
layout: home
title: uni-types
titleTemplate: Universal TypeScript Type Utilities

hero:
  name: uni-types
  text: TypeScript Type Utilities
  tagline: A comprehensive collection of 400+ type utilities for TypeScript development - safer, cleaner, more expressive code
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
    details: 400+ utility types covering core operations, deep transformations, type guards, algorithms, parsers, state machines, and more.
  - icon: 🔒
    title: Type Safe
    details: Full TypeScript support with complete type definitions. Catch errors at compile time.
  - icon: 🚀
    title: Zero Runtime
    details: Pure type-level utilities with zero runtime overhead. No bundle size impact.
  - icon: 📦
    title: Tree-shakable
    details: Import only the types you need. Works perfectly with bundlers.
  - icon: 🧮
    title: Type-Level Algorithms
    details: Sort, QuickSort, MergeSort, GCD, LCM, Factorial, Fibonacci, and more implemented at type level.
  - icon: 🔄
    title: Deep Operations
    details: DeepPartial, DeepRequired, DeepReadonly, DeepMutable, DeepOmit, DeepPick for nested objects.
  - icon: 🛠️
    title: Type Guards
    details: IsArray, IsTuple, IsEqual, IsAny, IsNever, IsUnknown for type checking.
  - icon: 🗃️
    title: Data Structures
    details: Tree, Graph, LinkedList, Stack, Queue types for modeling complex data.
  - icon: 🔌
    title: Schema Integration
    details: Built-in support for Zod and Yup schema type extraction and manipulation.
---

## Quick Example

```typescript
import type { PickRequired, DeepPartial, Sort, IsArray } from 'uni-types'

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

// Type-level sorting algorithm
type Sorted = Sort<[3, 1, 4, 1, 5]> // [1, 1, 3, 4, 5]

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
