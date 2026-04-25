---
layout: home
title: uni-types
titleTemplate: Universal TypeScript Type Utilities

hero:
  name: uni-types
  text: TypeScript Type Utilities
  tagline: A comprehensive collection of 700+ type utilities for TypeScript development - enterprise patterns, real-time systems, and more
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
    details: 700+ utility types covering core operations, enterprise patterns, real-time systems, microservices, and more.
  - icon: 🔒
    title: Type Safe
    details: Full TypeScript support with complete type definitions. Catch errors at compile time.
  - icon: 🚀
    title: Zero Runtime
    details: Pure type-level utilities with zero runtime overhead. No bundle size impact.
  - icon: 📦
    title: Tree-shakable
    details: Import only the types you need. Works perfectly with bundlers.
  - icon: 🔌
    title: GraphQL Integration
    details: Complete GraphQL schema types, resolvers, queries, mutations, subscriptions, and selection sets.
  - icon: 📡
    title: WebSocket & Real-Time
    details: WebSocket messages, events, streams, Pub/Sub, and real-time channel types.
  - icon: 🔄
    title: Event-Driven Architecture
    details: Event bus, event sourcing, CQRS, saga patterns, and message queue types.
  - icon: 🏗️
    title: Microservices
    details: Service registry, discovery, circuit breaker, load balancer, and API gateway types.
  - icon: 🛠️
    title: Authorization & Permissions
    details: RBAC, ABAC, policies, roles, permissions, and access control types.
  - icon: 📊
    title: Workflow Engine
    details: Workflow definitions, steps, transitions, BPMN process types, and saga orchestration.
  - icon: 📈
    title: Logging & Observability
    details: Logger types, metrics, tracing, spans, alerts, and health check types.
  - icon: 💾
    title: Caching Strategies
    details: LRU, LFU, TTL caches, cache invalidation, and distributed cache types.
  - icon: 🤖
    title: AI/ML Types
    details: Tensor types, neural network layers, optimizers, training configs, and inference result types.
  - icon: 🧬
    title: Functional Programming
    details: Functor, Monad, Maybe, Either, IO, Reader, Writer, State monads, and Lens types.
  - icon: 🌐
    title: Distributed Systems
    details: Consensus protocols, replication, partitioning, distributed locks, and coordination types.
  - icon: 🔐
    title: Security Types
    details: Authentication, encryption, hashing, signing, JWT, OAuth, and session management types.
  - icon: 🌍
    title: Internationalization
    details: Locale management, translations, plural rules, date/number formatting, and RTL support types.
  - icon: 🔮
    title: Metaprogramming (v1.7.0)
    details: Type analysis, visualization, decorators, type generation, and type-safe configuration.
  - icon: 🧮
    title: Type-Level Math (v1.7.0)
    details: Advanced math operations - trigonometry, statistics, number theory, and bitwise operations.
  - icon: 🔍
    title: Type-Level Search (v1.7.0)
    details: Sorting algorithms, binary search, filtering, chunking, set operations, and more.
---

## Quick Example

```typescript
import type {
  PickRequired, DeepPartial, Sort, IsArray,
  GraphQLQuery, WebSocketMessage, EventBus, Workflow,
  Tensor, Model, Maybe, Either, Infer
} from 'uni-types'

// Core: Make specific properties required
interface User {
  name?: string
  age?: number
  email: string
}
type RequiredUser = PickRequired<User, 'name' | 'age'>

// Deep partial for nested objects
interface Config {
  database: { host: string; port: number }
}
type PartialConfig = DeepPartial<Config>

// Type-level sorting algorithm
type Sorted = Sort<[3, 1, 4, 1, 5]> // [1, 1, 3, 4, 5]

// GraphQL query type (v1.5.0)
type GetUserQuery = GraphQLQuery<{ id: string }, { userId: string }>

// WebSocket message type (v1.5.0)
type ChatMessage = WebSocketMessage<{ text: string; userId: string }>

// Event bus type (v1.5.0)
type AppEvents = EventBus<{ userCreated: { id: string }; orderPlaced: { orderId: string } }>

// Workflow type (v1.5.0)
type OrderWorkflow = Workflow<{ orderId: string; status: string }>

// AI/ML tensor type (v1.6.0)
type ImageTensor = Tensor<[224, 224, 3], 'float32'>

// Functional programming (v1.6.0)
type OptionalValue = Maybe<string> // Some<string> | None
type Result = Either<Error, string> // Left<Error> | Right<string>

// Type inference (v1.6.0)
type PromiseValue = Infer<Promise<string>> // string

// Metaprogramming (v1.7.0)
type Analysis = AnalyzeType<{ nested: { deep: string } }>
type Visual = VisualizeType<{ a: number; b: string }>

// Decorator types (v1.7.0)
type LoggedMethod = MethodDecorator<(arg: string) => void>

// Type generation (v1.7.0)
type GeneratedUser = GenerateFromSchema<{ name: 'string'; age: 'number' }>

// Crypto types (v1.7.0)
type Sha256Hash = HashOutput<256>

// Date/Time types (v1.7.0)
type UserDuration = Duration<{ hours: number; minutes: number }>

// Type-level math (v1.7.0)
type Sum = Add<10, 20> // number
type IsSevenPrime = IsPrime<7> // true

// Type-level search (v1.7.0)
type UniqueNumbers = Unique<[1, 2, 2, 3, 3]> // [1, 2, 3]
type Intersect = Intersection<[1, 2, 3], [2, 3, 4]> // [2, 3]
```

## Why uni-types?

::: tip Zero Dependencies
Lightweight with no external dependencies. Just pure TypeScript type magic.
:::

::: info TypeScript 5+
Built with the latest TypeScript features for the best type inference.
:::

::: success Enterprise Ready
700+ types covering microservices, event-driven architecture, workflow engines, and real-time systems.
:::
