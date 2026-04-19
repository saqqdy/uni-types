---
layout: home
title: uni-types
titleTemplate: 通用 TypeScript 类型工具库

hero:
  name: uni-types
  text: TypeScript 类型工具库
  tagline: 全面的 600+ 类型工具集合 - 企业级模式、实时系统、微服务等
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
    details: 600+ 实用类型工具，涵盖核心操作、企业级模式、实时系统、微服务等。
  - icon: 🔒
    title: 类型安全
    details: 完整的 TypeScript 类型定义，编译时捕获错误。
  - icon: 🚀
    title: 零运行时
    details: 纯类型级别工具，零运行时开销，不影响打包体积。
  - icon: 📦
    title: Tree-shakable
    details: 按需导入，配合打包工具自动优化。
  - icon: 🔌
    title: GraphQL 集成
    details: 完整的 GraphQL schema 类型、resolver、query、mutation、subscription 类型。
  - icon: 📡
    title: WebSocket & 实时
    details: WebSocket 消息、事件、流、Pub/Sub、实时通道类型。
  - icon: 🔄
    title: 事件驱动架构
    details: 事件总线、事件溯源、CQRS、Saga 模式、消息队列类型。
  - icon: 🏗️
    title: 微服务
    details: 服务注册、发现、熔断器、负载均衡、API 网关类型。
  - icon: 🛠️
    title: 授权与权限
    details: RBAC、ABAC、策略、角色、权限、访问控制类型。
  - icon: 📊
    title: 工作流引擎
    details: 工作流定义、步骤、转换、BPMN 流程类型、Saga 编排。
  - icon: 📈
    title: 日志与可观测性
    details: Logger 类型、指标、追踪、Span、告警、健康检查类型。
  - icon: 💾
    title: 缓存策略
    details: LRU、LFU、TTL 缓存、缓存失效、分布式缓存类型。
  - icon: 🤖
    title: AI/ML 类型
    details: 张量类型、神经网络层、优化器、训练配置、推理结果类型。
  - icon: 🧬
    title: 函数式编程
    details: Functor、Monad、Maybe、Either、IO、Reader、Writer、State 单子和 Lens 类型。
  - icon: 🌐
    title: 分布式系统
    details: 共识协议、复制、分区、分布式锁、协调类型。
  - icon: 🔐
    title: 安全类型
    details: 身份验证、加密、哈希、签名、JWT、OAuth、会话管理类型。
  - icon: 🌍
    title: 国际化
    details: 语言环境管理、翻译、复数规则、日期/数字格式化、RTL 支持类型。
---

## 快速示例

```typescript
import type {
  PickRequired, DeepPartial, Sort, IsArray,
  GraphQLQuery, WebSocketMessage, EventBus, Workflow,
  Tensor, Model, Maybe, Either, Infer
} from 'uni-types'

// 核心：将指定属性变为必需
interface User {
  name?: string
  age?: number
  email: string
}
type RequiredUser = PickRequired<User, 'name' | 'age'>

// 深度可选，处理嵌套对象
interface Config {
  database: { host: string; port: number }
}
type PartialConfig = DeepPartial<Config>

// 类型级别排序算法
type Sorted = Sort<[3, 1, 4, 1, 5]> // [1, 1, 3, 4, 5]

// GraphQL 查询类型 (v1.5.0)
type GetUserQuery = GraphQLQuery<{ id: string }, { userId: string }>

// WebSocket 消息类型 (v1.5.0)
type ChatMessage = WebSocketMessage<{ text: string; userId: string }>

// 事件总线类型 (v1.5.0)
type AppEvents = EventBus<{ userCreated: { id: string }; orderPlaced: { orderId: string } }>

// 工作流类型 (v1.5.0)
type OrderWorkflow = Workflow<{ orderId: string; status: string }>

// AI/ML 张量类型 (v1.6.0)
type ImageTensor = Tensor<[224, 224, 3], 'float32'>

// 函数式编程 (v1.6.0)
type OptionalValue = Maybe<string> // Some<string> | None
type Result = Either<Error, string> // Left<Error> | Right<string>

// 类型推断 (v1.6.0)
type PromiseValue = Infer<Promise<string>> // string
```

## 为什么选择 uni-types？

::: tip 零依赖
轻量级，无外部依赖。纯粹的 TypeScript 类型魔法。
:::

::: info TypeScript 5+
使用最新的 TypeScript 特性，提供最佳类型推导。
:::

::: success 企业级就绪
600+ 类型涵盖微服务、事件驱动架构、工作流引擎和实时系统。
:::
