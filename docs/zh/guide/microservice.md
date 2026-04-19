# 微服务架构

**自 1.5.0 起**

用于微服务模式和通信的类型工具。

## 概述

微服务模块提供了构建分布式系统所需的完整类型支持，包括服务定义、服务注册与发现、熔断器、负载均衡和 API 网关。这些类型可以帮助你设计弹性、可扩展的微服务架构。

通过这些类型工具，你可以定义服务接口、配置服务间通信策略、实现故障恢复机制，以及管理服务实例的生命周期。

## 基本用法

```typescript
import type { Microservice, ServiceRegistry, CircuitBreaker, LoadBalancer, APIGateway } from 'uni-types'

// 定义微服务
type UserService = Microservice<{
  getUser: (id: string) => Promise<{ id: string; name: string }>
  createUser: (data: { name: string }) => Promise<{ id: string }>
}>

// 配置熔断器
type MyCircuitBreaker = CircuitBreaker<{ success: boolean }>
```

## 主要类型

### Microservice

微服务类型，定义服务的名称、版本、配置和生命周期方法。

```typescript
type Microservice<T = unknown> = {
  name: string
  version: string
  config: ServiceConfig<T>
  start: () => Promise<void>
  stop: () => Promise<void>
  health: () => Promise<HealthReport>
}
```

### ServiceRegistry

服务注册中心类型，用于服务的注册、发现和健康检查。

```typescript
type ServiceRegistry<S = unknown> = {
  register: (service: S) => Promise<void>
  deregister: (serviceName: string) => Promise<void>
  getService: (serviceName: string) => Promise<ServiceInstance | undefined>
  getAllServices: () => Promise<ServiceInstance[]>
  heartbeat: (serviceName: string, instanceId: string) => Promise<void>
}
```

### CircuitBreaker

熔断器类型，实现故障隔离和自动恢复机制。

```typescript
type CircuitBreaker<T = unknown> = {
  execute: (fn: () => Promise<T>) => Promise<T>
  getState: () => CircuitBreakerState
  getStats: () => CircuitBreakerStats
  reset: () => void
  open: () => void
  close: () => void
}
```

### LoadBalancer

负载均衡器类型，提供服务实例的选择策略。

```typescript
type LoadBalancer = {
  select: (instances: ServiceInstance[]) => ServiceInstance | undefined
  getStrategy: () => LoadBalancerStrategy
  setStrategy: (strategy: LoadBalancerStrategy) => void
}
```

### APIGateway

API 网关类型，管理路由配置和请求转发。

```typescript
type APIGateway = {
  routes: GatewayRoute[]
  start: () => Promise<void>
  stop: () => Promise<void>
  addRoute: (route: GatewayRoute) => void
  removeRoute: (path: string) => void
}
```

## 相关

- [API 参考](/zh/api/microservice/)
